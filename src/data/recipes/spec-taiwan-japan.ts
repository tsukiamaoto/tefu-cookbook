import type { Recipe } from '../../types/recipe';

export const SPEC_TAIWAN_JAPAN_RECIPES: Recipe[] = [
  {
    id: 'spec-taiwan-01-potato-braised-pork',
    title: '家常馬鈴薯燉肉',
    subtitle: '半無水靠洋蔥釋出鮮甜原湯，壓 20 分再收汁，肉軟綿薯完整',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 30,
    realTotalMinutes: 55,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（免手動碰閥）',
    stoveDifference:
      '不用加滿一鍋水！靠洋蔥鋪底受壓自然出水，只需 5 大匙開水就能燉出濃郁湯汁，最後開蓋收汁 8 分鐘，色澤油亮又不死鹹。',
    avoidPitfall:
      '馬鈴薯務必切得比紅蘿蔔略大且先泡水去澱粉，加壓 20 分鐘才不會化散成泥；若洋蔥偏少可多補 2 大匙水防焦底。',
    youtubeQuery: '特福鮮呼吸萬用鍋 馬鈴薯燉肉 CY625870',
    sourceUrl: 'https://www.youtube.com/watch?v=c7jpKF36N1Q',
    sourceTag: '台灣家常實測 馬鈴薯燉肉 梅花肉',
    ingredients: [
      { name: '豬梅花肉（擦乾切 3–4cm 厚塊）', amount: 350, unit: '克', note: '改用梅花肉片亦可', group: 'main' },
      { name: '洋蔥（切約 2cm 大塊）', amount: 1, unit: '顆', group: 'main' },
      { name: '馬鈴薯（切 3–4cm 大塊泡水）', amount: 1, unit: '顆', note: '比紅蘿蔔略大防煮散', group: 'main' },
      { name: '紅蘿蔔（削皮切滾刀塊）', amount: 0.5, unit: '根', group: 'main' },
      { name: '蒜頭（去皮切細碎）', amount: 1, unit: '瓣', note: '愛蒜香可增至 2–3 瓣', group: 'main' },
      { name: '青蔥（切蔥花）', amount: 2, unit: '根', note: '起鍋提香用', group: 'main' },
      { name: '食用油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '醬油', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '味醂', amount: 3, unit: '大匙', note: '無味醂可改用砂糖', group: 'seasoning' },
      { name: '開水', amount: 5, unit: '大匙', note: '約 75ml', group: 'seasoning' },
      { name: '胡椒粉', amount: null, unit: '適量', note: '開蓋收汁前撒入', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動爆炒模式並熱油爆香',
        instruction:
          '保持開蓋，按面板左側「爆炒煎烤」設定 2 分鐘啟動。鍋底倒入 1 大匙食用油，先下蒜碎微爆，接著放入洋蔥大塊，以不沾湯匙或矽膠鏟翻拌至洋蔥微透、飄出甜香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '2 分鐘',
          temperature: '150°C',
          shortAction: '熱油爆香蒜洋蔥',
        },
      },
      {
        stepNumber: 2,
        title: '拌炒豬梅花與根莖類',
        instruction:
          '倒入梅花肉塊鋪開拌炒至表面由生紅轉白、約五分熟，再依序加入紅蘿蔔滾刀塊與瀝乾的馬鈴薯大塊略微翻勻，整鍋食材高度約在內鍋 1/2 刻度線下方。',
      },
      {
        stepNumber: 3,
        title: '淋入醬汁與 5 大匙開水',
        instruction:
          '依序淋入味醂 3 大匙、醬油 3 大匙與開水 5 大匙並輕拌均勻。此時鍋底幾乎看不到積水、呈半無水狀態是正常的，壓力燉煮時會靠底部洋蔥與肉汁自然出水。',
      },
      {
        stepNumber: 4,
        title: '鮮呼吸鎖蓋加壓 20 分鐘',
        instruction:
          '蓋上鍋蓋並將手把順時鐘轉到底鎖定，按右側「雞／鴨／豬」將時間調為 20 分鐘啟動，靜待行程結束與自然自動洩壓。',
        potAction: {
          side: 'right',
          modeName: '雞／鴨／豬',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '洋蔥出水燉軟梅花肉',
        },
        tip: '洩壓開蓋時將上蓋朝遠離身體方向傾斜，避免凝結熱水滴燙手。',
      },
      {
        stepNumber: 5,
        title: '開蓋撒胡椒並收濃醬汁',
        instruction:
          '洩壓開蓋後即見洋蔥融化釋出滿滿湯汁；撒入適量胡椒粉輕輕翻拌，保持開蓋切左側「收汁／醬燒」設 8 分鐘，收至湯汁呈深琥珀微濃發亮，撒上蔥花即可盛盤。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '8 分鐘',
          shortAction: '收亮琥珀醬汁撒蔥花',
        },
        tip: '收汁過程以矽膠匙輕推鍋底防沾即可，避免大力攪拌壓碎鬆綿的馬鈴薯。',
      },
    ],
  },
  {
    id: 'spec-taiwan-02-salmon-tofu-miso-soup',
    title: '鮭魚豆腐貢丸味噌湯',
    subtitle: '調降最低壓力 20 千帕 鮮燉，整片厚鮭魚完整不碎、後拌大醬鮮甜無腥',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 20,
    realTotalMinutes: 45,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（中途加料或起鍋拌化大醬）',
    stoveDifference:
      '魚肉怕高壓煮散，務必按「壓力調節」降到最低 20 千帕，厚切鮭魚整片不用切就能燉到輕夾即斷、豆腐依舊彈嫩；大醬與香油最後才下香氣最濃。',
    avoidPitfall:
      '切勿將韓式大醬或味噌一起鎖蓋高壓燉煮，容易變苦且沉底焦化；煮完記得即時清洗矽膠密封圈去除魚味。',
    youtubeQuery: '特福鮮呼吸萬用鍋 鮭魚味噌湯 20 千帕',
    sourceUrl: 'https://www.youtube.com/watch?v=Z1cEHuR0a9k',
    sourceTag: '台灣開箱實測 韓式大醬 鮭魚豆腐貢丸味噌湯',
    ingredients: [
      { name: '厚切帶皮鮭魚排（洗淨整片不切）', amount: 1, unit: '大片', group: 'main' },
      { name: '盒裝豆腐（切 2–3cm 方塊）', amount: 1, unit: '盒', group: 'main' },
      { name: '貢丸', amount: 6, unit: '顆', group: 'main' },
      { name: '薑（切長條片）', amount: 10, unit: '片', note: '去腥用', group: 'main' },
      { name: '蒜頭（去皮切厚片）', amount: 6, unit: '瓣', note: '去腥提鮮', group: 'main' },
      { name: '清水', amount: 1200, unit: 'ml', note: '至內鍋 1/2 線淹過魚', group: 'main' },
      { name: '韓式大醬（或日式味噌）', amount: 3, unit: '大匙', note: '後下依口味逐匙攪化', group: 'seasoning' },
      { name: '米酒', amount: 2, unit: '大匙', note: '繞鍋淋一圈去腥', group: 'seasoning' },
      { name: '鹽', amount: 1, unit: '小匙', group: 'seasoning' },
      { name: '冰糖', amount: null, unit: '少許', note: '提鮮回甘', group: 'seasoning' },
      { name: '香油', amount: null, unit: '少許', note: '起鍋前再滴入', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '整片鮭魚與基本湯料入鍋',
        instruction:
          '球釜內鍋倒入適量清水，直接平放入整片厚切帶皮鮭魚排，繞鍋淋入米酒一圈去腥，依序放入薑片、蒜片、6 顆貢丸、切塊豆腐、鹽 1 小匙與少許冰糖，總水位約在內鍋 1/2 刻度線。注意韓式大醬與香油先不放。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋設定「煮／燉湯品」並降壓至 20 千帕',
        instruction:
          '雙手壓緊上蓋並順時鐘轉緊鎖定，按右側「煮／燉湯品」（預設 20 分鐘），接著按「壓力調節」搭配減鍵由預設 30 千帕 調降至最低 20 千帕（防魚肉煮爛），按下左側「中途加料」鍵後啟動。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '20 分鐘（中途加料）',
          releaseMode: 'natural_auto',
          shortAction: '20 千帕 低壓燉鮮魚湯',
        },
        tip: '若想省下二次升壓 10 多分鐘，也可不按中途加料，直接改按「雞／鴨／豬」設 15 分鐘並調壓至 20 千帕，燉畢洩壓開蓋後以湯頭餘溫或「收汁／醬燒」微滾 1–2 分鐘拌化大醬！',
      },
      {
        stepNumber: 3,
        title: '等待自動加溫升壓與第一段排壓',
        instruction:
          '啟動後機器自動跑完加溫、升壓、鮮呼吸與排壓流程，約 20 分鐘後會提示進入中途加料階段。排氣時請遠離排氣口與熱蒸氣。',
      },
      {
        stepNumber: 4,
        title: '開蓋攪化韓式大醬或味噌',
        instruction:
          '確認排氣完畢後逆時鐘開蓋，此時鮭魚已轉熟白、豆腐浮面。用不沾湯匙挖取韓式大醬（或味噌），伸入熱湯中慢慢攪勻融化並依口味微調鹹度。',
      },
      {
        stepNumber: 5,
        title: '重新鎖蓋續跑剩餘 10 分鐘',
        instruction:
          '若採中途加料行程，再次壓緊鎖定上蓋，待面板顯示剩餘 10 分鐘即會自動續煮完畢並排壓轉保溫。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '續煮剩餘 10 分鐘（中途加料）',
          releaseMode: 'natural_auto',
          shortAction: '續煮融合大醬鮮味',
        },
      },
      {
        stepNumber: 6,
        title: '開蓋滴入香油盛碗享用',
        instruction:
          '洩壓完畢旋轉手把開蓋（留意內蓋熱蒸氣），滴入少許香油提香即可盛碗。湯頭金黃鮮亮、貢丸吸湯澎滿、整片鮭魚排完整嫩滑不碎散。',
      },
    ],
  },
  {
    id: 'spec-taiwan-03-garlic-vegetable-chicken-soup',
    title: '蒜頭蔬菜雞湯',
    subtitle: '先煸出金黃蒜油與雞油，鎖蓋煲 20 分，湯頭清澈鮮甜蔬菜軟透',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 22,
    realTotalMinutes: 50,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（開蓋後再加鹽）',
    stoveDifference:
      '不必另起一鍋水汆燙！雞塊直接用熱水壺淋滾水燙洗去血水，再靠爆炒模式先煸出蒜油與雞油，一鍋到底就能燉出像細熬一小時的清甜雞湯。',
    avoidPitfall:
      '鹽巴務必洩壓開蓋後再加，雞腿肉才不緊縮變柴；加滿湯料總高度維持在內鍋 3/4 線附近，絕對勿超最高水位線。',
    youtubeQuery: '特福鮮呼吸萬用鍋 蒜頭蔬菜雞湯 CY625870',
    sourceUrl: 'https://www.youtube.com/watch?v=noBSyIYVeC8',
    sourceTag: '台灣家常實測 蒜頭蔬菜雞湯 鴻喜菇 高麗菜',
    ingredients: [
      { name: '帶骨雞腿肉（切塊）', amount: 450, unit: '克', note: '約 1 支大雞腿或半雞', group: 'main' },
      { name: '去皮整顆蒜仁', amount: 18, unit: '瓣', note: '保留整顆不切碎', group: 'main' },
      { name: '白洋蔥（切 2cm 寬條）', amount: 1, unit: '顆', group: 'main' },
      { name: '紅蘿蔔（切 2–3cm 滾刀塊）', amount: 0.5, unit: '根', group: 'main' },
      { name: '鴻喜菇（切蒂撥散）', amount: 1, unit: '包', group: 'main' },
      { name: '高麗菜（手撕大片）', amount: 0.25, unit: '顆', group: 'main' },
      { name: '薑片', amount: 5, unit: '片', group: 'main' },
      { name: '溫熱清水', amount: 1500, unit: 'ml', note: '總水位約 3/4 線內', group: 'main' },
      { name: '橄欖油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '米酒', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '鹽', amount: null, unit: '適量', note: '洩壓開蓋後再加', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '熱水淋燙雞肉去血水並備齊蔬菇',
        instruction:
          '帶骨雞腿切塊放入調理盆，直接以熱水壺淋上滾熱水燙洗去血水後瀝乾；洋蔥切 2cm 寬條、紅蘿蔔切滾刀塊、鴻喜菇切蒂撥散、高麗菜手撕大片、薑切片，蒜頭去皮保留整顆。',
      },
      {
        stepNumber: 2,
        title: '啟動爆炒模式煸出蒜油與雞油',
        instruction:
          '保持開蓋，按左側「爆炒煎烤」設定 2 分鐘啟動。鍋底淋一圈橄欖油，下薑片與整顆蒜仁略炒出香，放入雞肉塊翻拌至表面轉白、雞皮微出油且蒜面呈微金黃油亮。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '2 分鐘',
          temperature: '150°C',
          shortAction: '煸出蒜油與雞油',
        },
      },
      {
        stepNumber: 3,
        title: '放入根莖蔬菜與鴻喜菇拌炒',
        instruction:
          '依序投入洋蔥寬條、紅蘿蔔滾刀塊與鴻喜菇輕輕拌炒，讓蔬菜均勻裹上蒜油與雞油，此時固體食材高度約在內鍋 1/2 刻度線。',
      },
      {
        stepNumber: 4,
        title: '加水鋪高麗菜並淋入 1 大匙米酒',
        instruction:
          '倒入足量清水至淹過雞肉與根莖蔬菜，再把手撕高麗菜鋪在最上層略壓入湯中，總液位約在內鍋 3/4 刻度線附近（低於最高水位線）；淋入 1 大匙米酒，此時先不放鹽。',
        tip: '改倒溫熱開水可縮短約 10–15 分鐘升壓時間；偏好脆口高麗菜可留到開蓋加鹽時再下鍋煮滾 3–5 分鐘。',
      },
      {
        stepNumber: 5,
        title: '鮮呼吸鎖蓋燉湯 20 分鐘',
        instruction:
          '蓋上鍋蓋並將手把順時鐘轉至鎖定位置，按右側「煮／燉湯品」設定 20 分鐘啟動，靜待升壓、燉煮與自動洩壓完成。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '高壓燉出蔬甜雞湯',
        },
      },
      {
        stepNumber: 6,
        title: '自動洩壓開蓋後再加鹽調味',
        instruction:
          '聽到提示音且洩壓完畢後開蓋，此時再依湯量撒入適量鹽巴拌勻試喝，即可盛碗享用清澈微金黃的暖身雞湯。',
      },
    ],
  },
  {
    id: 'spec-taiwan-04-aged-radish-chicken-soup',
    title: '老菜脯雞湯',
    subtitle: '老菜脯、菜脯條與白蘿蔔三代同堂，免顧火 25 分煲出黑金甘醇全雞湯',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 25,
    realTotalMinutes: 55,
    baseServings: 6,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（免額外加鹽即夠味）',
    stoveDifference:
      '傳統古早味老菜脯雞得文火慢熬 1.5 小時以上，鮮呼吸動態變壓只需 20–25 分鐘就能把老菜脯、菜脯條與新鮮白蘿蔔三代同堂精華全逼進烏骨雞裡。',
    avoidPitfall:
      '全雞加配料已佔內鍋約 7 成空間，注水務必緊盯停在內鍋最高水位線以下（約 1600–1800ml），切勿超線防排氣噴湯。',
    youtubeQuery: '特福鮮呼吸萬用鍋 老菜脯雞湯 烏骨雞',
    sourceUrl: 'https://www.youtube.com/watch?v=JZWYQ2ufpGU',
    sourceTag: '楊桃美食網 楊桃文化 老菜脯雞湯 三代同堂 烏骨雞',
    ingredients: [
      { name: '烏骨雞（全隻汆燙洗淨）', amount: 1300, unit: '克', note: '1 隻，亦可改切大塊', group: 'main' },
      { name: '老菜脯（輕沖灰塵勿久泡）', amount: 30, unit: '克', group: 'main' },
      { name: '菜脯條（3–5cm 條段略沖去鹽）', amount: 100, unit: '克', group: 'main' },
      { name: '白蘿蔔（去皮切 3–4cm 厚方塊）', amount: 250, unit: '克', group: 'main' },
      { name: '去皮整顆蒜仁', amount: 50, unit: '克', group: 'main' },
      { name: '帶皮薑片', amount: 30, unit: '克', group: 'main' },
      { name: '清水', amount: 1700, unit: 'ml', note: '1600–1800ml 勿超最高水位線', group: 'main' },
      { name: '米酒', amount: 50, unit: 'ml', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '全隻烏骨雞汆燙並與三代同堂入鍋',
        instruction:
          '整隻烏骨雞先以滾水汆燙去除血水雜質並洗淨瀝乾，置入內鍋底部中央；在雞身周圍與上方鋪入白蘿蔔厚方塊、輕沖過的老菜脯、菜脯條、整顆蒜仁與薑片，固體食材約佔內鍋 7 成空間。',
      },
      {
        stepNumber: 2,
        title: '注入清水與米酒',
        instruction:
          '緩緩倒入清水沒過食材並務必停在內鍋最高水位線以下（約 1600–1800ml），再倒入 50ml 米酒。因老菜脯與菜脯本身鹹甘濃厚，全程先不額外加鹽。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋加壓燉煮 20–25 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘鎖緊，按右側「煮／燉湯品」（或「雞／鴨／豬」）設定 20–25 分鐘啟動免顧火燉煮。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '20–25 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '動態變壓煲黑金湯',
        },
      },
      {
        stepNumber: 4,
        title: '自動洩壓開蓋試味享用',
        instruction:
          '待行程結束且自然自動洩壓完畢即可開蓋；此時湯頭呈深褐烏黑油亮、白蘿蔔軟透方正，試喝鹹度合宜即可盛碗（若覺偏淡再微量補鹽）。',
        tip: '老菜脯香氣濃郁，煮畢建議清洗矽膠密封圈與可拆式內蓋板，避免後續煮甜湯串味。',
      },
    ],
  },
  {
    id: 'spec-taiwan-05-dried-persimmon-chicken-soup',
    title: '柿餅燉雞湯',
    subtitle: '整顆帶白霜柿餅直接入鍋，一鍵壓 20 分煲出淡琥珀潤喉甘甜湯',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 20,
    realTotalMinutes: 50,
    baseServings: 6,
    innerPot: '雙內鍋皆可',
    releaseSummary: '自然自動洩壓（開蓋後再加鹽）',
    stoveDifference:
      '柿餅表面天然白色柿霜正是潤喉回甘精華，千萬別洗掉、整顆不對切直接同燉，20 分鐘就能煲出清澈淡琥珀色果香雞湯且不糊濁。',
    avoidPitfall:
      '先鋪雞肉與配料再加水至內鍋最高水位線以下（約 1600–1800ml）；鹽巴等洩壓開蓋才放，雞肉才不乾柴。',
    youtubeQuery: '特福鮮呼吸萬用鍋 柿餅燉雞湯 秋冬補湯',
    sourceUrl: 'https://www.youtube.com/watch?v=JZWYQ2ufpGU',
    sourceTag: '楊桃美食網 楊桃文化 柿餅燉雞湯 秋冬潤補',
    ingredients: [
      { name: '帶骨雞肉塊（大塊汆燙洗淨）', amount: 1000, unit: '克', group: 'main' },
      { name: '柿餅（留白色柿霜、整顆不切）', amount: 4, unit: '顆', group: 'main' },
      { name: '去皮薑厚片', amount: 25, unit: '克', note: '約 5–6 片', group: 'main' },
      { name: '枸杞（略沖洗瀝乾）', amount: 15, unit: '克', group: 'main' },
      { name: '清水', amount: 1700, unit: 'ml', note: '1600–1800ml 勿超最高水位線', group: 'main' },
      { name: '米酒', amount: 50, unit: 'ml', group: 'seasoning' },
      { name: '鹽', amount: 1, unit: '小匙', note: '洩壓開蓋後再加', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '雞肉塊鋪底與整顆柿餅入鍋',
        instruction:
          '帶骨雞肉切大塊先以滾水汆燙至表面潔白沖淨，鋪於內鍋底部；依序放入保留白色柿霜的 4 顆完整柿餅（不對切）、薑厚片 25 克與枸杞 15 克，倒入清水至低於最高水位線（約 1600–1800ml）與 50ml 米酒，先不加鹽。',
        tip: '改用溫熱水注入可省 10–15 分升壓；若希望枸杞色澤更鮮紅，也可留到開蓋加鹽時再丟入以餘溫悶 3 分鐘。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋加壓燉煮 20 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘鎖緊，選右側「煮／燉湯品」（或「雞／鴨／豬」）設定 20 分鐘啟動。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '煲出琥珀果香雞湯',
        },
      },
      {
        stepNumber: 3,
        title: '自動洩壓開蓋檢視湯色',
        instruction:
          '等待烹調結束並自動安全洩壓後，將鍋蓋朝遠離身體方向傾斜打開防熱水滴落；此時湯色呈現清亮的淡琥珀茶棕色並帶細薄雞油光澤。',
      },
      {
        stepNumber: 4,
        title: '開蓋加鹽拌勻盛碗',
        instruction:
          '加入 1 小匙鹽巴輕輕攪拌均勻，平衡柿餅天然果甜即可盛碗，大塊帶皮雞肉軟嫩完整不散。',
      },
    ],
  },
  {
    id: 'spec-taiwan-06-black-bean-pork-trotter-soup',
    title: '黑豆豬腳湯',
    subtitle: '乾黑豆免泡水直下，牛／羊模式壓 30 分釋放滿滿膠質與花青素深黑濃湯',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 30,
    realTotalMinutes: 65,
    baseServings: 6,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（嚴禁手動快洩防豆沫噴溢）',
    stoveDifference:
      '瓦斯爐燉豬腳配乾黑豆得顧火 2–3 小時，萬用鍋「牛／羊」60 千帕高壓 30 分鐘就能同步軟化皮筋與黑豆；喜入口即化設 35 分，偏愛 Q 彈嚼勁可改選「雞／鴨／豬」設 25–29 分。',
    avoidPitfall:
      '黑豆加熱易起泡，食材加湯水切勿超過內鍋 2/3 滿（水約 1500–1700ml），結束嚴禁手動快洩以防泡沫噴濺塞閥。',
    youtubeQuery: '特福鮮呼吸萬用鍋 黑豆豬腳湯 養生湯',
    sourceUrl: 'https://www.youtube.com/watch?v=JZWYQ2ufpGU',
    sourceTag: '楊桃美食網 楊桃文化 黑豆豬腳湯 溫補膠質',
    ingredients: [
      { name: '輪切帶皮豬腳塊（汆燙拔毛洗淨）', amount: 1400, unit: '克', note: '約 7–8 大塊', group: 'main' },
      { name: '乾黑豆（洗淨免浸泡）', amount: 100, unit: '克', group: 'main' },
      { name: '紅棗（洗淨可略劃一刀）', amount: 12, unit: '顆', group: 'main' },
      { name: '去皮薑厚片', amount: 20, unit: '克', group: 'main' },
      { name: '清水', amount: 1600, unit: 'ml', note: '1500–1700ml 勿超 2/3 滿', group: 'main' },
      { name: '米酒', amount: 50, unit: 'ml', group: 'seasoning' },
      { name: '鹽', amount: 1, unit: '小匙', note: '洩壓開蓋後再加', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '豬腳鋪底與乾黑豆配料入鍋',
        instruction:
          '帶皮輪切豬腳先滾水汆燙 3–5 分鐘逼出血沫、徹底沖淨拔除殘毛，緊密排滿內鍋底部；依序鋪入免浸泡的洗淨乾黑豆 100 克、紅棗 12 顆與薑片 20 克，倒入清水至淹過食材且嚴守不超過內鍋 2/3 滿與最高水位線，淋入 50ml 米酒，先不加鹽。',
        tip: '喜歡焙炒豆香者，亦可先開蓋用「爆炒煎烤」將乾黑豆乾炒 2 分鐘至微裂再下豬腳。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋高壓燉煮 30–35 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘鎖緊，按右側「牛／羊」（預設 60 千帕，亦可改選「煮／燉湯品」）依喜好口感設 30–35 分鐘啟動（愛軟糯入口即化可設 35–40 分；愛 Q 彈嚼勁改選「雞／鴨／豬」設 25–29 分）。',
        potAction: {
          side: 'right',
          modeName: '牛／羊',
          lid: 'locked',
          durationText: '30–35 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '軟化豬皮與黑豆',
        },
      },
      {
        stepNumber: 3,
        title: '全程等待自然自動洩壓',
        instruction:
          '烹調結束後務必讓機器全程自然自動洩壓，絕不可手動快速排氣，避免黑豆與高膠質泡沫噴溢塞住排氣閥。',
      },
      {
        stepNumber: 4,
        title: '開蓋加鹽調味享用',
        instruction:
          '安全洩壓開蓋後可見濃郁深紫黑色黑豆精華湯頭，加入 1 小匙鹽巴拌勻即成，豬腳皮晶亮 Q 軟、紅棗完好點綴。',
      },
    ],
  },
  {
    id: 'spec-taiwan-07-lotus-root-quinoa-rib-soup',
    title: '蓮藕藜麥排骨湯',
    subtitle: '蓮藕厚圓片配牛蒡段與紅藜麥，25–30 分煲出高纖清甜排骨湯',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 25,
    realTotalMinutes: 55,
    baseServings: 6,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（防細藜麥與澱粉沫塞閥）',
    stoveDifference:
      '紅藜麥務必最後撒在最上層別沉鍋底，防澱粉焦黏；蓮藕切 1.5–2cm 厚圓片、牛蒡切 3–4cm 厚段，高壓後依然飽滿成形，喜鬆粉設 30 分、喜爽脆設 20–25 分。',
    avoidPitfall:
      '紅藜麥細小且蓮藕澱粉高，結束務必等自然自動洩壓不可快洩，煮完記得順手沖洗上蓋防塞蓋與膠條。',
    youtubeQuery: '特福鮮呼吸萬用鍋 蓮藕排骨湯 紅藜麥 牛蒡',
    sourceUrl: 'https://www.youtube.com/watch?v=JZWYQ2ufpGU',
    sourceTag: '楊桃美食網 楊桃文化 蓮藕藜麥排骨湯 牛蒡 高纖',
    ingredients: [
      { name: '帶骨排骨段（汆燙洗淨）', amount: 1000, unit: '克', note: '約 5–6cm 帶骨肋排', group: 'main' },
      { name: '蓮藕（去皮切 1.5–2cm 厚圓片）', amount: 350, unit: '克', group: 'main' },
      { name: '牛蒡（刮淨外皮切 3–4cm 厚段）', amount: 200, unit: '克', note: '可先泡清水防氧化', group: 'main' },
      { name: '紅藜麥（細網淘洗 2–3 次）', amount: 40, unit: '克', note: '洗去皂苷苦味', group: 'main' },
      { name: '薑片', amount: 20, unit: '克', group: 'main' },
      { name: '清水', amount: 1800, unit: 'ml', note: '總液位勿超最高水位線', group: 'main' },
      { name: '米酒', amount: 50, unit: 'ml', group: 'seasoning' },
      { name: '鹽', amount: 1, unit: '小匙', note: '洩壓開蓋後再加', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '排骨鋪底、根莖層疊、紅藜麥置頂',
        instruction:
          '汆燙乾淨的帶骨排骨平鋪內鍋底部，依序疊放蓮藕厚圓片、牛蒡厚圓柱段與薑片，最後將細網淘洗瀝乾的紅藜麥 40 克均勻撒在最上層，避免細穀沉底受熱焦糊。',
      },
      {
        stepNumber: 2,
        title: '注入清水與米酒',
        instruction:
          '倒入 1800ml 清水（確認總液位約在內鍋 3/4 高度且低於最高水位線）與 50ml 米酒，此時先不加鹽。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋加壓煲湯 25–30 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘鎖緊，按右側「煮／燉湯品」設定 25–30 分鐘啟動（想吃鬆粉綿密蓮藕設 30 分，偏愛略帶爽脆感設 20–25 分）。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '25–30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '煲出鬆甜根莖排骨湯',
        },
      },
      {
        stepNumber: 4,
        title: '自動洩壓後開蓋加鹽調味',
        instruction:
          '等待行程完成並自然自動洩壓後開蓋，加入 1 小匙鹽巴輕輕拌勻即可盛碗，湯頭清亮帶淡粉褐光澤、蓮藕圓片與牛蒡段飽滿不碎。',
        tip: '煮完含細小紅藜麥的湯品後，請記得順手檢查並沖洗上蓋防塞蓋與矽膠密封圈。',
      },
    ],
  },
  {
    id: 'spec-taiwan-08-fish-maw-scallop-abalone-chicken-soup',
    title: '花膠干貝鮑魚雞湯',
    subtitle: '爆炒 150 克整瓣蒜仁鋪底，高壓 20 分逼出星級乳白膠質濃湯',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 25,
    realTotalMinutes: 50,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（以矽膠大勺輕托全雞）',
    stoveDifference:
      '米其林星級台菜年菜做法：先以爆炒模式將 150 克整瓣蒜仁炒到金黃出油，再與全隻小土雞、花膠、干貝及鮑魚同壓 20 分，免高湯粉即逼出乳白老火膠質。',
    avoidPitfall:
      '全程使用耐熱矽膠湯勺輕托全雞護鍋（或改用 304 不鏽鋼內鍋）；愛活鮑魚彈牙口感者可壓完開蓋再放鮑魚微滾 3–5 分。',
    youtubeQuery: '特福鮮呼吸萬用鍋 富錦樹 花膠干貝鮑魚雞湯',
    sourceUrl: 'https://www.youtube.com/watch?v=wzH1zh9_6ko',
    sourceTag: '富錦樹 台灣官方聯名 特福官方 年菜 花膠干貝鮑魚雞湯',
    ingredients: [
      { name: '小土雞（全隻汆燙定型不剁塊）', amount: 800, unit: '克', note: '約 1 隻', group: 'main' },
      { name: '泡發花膠（洗淨切寬厚條）', amount: 200, unit: '克', group: 'main' },
      { name: '鮑魚（刷淨微燙去殼去內臟）', amount: 4, unit: '顆', note: '約 400 克', group: 'main' },
      { name: '乾干貝（略沖洗）', amount: 10, unit: '顆', note: '約 60 克', group: 'main' },
      { name: '去皮整瓣蒜仁（擦乾水氣）', amount: 150, unit: '克', group: 'main' },
      { name: '清水', amount: 1500, unit: 'ml', note: '改溫熱水可省 10 分升壓', group: 'main' },
      { name: '爆香用油', amount: 1.5, unit: '大匙', group: 'seasoning' },
      { name: '鹽', amount: 6, unit: '克', note: '約 1 小匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '開蓋爆香鋪底整瓣蒜仁',
        instruction:
          '保持開蓋不鎖定，按左側「爆炒煎烤」（150°C），下約 1.5 大匙食用油，倒入擦乾水氣的 150 克去皮整瓣蒜仁鋪滿球釜圓底，翻炒至蒜仁呈誘人金黃色並飄出濃郁蒜油香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '150°C',
          shortAction: '煸香鋪底金黃蒜仁',
        },
      },
      {
        stepNumber: 2,
        title: '整隻小土雞與珍饈海味入鍋',
        instruction:
          '倒入 1500ml 清水與 6 克鹽，將汆燙定型的全隻小土雞平放浸入鍋中央（水位覆蓋雞身 8–9 分滿且低於最高水位線），再把泡發切條的花膠、去殼鮑魚與乾干貝沿雞身周圍依序擺入。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋鮮呼吸燉煮 20 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘轉到底鎖定，選右側「煮／燉湯品」設定 20 分鐘啟動，以鮮呼吸動態變壓把花膠膠質與海陸鮮味快速逼出。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸逼出花膠膠質',
        },
        tip: '偏好活鮑魚更 Q 脆彈牙者，可先不放鮑魚，待壓完開蓋後再放入以「收汁／醬燒」開蓋微滾 3–5 分鐘收尾。',
      },
      {
        stepNumber: 4,
        title: '自動洩壓移入砂鍋上桌',
        instruction:
          '行程完成並自動洩壓開蓋後，以耐熱矽膠大湯勺輕托整隻金黃完整全雞移入砂鍋，再舀入鮑魚、花膠與乳白偏淡金黃的濃郁膠質湯頭即可宴客上桌。',
      },
    ],
  },
  {
    id: 'spec-taiwan-09-seafood-taro-rice-noodles',
    title: '海鮮芋頭米粉',
    subtitle: '先煎香鯧魚與乾貨爆香，壓 20 分煮透芋香海味湯，開蓋再下炊粉不糊爛',
    category: 'rice',
    cuisine: '台式',
    settingMinutes: 28,
    realTotalMinutes: 55,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（開蓋後再下米粉與蒜苗）',
    stoveDifference:
      '酒家菜靈魂兩關鍵：鯧魚擦乾平鋪用長木筷輕翻煎定型才不碎，且炊粉絕對不能進高壓行程，等 20 分鐘壓透鬆綿芋頭海味湯後開蓋微滾 2–3 分鐘最彈潤。',
    avoidPitfall:
      '芋頭切 4–5cm 大厚塊才不會全化成泥，並避免壓死貼正鍋底防焦；米粉、蒜苗青與芹菜務必洩壓開蓋後再放。',
    youtubeQuery: '特福鮮呼吸萬用鍋 富錦樹 海鮮芋頭米粉',
    sourceUrl: 'https://www.youtube.com/watch?v=wzH1zh9_6ko',
    sourceTag: '富錦樹 台灣官方聯名 特福官方 酒家菜 海鮮芋頭米粉 鯧魚',
    ingredients: [
      { name: '鯧魚（擦乾切 2–3cm 寬條）', amount: 600, unit: '克', note: '約 1 隻', group: 'main' },
      { name: '芋頭（切 4–5cm 大厚三角塊）', amount: 6, unit: '塊', group: 'main' },
      { name: '炊粉／細米粉（泡軟剪段瀝乾）', amount: 130, unit: '克', note: '開蓋後才放', group: 'main' },
      { name: '海參（泡發切條塊）', amount: 100, unit: '克', group: 'main' },
      { name: '魚皮（洗淨切塊）', amount: 100, unit: '克', group: 'main' },
      { name: '花枝丸', amount: 6, unit: '顆', group: 'main' },
      { name: '乾香菇（泡軟切條）', amount: 60, unit: '克', group: 'main' },
      { name: '蝦米（洗淨瀝乾）', amount: 30, unit: '克', group: 'main' },
      { name: '嫩薑（切寬片）', amount: null, unit: '適量', group: 'main' },
      { name: '蒜苗（斜切薄片）', amount: 20, unit: '克', note: '蒜白爆香、蒜青起鍋放', group: 'main' },
      { name: '芹菜（切段或珠）', amount: 10, unit: '克', note: '起鍋放', group: 'main' },
      { name: '清水', amount: 1500, unit: 'ml', group: 'main' },
      { name: '爆香用油', amount: 1.5, unit: '大匙', group: 'seasoning' },
      { name: '鹽', amount: 8, unit: '克', group: 'seasoning' },
      { name: '白胡椒粉', amount: 3, unit: '克', group: 'seasoning' },
      { name: '油蔥酥', amount: 5, unit: '克', note: '起鍋提香', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '開蓋平鋪煎香鯧魚與乾貨爆香',
        instruction:
          '保持開蓋不鎖定，按左側「爆炒煎烤」（150°C），鍋底淋入 1–2 大匙油預熱。先將擦乾的鯧魚寬條平鋪球釜底層煎香定型，隨即鋪上嫩薑片、香菇條、蝦米與少許蒜苗白，用長木筷輕柔翻動避免弄碎魚肉。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '150°C',
          shortAction: '煎魚定型煸炒乾貨',
        },
        tip: '想讓鯧魚條完全零破損，也可在煎至兩面微金黃後先以木筷夾起備用，待最後開蓋下米粉時再放回鍋面輕滾 2 分鐘。',
      },
      {
        stepNumber: 2,
        title: '下耐煮海味、芋頭與 1500ml 清水',
        instruction:
          '倒入 1500ml 清水（勿超過最高水位線），放入大厚塊芋頭（注意勿緊壓在正鍋底中心）、海參、魚皮、花枝丸，並加入 8 克鹽與 3 克白胡椒粉。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋鮮呼吸壓力燉煮 20 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘鎖定，選右側「煮／燉湯品」設定 20 分鐘啟動，完成後靜待自動排氣洩壓。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '壓出鬆綿芋香海味湯',
        },
      },
      {
        stepNumber: 4,
        title: '開蓋下炊粉與翠綠提香配料',
        instruction:
          '排氣洩壓開蓋後，投入預先泡軟瀝乾的 130 克炊粉、蒜苗斜片、芹菜與油蔥酥，切左側「收汁／醬燒」開蓋微滾 2–3 分鐘至米粉絲絲分明飽含海味湯汁，以矽膠大湯勺連魚帶粉盛入砂鍋上桌。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '2–3 分鐘',
          shortAction: '滾熟炊粉拌油蔥提香',
        },
      },
    ],
  },
  {
    id: 'spec-japan-01-onsen-tamago',
    title: '低溫調理溫泉蛋',
    subtitle: '冷藏生蛋直接水浴 68°C 泡 30 分，蛋白嫩白如布丁、蛋黃濃稠膏狀',
    category: 'sousvide',
    cuisine: '日式',
    settingMinutes: 30,
    realTotalMinutes: 50,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（時間到立刻撈出泡冷水！）',
    stoveDifference:
      '免盯溫度計顧鍋！剛出冰箱的冰雞蛋直接下鍋、68°C 舒肥 30 分鐘兼顧沙門氏菌殺菌與超商溫泉蛋般紮實膏狀蛋黃；若用偏小顆蛋請調降為 65°C。',
    avoidPitfall:
      '5L 內鍋底部務必墊原廠蒸盤防蛋殼貼底過熟、水要淹過蛋頂 1–2 公分，起鍋馬上泡冷水降溫並冷藏當日吃完。',
    youtubeQuery: '特福鮮呼吸萬用鍋 低溫調理 溫泉蛋 68度',
    sourceUrl: 'https://www.youtube.com/watch?v=YLou72RGSBI',
    sourceTag: '日本實測 低温調理 温泉卵 舒肥溫泉蛋',
    ingredients: [
      { name: '冷藏帶殼生雞蛋（免回溫、洗淨蛋殼）', amount: 3, unit: '顆', note: '偏小顆蛋改設 65°C', group: 'main' },
      { name: '清水（完全淹過蛋頂 1–2cm）', amount: 1100, unit: 'ml', note: '5L 鍋約 1000–1200ml', group: 'main' },
      { name: '和風柴魚醬油（或麵味露）', amount: null, unit: '適量', note: '淋醬享用用', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '墊蒸盤放入冷藏雞蛋與清水',
        instruction:
          '內鍋底部墊上原廠蒸盤防蛋殼貼底過熱，輕放 3 顆剛從冰箱取出、洗淨外殼的生雞蛋（不需退冰回溫），倒入清水約 1000–1200ml 至剛好完全淹過蛋頂 1–2 公分。',
        tip: '想省去約 20 分鐘冷水預熱，可改用約 60–65°C 溫熱水注入，切不可用滾沸熱水以免蛋殼裂開。',
      },
      {
        stepNumber: 2,
        title: '蓋蓋免鎖定、設定舒肥 68°C／30 分鐘',
        instruction:
          '蓋上鍋蓋但「不鎖定」，按左側「舒肥料理」設定溫度 68°C、時間 30 分鐘後啟動（若為偏小顆的中小型雞蛋，改設 65°C / 30 分鐘避免過熟）。',
        potAction: {
          side: 'left',
          modeName: '舒肥料理',
          lid: 'closed_unlocked',
          durationText: '30 分鐘',
          temperature: '68°C',
          shortAction: '恆溫水浴定型蛋心',
        },
      },
      {
        stepNumber: 3,
        title: '等待自動預熱與 30 分鐘低溫熟成',
        instruction:
          '啟動後面板先進入自動升溫預熱（冷水起鍋約需 20 分鐘），抵達設定溫度後才會開始倒數 30 分鐘，全程合計約 50 分鐘。',
      },
      {
        stepNumber: 4,
        title: '立刻撈出泡冷水降溫並冷藏保存',
        instruction:
          '行程結束立刻掀蓋，以濾網漏勺把蛋撈入備妥的冷水或冰水盆中徹底降溫，阻止餘溫把蛋黃悶硬。未馬上吃的蛋冷卻後請立即冷藏，並於當日內食用完畢。',
      },
      {
        stepNumber: 5,
        title: '敲開淋醬或搭配主食享用',
        instruction:
          '降溫後敲殼倒入小碗，蛋白呈完整滑嫩布丁狀、蛋黃呈濃郁金橘膏狀；淋上和風柴魚醬油單吃，或擺在奶油義大利麵、沙拉與丼飯上拌開即可享用。',
      },
    ],
  },
  {
    id: 'spec-japan-02-sous-vide-chicken-ham',
    title: '低溫調理香草雞胸火腿',
    subtitle: '展平捲成糖果筒冷藏醃漬，65°C 慢熟 100 分切開水嫩螺旋零柴感',
    category: 'sousvide',
    cuisine: '日式',
    settingMinutes: 100,
    realTotalMinutes: 120,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（起鍋立刻泡冷水急速降溫）',
    stoveDifference:
      '雞胸肉厚處橫劃展平抹香草鹽與糖、捲成圓筒冷藏醃一晚，再以 65°C 恆溫舒肥 100 分鐘，切開呈現全熟純白緊實火腿紋理且汁水飽滿不乾柴。',
    avoidPitfall:
      '保鮮膜捲外務必再套耐溫 100°C 以上食品級密封袋並墊蒸盤，起鍋馬上投入冷水盆急冷才符合食安。',
    youtubeQuery: '特福鮮呼吸萬用鍋 舒肥雞胸 雞火腿 65度',
    sourceUrl: 'https://www.youtube.com/watch?v=-4256Jb2Edg',
    sourceTag: '日本實測 低温調理 鶏ハム サラダチキン 舒肥沙拉雞',
    ingredients: [
      { name: '雞胸肉（約 310–320 克厚片）', amount: 310, unit: '克', note: '1 片，厚處橫劃展平', group: 'main' },
      { name: '清水（完全淹過肉捲）', amount: 1500, unit: 'ml', note: '改 55–60°C 溫水省預熱', group: 'main' },
      { name: '香草鹽（或鹽胡椒）', amount: 1, unit: '小匙', note: '底面與頂面各撒 1/2 小匙', group: 'seasoning' },
      { name: '砂糖', amount: 1, unit: '小匙', note: '雙面各 1/2 小匙助保水', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '展平雞胸抹料捲成糖果筒並冷藏醃漬',
        instruction:
          '保鮮盒內鋪開大片保鮮膜，先均勻撒上 1/2 小匙香草鹽與 1/2 小匙砂糖；單手戴手套將雞胸肉放上，把較厚處橫向劃開展平（勿切斷背面），表面補撒剩餘各 1/2 小匙香草鹽與砂糖。脫掉手套隔保鮮膜將雞胸緊密捲成糖果圓筒狀，蓋盒冷藏醃一晚（約 8 小時，急用至少 4 小時）。',
        tip: '下鍋前務必在保鮮膜捲外再套一層耐溫 ≥100°C 的食品級密封袋排氣封口，防止進水稀釋鹹味。',
      },
      {
        stepNumber: 2,
        title: '墊蒸盤入鍋並加水完全淹沒',
        instruction:
          '內鍋底墊上原廠蒸盤防局部過熱，平放入密封好的單條雞胸捲，倒入清水至完全蓋過肉身（若密封袋微浮可壓一只耐熱瓷盤；用 55–60°C 溫水起鍋可省 20 分預熱）。',
      },
      {
        stepNumber: 3,
        title: '設定舒肥 65°C／1 小時 40 分鐘',
        instruction:
          '蓋上鍋蓋「不鎖定」，按左側「舒肥料理」將溫度調升至 65°C、時間設 1 小時 40 分鐘後啟動（300 克以內可設 1 小時 30 分；若同時放 2 條請留水流間隙並延長 15–20 分鐘）。',
        potAction: {
          side: 'left',
          modeName: '舒肥料理',
          lid: 'closed_unlocked',
          durationText: '1 小時 40 分鐘',
          temperature: '65°C',
          shortAction: '低溫慢熟鎖住雞汁',
        },
      },
      {
        stepNumber: 4,
        title: '等待自動預熱與靜音熟成',
        instruction:
          '啟動後先自動升溫預熱（冷水起鍋約 20 分鐘），抵達 65°C 後開始倒數 1 小時 40 分鐘，全程合計約 2 小時。',
      },
      {
        stepNumber: 5,
        title: '起鍋立刻投入冷水盆急速降溫',
        instruction:
          '行程結束掀蓋後，立即用長夾夾起雞肉捲投入備妥的大型冷水或冰水盆中快速降溫，縮短肉品停留在 40°C 左右危險溫區的時間以確保食安。',
      },
      {
        stepNumber: 6,
        title: '徹底冷卻拆膜切片擺盤',
        instruction:
          '徹底冷卻定型後移至砧板拆開包膜，切成 1–1.5cm 厚片；切面應呈全熟純白、無生粉紅點且帶水嫩肉汁光澤，單吃、搭沙拉或鋪在涼麵與黃瓜絲上都極清爽。',
      },
    ],
  },
  {
    id: 'spec-japan-03-sous-vide-roast-beef',
    title: '低溫嫩烤牛肉佐奶油紅酒醬',
    subtitle: '免煎直入袋 65°C 舒肥 90 分，切面均勻玫瑰粉紅、淋紅酒奶油醬即上桌',
    category: 'sousvide',
    cuisine: '日式',
    settingMinutes: 90,
    realTotalMinutes: 110,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（起鍋稍靜置冷卻再薄切）',
    stoveDifference:
      '免盯烤箱就能做出餐廳級烤牛肉！牛腿塊提前室溫回溫、抹蒜泥鹽胡椒排氣密封，65°C 泡 90 分鐘從邊緣到中心皆呈均勻玫瑰粉紅且不滲生血水。',
    avoidPitfall:
      '牛肉務必先放室溫回溫 30–60 分鐘且鍋底墊蒸盤防貼底過熟，密封袋開口端朝上收於水面以上防進水。',
    youtubeQuery: '特福鮮呼吸萬用鍋 舒肥烤牛肉 紅酒醬 65度',
    sourceUrl: 'https://www.youtube.com/watch?v=A21EqCb1qPY',
    sourceTag: '日本實測 低温調理 ローストビーフ 舒肥烤牛肉 奶油紅酒醬',
    ingredients: [
      { name: '牛腿厚塊肉（厚約 5cm、室溫回溫）', amount: 400, unit: '克', note: '提前 30–60 分退冰回溫', group: 'main' },
      { name: '舒肥用清水（淹沒牛肉本體）', amount: 1500, unit: 'ml', note: '改 60°C 溫水省 20 分預熱', group: 'main' },
      { name: '新鮮迷迭香（選配裝飾）', amount: 1, unit: '小枝', group: 'main' },
      { name: '鹽（抹牛肉用）', amount: 1, unit: '小匙', group: 'seasoning' },
      { name: '黑胡椒（抹牛肉用）', amount: 5, unit: '克', group: 'seasoning' },
      { name: '蒜泥（抹牛肉用）', amount: 1, unit: '小匙', note: '蒜泥比蒜末更易附著', group: 'seasoning' },
      { name: '奶油（紅酒醬用）', amount: 20, unit: '克', group: 'seasoning' },
      { name: '紅酒（紅酒醬用）', amount: 50, unit: 'ml', group: 'seasoning' },
      { name: '醬油（紅酒醬用）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '砂糖（或羅漢果代糖）', amount: 1, unit: '大匙', note: '紅酒醬用', group: 'seasoning' },
      { name: '鹽與黑胡椒（醬汁微調）', amount: null, unit: '少許', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '塗抹醃料並排氣密封靜置 10 分鐘',
        instruction:
          '提前 30–60 分鐘取出牛腿塊回溫至室溫；戴手套把鹽 1 小匙、黑胡椒 5 克與蒜泥 1 小匙均勻搓抹每一面。放入耐溫 ≥100°C 夾鏈密封袋平置桌面，由下往上仔細擠出空氣後壓緊封口，室溫靜置入味 10 分鐘。',
      },
      {
        stepNumber: 2,
        title: '墊蒸盤下鍋啟動舒肥 65°C／1 小時 30 分',
        instruction:
          '內鍋墊上原廠蒸盤，放入牛肉密封袋並倒入清水確實淹沒肉塊本身（夾鏈封口朝上收於水面以上防滲水）。蓋上鍋蓋「不鎖定」，按左側「舒肥料理」設 65°C、1 小時 30 分鐘啟動。',
        potAction: {
          side: 'left',
          modeName: '舒肥料理',
          lid: 'closed_unlocked',
          durationText: '1 小時 30 分鐘',
          temperature: '65°C',
          shortAction: '低溫熟成玫瑰粉肉心',
        },
      },
      {
        stepNumber: 3,
        title: '趁等待熬煮奶油紅酒醬',
        instruction:
          '冷水起鍋含 20 分鐘預熱全程約需 110 分鐘；趁等待時以小湯鍋放入奶油 20 克、紅酒 50ml、醬油 1 大匙、砂糖 1 大匙與少許鹽胡椒，邊攪拌邊煮滾揮發酒氣，收至亮澤透亮紅褐色微稠醬汁即可關火備用。',
        tip: '想加碼表皮梅納焦香且少洗一鍋：舒肥完擦乾牛肉、洗淨內鍋開「爆炒煎烤」融化 20 克奶油將各面快煎 20–30 秒取出，原鍋連袋底肉汁直接倒入紅酒醬料煮滾！',
      },
      {
        stepNumber: 4,
        title: '墊烘焙紙切片擺盤淋醬上桌',
        instruction:
          '行程結束垂直提起密封袋（袋底精華肉汁可兌入紅酒醬）。牛肉取出稍放涼定型（或冷藏略冰切面更工整），在墊上烘焙紙的砧板上切成 0.5–0.8cm 薄片防肉汁染色，疊排木盤綴迷迭香並淋奶油紅酒醬即可享用。',
      },
    ],
  },
  {
    id: 'spec-japan-04-sous-vide-fluffy-oyakodon',
    title: '低溫調理滑嫩親子丼',
    subtitle: '免顧火零洗鍋！70°C 熟化雞腿再升 80°C 凝出雲朵般蓬鬆半熟蛋花',
    category: 'sousvide',
    cuisine: '日式',
    settingMinutes: 40,
    realTotalMinutes: 60,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（兩段變溫沿用原鍋熱水）',
    stoveDifference:
      '不用在瓦斯爐前緊張算秒數怕蛋變老！全料裝在耐熱夾鏈袋內，先 70°C 熟成雞腿、保留鍋內熱水拌入蛋液再升 80°C 凝出雲朵滑蛋，煮完幾乎免洗內鍋。',
    avoidPitfall:
      '第二段高達 80°C，務必選耐溫 100°C 雙層夾鏈袋並於鍋底墊蒸盤，防袋口爆開進水或貼底蛋液變硬結塊。',
    youtubeQuery: '特福鮮呼吸萬用鍋 低溫調理 親子丼 舒肥',
    sourceUrl: 'https://www.youtube.com/watch?v=rz3KOAs_CGI',
    sourceTag: '日本實測 低温調理 ふわふわ親子丼 舒肥親子丼',
    ingredients: [
      { name: '帶皮去骨雞腿排（切 2–3cm 塊）', amount: 1, unit: '片', note: '留皮更油潤香濃', group: 'main' },
      { name: '雞蛋（打散成蛋液）', amount: 3, unit: '顆', note: '第二段才倒入', group: 'main' },
      { name: '熱白飯', amount: 2, unit: '碗', group: 'main' },
      { name: '清水（蓋過袋內食材）', amount: 1500, unit: 'ml', note: '約內鍋 2/3 水位', group: 'main' },
      { name: '醬油', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '味醂', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '日式白高湯', amount: 2, unit: '大匙', note: '淡色昆布柴魚高湯露', group: 'seasoning' },
      { name: '清酒（或米酒）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '砂糖', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '七味唐辛子（或蔥花）', amount: null, unit: '少許', note: '起鍋點綴提香', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '雞腿與丼汁入袋揉拌入味',
        instruction:
          '將切好 2–3cm 一口大小的帶皮雞腿塊放入底部可站立的耐溫 100°C 雙層夾鏈袋，依序倒入砂糖 1 大匙、醬油 2 大匙、味醂 2 大匙、清酒 1 大匙與白高湯 2 大匙，隔袋輕輕揉拌讓雞肉均勻裹滿丼汁。',
        tip: '喜愛傳統甜軟洋蔥者，可切極薄洋蔥絲先微波 1–2 分鐘軟化後於此步一併入袋。',
      },
      {
        stepNumber: 2,
        title: '墊蒸盤以水壓排氣封口',
        instruction:
          '內鍋先墊原廠蒸盤防局部過熱並注入約 2/3 鍋清水；保持袋口敞開將裝料夾鏈袋垂直緩緩浸入水中，利用水壓把袋內空氣向上擠出，待水面接近夾鏈條下方時立刻沿水面壓緊封口。',
      },
      {
        stepNumber: 3,
        title: '第一段舒肥：70°C／30 分鐘熟成雞肉',
        instruction:
          '蓋上鍋蓋「不鎖定」，按左側「舒肥料理」將溫度調升至 70°C、設定 30 分鐘啟動，讓帶皮雞腿低溫熟成入味。',
        potAction: {
          side: 'left',
          modeName: '舒肥料理',
          lid: 'closed_unlocked',
          durationText: '30 分鐘',
          temperature: '70°C',
          shortAction: '低溫熟化多汁雞腿',
        },
      },
      {
        stepNumber: 4,
        title: '保留熱水、開袋撥肉並揉入蛋液',
        instruction:
          '第一段完成後戴隔熱手套取出熱袋（鍋內 70°C 熱水保留不倒掉！）；先隔袋輕輕撥散結團的熟雞塊，打開袋口倒入預先打散的 3 顆蛋液，再橫拿袋子輕柔搖揉讓金黃蛋液與溫熱丼汁、雞塊充分融合。',
      },
      {
        stepNumber: 5,
        title: '再次水壓排氣並第二段舒肥：80°C／10 分鐘',
        instruction:
          '把混好蛋液的夾鏈袋再次浸入原本的 70°C 熱水中，以水壓排淨空氣並確封袋口；蓋上鍋蓋「不鎖定」，將左側「舒肥料理」調整為 80°C、10 分鐘啟動。',
        potAction: {
          side: 'left',
          modeName: '舒肥料理',
          lid: 'closed_unlocked',
          durationText: '10 分鐘',
          temperature: '80°C',
          shortAction: '凝結雲朵蓬鬆滑蛋',
        },
      },
      {
        stepNumber: 6,
        title: '淋蓋熱白飯撒七味粉上桌',
        instruction:
          '時間到防燙取出熱袋，將袋中蓬鬆柔軟的金黃厚蛋花與多汁雞腿塊直接滑蓋在熱白飯上，中央撒上一小撮七味唐辛子點綴即可享用，內鍋倒水擦乾免刷洗。',
      },
    ],
  },
  {
    id: 'spec-japan-06-hokkaido-spice-soup-curry',
    title: '札幌風香料雞腿湯咖哩',
    subtitle: '零麵粉零咖哩塊！壓 12 分煮出番茄雞湯底，開蓋拌五味香料搭酥煎烤蔬',
    category: 'soup',
    cuisine: '日式',
    settingMinutes: 14,
    realTotalMinutes: 38,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（開蓋再拌五味香料粉）',
    stoveDifference:
      '不用含麵粉與油脂的市售咖哩塊，純靠番茄罐頭、洋蔥與雞翅腿壓 12 分鐘就能煮出橘紅透亮湯底，開蓋才下五味原香料香氣最奔放；趁壓鍋空檔另鍋半煎炸南瓜蓮藕剛好開飯。',
    avoidPitfall:
      '香料粉（或若改用市售咖哩塊）務必洩壓開蓋後再放，切勿連同加壓以防沉底焦化與香氣散失；煮完記得幫膠條除薑黃味。',
    youtubeQuery: '特福鮮呼吸萬用鍋 北海道 湯咖哩 香料雞腿',
    sourceUrl: 'https://www.youtube.com/watch?v=LRiZLQTfbpY',
    sourceTag: '日本實測 札幌風 スープカレー 北海道香料湯咖哩',
    ingredients: [
      { name: '雞翅腿／棒棒腿（鹽胡椒略抓醃）', amount: 4, unit: '支', note: '可另加去骨雞腿肉 1 片', group: 'main' },
      { name: '洋蔥（切 0.5–1cm 粗條）', amount: 1, unit: '顆', group: 'main' },
      { name: '番茄罐頭（切丁或整粒）', amount: 400, unit: '克', note: '約 1 罐', group: 'main' },
      { name: '清水', amount: 300, unit: 'ml', group: 'main' },
      { name: '帶皮栗子南瓜（切 0.5–0.8cm 薄片）', amount: 0.25, unit: '顆', note: '先微波軟化再煎', group: 'main' },
      { name: '帶皮蓮藕（切 1–1.2cm 厚圓片）', amount: 4, unit: '片', group: 'main' },
      { name: '茄子（斜切 0.5–0.8cm 薄片）', amount: 1, unit: '根', group: 'main' },
      { name: '秋葵（鹽搓去毛、環削硬萼）', amount: 5, unit: '根', note: '切忌直切穿防進水', group: 'main' },
      { name: '鹽', amount: 1, unit: '小匙', note: '另備少許醃雞用', group: 'seasoning' },
      { name: '黑胡椒', amount: null, unit: '適量', group: 'seasoning' },
      { name: '蒜泥', amount: 1, unit: '小匙', note: '約軟管 4cm', group: 'seasoning' },
      { name: '薑泥', amount: 1, unit: '小匙', note: '約軟管 4cm', group: 'seasoning' },
      { name: '孜然粉', amount: 1, unit: '小匙', note: '開蓋後放', group: 'seasoning' },
      { name: '芫荽籽粉', amount: 1, unit: '小匙', note: '開蓋後放', group: 'seasoning' },
      { name: '薑黃粉', amount: 1, unit: '小匙', note: '開蓋後放', group: 'seasoning' },
      { name: '葛拉姆馬薩拉（綜合香料）', amount: 0.5, unit: '小匙', note: '開蓋後放', group: 'seasoning' },
      { name: '辣椒粉', amount: 0.5, unit: '小匙', note: '開蓋後放依辣度增減', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '洋蔥鋪底與雞腿番茄湯底入鍋',
        instruction:
          '粗切洋蔥條鋪入內鍋底部，把鹽與黑胡椒抓醃好的雞翅腿疊放其上，接著倒入整罐番茄罐頭、清水 300ml、鹽 1 小匙、蒜泥與薑泥各 1 小匙輕拌均勻；五味香料粉此時先不放。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋加壓 12 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘鎖緊，按右側「雞／鴨／豬」調整時間為 12 分鐘啟動，靜待行程完成與自動洩壓。',
        potAction: {
          side: 'right',
          modeName: '雞／鴨／豬',
          lid: 'locked',
          durationText: '12 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '壓出清爽番茄雞湯底',
        },
      },
      {
        stepNumber: 3,
        title: '開蓋拌入五味香料粉並微滾喚香',
        instruction:
          '洩壓開蓋後，依序加入孜然粉、芫荽籽粉、薑黃粉（各 1 小匙）以及葛拉姆馬薩拉、辣椒粉（各 1/2 小匙）攪拌均勻，開蓋切左側「收汁／醬燒」小滾 1–2 分鐘喚醒香料鮮香並試味微調鹹辣。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '1–2 分鐘',
          shortAction: '喚醒五味香料香氣',
        },
      },
      {
        stepNumber: 4,
        title: '趁空檔另鍋半煎炸酥香配菜',
        instruction:
          '趁壓力鍋燉煮期間備菜：去籽帶皮南瓜薄片先微波加熱軟化、秋葵表面抹鹽搓毛並僅環削深色硬萼不切穿果室。平底鍋倒略多一層油，將茄子片、南瓜片、厚蓮藕片與秋葵半煎炸至表面金黃微焦起鍋。',
      },
      {
        stepNumber: 5,
        title: '深缽盛湯鋪菜、以飯沾湯享用',
        instruction:
          '將橘紅透亮清爽的香料湯咖哩與染上金黃薑黃色的軟嫩雞腿盛入寬口深缽，整齊鋪上香煎厚蓮藕、南瓜、茄子與翠綠秋葵（亦可加一匙拌勻納豆），旁配熱米飯用湯匙舀一口飯浸入湯中沾食最道地。',
        tip: '薑黃與孜然香氣色素較強，煮完請儘早清洗內鍋，必要時以 2 杯水加檸檬片蒸 5 分鐘幫矽膠圈去味。',
      },
    ],
  },
  {
    id: 'spec-japan-07-tomato-stewed-hamburg',
    title: '鮮菇番茄燉漢堡排',
    subtitle: '免起油鍋先煎排！洋蔥微波免炒、生肉夾菇分層入鍋，12 分燉出多汁厚排',
    category: 'braise',
    cuisine: '日式',
    settingMinutes: 12,
    realTotalMinutes: 37,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（免開蓋翻動防肉排破散）',
    stoveDifference:
      '零油煙快手神招：洋蔥末加油微波 3 分鐘免炒、絞肉先加鹽揉出黏性再混蛋奶麵包粉，直接生肉捏圓排進萬用鍋壓 12 分鐘完全不散，肉汁牢牢鎖在濃厚番茄醬裡。',
    avoidPitfall:
      '番茄罐頭、高湯粉與糖只淋鋪最上層絕不可攪到底，5L 寬底內鍋務必沿鍋邊補 50–100ml 水防焦底報錯。',
    youtubeQuery: '特福鮮呼吸萬用鍋 番茄燉漢堡排 免煎',
    sourceUrl: 'https://www.youtube.com/watch?v=LRiZLQTfbpY',
    sourceTag: '日本實測 煮込みハンバーグ 免煎番茄燉漢堡排 鴻喜菇',
    ingredients: [
      { name: '牛豬混合絞肉', amount: 250, unit: '克', group: 'main' },
      { name: '洋蔥（打成極細末）', amount: 0.5, unit: '顆', group: 'main' },
      { name: '鴻喜菇（切蒂撥散）', amount: 1, unit: '袋', group: 'main' },
      { name: '番茄罐頭（切丁或碎番茄）', amount: 400, unit: '克', note: '約 1 罐，淋頂層勿攪底', group: 'main' },
      { name: '雞蛋', amount: 1, unit: '顆', group: 'main' },
      { name: '麵包粉', amount: 6, unit: '大匙', group: 'main' },
      { name: '牛奶', amount: 2, unit: '大匙', group: 'main' },
      { name: '清水（或紅酒）', amount: 80, unit: 'ml', note: '50–100ml 沿鍋邊補防焦', group: 'main' },
      { name: '橄欖油', amount: 2, unit: '小匙', note: '微波軟化洋蔥用', group: 'seasoning' },
      { name: '西式高湯粉', amount: 2, unit: '小匙', group: 'seasoning' },
      { name: '三溫糖（或細砂糖）', amount: 2, unit: '小匙', note: '中和番茄酸度', group: 'seasoning' },
      { name: '鹽與黑胡椒', amount: null, unit: '適量', note: '揉肉餡用', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '微波免炒洋蔥並於原盒調勻黏合糊',
        instruction:
          '將極細洋蔥末放入微波耐熱保鮮盒，淋 2 小匙橄欖油拌勻微波加熱 3 分鐘至軟透冒熱氣；直接於同盒打入 1 顆雞蛋、倒入牛奶 2 大匙與麵包粉 6 大匙拌成金黃糊狀，靜置片刻讓麵包粉吸飽蛋奶液。',
      },
      {
        stepNumber: 2,
        title: '手揉肉餡成形並分層夾菇擺入內鍋',
        instruction:
          '調理盆內放牛豬混合絞肉 250 克與適量鹽、黑胡椒，先用手單獨揉出黏性，再倒入洋蔥麵包粉糊充分揉勻抱團。分成數份拍出空氣捏成飽滿圓餅（完全不需先煎），先鋪內鍋底作第一層，撒入鴻喜菇填補夾層，再把剩餘漢堡排疊放為第二層。',
      },
      {
        stepNumber: 3,
        title: '番茄與調味粉只淋頂層、沿鍋邊補水',
        instruction:
          '整罐番茄罐頭直接淋在最上層，再將西式高湯粉 2 小匙與三溫糖 2 小匙均勻撒在番茄表層（切記絕不要攪拌到底部！），最後沿內鍋邊緣補倒 50–100ml 清水或紅酒幫助快速升壓防焦底。',
      },
      {
        stepNumber: 4,
        title: '鎖蓋加壓 12 分鐘免煎燉透',
        instruction:
          '蓋上鍋蓋並順時鐘鎖緊，按右側「雞／鴨／豬」調整時間為 12 分鐘啟動，靜待自動洩壓；趁這段免顧火空檔可同步準備副菜或湯品。',
        potAction: {
          side: 'right',
          modeName: '雞／鴨／豬',
          lid: 'locked',
          durationText: '12 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '免煎鎖汁燉透漢堡排',
        },
        tip: '偏好焦香外皮者，亦可先開蓋按「爆炒煎烤」（150°C）加少許油將漢堡排兩面各煎 1–2 分鐘上色後再疊菇淋醬加壓。',
      },
      {
        stepNumber: 5,
        title: '開蓋溫柔舀起盛碗享用',
        instruction:
          '洩壓開蓋後漢堡排飽滿完整不碎散、與濃郁深紅番茄肉汁緊密融合，用寬口不沾湯勺溫柔從底部連同醬汁盛入深碗配熱白飯享用。',
        tip: '若因補水覺醬汁略稀，可先輕輕夾出漢堡排擺盤，留原鍋醬汁開蓋按「收汁／醬燒」滾 3–5 分鐘濃縮再淋回肉排上。',
      },
    ],
  },
];
