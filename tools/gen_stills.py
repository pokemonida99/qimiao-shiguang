#!/usr/bin/env python3
"""從 ../1005/小說文庫/劇照/ 產生劇照頁的資料與圖片。
產出：stills.js（自動產生，不要手改）、assets/stills/（大圖）、assets/stills/t/（縮圖），皆為 WebP。
用法：../xihuan-mv/.venv/bin/python tools/gen_stills.py（需要 Pillow）
"""
import json, os
from PIL import Image

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(os.path.dirname(HERE), "1005", "小說文庫")
os.chdir(HERE)
os.makedirs("assets/stills/t", exist_ok=True)


def webp(src, out, width, q):
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
        return
    im = Image.open(src).convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(out, "WEBP", quality=q, method=6)


EPID = {e["global"]: e["id"] for e in json.load(open(os.path.join(os.path.dirname(HERE), "1005", "data", "episodes.json")))["episodes"] if e.get("global")}
items = []
for x in json.load(open(os.path.join(SRC, "劇照", "清單.json"))):
    src = os.path.join(SRC, "劇照", x["file"])
    name = "%03d" % x["number"]
    webp(src, "assets/stills/%s.webp" % name, 1280, 80)
    webp(src, "assets/stills/t/%s.webp" % name, 480, 72)
    items.append({"n": x["number"], "ep": EPID[x["episode"]], "no": x["episode"],
                  "sec": x["seconds"], "title": x["title"],
                  "img": "assets/stills/%s.webp" % name, "thumb": "assets/stills/t/%s.webp" % name})
items.sort(key=lambda x: (x["no"], x["sec"], x["n"]))
keep = {os.path.basename(i["img"]) for i in items}
for folder in ("assets/stills", "assets/stills/t"):
    for f in os.listdir(folder):
        if f.endswith(".webp") and f not in keep:
            os.remove(os.path.join(folder, f))
open("stills.js", "w").write("/* 由 tools/gen_stills.py 產生，請勿手改。來源：1005/小說文庫/劇照/ */\nwindow.STILLS = "
                             + json.dumps(items, ensure_ascii=False) + ";\n")
size = sum(os.path.getsize(os.path.join(r, f)) for r, _, fs in os.walk("assets/stills") for f in fs)
print("劇照 %d 張，%.1f MB" % (len(items), size / 1e6))
