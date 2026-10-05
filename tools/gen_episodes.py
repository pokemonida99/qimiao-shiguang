"""從 ../1005/data 產生網站用的 episodes.js、分集縮圖、角色頭像。
用法：python3 tools/gen_episodes.py   （在 棲渺拾光/ 執行；需要 ffmpeg）
- 分集資料以 1005/data/episodes.json、characters.json 為準，這裡只做轉換，不要手改 episodes.js
- 手寫的內容（季度介紹、故事線、人物側寫、詞彙）在 data.js
"""
import glob, json, os, re, subprocess

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(os.path.dirname(HERE), "1005")
os.chdir(HERE)
eps = json.load(open(os.path.join(SRC, "data/episodes.json")))["episodes"]
chars = json.load(open(os.path.join(SRC, "data/characters.json")))["characters"]

ARC_SLUG = {"月老外傳": "yl", "角色短片": "cs", "MV": "mv", "預告": "pv", "粉絲影片": "fan", "其他短劇": "ot"}
# 閱讀進度的順序（防雷用）：0 還沒看、1–3 第一～三季、4 月老外傳、5–7 第四～六季
LEVEL = {1: 1, 2: 2, 3: 3, "外傳": 4, 4: 5, 5: 6, 6: 7}


def slug(e):
    if e.get("arc"):
        return ARC_SLUG[e["arc"]] + "-" + e["id"].split("-")[-1]
    return e["id"].lower()


def level(e):
    if e.get("arc") == "月老外傳":
        return 4
    if e.get("arc"):
        return 0  # 預告、MV、短片：不封
    return LEVEL[e["season"]]


def group(e):
    if e.get("arc") == "月老外傳":
        return "yl"
    if e.get("arc") in ("預告", "MV", "角色短片"):
        return "extra"
    if e.get("arc"):
        return "other"
    return "s%d" % e["season"]


SKIP_SPK = {"字卡", "歌詞", "旁白", "畫外音"}


def highlights(e, n=3):
    cand = [l for l in e["lines"] if l[3] and l[1] not in SKIP_SPK and 9 <= len(l[2].replace("　", "")) <= 48]
    pick = sorted(cand, key=lambda l: -len(l[2]))[:n]
    return [[l[1], l[2]] for l in sorted(pick, key=lambda l: l[0])]


def video(e):
    f = glob.glob(os.path.join(SRC, e["id"] + " *.mp4")) or glob.glob(os.path.join(SRC, e["id"] + ".mp4"))
    return f[0] if f else None


# IG 對照：1005/data/ig.json 為 {"EP2-13": "reel 代碼", ...}；1005/covers/<id>.jpg 為 IG 官方封面（有就優先當縮圖）
IG_P = os.path.join(SRC, "data/ig.json")
IG = json.load(open(IG_P)) if os.path.exists(IG_P) else {}
COVERS = os.path.join(SRC, "covers")

# 自動取 1/3 處的畫面不理想時，手動指定秒數
THUMB_AT = {"ep3-16": 31, "ep4-08": 44}
os.makedirs("assets/ep", exist_ok=True)
os.makedirs("assets/c", exist_ok=True)
out_eps = []
for e in eps:
    if e.get("arc") == "粉絲影片":
        continue
    s = slug(e)
    thumb = "assets/ep/%s.jpg" % s
    cover = os.path.join(COVERS, e["id"] + ".jpg")
    if os.path.exists(cover):
        if not os.path.exists(thumb) or os.path.getmtime(cover) > os.path.getmtime(thumb):
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", cover, "-vf", "scale=360:-2", "-q:v", "5", thumb], check=True)
    elif (not os.path.exists(thumb) or s in THUMB_AT) and video(e):
        t = THUMB_AT.get(s) or (max(1.0, e["duration"] * 0.33) if e["duration"] else 5)
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", str(t), "-i", video(e), "-frames:v", "1",
                        "-vf", "scale=360:-2", "-q:v", "5", thumb], check=True)
    out_eps.append({
        "id": e["id"], "slug": s, "group": group(e), "lv": level(e),
        "season": e["season"], "arc": e.get("arc"), "special": bool(e.get("special")),
        "no": e.get("global"), "local": e["local"], "title": e["title"] or "（片頭無副標題）",
        "dur": round(e["duration"] or 0), "summary": e["summary"], "notes": e.get("notes", []),
        "cast": e["cast"], "hl": highlights(e), "thumb": thumb if os.path.exists(thumb) else "",
        "nlines": len(e["lines"]), "ig": IG.get(e["id"], ""),
    })

ep_by_id = {e["id"]: e for e in out_eps}
out_chars = []
for i, c in enumerate(chars):
    hs = c.get("headshot")
    img = ""
    if hs:
        img = "assets/c/c%03d.jpg" % i
        src = os.path.join(SRC, hs[0])
        if os.path.exists(src):
            subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", src, "-vf", "scale=320:320", "-q:v", "4", img], check=True)
    apps = [x for x in c.get("episodes", []) if x in ep_by_id]
    lv = min([ep_by_id[x]["lv"] for x in apps if ep_by_id[x]["lv"]] or [0])
    lines = []
    for x in apps:
        for t, w, txt, sure in next(e for e in eps if e["id"] == x)["lines"]:
            if w == c["name"] and sure and 10 <= len(txt.replace("　", "")) <= 44:
                lines.append([x, txt])
    seen, best = set(), []
    for x, txt in sorted(lines, key=lambda l: -len(l[1])):
        if x in seen:
            continue
        seen.add(x); best.append([x, txt])
        if len(best) == 3:
            break
    out_chars.append({"name": c["name"], "aka": c.get("aka", []), "role": c.get("role", ""),
                      "source": c.get("source", ""), "img": img, "eps": apps, "lv": lv, "lines": best})

js = "/* 由 tools/gen_episodes.py 產生，請勿手改。資料來源：1005/data */\nwindow.EPI = " + \
     json.dumps({"episodes": out_eps, "characters": out_chars}, ensure_ascii=False, separators=(",", ":")) + ";\n"
open("episodes.js", "w").write(js)
print(len(out_eps), "episodes,", len(out_chars), "characters,", round(len(js) / 1024), "KB")
