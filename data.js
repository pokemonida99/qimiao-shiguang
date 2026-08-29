/* =========================================================================
   棲渺拾光 ‧ 資料庫
   -------------------------------------------------------------------------
   這是整個網站唯一需要編輯的檔案。改這裡，網站就會跟著變。

   ▸ status: "canon"   = 已由官方素材（IG 雜談／心得卡）證實，網站會正常顯示
   ▸ status: "pending" = 還沒收錄，網站會顯示成「檔案封存中」的樣式
   要補資料時，把 pending 改成 canon，再把欄位填好即可。
   ========================================================================= */

window.SITE = {

  /* ---------------------------------------------------------------- 站台 */
  meta: {
    channel: "棲渺拾光",
    channelHandle: "baoandrain0428",
    channelUrl: "https://www.instagram.com/baoandrain0428",
    siteName: "棲渺拾光 ‧ 燈下資料館",
    tagline: "照顧你生前的遺憾",
    intro: "台灣的 AI 短劇頻道。這裡收著《黃泉燒肉店》四季的劇情線、人物誌、詞彙與關係圖——給還沒開始看的人一盞燈，給一路看到現在的人一個回頭的地方。",
    updated: "2026-08-29",
    // 資料來源，寫在「關於」頁，讓讀者知道哪些是官方說法
    sources: [
      "《黃泉燒肉店》第二季製作雜談（IG 圖文，7 則）",
      "《黃泉燒肉店》第三季製作雜談（IG 圖文，12 則）",
      "棲渺拾光 心得語錄卡（IG 圖文，5 則）",
      "棲渺拾光 Threads 公開貼文（@baoandrain0428，2026-08 讀取）"
    ]
  },

  /* -------------------------------------------------------------- 頻道群 */
  channels: [
    {
      id: "qimiao",
      name: "棲渺拾光",
      handle: "@baoandrain0428",
      url: "https://www.instagram.com/baoandrain0428",
      role: "劇集頻道",
      desc: "《黃泉燒肉店》的家。悲劇短劇路線，用 AI 演員把一個個「來不及說再見」的故事演完。",
      bio: "「棲渺拾光」取自「七秒」的諧音——就算我像魚一樣只有七秒記憶，也會永遠記得那最美好的七秒與你；「拾光」指的是美好的時間。",
      facts: [
        "頻道由兩位 AI 演員「大寶寶」與「元小雨」掛名，定位是他們的感情故事頻道",
        "作者至今製作過七個系列短篇，《黃泉燒肉店》是最長的一部",
        "分集編號跨季連續累計：第二季收在 EP30，第四季已經來到 EP72",
        "每支影片都標註「影片由 AI 生成，無不良引導」",
        "劇中配樂是原創的，完整版放在 YouTube",
        "第二季中後段觀眾外溢到海外：香港、馬來西亞、新加坡合計約佔一成粉絲，卻貢獻了留言區約四成的留言",
        "2026 年 7 月，作者放下經營到 1.2 萬粉的主頻道，攜家帶口全力重新經營《棲渺拾光》"
      ]
    },
    {
      id: "dreamfield",
      name: "自由曠野",
      handle: "@dream_960614",
      url: "https://www.instagram.com/dream_960614",
      role: "起家的主頻道",
      desc: "作者最早經營的 IG。無厘頭迷因路線，好幾支 reels 破百萬觀看——但願意按下追蹤的人，卻不及只有十萬瀏覽的《黃泉燒肉店》EP1。",
      facts: [
        "主頻道隨機一支 reels：184 萬觀看、66 萬觸及、平均觀看 14 秒 → 帶來 1,033 位粉絲",
        "《黃泉燒肉店》EP1：約十萬瀏覽、5,428 讚、1,223 分享 → 帶來 1,312 位粉絲",
        "作者的結論：流量不等於關係，會留下來的人是被故事留住的"
      ]
    }
  ],

  /* ---------------------------------------------------------------- 世界 */
  world: {
    title: "如果真的有陰間，你希望它長什麼樣子？",
    lede: "作者先說了他的答案：他希望那裡有一家燒肉店。",
    pillars: [
      {
        icon: "lantern",
        h: "陰間不是審判",
        p: "「我希望那裡不是審判，而是給每個人一次，好好說再見的機會。」這句話是整個系列的地基——黃泉不負責定罪，只負責把沒說完的話收尾。"
      },
      {
        icon: "grill",
        h: "一家開在黃泉的燒肉店",
        p: "招牌底下寫著「照顧你生前的遺憾」。門口暖簾一個「緣」字，燈籠上是「好好說再見」「想念的味道」，立牌問你：今晚想和誰再吃一頓？"
      },
      {
        icon: "bridge",
        h: "三途川與兩座橋",
        p: "店外是三途川。過了奈何橋要喝孟婆湯，把一切忘乾淨；而送別橋上寫著「有些再見，是為了讓彼此更安心地前行」。"
      },
      {
        icon: "heart",
        h: "神明也會被難倒",
        p: "月老的手杖是兩顆愛心連在一起，象徵心心相連。但他自己說：牽紅線很簡單，最難的是讓一個受過傷的人，再相信愛情一次。"
      }
    ]
  },

  /* ---------------------------------------------------------------- 季度 */
  seasons: [
    {
      id: "s1",
      no: 1,
      title: "第一季",
      kanji: "遺憾",
      subtitle: "一集一個故事",
      art: "assets/bridge.jpg",
      status: "canon",
      logline: "以「遺憾」為主調的單元劇。每一集是一個獨立的悲劇故事，客人走進燒肉店，把生前沒能完成的那件事，吃完再走。",
      known: [
        "作者自述：第一季是「一集一個悲劇故事」的單元劇形式",
        "全季主調為「遺憾」，第二季的雜談以此作為對照組",
        "EP1 約十萬瀏覽、5,428 讚、1,223 分享、310 則留言、505 次儲存——是頻道真正的起點",
        "分集編號從這一季開始跨季連續累計，不會每季重新從 1 算起"
      ],
      episodeCount: null,
      episodes: [
        { no: 2, title: "能不能聽見我的求救", one: "", tags: ["原創配樂"] },
        { no: 3, title: "我坐火車來看你", one: "", tags: ["原創配樂"] },
        { no: 4, title: "", one: "片長 1 分 06 秒，題材與二二八有關。作者提過這一集情緒很重，但完播率只有 29%。", tags: ["幕後數據"] }
      ]
    },
    {
      id: "s2",
      no: 2,
      title: "第二季 ‧ 北境篇",
      kanji: "犧牲",
      subtitle: "雙主線交纏",
      art: "assets/s2-north.jpg",
      status: "canon",
      logline: "主軸從「遺憾」換成「犧牲」。不再一集一個故事，而是把伏筆均勻撒進每一集，最後由「狐姬 & 赤坂」和「杜先生和筱晴」兩條主線交纏著收尾。",
      quote: "你的歲月靜好，是因為有人替你負重前行。",
      known: [
        "主軸是「犧牲」，相較第一季的「遺憾」主調是刻意的轉向",
        "敘事手法改變：浮筆均勻撒在每一集，不再單元劇",
        "季末的 EP29、EP30 於 7/12 前上架，第二季收在 EP30",
        "「北境」是全季的主題意象，但北境本身的畫面極少"
      ],
      spoilerKnown: [
        "雙主線：狐姬 & 赤坂／杜先生和筱晴，最後交纏著一起收尾"
      ],
      note: "「北境」就像現實世界的「財富自由」或「瘋狂旅遊」——普羅大眾窮盡一生追求卻可能難以觸及。而每一集故事，就像追逐北境的過程會發生的挫折與磨難。真正值得回憶的故事都在過程裡發生，也會讓抵達終點的美好更加昇華。",
      episodeCount: null,
      episodes: []
    },
    {
      id: "s3",
      no: 3,
      title: "第三季",
      kanji: "逆襲",
      subtitle: "細節最多的一季",
      art: "assets/aishen-festival.jpg",
      status: "canon",
      logline: "從語彤的絕境開局，觀眾一路陪她逆襲。這一季第一次寫反派，也第一次把愛神祭、月老手杖、籤詩、獎狀這些「情感物件」大量鑲進劇情環節裡。",
      known: [
        "作者定調：這是一季細節比以往多的製作",
        "開局是語彤的絕境，全季主軸是「陪伴角色成長」",
        "系列第一次出現反派——辣雞",
        "愛神祭會場：羅馬競技場的外型＋木質構造＋台灣廟宇常見的光明燈形象",
        "月老的手杖外型是兩顆愛心連在一起，象徵心心相連",
        "護身符、籤詩、獎狀都被放進環節裡，強化觀眾的情感波動"
      ],
      spoilerKnown: [
        "柏宏和語彤的故事，最後留下了遺憾"
      ],
      episodeCount: null,
      episodes: []
    },
    {
      id: "s4",
      no: 4,
      title: "第四季 ‧ 魔界的獨角鯨",
      kanji: "連載",
      subtitle: "仍在更新中",
      art: "assets/lamp-rain.jpg",
      status: "canon",
      logline: "副標《魔界的獨角鯨》。這一季還在連載，集數已經來到 EP72——是四季裡最長的一段路。",
      known: [
        "第四季的副標是《魔界的獨角鯨》",
        "至 2026 年 8 月底仍在更新，最新進度為 EP72",
        "作者在 EP72 的貼文裡提到，這一集的角色心境很難寫，也刻意沒有下宣傳鉤子"
      ],
      episodeCount: null,
      episodes: [
        { no: 71, title: "無上的戰技", one: "", tags: [] },
        { no: 72, title: "無法深情挽著妳的手", one: "", tags: [] }
      ]
    }
  ],

  /* -------------------------------------------------------------- 人物誌 */
  characters: [
    {
      id: "yutong",
      name: "語彤",
      reading: "Yǔ-tóng",
      role: "第三季 ‧ 主角",
      seasons: ["s3"],
      art: "assets/yutong-face.jpg",
      gallery: ["assets/yutong-gecko.jpg", "assets/yutong-hanbok.jpg", "assets/yutong-workers.jpg", "assets/yutong-yuelao.jpg"],
      accent: "#7FD6C1",
      status: "canon",
      oneLine: "沒苦硬吃長大的人，被丟進絕境當開局。",
      look: "薄荷綠短髮夾一撮黑挑染、圓框眼鏡、右頰一道沒好的擦傷。身上是黃泉燒肉店的深色制服，胸口繡著「黃泉燒肉」。",
      about: "第三季的開局就把語彤推到絕境，讓觀眾一路陪著她逆襲。作者說，比起偶像崇拜，AI 角色更缺的是「陪伴成長的真實性」——所以這一季想塑造的，是觀眾陪一個角色長大的那種感動。",
      origin: [
        "作者家庭也是低收入戶，在經濟獨立之後還是帶著那份沒苦硬吃的慣性。",
        "第一支智慧型手機是大學才買的續約零元低階機。",
        "後來有一個很有錢的親戚過年送我一隻 iPhone 5，那絲滑的觸控手感和堅韌的妥善率，讓我明白貴有貴的道理。",
        "後來也才敢開始花錢享受人生，也意識到錢只要花在自己身上，不管是什麼形式都不算浪費，也可以在消費過程了解正常的商業模式是什麼。"
      ],
      originNote: "——作者談語彤的設定由來",
      quotes: [],
      relatedTerms: ["huangquan-shop", "gecko-workers"],
      fields: [
        { k: "登場", v: "第三季" },
        { k: "身分", v: "黃泉燒肉店" },
        { k: "識別", v: "薄荷綠短髮 ‧ 圓框眼鏡 ‧ 頰上擦傷" },
        { k: "原型", v: "作者自身的成長經驗" }
      ]
    },
    {
      id: "bohong",
      name: "王柏宏",
      reading: "Wáng Bó-hóng",
      role: "第三季 ‧ 主角",
      seasons: ["s3"],
      art: "assets/bh-yt-kiss.jpg",
      gallery: ["assets/campus.jpg"],
      accent: "#E8A55C",
      status: "canon",
      oneLine: "一百公尺的冠軍，跑不贏那個結局。",
      look: "田徑隊。劇中出現過他的獎狀：台灣高級中等學校田徑錦標賽一百公尺決賽冠軍，得獎人 王柏宏。",
      about: "獎狀是這一季的「情感物件」之一——一張紙就把一個人的高光時刻釘死在那裡。作者說：柏宏和語彤的故事留下了遺憾，如同我們的人生也總是滿是遺憾。",
      origin: [],
      quotes: [],
      relatedTerms: ["award", "regret"],
      fields: [
        { k: "登場", v: "第三季" },
        { k: "身分", v: "高中田徑隊" },
        { k: "紀錄", v: "一百公尺決賽 冠軍" },
        { k: "結局", v: "留下遺憾", spoiler: true }
      ]
    },
    {
      id: "lajichicken",
      name: "辣雞",
      reading: "Là-jī",
      role: "第三季 ‧ 反派",
      seasons: ["s3"],
      art: "assets/lajichicken.jpg",
      gallery: [],
      accent: "#C05A5A",
      status: "canon",
      oneLine: "系列的第一個反派，也是作者最偏愛的演技。",
      look: "雀斑、耳環、深藍運動外套。臉部設計刻意做得接近真人。",
      about: "作者做過七個系列短篇，這是第一次在短劇裡加入反派。他自己說：雖然大家都很討厭辣雞，但是他的演技我很喜歡；也不知道為什麼，有些 AI 角色演技特別好——我想可能跟臉部的真實度有關，越接近真人的臉部設計，可以讓 AI 角色的微表情更生動。",
      origin: [],
      quotes: [],
      relatedTerms: ["villain-first"],
      fields: [
        { k: "登場", v: "第三季" },
        { k: "定位", v: "系列首位反派" },
        { k: "設計", v: "高真實度臉部 ‧ 微表情" },
        { k: "觀眾反應", v: "很討厭他" }
      ]
    },
    {
      id: "yuelao",
      name: "月老",
      reading: "Yuè-lǎo",
      role: "神明",
      seasons: ["s3"],
      art: "assets/yuelao-lamp.jpg",
      gallery: ["assets/yuelao-props.jpg", "assets/aishen-festival.jpg"],
      accent: "#E86A80",
      status: "canon",
      oneLine: "為了撮合戀人而癡狂的神明。太帥，所以演技沒有很好。",
      look: "王冠、披風、層層珠鍊。手上那支手杖的外型是兩顆愛心連在一起，代表心心相連。",
      about: "月老是這個世界裡少數「站在活人這邊」的神。他的法器、護身符、籤詩都被作者做成實體感很強的道具，用來在劇情環節裡加強觀眾的情感波動。至於演技——作者的原話是：像月老就因為太帥，演技沒有很好。",
      origin: [],
      quotes: [
        "月老牽紅線很簡單。最難的是，讓一個受過傷的人，再相信愛情一次。"
      ],
      relatedTerms: ["yuelao-staff", "red-thread", "aishen-festival", "oracle-lot"],
      fields: [
        { k: "登場", v: "第三季" },
        { k: "身分", v: "掌姻緣的神明" },
        { k: "法器", v: "雙心手杖" },
        { k: "相關", v: "紅線 ‧ 護身符 ‧ 籤詩" }
      ]
    },
    {
      id: "huji",
      name: "狐姬",
      reading: "Hú-jī",
      role: "第二季 ‧ 主線",
      seasons: ["s2"],
      art: "",
      gallery: [],
      accent: "#D98CA8",
      status: "partial",
      oneLine: "第二季雙主線之一：「狐姬 & 赤坂」。",
      look: "",
      about: "作者在第二季雜談裡點名，全季最後是把「狐姬 & 赤坂」和「杜先生和筱晴」兩條主線交纏在一起收尾。角色檔案尚未建立。",
      origin: [],
      quotes: [],
      relatedTerms: ["sacrifice"],
      fields: [
        { k: "登場", v: "第二季 ‧ 北境篇" },
        { k: "定位", v: "雙主線之一" }
      ]
    },
    {
      id: "akasaka",
      name: "赤坂",
      reading: "Chì-bǎn",
      role: "第二季 ‧ 主線",
      seasons: ["s2"],
      art: "",
      gallery: [],
      accent: "#E0714A",
      status: "partial",
      oneLine: "第二季雙主線之一：「狐姬 & 赤坂」。",
      look: "",
      about: "與狐姬同屬第二季的其中一條主線，在季末與另一條主線交纏收尾。角色檔案尚未建立。",
      origin: [],
      quotes: [],
      relatedTerms: ["sacrifice"],
      fields: [
        { k: "登場", v: "第二季 ‧ 北境篇" },
        { k: "定位", v: "雙主線之一" }
      ]
    },
    {
      id: "mrdu",
      name: "杜先生",
      reading: "Dù xiān-shēng",
      role: "第二季 ‧ 主線",
      seasons: ["s2"],
      art: "",
      gallery: [],
      accent: "#8FA6C4",
      status: "partial",
      oneLine: "第二季雙主線之一：「杜先生和筱晴」。",
      look: "",
      about: "第二季另一條主線的男主角。角色檔案尚未建立。",
      origin: [],
      quotes: [],
      relatedTerms: ["sacrifice"],
      fields: [
        { k: "登場", v: "第二季 ‧ 北境篇" },
        { k: "定位", v: "雙主線之一" }
      ]
    },
    {
      id: "xiaoqing",
      name: "筱晴",
      reading: "Xiǎo-qíng",
      role: "第二季 ‧ 主線",
      seasons: ["s2"],
      art: "",
      gallery: [],
      accent: "#9FC6D8",
      status: "partial",
      oneLine: "第二季雙主線之一：「杜先生和筱晴」。",
      look: "",
      about: "與杜先生同屬第二季的一條主線。角色檔案尚未建立。",
      origin: [],
      quotes: [],
      relatedTerms: ["sacrifice"],
      fields: [
        { k: "登場", v: "第二季 ‧ 北境篇" },
        { k: "定位", v: "雙主線之一" }
      ]
    },
    {
      id: "geckos",
      name: "安全帽壁虎",
      reading: "Gecko Crew",
      role: "第三季 ‧ 客串",
      seasons: ["s3"],
      art: "assets/yutong-workers.jpg",
      gallery: ["assets/yutong-gecko.jpg"],
      accent: "#E2C15A",
      status: "partial",
      oneLine: "戴黃色工地安全帽、拿著工具的一群小壁虎。",
      look: "黃色安全帽、扳手、紅眼睛，成群出現在語彤面前。",
      about: "第三季的迷你角色群，把悲劇的節奏鑿開一個透氣孔。詳細設定尚未收錄。",
      origin: [],
      quotes: [],
      relatedTerms: [],
      fields: [
        { k: "登場", v: "第三季" },
        { k: "定位", v: "喜劇緩衝" }
      ]
    }
  ],

  /* -------------------------------------------------------------- 關係圖 */
  /* type: bond 羈絆 / love 情感 / rival 敵對 / divine 神緣 / duty 職務 */
  relations: [
    { a: "yutong", b: "bohong", type: "love", label: "留下遺憾的那一對", status: "canon" },
    { a: "yutong", b: "lajichicken", type: "rival", label: "絕境的來源", status: "partial" },
    { a: "yutong", b: "yuelao", type: "divine", label: "神明與凡人", status: "partial" },
    { a: "yutong", b: "geckos", type: "bond", label: "工地夥伴", status: "partial" },
    { a: "huji", b: "akasaka", type: "love", label: "第二季主線 A", status: "canon" },
    { a: "mrdu", b: "xiaoqing", type: "love", label: "第二季主線 B", status: "canon" },
    { a: "huji", b: "mrdu", type: "bond", label: "季末交纏收尾", status: "canon" },
    { a: "yuelao", b: "bohong", type: "divine", label: "籤詩與獎狀", status: "partial" }
  ],

  /* ---------------------------------------------------------- 詞彙資料庫 */
  /* cat: world 世界觀 / place 場所 / deity 神明 / object 物件 / theme 主題 / meta 幕後 */
  glossary: [
    { id: "huangquan-shop", term: "黃泉燒肉店", cat: "place", read: "Huáng-quán Shāo-ròu Diàn",
      def: "開在陰間的一家燒肉店，招牌底下寫著「照顧你生前的遺憾」。門口暖簾中央一個「緣」字，兩側燈籠寫著「好好說再見」與「想念的味道」，門邊立牌問：今晚想和誰再吃一頓？",
      tags: ["全系列"], link: ["sanzu", "farewell-bridge"] },

    { id: "care-regret", term: "照顧你生前的遺憾", cat: "world", read: "",
      def: "店招上的副標，也是整個系列的服務項目。人死了，故事沒完；這家店負責把沒吃完的那一頓補上。",
      tags: ["全系列"], link: ["huangquan-shop", "regret"] },

    { id: "yuan-noren", term: "緣（暖簾）", cat: "object", read: "",
      def: "燒肉店門口白色暖簾正中央的圓框「緣」字。掀開它才算進門——在這個世界裡，緣分是要伸手撥開的東西。",
      tags: ["全系列"], link: ["huangquan-shop"] },

    { id: "taste-of-missing", term: "想念的味道", cat: "object", read: "",
      def: "店外燈籠上的字。這家店賣的不是肉，是某個人記憶裡那一頓飯的味道。",
      tags: ["全系列"], link: ["huangquan-shop"] },

    { id: "say-goodbye", term: "好好說再見", cat: "world", read: "",
      def: "燈籠上的另一句話，也是作者對陰間的期待：「我希望那裡不是審判，而是給每個人一次，好好說再見的機會。」",
      tags: ["全系列"], link: ["farewell-bridge", "care-regret"] },

    { id: "one-more-meal", term: "今晚想和誰再吃一頓？", cat: "world", read: "",
      def: "店門口立牌上的問句。每一集的故事，基本上都是在回答這一題。",
      tags: ["全系列"], link: ["huangquan-shop"] },

    { id: "sanzu", term: "三途川", cat: "place", read: "Sān-tú-chuān",
      def: "流過燒肉店門前的河。渡過它就進入死後的世界，河岸兩側掛滿燈籠，天上飄著天燈。",
      tags: ["全系列"], link: ["naihe-bridge", "farewell-bridge"] },

    { id: "naihe-bridge", term: "奈何橋", cat: "place", read: "Nài-hé Qiáo",
      def: "通往下一世的木橋，橋頭掛著「孟婆湯」的燈籠，欄杆邊寫著「澆盡前塵，一切是緣」。走上去就回不了頭。",
      tags: ["第二季"], link: ["mengpo-soup", "sanzu"] },

    { id: "mengpo-soup", term: "孟婆湯", cat: "object", read: "Mèng-pó Tāng",
      def: "喝下去就忘記一切的湯。在這部戲裡它的重量不在忘記，而在於——有些人寧可記得痛，也不想忘記人。",
      tags: ["第二季"], link: ["naihe-bridge"] },

    { id: "farewell-bridge", term: "送別橋", cat: "place", read: "Sòng-bié Qiáo",
      def: "與奈何橋相對的一座橋。橋邊掛的燈籠寫著「願你一路安好」「好好說再見」，立牌上寫著：有些再見，是為了讓彼此更安心地前行。",
      tags: ["全系列"], link: ["say-goodbye", "naihe-bridge"] },

    { id: "north-realm", term: "北境", cat: "theme", read: "Běi-jìng",
      def: "第二季的主題意象，但全季北境的畫面極少。作者的解釋：「北境」就像現實世界的「財富自由」或「瘋狂旅遊」，普羅大眾窮盡一生追求卻可能難以觸及；而每一集故事，就是追逐北境的過程中會發生的挫折與磨難。",
      tags: ["第二季"], link: ["sacrifice"] },

    { id: "regret", term: "遺憾", cat: "theme", read: "",
      def: "第一季的主調。那一季是一集一個獨立的悲劇故事，每個客人都帶著一件沒做完的事走進店裡。",
      tags: ["第一季"], link: ["care-regret", "sacrifice"] },

    { id: "sacrifice", term: "犧牲", cat: "theme", read: "",
      def: "第二季的主軸，刻意與第一季的「遺憾」做對照。代表語錄：你的歲月靜好，是因為有人替你負重前行。",
      tags: ["第二季"], link: ["regret", "north-realm"] },

    { id: "dual-line", term: "雙主線交纏", cat: "meta", read: "",
      def: "第二季的敘事結構。不再一集一個悲劇，而是把伏筆均勻撒在每一集，最後由「狐姬 & 赤坂」和「杜先生和筱晴」兩條線交纏著一起收尾。",
      tags: ["第二季"], link: ["sacrifice"] },

    { id: "aishen-festival", term: "愛神祭", cat: "place", read: "Ài-shén Jì",
      def: "第三季的重頭場景。會場設計是羅馬競技場的外型，搭配木質構造，再加入台灣廟宇常見的光明燈形象，融合成愛神祭的主視覺。",
      tags: ["第三季"], link: ["guangming-lamp", "yuelao"] },

    { id: "guangming-lamp", term: "光明燈", cat: "object", read: "Guāng-míng Dēng",
      def: "台灣廟宇常見的一整面燈牆，每一格是一個人的名字。第三季把它縫進愛神祭的建築裡，讓西洋競技場長出台灣味。",
      tags: ["第三季"], link: ["aishen-festival"] },

    { id: "yuelao", term: "月老", cat: "deity", read: "Yuè-lǎo",
      def: "掌姻緣的神明。作者形容他是「為了撮合戀人癡狂的神明」，也自嘲：月老因為太帥，演技沒有很好。",
      tags: ["第三季"], link: ["yuelao-staff", "red-thread"] },

    { id: "yuelao-staff", term: "雙心手杖", cat: "object", read: "",
      def: "月老的法器。手杖外型是兩顆愛心連在一起，代表心心相連。",
      tags: ["第三季"], link: ["yuelao"] },

    { id: "red-thread", term: "紅線", cat: "object", read: "",
      def: "月老手上那捲線。名句：月老牽紅線很簡單，最難的是讓一個受過傷的人，再相信愛情一次。",
      tags: ["第三季"], link: ["yuelao"] },

    { id: "amulet", term: "護身符", cat: "object", read: "",
      def: "第三季大量使用的「情感物件」之一。作者把護身符、籤詩和獎狀都放進劇情環節裡，用來加強觀眾的情感波動。",
      tags: ["第三季"], link: ["oracle-lot", "award"] },

    { id: "oracle-lot", term: "籤詩", cat: "object", read: "",
      def: "劇中出現「羅漢殿第六十一籤」：語傳照前程／志同善念映心誠／福緣愛滿結佳盟／家和父德萬年榮。",
      tags: ["第三季"], link: ["amulet", "yuelao"] },

    { id: "award", term: "獎狀", cat: "object", read: "",
      def: "台灣高級中等學校田徑錦標賽 一百公尺決賽 冠軍，得獎人：王柏宏。一張紙把一個人最亮的一刻釘在原地。",
      tags: ["第三季"], link: ["amulet"] },

    { id: "gecko-workers", term: "安全帽壁虎", cat: "world", read: "",
      def: "第三季出現的小壁虎群，戴著黃色工地安全帽、拿著工具，成群圍在語彤身邊。",
      tags: ["第三季"], link: [] },

    { id: "villain-first", term: "第一次寫反派", cat: "meta", read: "",
      def: "作者做過七個系列短篇，第三季的辣雞是他第一次在短劇裡加入反派。他認為越接近真人的臉部設計，AI 角色的微表情越生動。",
      tags: ["第三季"], link: [] },

    { id: "qimiao", term: "棲渺拾光", cat: "meta", read: "Qī-miǎo Shí-guāng",
      def: "劇集頻道的名字，也是這部戲的製作團隊。作者說：我們是台灣的棲渺拾光。",
      tags: ["頻道"], link: ["dreamfield"] },

    { id: "dreamfield", term: "自由曠野", cat: "meta", read: "",
      def: "作者最早經營的主頻道，走無厘頭迷因路線。2026 年 7 月，他放下經營到 1.2 萬粉的它，攜家帶口重新經營《棲渺拾光》。",
      tags: ["頻道"], link: ["qimiao"] },

    { id: "narwhal", term: "魔界的獨角鯨", cat: "theme", read: "",
      def: "第四季的副標。至 2026 年 8 月底仍在連載，最新進度 EP72。",
      tags: ["第四季"], link: [] },

    { id: "seven-seconds", term: "七秒", cat: "meta", read: "",
      def: "頻道名「棲渺拾光」的由來——取自「七秒」的諧音。作者的說法是：就算我像魚一樣只有七秒記憶，也會永遠記得那最美好的七秒與你。「拾光」則指美好的時間。",
      tags: ["頻道"], link: ["qimiao"] },

    { id: "ai-actors", term: "大寶寶 ‧ 元小雨", cat: "meta", read: "",
      def: "頻道掛名的兩位 AI 演員。棲渺拾光對外的定位，是這兩位 AI 演員的感情故事頻道。",
      tags: ["頻道"], link: ["qimiao"] },

    { id: "ep-numbering", term: "跨季連續編號", cat: "meta", read: "",
      def: "分集編號不會每季重來：第二季收在 EP30，第四季已經到 EP72。所以「四季七十餘集」指的是同一條連續的編號。",
      tags: ["全系列"], link: [] },

    { id: "share-rate", term: "分享率", cat: "meta", read: "",
      def: "作者反覆提到的殘酷指標：IG 演算法極度傾向高分享率的作品，而悲劇型作品不像迷因型容易被分享——因為人被感動到哭的時候，更傾向默默躲起來哭。",
      tags: ["幕後"], link: [] }
  ],

  /* ------------------------------------------------------------ 精選語錄 */
  quotes: [
    { text: "如果陰間真的存在。我希望那裡不是審判，而是給每個人一次，好好說再見的機會。", from: "棲渺拾光", img: "assets/cards/quote-1.jpg" },
    { text: "月老牽紅線很簡單。最難的是，讓一個受過傷的人，再相信愛情一次。", from: "第三季 ‧ 月老", img: "assets/cards/quote-2.jpg" },
    { text: "如果真的有陰間，你希望它長什麼樣子？我先說，我希望有一家燒肉店。", from: "棲渺拾光", img: "assets/cards/quote-3.jpg" },
    { text: "最催淚的故事，往往沒有任何一個人死去。而是有人終於學會原諒自己。", from: "棲渺拾光", img: "assets/cards/quote-4.jpg" },
    { text: "一部好的療癒作品，不會替你解決人生。但它可以陪你，撐過最難熬的那一天。", from: "棲渺拾光", img: "assets/cards/quote-5.jpg" },
    { text: "你的歲月靜好，是因為有人替你負重前行。", from: "第二季 ‧ 犧牲", img: "" },
    { text: "有些再見，是為了讓彼此更安心地前行。", from: "送別橋", img: "" },
    { text: "人間的故事，往往都帶有殘缺。", from: "第三季製作雜談", img: "" }
  ],

  /* ------------------------------------------------------------ 製作雜談 */
  notes: [
    { season: "s3", title: "這是一季細節比以往多的製作",
      body: "為了讓作品不失美感又加入台灣味，我把細節鑲入劇集會用到的環節，如愛神祭會場的設計，便是用羅馬競技場的外型搭配木質構造、並加入台灣廟宇常見的光明燈形象，融合成愛神祭的主視覺。",
      img: "assets/aishen-festival.jpg" },
    { season: "s3", title: "試著多放入情感物件",
      body: "月老的手杖外型是兩個愛心連在一起，代表心心相連，譬喻月老是個為了撮合戀人癡狂的神明。護身符、籤詩和獎狀都在環節裡起到加強觀眾情感波動的效果。",
      img: "assets/yuelao-props.jpg" },
    { season: "s3", title: "第一次寫反派",
      body: "目前製作過七個系列短篇，這是我第一次在短劇裡加入反派。雖然大家都很討厭辣雞，但是他的演技我很喜歡，也不知道為什麼，有些 AI 角色演技特別好，我想可能跟臉部的真實度有關，感覺越接近真人的臉部設計可以讓 AI 角色的微表情更生動，像月老就因為太帥演技沒有很好。",
      img: "assets/lajichicken.jpg" },
    { season: "s3", title: "AI 角色沒有偶像崇拜和陪伴成長的真實性",
      body: "所以第三季用語彤的絕境開局，觀眾朋友一路和語彤逆襲，希望在這一季能塑造讓觀眾陪伴角色成長的感動。從第二季中後段我們的頻道飄到了海外，至今香港、馬來西亞和新加坡的粉絲占了將近一成，而這三地的觀眾朋友貢獻了留言區約 40% 的留言。謝謝你們和台灣的觀眾朋友支持，讓我們有勇氣繼續嘗試不同的藝術風格進行創作。我們是台灣的棲渺拾光，真的很高興認識你們。",
      img: "assets/yutong-workers.jpg" },
    { season: "s3", title: "人間的故事往往都帶有殘缺",
      body: "柏宏和語彤的故事留下了遺憾，如同我們的人生也總是滿是遺憾。我跟各位觀眾一樣都很喜歡黃泉燒肉店的世界，也許是心裡也期待一位神明可以讀懂我內心的傷悲並給予救贖。我們也想讓這個奇妙的冒險世界可以一直延續下去，但再好的故事也會有結束的一天。我們會一直努力下去直到不得不放棄的那天，也希望即便有天必須完結，能讓觀眾在記憶裡留下難以忘懷的美好。",
      img: "assets/bh-yt-kiss.jpg" },
    { season: "s3", title: "IG 的演算法推薦邏輯極度傾向高分享率的作品",
      body: "悲劇型作品不像迷因型作品容易被分享，因為比起分享搞笑迷因，當人被感動到哭的時候更傾向默默躲起來哭。這對於我也是如此，我會按分享的通常也是幹片。",
      img: "" },
    { season: "s3", title: "雖然很難，但我慢慢說服自己不要那麼在意大流量",
      body: "以 EP13 為例，略過率 26.5% 和完播率四成的 69 秒 reels 堪稱鬼神級的數據，在過往頻道的經驗這支至少也該是 50 萬等級一樣的爆款。但為什麼只有四萬觀看呢～因為分享率（嘆氣）。",
      img: "" },
    { season: "s3", title: "也因此我特別鍾意因為喜歡黃泉燒肉店而追蹤的觀眾",
      body: "在這個不被演算法青睞的頻道，能遇見大家真的是神明保佑。且因為主頻道的梗比較低級，常有粗俗和淫穢的留言毫不收斂的用在我的 AI 角色。雖然他們只是 AI，但我對自己設計的每個角色都投入情感。",
      img: "assets/yutong-hanbok.jpg" },
    { season: "s3", title: "過去在主頻道為了流量做了很多無厘頭的梗",
      body: "有好多支破百萬流量的 reels，但願意點下追蹤的人卻不及只有十萬瀏覽量的黃泉燒肉店 EP1。主頻道隨機一支 reels：184 萬觀看、66 萬觸及、平均觀看 14 秒，帶來 1,033 位粉絲；黃泉燒肉店 EP1：5,428 讚、1,223 分享、505 儲存、310 留言，帶來 1,312 位粉絲。",
      img: "" },
    { season: "s3", title: "歷經一個半月的努力，棲渺拾光的追蹤數也快達到主頻道的一半",
      body: "雖然悲劇短劇型頻道經營不易，但我還是很喜歡製作黃泉燒肉店。我喜歡沈浸在這個虛構的世界，喜歡我的 AI 角色像真人一樣活過來演戲，喜歡大家愛戴我的 AI 角色，也很喜歡大家回饋的溫暖。希望有一天能經營成一個既爆款又悲劇的短劇型頻道。我愛所有的粉絲朋友，謝謝大家一路陪伴～",
      img: "assets/yutong-gecko.jpg" },
    { season: "s3", title: "第三季中場休息的心情分享",
      body: "45 天前我放棄了一個 1.2 萬粉絲的主頻道，攜家帶口重新經營《棲渺拾光》，這是為～什麼呢～",
      img: "assets/campus.jpg" },
    { season: "s2", title: "第二季的主軸是犧牲",
      body: "相較於第一季的「遺憾」主調，第二季是以「犧牲」為主軸，有句經典語錄說過：你的歲月靜好，是因為有人替你負重前行。感謝所有默默付出的人，因為你的犧牲，世界才能更美好。",
      img: "assets/s2-fire.jpg" },
    { season: "s2", title: "第二季製作雜談",
      body: "這一季採用比較大膽的嘗試，不再像第一季一樣一集一個悲劇故事，而是將浮筆均勻撒在每一集的劇情中，最後再將「狐姬 & 赤坂」和「杜先生和筱晴」的雙主線交纏在一起收尾。",
      img: "assets/s2-akasaka.jpg" },
    { season: "s2", title: "雖然主題是北境篇，但北境的畫面甚少",
      body: "「北境」就像是現實世界的「財富自由」或「瘋狂旅遊」，普羅大眾窮盡一生追求卻可能難以觸及，而每一集故事就像追逐北境的過程會發生的挫折與磨難。真正值得回憶的故事都是在過程裡發生，也會讓抵達終點的美好更加昇華。",
      img: "assets/s2-north.jpg" },
    { season: "s2", title: "不只黃泉燒肉店治癒觀眾，觀眾也治癒了我",
      body: "是各位觀眾的反饋讓我更有信心去製作劇集，也讓我在構圖、剪輯、調色和劇本控制的技巧上得到很大的提升。",
      img: "assets/naihe.jpg" },
    { season: "s2", title: "謝謝各位觀眾留言分享心得",
      body: "因為你們的留言讓影片更有溫度，也讓比較厭惡 AI 的人群不會在留言區攻擊我，是你們保護了棲渺拾光這個頻道，真的萬分感謝。有你們真好！",
      img: "assets/couple-pj.jpg" },
    { season: "s2", title: "我不喜歡接業配，也不想割粉絲的韭菜",
      body: "所以今年下半年我們報名了三場有獎金的影片比賽，屆時不管有沒有得獎都會和大家分享比賽的影片～如果有得獎賺到獎金，就加大投入第三季的預算！",
      img: "assets/catear.jpg" },
    { season: "s2", title: "EP29 和 EP30 預計會在 7/12 之前上架",
      body: "之後的作品就要等我們比完賽囉。但是要直上第三季還是做短篇番外篇我們也還在想，畢竟還是想換點口味，怕觀眾會膩～也請喜歡的粉絲朋友靜待一陣子～",
      img: "" }
  ],

  /* ------------------------------------------------------------ 其他系列 */
  works: [
    { title: "黃泉燒肉店", status: "canon", seasons: 4, desc: "頻道的招牌長篇。四季七十餘集，陰間的一家燒肉店，照顧你生前的遺憾。", art: "assets/hero-shop.jpg" },
    { title: "讓暑假飛一會兒", status: "canon", seasons: 0, desc: "單支短片，開學前發的。致敬《讓子彈飛》，腳本是和另一位 AI 創作者合作的。", art: "" },
    { title: "其他系列短篇 ×5", status: "pending", seasons: 0, desc: "作者自述至今製作過七個系列短篇。除《黃泉燒肉店》外還有幾部尚未收錄——歡迎補上片名與簡介。", art: "" }
  ]
};
