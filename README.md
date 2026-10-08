# 棲渺拾光 ‧ 燈下資料館

《黃泉燒肉店》的粉絲資料館，手機優先，深色燈籠夜色。目前 **v1.5（2026-10-08）**，下次改版從 v2.0 開始。

- 網址：https://pokemonida99.github.io/qimiao-shiguang/（GitHub Pages，push 到 main 就會部署）
- 姊妹站：小說文庫 https://pokemonida99.github.io/huangquan-novel/（首頁第二區塊、劇照頁、頁尾都有連結；小說那邊的目錄與頁尾也連回來）
- 頁面：首頁／劇集／故事線／人物（含關係圖）／劇照／測驗／資料

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 網站本體（版型與程式） |
| `data.js` | **手寫內容**：版本、季度介紹、故事線、人物側寫、關係、詞彙、作者雜談、語錄、狂粉測驗 60 題 |
| `episodes.js` | 自動產生，不要手改：分集大綱、台詞摘錄、出場角色、頭像 |
| `stills.js` | 自動產生，不要手改：200 張劇照清單 |
| `tools/gen_episodes.py` | 從 `../1005/data/episodes.json` 產生 `episodes.js`、`assets/ep/`、`assets/c/` |
| `tools/gen_stills.py` | 從 `../1005/小說文庫/劇照/` 產生 `stills.js`、`assets/stills/`（WebP，需要 Pillow：`../xihuan-mv/.venv/bin/python`） |
| `build.py` | 打包成單檔 `棲渺拾光-燈下資料館.html`（不進 git；劇照圖片不內嵌） |

## 更新流程

1. 分集資料改 `../1005/data/episodes.json`，再跑 `python3 tools/gen_episodes.py`；劇照有變動就跑 `tools/gen_stills.py`。
2. 其他內容改 `data.js`；版本號在 `data.js` 的 `meta.version`。
3. 把 `index.html` 裡三個 script 的 `?v=` 改掉，避免讀者吃到舊快取。
4. 本機預覽：`python3 -m http.server 4173`，開 http://localhost:4173。
5. `python3 build.py`，然後 commit、push。

## 原則

- 對外是正式作品：頁面上**不寫製作方法、工具、資料檔名或整理備註**。分集資料裡的 `notes` 只留在原始資料，不顯示。
- 頁尾保留原作版權與「非官方粉絲站」聲明。劇照頁只寫「依原作場景重製，非原片截圖」。
- 角色名字只用劇中出現過的稱呼；作者的話照原文收錄。
- 防雷：閱讀進度分 0–7 級（還沒開始、第一～三季、月老外傳、第四～六季）。內容的 `lv` 超過讀者進度就模糊封起來，點一下才顯示；劇照依所屬季數套用。
- 動畫：頁面切換不加位移動畫（`@keyframes rise` 是背景燈籠專用，名稱不要再重複使用）。
