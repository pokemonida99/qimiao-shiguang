#!/usr/bin/env python3
"""把 index.html + data.js + episodes.js + assets/ 打包成單一 HTML 檔（圖片內嵌成 data URI）。
用法：python3 build.py
產出：
  棲渺拾光-燈下資料館.html   完整單檔網站，可直接雙擊開啟或丟上任何空間
  dist/artifact.html         給 Claude Artifact 用（去掉 html/head/body 外殼）
"""
import base64, io, os, re, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

html = io.open("index.html", encoding="utf-8").read()
data = io.open("data.js", encoding="utf-8").read()
episodes = io.open("episodes.js", encoding="utf-8").read()

# 1) 內嵌 data.js、episodes.js（script 標籤帶 ?v= 版本號）
html = re.sub(r'<script src="data\.js(\?[^"]*)?"></script>', lambda m: "<script>\n" + data + "\n</script>", html)
html = re.sub(r'<script src="episodes\.js(\?[^"]*)?"></script>', lambda m: "<script>\n" + episodes + "\n</script>", html)
stills = io.open("stills.js", encoding="utf-8").read()
html = re.sub(r'<script src="stills\.js(\?[^"]*)?"></script>', lambda m: "<script>\n" + stills + "\n</script>", html)

# 2) 圖片 → data URI（重新壓一次，縮小單檔體積）
tmp = tempfile.mkdtemp()
refs = sorted(set(re.findall(r'assets/[A-Za-z0-9_\-/]+\.jpg', html)))
total = 0
for ref in refs:
    out = os.path.join(tmp, ref.replace("/", "_"))
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", ref,
                    "-vf", "scale='min(560,iw)':-2", "-q:v", "7", out],
                   check=True, stdin=subprocess.DEVNULL)
    b = open(out, "rb").read()
    total += len(b)
    html = html.replace(ref, "data:image/jpeg;base64," + base64.b64encode(b).decode())
print("inlined %d images, %.1f MB raw" % (len(refs), total / 1e6))

io.open("棲渺拾光-燈下資料館.html", "w", encoding="utf-8").write(html)

# 3) Artifact 版：拿掉外殼標籤，只留 title / link / style / body 內容 / script
art = html
art = re.sub(r"<!doctype html>\s*", "", art, flags=re.I)
art = re.sub(r"</?html[^>]*>\s*", "", art, flags=re.I)
art = re.sub(r"</?head>\s*", "", art, flags=re.I)
art = re.sub(r"</?body>\s*", "", art, flags=re.I)
art = re.sub(r'<meta[^>]*>\s*', "", art, flags=re.I)
os.makedirs("dist", exist_ok=True)
io.open("dist/artifact.html", "w", encoding="utf-8").write(art)

for f in ("棲渺拾光-燈下資料館.html", "dist/artifact.html"):
    print("%-28s %.1f MB" % (f, os.path.getsize(f) / 1e6))
