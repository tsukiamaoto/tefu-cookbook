import type { Recipe } from '../../types/recipe';

export const SPEC_KOREA_SEA_RECIPES: Recipe[] = [
  {
    id: 'spec-korea-01-so-galbijjim',
    title: '韓式燉牛小排',
    subtitle: '先泡冷水再原鍋汆燙去血水，高壓 25–30 分燉出琥珀焦香軟嫩排骨',
    category: 'braise',
    cuisine: '韓式',
    settingMinutes: 35,
    realTotalMinutes: 65,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（鎖住牛排肉汁不柴口）',
    stoveDifference:
      '先冷水泡 2 小時再原鍋汆燙倒除濁水，高壓 25–30 分鐘就能取代傳統顧火慢燉，省時又能趁空檔拌小菜。',
    avoidPitfall:
      '韓式燉醬含糖易焦，加壓前務必確認稀液體達 250–300ml，且總量勿超最高水位線。',
    youtubeQuery: '特福鮮呼吸萬用鍋 韓式燉牛小排 소갈비찜',
    sourceUrl: 'https://www.youtube.com/watch?v=Ueoqntub5Kw',
    sourceTag: '韓國特福萬用鍋實作 韓式燉牛小排 Honeyjubu',
    ingredients: [
      {
        name: '帶骨牛小排（切 4–5 公分厚塊，冷水泡 2 小時）',
        amount: 4,
        unit: '人份',
        note: '厚切方塊去血水',
        group: 'main',
      },
      { name: '洋蔥（切塊）', amount: 1, unit: '顆', group: 'main' },
      { name: '紅蘿蔔與韓國大蔥（切塊）', amount: null, unit: '適量', group: 'main' },
      {
        name: '汆燙用冷水',
        amount: null,
        unit: '適量',
        note: '淹過全部牛小排',
        group: 'main',
      },
      {
        name: '韓式燉肉醬汁（醬油、蒜泥、果泥、糖調勻）',
        amount: 280,
        unit: 'ml',
        note: '約250–300ml稀液',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '浸泡冷水去血水',
        instruction:
          '提前 2 小時將帶骨牛小排塊浸入冷水中去除血水，大幅降低肉腥味並讓湯色更清澈，撈出瀝乾備用；同時洗切好洋蔥、紅蘿蔔與大蔥，並在量杯中調勻韓式燉肉醬汁。',
      },
      {
        stepNumber: 2,
        title: '鍋內汆燙去雜質',
        instruction:
          '將牛小排塊放入內鍋，注入清水至完全淹過肉面；開蓋按左側「爆炒煎烤」將水煮滾汆燙，逼出表面殘餘血水與雜質。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '150°C',
          shortAction: '煮滾汆燙去血水',
        },
      },
      {
        stepNumber: 3,
        title: '濾除汆燙水並沖淨',
        instruction:
          '按取消鍵停止加熱，透過濾籃把混濁灰褐色的第一鍋汆燙血水徹底倒掉，略沖去牛小排表面浮沫雜質並將內鍋洗淨。',
      },
      {
        stepNumber: 4,
        title: '放入醬汁與切塊蔬菜',
        instruction:
          '將洗淨的牛小排重新放回內鍋，倒入量杯中調好的 250–300ml 韓式燉肉醬汁（確保有足量稀液體避免甜醬沉底燒焦），並投入紅蘿蔔、洋蔥與大蔥塊。',
      },
      {
        stepNumber: 5,
        title: '鎖蓋高壓燉煮至軟嫩',
        instruction:
          '將上蓋手把順時鐘轉到底鎖定，按右側「牛 / 羊肉」設 25–30 分鐘啟動烹調，期間免看火可安心同步拌製其他配菜。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '25–30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸燉透入味',
        },
        tip: '帶骨紅肉務必自然洩壓，肉纖維慢慢放鬆才能鎖汁不柴口。',
      },
      {
        stepNumber: 6,
        title: '自動洩壓開蓋與選配收汁',
        instruction:
          '等待自動安全洩壓完成、浮閥下降後再朝遠離身體方向傾斜開蓋；此時牛小排呈深琥珀焦糖亮色、紅蘿蔔軟透完整。若希望醬汁更濃稠裹肉，可開蓋按左側「收汁 / 醬燒」續滾 5–8 分鐘後盛入深砂鍋上桌。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '5–8 分鐘',
          shortAction: '收濃焦糖醬汁',
        },
      },
    ],
  },
  {
    id: 'spec-korea-02-japchae',
    title: '韓式雜菜冬粉',
    subtitle: '免分鍋逐樣炒菜！開蓋炒香牛肉絲，下泡軟冬粉快壓 3–5 分即根根分明',
    category: 'rice',
    cuisine: '韓式',
    settingMinutes: 8,
    realTotalMinutes: 22,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '行程完盡快安全排氣開蓋（防冬粉悶坨）',
    stoveDifference:
      '傳統韓式雜菜要分鍋炒完每樣配菜再煮冬粉；改用萬用鍋先炒肉絲再一鍋短壓，開蓋立刻用矽膠勺拌鬆就油亮不結團。',
    avoidPitfall:
      '地瓜冬粉務必提前泡軟，加壓水量勿超內鍋一半，完成盡快排氣拌開防過爛。',
    youtubeQuery: '特福鮮呼吸萬用鍋 韓式雜菜冬粉 잡채',
    sourceUrl: 'https://www.youtube.com/watch?v=Ueoqntub5Kw',
    sourceTag: '韓國特福萬用鍋實作 韓式雜菜冬粉 Honeyjubu',
    ingredients: [
      {
        name: '韓式地瓜冬粉（提前泡水軟化瀝乾）',
        amount: null,
        unit: '適量',
        note: '2–4人份好翻拌',
        group: 'main',
      },
      { name: '牛肉絲', amount: null, unit: '適量', group: 'main' },
      {
        name: '五色配菜絲（紅蘿蔔、洋蔥、木耳菇類、深綠葉菜）',
        amount: null,
        unit: '適量',
        note: '粗細切與冬粉齊',
        group: 'main',
      },
      { name: '白芝麻（起鍋撒飾）', amount: null, unit: '適量', group: 'main' },
      {
        name: '韓式雜菜醬汁（醬油、糖、蒜末、麻油、黑胡椒）',
        amount: null,
        unit: '適量',
        group: 'seasoning',
      },
      {
        name: '溫熱水（助起壓與冬粉吸收）',
        amount: null,
        unit: '適量',
        note: '勿超過內鍋一半',
        group: 'seasoning',
      },
      { name: '食用油', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '提前泡軟冬粉並切勻配菜絲',
        instruction:
          '事前將韓式地瓜冬粉泡水至軟化，下鍋前徹底瀝乾水分；牛肉、紅蘿蔔、洋蔥與木耳菇類均切成長度與粗細相近的細絲。',
      },
      {
        stepNumber: 2,
        title: '開蓋爆炒牛肉絲',
        instruction:
          '保持解鎖開蓋，按左側「爆炒煎烤」待鍋熱後倒入食用油，放入牛肉絲翻炒至變色出香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 3 分鐘',
          temperature: '150°C',
          shortAction: '爆香快炒牛肉絲',
        },
      },
      {
        stepNumber: 3,
        title: '放入蔬菜、泡軟冬粉、醬料與水',
        instruction:
          '先按取消結束爆炒模式，將切絲蔬菜、泡軟冬粉、雜菜醬汁與適量溫熱水一併放入鍋中（建議冬粉鋪在液體與蔬菜間，避免乾貼鍋底）。',
      },
      {
        stepNumber: 4,
        title: '鎖蓋高壓快煮 3–5 分鐘',
        instruction:
          '將上蓋手把順時鐘轉到底鎖定，按右側「雞 / 鴨 / 豬」調至最短可設時間（約 3–5 分鐘）啟動壓力快煮。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '3–5 分鐘',
          releaseMode: 'quick_manual',
          shortAction: '短時快壓免坨爛',
        },
        tip: '改用溫熱水可加快升壓，避免久悶造成冬粉過爛。',
      },
      {
        stepNumber: 5,
        title: '盡快洩壓開蓋拌鬆並撒白芝麻',
        instruction:
          '壓力行程結束後盡快安全排氣、浮閥落下後朝外傾斜開蓋；趁湯汁已近乎被冬粉吸乾無多餘積水時，立刻用矽膠勺從鍋底將冬粉、牛肉絲與五色蔬菜充分拌勻，盛盤撒滿白芝麻即可上桌。',
      },
    ],
  },
  {
    id: 'spec-korea-03-cheese-dakgalbi',
    title: '韓式起司辣炒雞',
    subtitle: '三段下菜高壓 10 分出濃郁紅醬，蓋蓋餘溫燜融牽絲起司還能原鍋炒飯',
    category: 'braise',
    cuisine: '韓式',
    settingMinutes: 20,
    realTotalMinutes: 45,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓後開蓋拌蔥葉並餘溫燜起司',
    stoveDifference:
      '蔬菜分三段下鍋最關鍵：南瓜洋蔥先炒、高麗菜壓前放、青蔥芝麻葉開蓋再拌；起司靠合蓋不鎖定的餘溫就能拉絲，免進烤箱。',
    avoidPitfall:
      '3 大匙辣醬加寡糖非常濃稠，鎖蓋前若鍋底偏乾務必補 50–80ml 清水防焦底。',
    youtubeQuery: '特福鮮呼吸萬用鍋 韓式起司辣炒雞 치즈닭갈비',
    sourceUrl: 'https://www.youtube.com/watch?v=Ueoqntub5Kw',
    sourceTag: '韓國特福萬用鍋實作 春川起司辣炒雞 Honeyjubu',
    ingredients: [
      {
        name: '帶皮去骨雞腿肉（切 3–4 公分塊）',
        amount: 500,
        unit: '克',
        group: 'main',
      },
      {
        name: '栗子南瓜（連皮切 0.5–0.8 公分扇形薄片）',
        amount: 0.25,
        unit: '顆',
        group: 'main',
      },
      { name: '洋蔥（切粗寬條）', amount: 0.5, unit: '顆', group: 'main' },
      {
        name: '高麗菜（手撕或切大片）',
        amount: null,
        unit: '適量',
        note: '加壓前才下鍋',
        group: 'main',
      },
      {
        name: '青蔥段與韓國芝麻葉（切粗條）',
        amount: null,
        unit: '適量',
        note: '開蓋後拌炒增香',
        group: 'main',
      },
      {
        name: '莫札瑞拉起司絲',
        amount: null,
        unit: '適量',
        note: '厚鋪鍋面中央',
        group: 'main',
      },
      {
        name: '冷白飯與海苔酥（收尾炒飯選配）',
        amount: null,
        unit: '適量',
        group: 'main',
      },
      { name: '韓式辣醬', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '韓式辣椒粉', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '味醂或料理酒', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '寡糖或玉米糖漿', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '醬油', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '砂糖', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '蒜末', amount: 1, unit: '大匙', group: 'seasoning' },
      {
        name: '清水（防濃醬焦底）',
        amount: 60,
        unit: 'ml',
        note: '約50–80ml視出水',
        group: 'seasoning',
      },
      { name: '食用油', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '拌醃雞腿肉與栗子南瓜洋蔥',
        instruction:
          '將帶皮去骨雞腿肉切 3–4 公分一口塊，把韓式辣醬、辣椒粉、味醂、砂糖、寡糖、醬油與蒜末調勻成深紅濃稠辣醬，在調理盆中與雞塊、連皮扇形薄切栗子南瓜及寬條洋蔥充分抓勻。',
      },
      {
        stepNumber: 2,
        title: '開蓋高溫爆炒雞肉與南瓜',
        instruction:
          '按左側「爆炒煎烤」預熱後倒入食用油，放入醃好的雞腿肉、栗子南瓜與洋蔥翻炒出香至南瓜略微變軟。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '150°C',
          shortAction: '爆炒醃雞與南瓜',
        },
      },
      {
        stepNumber: 3,
        title: '加入高麗菜並鎖蓋高壓 10 分鐘',
        instruction:
          '按取消停止爆炒，鋪入大片高麗菜，若鍋底偏乾順鍋邊補約 50–80ml 清水拌勻鍋底防濃醬焦底。順時鐘鎖緊上蓋，按右側「雞 / 鴨 / 豬」設 10 分鐘，結束等自然自動洩壓。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '10 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '高壓燉透免焦底',
        },
      },
      {
        stepNumber: 4,
        title: '開蓋下青蔥與芝麻葉略炒',
        instruction:
          '自動洩壓後朝外傾斜開蓋，切換左側「收汁 / 醬燒」（開蓋），放入青蔥段與切粗條的韓國芝麻葉快速拌炒出清香（若醬汁偏稀可順勢略收濃）。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '約 2 分鐘',
          shortAction: '拌炒青蔥芝麻葉',
        },
      },
      {
        stepNumber: 5,
        title: '厚鋪起司絲、合蓋不鎖定餘溫燜融',
        instruction:
          '在紅亮辣炒雞中央厚厚鋪上一大堆白色起司絲，按取消停止加熱，輕輕合上鍋蓋（切勿轉動鎖定）靠球釜餘溫燜數分鐘，待起司完全融化牽絲即可盛盤享用。',
        tip: '靠鍋內餘熱就能拉出滿滿起司絲，完全免動用烤箱。',
      },
      {
        stepNumber: 6,
        title: '加碼收尾原鍋辣炒雞海苔炒飯',
        instruction:
          '吃到最後留下鍋底香辣紅醬汁，開蓋啟動左側「爆炒煎烤」，倒入冷白飯與大量海苔酥用矽膠刮勺翻炒至米飯均勻裹滿橘紅辣醬、粒粒分明微帶鍋氣即成。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 3 分鐘',
          temperature: '150°C',
          shortAction: '原鍋翻炒海苔飯',
        },
      },
    ],
  },
  {
    id: 'spec-korea-04-dakbokkeumtang',
    title: '韓式辣燉雞',
    subtitle: '免爆炒一鍋到底！肉下菜上鎖蓋快壓 5–10 分，馬鈴薯壓碎拌飯超下飯',
    category: 'braise',
    cuisine: '韓式',
    settingMinutes: 8,
    realTotalMinutes: 35,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（餘溫續悶讓馬鈴薯鬆透）',
    stoveDifference:
      '右側壓力模式的 5 分鐘是升壓到位後才倒數，加上自然洩壓就能把肉雞與大塊馬鈴薯燉鬆；若用台灣帶骨土雞建議調至 8–12 分鐘。',
    avoidPitfall:
      '切勿誤用自訂行程短壓（不等升壓就倒數），且辣醬與砂糖須先和水拌散防焦底。',
    youtubeQuery: '特福鮮呼吸萬用鍋 韓式辣燉雞 닭볶음탕',
    sourceUrl: 'https://www.youtube.com/watch?v=AhPXxAzdirc',
    sourceTag: '韓式家庭燉菜 韓式辣燉雞 Karima',
    ingredients: [
      {
        name: '帶骨切塊雞肉',
        amount: 1000,
        unit: '克',
        note: '平鋪內鍋最底層',
        group: 'main',
      },
      {
        name: '馬鈴薯（切 3–3.5 公分大方塊）',
        amount: 1,
        unit: '顆',
        note: '切大塊防高壓散',
        group: 'main',
      },
      {
        name: '紅蘿蔔（切 2.5–3 公分厚塊）',
        amount: 0.5,
        unit: '根',
        group: 'main',
      },
      {
        name: '洋蔥（切 3 公分大片塊）',
        amount: 0.5,
        unit: '顆',
        group: 'main',
      },
      { name: '醬油', amount: 6, unit: '大匙', group: 'seasoning' },
      { name: '韓式辣椒粉', amount: 4, unit: '大匙', group: 'seasoning' },
      { name: '砂糖', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '韓式辣醬', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '料理酒或米酒', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '清水', amount: 500, unit: 'ml', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '食材依序入鍋（肉下菜上）',
        instruction:
          '先將 1 公斤帶骨切塊雞肉平鋪於內鍋底層（若在意浮沫可先以熱水快燙沖淨），再將切 2.5–3.5 公分厚大塊的紅蘿蔔、洋蔥與馬鈴薯鋪放於上層。',
      },
      {
        stepNumber: 2,
        title: '拌散韓式辣醬料並加入 500ml 清水',
        instruction:
          '將韓式辣醬 2 大匙、辣椒粉 4 大匙、醬油 6 大匙、砂糖 3 大匙與料理酒 2 大匙先與部分清水徹底拌散，再連同剩餘清水（共 500ml）倒入鍋中輕勻，確認鍋底無結塊辣醬或砂糖沉積。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋高壓快燉 5–10 分鐘',
        instruction:
          '將上蓋手把順時鐘轉到底鎖定，按右側「雞 / 鴨 / 豬」設定 5 分鐘按下開始（若用帶厚骨放山土雞或大雞腿切塊，可視肉種調長至 8–10 分鐘）。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '5–10 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '免炒一鍋壓透辣雞',
        },
        tip: '務必選右側壓力區而非 自訂行程，升壓到位才倒數才能真正燉透。',
      },
      {
        stepNumber: 4,
        title: '自動洩壓完成，選配收汁並壓碎馬鈴薯拌飯',
        instruction:
          '自動洩壓完畢後朝外傾斜開蓋，此時已呈油亮橘紅微濃辣湯，大塊馬鈴薯與紅蘿蔔完整且鬆綿；若想再濃稠些可開蓋按左側「收汁 / 醬燒」續滾 3–5 分鐘。盛白飯把燉軟的紅蘿蔔與馬鈴薯壓碎拌辣湯享用最道地。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '3–5 分鐘',
          shortAction: '選配收濃拌飯辣湯',
        },
      },
    ],
  },
  {
    id: 'spec-korea-05-sogogi-muguk',
    title: '韓式牛肉白蘿蔔湯',
    subtitle: '香油微爆蒜末大火炒牛肉 2 分，加昆布蘿蔔鎖蓋 15 分熬出清甜鮮湯',
    category: 'soup',
    cuisine: '韓式',
    settingMinutes: 17,
    realTotalMinutes: 45,
    baseServings: 4,
    innerPot: '雙內鍋皆可',
    releaseSummary: '自然自動洩壓（高水位湯品切勿手動快洩）',
    stoveDifference:
      '靈魂在於先用香油微爆蒜末再把牛胸腹薄片大火炒 2 分鐘鎖出油脂肉香，再加水與昆布壓 15 分鐘，湯頭比生肉下水更有深度。',
    avoidPitfall:
      '煮 6 人份（1.8L 水）逼近 5L 鍋高水位，務必低於最高水位線且等自然洩壓防噴湯。',
    youtubeQuery: '特福鮮呼吸萬用鍋 韓式牛肉白蘿蔔湯 소고기무국',
    sourceUrl: 'https://www.youtube.com/watch?v=PlI-iaB9XSo',
    sourceTag: '韓國特福官方配方 韓式牛肉白蘿蔔湯 2人4人6人份',
    ingredients: [
      {
        name: '牛胸腹肉或牛腩薄片',
        amount: 200,
        unit: '克',
        byServings: { 2: '100g', 4: '200g', 6: '300g' },
        note: '切薄片吸乾血水',
        group: 'main',
      },
      {
        name: '白蘿蔔（去皮切 2×2 公分薄方片）',
        amount: 300,
        unit: '克',
        byServings: { 2: '150g', 4: '300g', 6: '400g' },
        note: '厚約0.5公分易透',
        group: 'main',
      },
      {
        name: '青蔥（切 5–6 公分長段）',
        amount: 60,
        unit: '克',
        byServings: { 2: '30g', 4: '60g', 6: '90g' },
        group: 'main',
      },
      {
        name: '昆布（3×3 公分方形小片）',
        amount: 4,
        unit: '片',
        byServings: { 2: '2 片', 4: '4 片', 6: '6 片' },
        note: '微濕紙巾拭塵',
        group: 'main',
      },
      {
        name: '香菇（新鮮切片或乾香菇泡軟）',
        amount: 2,
        unit: '朵',
        byServings: { 2: '1 朵', 4: '2 朵', 6: '3 朵' },
        group: 'main',
      },
      {
        name: '香油（麻油）',
        amount: 1,
        unit: '大匙',
        byServings: { 2: '0.5 大匙', 4: '1 大匙', 6: '2 大匙' },
        group: 'seasoning',
      },
      {
        name: '蒜末',
        amount: 1,
        unit: '大匙',
        byServings: { 2: '0.5 大匙', 4: '1 大匙', 6: '1.5 大匙' },
        group: 'seasoning',
      },
      {
        name: '韓式湯用醬油',
        amount: 2,
        unit: '大匙',
        byServings: { 2: '1 大匙', 4: '2 大匙', 6: '3 大匙' },
        group: 'seasoning',
      },
      {
        name: '鹽',
        amount: 1,
        unit: '大匙',
        byServings: { 2: '0.5 大匙', 4: '1 大匙', 6: '1.5 大匙' },
        note: '清淡口味先放半',
        group: 'seasoning',
      },
      {
        name: '清水或溫熱水',
        amount: 1200,
        unit: 'ml',
        byServings: { 2: '600ml', 4: '1.2L', 6: '1.8L' },
        note: '改溫水可省升壓',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '開蓋預熱、香油依序爆香蒜末與牛肉 2 分鐘',
        instruction:
          '開蓋按左側「爆炒煎烤」預熱完成後先倒入香油，下蒜末以木匙微爆出香；緊接放入牛胸腹薄片大力拌炒約 2 分鐘至牛肉由生紅轉半熟灰褐色、不再有生血水。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 2 分鐘',
          temperature: '150°C',
          shortAction: '香油爆蒜炒牛肉',
        },
      },
      {
        stepNumber: 2,
        title: '依序投入白蘿蔔、青蔥、昆布、醬油、鹽與香菇',
        instruction:
          '按取消結束爆炒模式，依序放入白蘿蔔薄方片、5–6 公分青蔥段、3×3 公分昆布片、韓式湯用醬油、鹽（口味清淡建議先放一半）與切片香菇。',
      },
      {
        stepNumber: 3,
        title: '注入清水或溫熱水略拌均勻',
        instruction:
          '依份量倒入清水（4 人份 1.2L、6 人份 1.8L，務必確認液面低於最高水位線；改用溫熱水可省 10–15 分鐘升壓時間），用耐高溫湯匙快速拌勻一次。',
      },
      {
        stepNumber: 4,
        title: '鎖蓋高壓煲湯 15 分鐘',
        instruction:
          '將上蓋手把順時鐘轉到底鎖定，按右側「煮 / 燉湯品」（或「牛 / 羊肉」）設定 15 分鐘按下開始。',
        potAction: {
          side: 'right',
          modeName: '煮 / 燉湯品',
          lid: 'locked',
          durationText: '15 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '高壓熬出清甜湯',
        },
        tip: '沒乾香菇直接改用新鮮香菇切片同樣清甜，5L 鍋煮 4 人份最從容。',
      },
      {
        stepNumber: 5,
        title: '自動洩壓完成，撈除昆布試鹹享用',
        instruction:
          '壓力行程結束後靜待自動安全洩壓完畢（高水位湯品切勿強行手動快洩以免噴湯），浮閥落下後朝外傾斜開蓋，撈出昆布並試喝微調鹹度即可盛碗。',
      },
    ],
  },
  {
    id: 'spec-korea-09-saba-misoni',
    title: '味噌燉鯖魚',
    subtitle: '鍋底先溶散味噌糖醬再單層平鋪鯖魚，快壓 3–5 分魚皮完整不破超下飯',
    category: 'braise',
    cuisine: '日式',
    settingMinutes: 5,
    realTotalMinutes: 20,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '行程完盡快安全排氣開蓋（防魚肉悶老）',
    stoveDifference:
      '務必先把 3 大匙味噌與 4.5 大匙砂糖在 150ml 水酒中徹底攪散才放魚，鯖魚單層魚皮朝上平鋪，短壓 3–5 分即熟透不焦底。',
    avoidPitfall:
      '切勿先放魚再丟整坨未化味噌，高糖濃醬易沉底焦鍋；煮完用檸檬水蒸 5 分除魚味。',
    youtubeQuery: '特福鮮呼吸萬用鍋 味噌燉鯖魚 鯖の味噌煮',
    sourceUrl: 'https://www.youtube.com/watch?v=AhPXxAzdirc',
    sourceTag: '日式家庭魚料理 味噌燉鯖魚 Karima',
    ingredients: [
      {
        name: '帶皮厚鯖魚切段（洗淨擦乾，魚皮可劃斜刀）',
        amount: 2,
        unit: '尾',
        note: '單層平鋪不重疊',
        group: 'main',
      },
      { name: '薑（切薄片或細長條）', amount: 4, unit: '片', group: 'main' },
      { name: '清水', amount: 150, unit: 'ml', group: 'seasoning' },
      { name: '料理酒或日式高湯', amount: 6, unit: '大匙', group: 'seasoning' },
      { name: '砂糖', amount: 4.5, unit: '大匙', group: 'seasoning' },
      {
        name: '味噌',
        amount: 3,
        unit: '大匙',
        note: '先徹底溶散無塊',
        group: 'seasoning',
      },
      { name: '醬油', amount: 1.5, unit: '大匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '先於鍋內調勻味噌醬汁，再單層平鋪鯖魚',
        instruction:
          '先在球釜內鍋將清水 150ml、砂糖 4.5 大匙、料理酒或高湯 6 大匙、醬油 1.5 大匙與味噌 3 大匙徹底攪溶成滑順無塊的暖橘褐湯汁；再將帶皮鯖魚段魚皮朝上單層平鋪（切勿重疊，水位約淹至魚身 1/2–2/3），放上 4 片細薑條或薑片。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋高壓快燉 3–5 分鐘',
        instruction:
          '將上蓋手把順時鐘轉到底鎖定，按右側「雞 / 鴨 / 豬」調至最短可設時間（約 3–5 分鐘）啟動快速加壓。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '3–5 分鐘',
          releaseMode: 'quick_manual',
          shortAction: '淺醬快壓嫩鯖魚',
        },
        tip: '鯖魚肉質細嫩，行程結束請勿長時間保溫悶蓋，盡快洩壓取出最完整。',
      },
      {
        stepNumber: 3,
        title: '洩壓開蓋盛出完整魚塊，選配單獨收濃味噌醬',
        instruction:
          '洩壓後朝外傾斜開蓋，可見魚皮青銀完整、魚肉熟白細嫩，用平口矽膠鏟小心盛盤；若想讓味噌醬汁更濃稠掛味，可單獨按左側「收汁 / 醬燒」將鍋底醬湯收濃 2–3 分鐘再淋回魚身。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '2–3 分鐘',
          shortAction: '收濃味噌淋醬',
        },
      },
    ],
  },
  {
    id: 'spec-malaysia-singapore-01-sup-tulang',
    title: '馬來香料牛骨湯',
    subtitle: '不鏽鋼鍋爆香紅蔥香料糊至出油，高壓 59 分熬出琥珀濃湯與軟嫩脫骨牛肋',
    category: 'soup',
    cuisine: '南洋',
    settingMinutes: 74,
    realTotalMinutes: 105,
    baseServings: 6,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（免手動觸碰蒸氣閥）',
    stoveDifference:
      '爆炒一次設滿 10 分鐘把紅蔥蒜片炒酥、香料糊炒出油並加水煮滾再鎖蓋；大骨壓 59 分就能一咬脫骨，開蓋再分三段下芹菜蔥葉與油蔥酥。',
    avoidPitfall:
      '2 公斤牛骨邊緣尖銳務必換 304 不鏽鋼鍋防刮，總液位勿超最高水位線（可酌減至 1.5 公斤）。',
    youtubeQuery: 'Tefal Sup Tulang 馬來香料牛骨湯 特福萬用鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=lsc6V-VyEuE',
    sourceTag: '馬來西亞新加坡食譜 Sup Tulang IAAAMom',
    ingredients: [
      {
        name: '帶肉牛肋骨與牛頸骨（切 5–7 公分大塊）',
        amount: 2000,
        unit: '克',
        note: '5L鍋可減至1.5kg',
        group: 'main',
      },
      {
        name: '紅蔥頭（縱切薄片）',
        amount: 5,
        unit: '顆',
        note: '縱切爆香最濃郁',
        group: 'main',
      },
      { name: '蒜頭（縱切薄片）', amount: 5, unit: '瓣', group: 'main' },
      {
        name: '老薑（去皮刀背拍裂）',
        amount: 1,
        unit: '塊',
        note: '約拇指大小',
        group: 'main',
      },
      {
        name: '馬來燉湯香料包',
        amount: 2,
        unit: '包',
        note: '1–2包皆可',
        group: 'main',
      },
      {
        name: '西洋芹梗（切 0.5 公分薄片）',
        amount: 1,
        unit: '大支',
        note: '開蓋後先下',
        group: 'main',
      },
      {
        name: '南洋芹菜葉與青蔥（切細碎）',
        amount: 1,
        unit: '小把',
        note: '起鍋前再下',
        group: 'main',
      },
      {
        name: '油蔥酥',
        amount: null,
        unit: '適量',
        note: '起鍋前撒一大把',
        group: 'main',
      },
      {
        name: '馬來燉湯香料粉（先加少許冷水調濃糊）',
        amount: 2.5,
        unit: '大匙',
        note: '調糊防乾粉焦苦',
        group: 'seasoning',
      },
      { name: '食用油', amount: 2.5, unit: '大匙', group: 'seasoning' },
      {
        name: '清水',
        amount: 1500,
        unit: 'ml',
        note: '約內鍋一半高度',
        group: 'seasoning',
      },
      { name: '鹽與鮮味調味粉', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '熱鍋爆香紅蔥與蒜片',
        instruction:
          '換裝 304 不鏽鋼內鍋，開蓋按左側「爆炒煎烤」並直接設 10 分鐘（一次設足免中途補滾）。鍋底淋薄層油，倒入縱切薄片的紅蔥頭與蒜片，翻炒至轉透、邊緣微金黃帶酥香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '10 分鐘',
          temperature: '150°C',
          shortAction: '爆香蔥蒜香料糊',
        },
      },
      {
        stepNumber: 2,
        title: '炒香馬來湯粉糊至出油',
        instruction:
          '趁爆炒繼續進行，倒入已加少許冷水調勻的深棕色燉湯香料糊（太乾可補極少水），持續翻炒至熱氣蒸騰、香氣大出並呈油水分離出油狀態。',
      },
      {
        stepNumber: 3,
        title: '加水至半鍋、下香料包與牛骨煮滾',
        instruction:
          '倒入清水至不鏽鋼內鍋約一半高度將香料糊拌開，放入拍扁老薑、2 包馬來燉湯香料包與少許鹽助沸；待湯面冒小泡微滾後放入 2 公斤帶骨牛肉與牛骨翻勻浸入湯中（確認總高度低於最高水位線），按取消停止爆炒。',
      },
      {
        stepNumber: 4,
        title: '鎖蓋高壓燉煮 59 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘轉到底鎖定，按右側「牛 / 羊肉」將時間調滿至 59 分鐘按下開始，安心免顧火等待升壓與保壓倒數。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '59 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '高壓燉透脫骨牛',
        },
      },
      {
        stepNumber: 5,
        title: '自動洩壓開蓋檢視濃郁深琥珀湯色',
        instruction:
          '59 分鐘結束後靜待自動安全洩壓完畢、浮閥完全落下再朝遠離身體方向掀蓋；此時湯頭已由淺米濁色蛻變為深紅褐琥珀清亮香料牛骨湯，牛肉軟嫩欲化。',
      },
      {
        stepNumber: 6,
        title: '開蓋 140°C 回滾，分三段下香草蔬菜與油蔥酥',
        instruction:
          '按取消退出保溫，改選左側「自訂行程」設 140°C（或用「收汁 / 醬燒」）開蓋讓大鍋迅速回滾約 5 分鐘。加鹽與鮮味粉，先下西洋芹梗薄片煮 1–2 分鐘釋甜，再拌入南洋芹菜葉與青蔥碎滾出翠綠清香，試味後撒入一大把油蔥酥即可取消盛碗。',
        potAction: {
          side: 'left',
          modeName: '自訂行程',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '140°C',
          shortAction: '回滾分批下香草',
        },
        tip: '自訂行程結束不自動保溫，試喝調味完畢記得手動按取消鍵。',
      },
    ],
  },
  {
    id: 'spec-malaysia-singapore-02-ayam-panggang',
    title: '馬來香料烤雞',
    subtitle: '免加水無壓烘烤 40 分翻面，再 150°C 補烤 5 分雙面金黃焦香',
    category: 'bake',
    cuisine: '南洋',
    settingMinutes: 45,
    realTotalMinutes: 52,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（免鎖蓋、免洩壓）',
    stoveDifference:
      '萬用鍋由底部加熱，第一段 130°C 烤 40 分剛開蓋時朝上面泛白像蒸雞屬正常，翻面就會見到底面深金焦香，再 150°C 補烤 5 分雙面酥亮。',
    avoidPitfall:
      '雞塊瀝乾單層平鋪勿堆疊；若醃料含蜂蜜或甜醬油，二段 150°C 第 3 分先看色防焦。',
    youtubeQuery: 'Tefal CY625 Ayam Panggang 馬來烤雞 萬用鍋無水烤雞',
    sourceUrl: 'https://www.youtube.com/watch?v=ORTPH0sF6eY',
    sourceTag: '馬來西亞新加坡特福食譜 Ayam Panggang Cherry YY',
    ingredients: [
      {
        name: '帶皮帶骨雞肉切塊（提前醃漬並瀝乾多餘醃汁）',
        amount: 0.5,
        unit: '隻',
        note: '切6–8塊單層平鋪',
        group: 'main',
      },
      {
        name: '馬來風味烤雞醃料（薑黃、蒜泥、薑、香茅、甜醬油、黑胡椒、少許油）',
        amount: null,
        unit: '適量',
        note: '表面乾爽不積水',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '單層平鋪雞塊，130°C 一段低溫烘烤 40 分鐘',
        instruction:
          '將醃好並瀝乾多餘醃汁的帶皮雞塊單層平鋪於黑色球釜內鍋底部（先讓雞皮較多面朝下貼鍋底，完全不墊烘焙紙、不加水）。蓋上鍋蓋保持手把留在解鎖不鎖定位置，按左側「無壓烘烤」調為 130°C、40 分鐘啟動。',
        potAction: {
          side: 'left',
          modeName: '無壓烘烤',
          lid: 'closed_unlocked',
          durationText: '40 分鐘',
          temperature: '130°C',
          shortAction: '低溫逼油烤底色',
        },
      },
      {
        stepNumber: 2,
        title: '40 分鐘開蓋檢視上白下金黃，全面翻面',
        instruction:
          '響鈴後按取消退出保溫，朝外微傾開蓋防凝結水滴落；剛開蓋朝上一面泛白微濕屬底部加熱的正常現象，用防刮耐熱夾逐塊翻面即見底面烤出深焦糖金褐烤色，將尚未上色面一律翻轉朝下緊貼鍋底。',
      },
      {
        stepNumber: 3,
        title: '150°C 二段高溫補烤上色 5 分鐘',
        instruction:
          '蓋回鍋蓋同樣維持不鎖定，按左側「自訂行程」將溫度調至最高 150°C、設定 5 分鐘啟動最後高溫逼油上色。',
        potAction: {
          side: 'left',
          modeName: '自訂行程',
          lid: 'closed_unlocked',
          durationText: '5 分鐘',
          temperature: '150°C',
          shortAction: '高溫補烤雙面金黃',
        },
        tip: '醃料若含蜂蜜或甜醬油，第 3 分鐘可先略掀蓋確認烤色以防過焦。',
      },
      {
        stepNumber: 4,
        title: '雙面焦糖金褐起鍋盛盤',
        instruction:
          '5 分鐘響鈴後自動回到待機狀態不保溫，掀蓋用防刮夾檢視正反兩面皆呈飽滿深焦糖橘褐色酥香外皮、內部鮮嫩多汁，鍋底僅留薄層晶亮雞油完全不沾即可盛盤。',
      },
    ],
  },
  {
    id: 'spec-malaysia-singapore-03-ikan-patin-masak-lemak-cili-api',
    title: '馬來椰漿鳥眼椒燉鯰魚',
    subtitle: '魚塊先烤定型免碎散，全程無壓爆炒椰漿香草再收濃，金黃滑順零結塊',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 14,
    realTotalMinutes: 20,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（椰漿切勿鎖蓋加壓，免洩壓）',
    stoveDifference:
      '椰漿與乳製品絕不可鎖蓋高壓以免油水分離！魚塊先烤熟定型並吸油，再全程用左側無壓模式炒香料泥、輕煨 2–3 分後開蓋收濃，魚肉完整不散。',
    avoidPitfall:
      '薑黃極易染黃壓力鍋膠圈，無壓爆炒燜煮時建議掀蓋直立、另蓋一只家用小鍋蓋防噴染。',
    youtubeQuery: 'Tefal CY625 Ikan Patin Masak Lemak Cili Api 椰漿燉魚',
    sourceUrl: 'https://www.youtube.com/watch?v=Hr43XUkMnVg',
    sourceTag: '馬來西亞新加坡特福食譜 Masak Lemak Cili Api Cherry YY',
    ingredients: [
      {
        name: '巴丁魚或鯰魚塊（預先烤熟定型吸油，可換虱目魚肚或鱸魚）',
        amount: 5,
        unit: '大塊',
        note: '先烤定型零碎散',
        group: 'main',
      },
      {
        name: '馬來辛香料泥（鳥眼椒、新鮮薑黃打碎）',
        amount: 180,
        unit: 'ml',
        note: '約1中碗粗泥',
        group: 'main',
      },
      { name: '瘋柑葉（檸檬葉）與新鮮薑黃葉', amount: null, unit: '適量', group: 'main' },
      {
        name: '亞參片（酸果乾）',
        amount: 1.5,
        unit: '片',
        note: '約1–2片',
        group: 'main',
      },
      {
        name: '椰漿',
        amount: null,
        unit: '適量',
        note: '加水達內鍋1/4–1/3',
        group: 'seasoning',
      },
      {
        name: '清水',
        amount: 180,
        unit: 'ml',
        note: '約1小杯分次加',
        group: 'seasoning',
      },
      { name: '炒香椰絲泥', amount: 1, unit: '小匙', group: 'seasoning' },
      { name: '食用油', amount: 1.5, unit: '大匙', group: 'seasoning' },
      { name: '鹽', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動爆炒模式、熱油炒香橘黃香料泥',
        instruction:
          '保持萬用鍋掀蓋直立全開，按左側「爆炒煎烤」直接設 10–12 分鐘。球釜鍋底倒薄油，熱油後倒入 1 中碗鳥眼椒薑黃香料泥，以木匙炒至亮金黃冒香；可另蓋輕巧家用小鍋蓋暫燜逼香並防止薑黃油汁飛濺染黃壓力鍋膠圈。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '10–12 分鐘',
          temperature: '150°C',
          shortAction: '炒香料泥煨椰漿',
        },
      },
      {
        stepNumber: 2,
        title: '分次注入清水拌勻基底湯',
        instruction:
          '趁爆炒行程進行中，分次倒入約 150–200ml 清水（依魚塊量調整），以木匙拌勻成橘黃色香料基底湯。',
      },
      {
        stepNumber: 3,
        title: '倒入椰漿與南洋香草煮沸',
        instruction:
          '倒入椰漿拌勻至呈滑順亮金黃色（整體液面約在內鍋 1/4–1/3 高度），放入瘋柑葉、新鮮薑黃葉、亞參片與 1 小匙炒椰絲泥，暫蓋家用小鍋蓋加速升溫煮至鍋緣微滾冒泡。',
      },
      {
        stepNumber: 4,
        title: '輕放預烤定型魚塊，加蓋短煨 2–3 分鐘',
        instruction:
          '將預先烤至焦橘定型且吸過油的魚塊逐塊輕放進滾沸椰漿湯中，以木匙輕輕舀起醬汁撥淋在魚身（切勿大力翻炒），暫蓋家用小鍋蓋（絕不鎖壓）續煨約 2–3 分鐘入味。',
      },
      {
        stepNumber: 5,
        title: '開蓋切換「收汁 / 醬燒」收濃滑順金黃醬',
        instruction:
          '爆炒結束後切換左側「收汁 / 醬燒」，全程開蓋以木匙沿鍋緣輕推 2–5 分鐘；待醬汁收成飽和薑黃金黃色濃稠滑順狀態、微泛細油泡且不結塊，試味補鹽即按取消盛盤。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '2–5 分鐘',
          shortAction: '輕推收濃金黃醬',
        },
        tip: '椰漿滾開後變稠很快，達理想濃稠度即可提早按取消鍵起鍋。',
      },
    ],
  },
  {
    id: 'spec-philippines-01-kare-kare',
    title: '菲式花生醬燉牛肉',
    subtitle: '先煎牛腱壓 45 分至叉壓即散，開蓋用熱高湯調絲滑花生醬再分批煮蔬菜',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 68,
    realTotalMinutes: 98,
    baseServings: 6,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（開蓋先撇淨浮沫浮油）',
    stoveDifference:
      '濃稠花生醬與玉米粉水絕不在加壓前入鍋！先靠鮮呼吸 45 分把牛腱燉爛免加味精，開蓋再舀熱高湯把花生醬調滑順回鍋煮菜，零結塊不焦底。',
    avoidPitfall:
      '開蓋煮花生醬與勾芡時須勤以矽膠匙推底，最後蓋蓋悶青江菜切勿轉鎖壓力鎖。',
    youtubeQuery: 'Tefal CY625 Kare Kare 菲式花生醬燉牛肉 萬用鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=OJAyEIMOAhQ',
    sourceTag: '菲律賓特福官方食譜 Kare-Kare Bambi Young',
    ingredients: [
      {
        name: '牛腱塊（切 4–5 公分厚塊壓乾水分）',
        amount: 1000,
        unit: '克',
        group: 'main',
      },
      { name: '洋蔥（切細丁）', amount: 1, unit: '顆', group: 'main' },
      { name: '蒜頭（切細末）', amount: 4, unit: '瓣', group: 'main' },
      {
        name: '香蕉花（切段預泡水去澀，台灣可省）',
        amount: 1,
        unit: '中碗',
        group: 'main',
      },
      { name: '茄子（帶皮斜切 1 公分厚片）', amount: 1, unit: '條', group: 'main' },
      { name: '長豇豆（切 5–6 公分段）', amount: 7, unit: '根', group: 'main' },
      { name: '青江菜（洗淨修根）', amount: 1, unit: '把', group: 'main' },
      {
        name: '胭脂樹籽（以 1/2 杯熱湯隔濾網泡色）',
        amount: 0.25,
        unit: '杯',
        group: 'seasoning',
      },
      {
        name: '花生醬（以 1 杯熱湯碗內調成絲滑濃醬）',
        amount: null,
        unit: '適量',
        note: '拌約1中碗無顆粒',
        group: 'seasoning',
      },
      {
        name: '玉米粉水（玉米粉加冷水調勻）',
        amount: null,
        unit: '適量',
        note: '開蓋後才勾芡',
        group: 'seasoning',
      },
      { name: '食用油', amount: null, unit: '適量', group: 'seasoning' },
      {
        name: '清水',
        amount: null,
        unit: '適量',
        note: '淹過牛肉約半鍋',
        group: 'seasoning',
      },
      { name: '鹽與魚露', amount: null, unit: '適量', group: 'seasoning' },
      {
        name: '菲式發酵蝦醬（上桌沾食配角）',
        amount: null,
        unit: '適量',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動爆炒模式，分兩批煎香牛腱',
        instruction:
          '保持開蓋，按左側「爆炒煎烤」設定 15 分鐘；鍋底倒薄油，將壓乾水分的 1 公斤牛腱塊分兩批平鋪留空隙煎至表面轉棕褐焦香，先夾至碗中備用。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '15 分鐘',
          temperature: '150°C',
          shortAction: '分批煎封牛腱塊',
        },
      },
      {
        stepNumber: 2,
        title: '炒香洋蔥與蒜末，牛肉連肉汁回鍋加水',
        instruction:
          '利用原鍋底油倒入洋蔥細丁與 4 瓣蒜末炒至微透明飄香，將煎好牛腱連同碗內肉汁全部倒回鍋中，注入足量清水完全淹過牛肉（水位約內鍋 1/2–2/3），加鹽拌勻後按取消結束爆炒。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋高壓燉煮 45 分鐘',
        instruction:
          '蓋上鍋蓋將上蓋手把順時鐘轉到底鎖定，按右側「牛 / 羊肉」設 45 分鐘啟動，靠鮮呼吸動態變壓釋放肉鮮，免加味精與高湯塊。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '45 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸燉爛牛腱',
        },
      },
      {
        stepNumber: 4,
        title: '自動洩壓開蓋，徹底撇淨浮沫與浮油',
        instruction:
          '行程結束並自動安全洩壓後緩慢掀蓋防蒸氣燙手，用湯杓把湯面厚層浮沫與多餘浮油徹底撇除，保留清澈鮮美的牛肉高湯。',
      },
      {
        stepNumber: 5,
        title: '用熱高湯調開胭脂水與絲滑花生醬',
        instruction:
          '將細目小濾網架碗上放入 1/4 杯胭脂樹籽，舀 1/2 杯熱牛肉高湯沖淋濾出橘紅天然色汁；另碗舀 1 杯熱牛肉高湯把花生醬徹底拌成金黃無顆粒的絲滑濃醬；再以小碗把玉米粉加冷水調勻成粉水。',
        tip: '花生醬先在碗裡用熱高湯化開再回鍋，就絕不會水水分離結塊。',
      },
      {
        stepNumber: 6,
        title: '倒入胭脂水、花生醬與粉水，下香蕉花',
        instruction:
          '依序將橘紅胭脂水、滑順花生醬汁倒入鍋中拌勻，再淋入玉米粉水、依口味加魚露調味，放入瀝乾的預泡香蕉花輕拌均勻。',
      },
      {
        stepNumber: 7,
        title: '開蓋煮滾，分兩段下耐煮蔬菜與青江菜',
        instruction:
          '按取消退出保溫，改選左側「收汁 / 醬燒」（或「爆炒煎烤」）開蓋不時輕攪防黏底直至濃醬滾沸；倒入斜切片茄子與長豇豆段續煮 5 分鐘，最後放入青江菜在無壓狀態下輕蓋鍋蓋（切勿鎖壓）悶煮 3 分鐘即按取消停火。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'closed_unlocked',
          durationText: '約 8 分鐘',
          shortAction: '濃花生醬煨鮮蔬',
        },
      },
      {
        stepNumber: 8,
        title: '盛盤配熱白飯與發酵蝦醬享用',
        instruction:
          '此時牛腱已燉至叉匙一壓即散，金橘濃醬滑順掛附肉塊與翠綠蔬菜，盛盤搭配熱白飯與一匙菲式發酵蝦醬沾食即完成。',
      },
    ],
  },
  {
    id: 'spec-philippines-02-chicken-tinola',
    title: '菲式生薑青木瓜雞湯',
    subtitle: '生土雞與香茅厚薑免炒直壓 15 分，開蓋無壓煮青木瓜冬粉清澈零油膩',
    category: 'soup',
    cuisine: '南洋',
    settingMinutes: 28,
    realTotalMinutes: 55,
    baseServings: 4,
    innerPot: '雙內鍋皆可',
    releaseSummary: '自然自動洩壓（開蓋站側邊防蒸氣撲臉）',
    stoveDifference:
      '耐煮放山土雞走右側高壓 15 分速軟免爆炒、湯頭清澈零浮油；青木瓜、冬粉與葉菜改用左側無壓自訂行程煮軟，既不糊爛又能讓冬粉吸飽雞湯。',
    avoidPitfall:
      '青木瓜與冬粉切勿隨雞肉一起加壓以免糊化；無壓掀蓋加料時務必站側邊斜開防燙臉。',
    youtubeQuery: 'Tefal CY625 Chicken Tinola 菲式青木瓜雞湯 萬用鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=rgqxxTl4Prw',
    sourceTag: '菲律賓特福官方食譜 Chicken Tinola',
    ingredients: [
      {
        name: '帶骨放山雞或土雞（切 5–6 公分塊）',
        amount: 1,
        unit: '隻',
        note: '小型土雞份量',
        group: 'main',
      },
      {
        name: '青木瓜（去皮籽切 3–4 公分大塊，可換佛手瓜）',
        amount: 1,
        unit: '中碗',
        group: 'main',
      },
      {
        name: '綠豆冬粉（冷水泡軟瀝乾）',
        amount: 1,
        unit: '中碗',
        note: '起鍋前吸湯用',
        group: 'main',
      },
      {
        name: '辣椒葉（可換菠菜或地瓜嫩葉）',
        amount: 1,
        unit: '中碗',
        group: 'main',
      },
      {
        name: '老薑（厚切）與去皮拍扁蒜頭',
        amount: null,
        unit: '適量',
        note: '厚薑片是靈魂',
        group: 'main',
      },
      {
        name: '香茅（取白色底部 5 公分段拍裂）',
        amount: 2,
        unit: '支',
        note: '不切斷好挑除',
        group: 'main',
      },
      { name: '洋蔥（粗切大塊）', amount: 1, unit: '顆', group: 'main' },
      {
        name: '純水或溫熱水',
        amount: 1000,
        unit: 'ml',
        note: '淹過雞肉低於最高水位線',
        group: 'seasoning',
      },
      { name: '菲式魚露', amount: null, unit: '適量', group: 'seasoning' },
      { name: '海鹽與現磨黑胡椒', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '免爆炒！生雞與辛香料直接下鍋加水',
        instruction:
          '全程免開火炒香，直接將帶骨放山雞塊放入內鍋，倒入厚切老薑片、拍扁蒜頭、拍裂香茅白段與粗切洋蔥，注入約 1 公升純水或溫熱水淹過食材（確認低於最高水位線）。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋高壓燉煮 15 分鐘',
        instruction:
          '蓋上鍋蓋將上蓋手把順時鐘轉到底鎖定，確認限壓閥潔淨無阻礙，按右側「雞 / 鴨 / 豬」設 15 分鐘啟動。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '15 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '免炒高壓燉土雞',
        },
      },
      {
        stepNumber: 3,
        title: '自動洩壓開蓋，檢視雞肉嫩度',
        instruction:
          '15 分鐘完成並自動安全洩壓後，站側邊朝遠離臉部方向傾斜掀蓋；此時湯底清澈零油膩、土雞軟嫩。若想防二次滾煮散肉可先夾出熟雞塊擺碗，家庭簡化版亦可留鍋同煮。',
      },
      {
        stepNumber: 4,
        title: '下青木瓜與調味，切換無壓自訂行程續煮',
        instruction:
          '倒入大塊青木瓜，加入海鹽、菲式魚露與黑胡椒；按取消退出壓力區，切換左側「自訂行程」設 100°C、10–12 分鐘，輕蓋鍋蓋（切勿鎖壓，隨時可開蓋查看）煮至青木瓜軟透清甜。',
        potAction: {
          side: 'left',
          modeName: '自訂行程',
          lid: 'closed_unlocked',
          durationText: '10–12 分鐘',
          temperature: '100°C',
          shortAction: '無壓煮軟青木瓜',
        },
      },
      {
        stepNumber: 5,
        title: '下冬粉與辣椒葉微燜，試味盛碗',
        instruction:
          '青木瓜煮軟後側身掀蓋避開熱蒸氣，倒入泡軟瀝乾的綠豆冬粉與洗淨辣椒葉，蓋回不鎖壓續燜 1–2 分鐘；用湯匙試喝確認鹹鮮與薑香平衡後按取消，澆淋於雞肉上即可享用。',
        tip: '青木瓜本身較不吸湯味，起鍋前加一把泡軟綠豆冬粉吸滿鮮雞湯超飽足。',
      },
    ],
  },
  {
    id: 'spec-philippines-03-pork-binagoongan',
    title: '菲式蝦醬燉豬肋排',
    subtitle: '先滾燙去血水再帶骨壓 30 分脫骨，原鍋擦乾炒番茄蝦醬與高湯裹滿釉汁',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 44,
    realTotalMinutes: 72,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（骨肉軟嫩好分切）',
    stoveDifference:
      '先整塊帶骨汆燙再壓 30 分鎖住骨髓肉香，出鍋再切小段並留用燉軟的紫洋蔥與清高湯回鍋炒蝦醬，一鍋到底省時又零浪費。',
    avoidPitfall:
      '菲式發酵蝦醬含鹽極高，千萬別先放鹽；煮完務必拆洗矽膠圈並蒸檸檬水除味。',
    youtubeQuery: 'Tefal CY625 Pork Binagoongan 菲式蝦醬燉豬肋排',
    sourceUrl: 'https://www.youtube.com/watch?v=q7PIqEhw1go',
    sourceTag: '菲律賓特福官方食譜 Pork Binagoongan',
    ingredients: [
      {
        name: '帶骨厚切豬肋排（整塊先燉，出鍋再切小段）',
        amount: 700,
        unit: '克',
        note: '約2–3大整塊排骨',
        group: 'main',
      },
      {
        name: '紫洋蔥（切大片，燉後撈留部分回炒）',
        amount: 1.5,
        unit: '顆',
        group: 'main',
      },
      { name: '老薑（厚切）', amount: 4, unit: '片', group: 'main' },
      { name: '蒜末', amount: 1, unit: '大匙', group: 'main' },
      { name: '紅番茄（切 2 公分大丁）', amount: 1, unit: '碗', group: 'main' },
      {
        name: '鮮紅長辣椒',
        amount: 2,
        unit: '根',
        note: '依嗜辣度增減',
        group: 'main',
      },
      {
        name: '菲式發酵蝦醬',
        amount: 1,
        unit: '大匙',
        note: '鹹度高免另放鹽',
        group: 'seasoning',
      },
      {
        name: '砂糖',
        amount: 1,
        unit: '小匙',
        note: '平衡蝦醬鹹鮮',
        group: 'seasoning',
      },
      { name: '食用油', amount: 1.5, unit: '大匙', group: 'seasoning' },
      {
        name: '清水（汆燙與燉煮各淹過排骨）',
        amount: null,
        unit: '適量',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '高溫猛火快滾汆燙 8 分鐘去血水',
        instruction:
          '將整塊帶骨豬肋排入鍋加水剛好淹過肉面，順時鐘鎖緊上蓋，按右側「蒸 / 一鍋兩菜」設 8 分鐘逼出血水與浮沫（想省一次洩壓亦可改開蓋「爆炒煎烤」大滾 5 分鐘）；完成倒除濁水並將排骨與內鍋徹底沖洗乾淨。',
        potAction: {
          side: 'right',
          modeName: '蒸 / 一鍋兩菜',
          lid: 'locked',
          durationText: '8 分鐘',
          releaseMode: 'quick_manual',
          shortAction: '猛火滾燙除雜質',
        },
      },
      {
        stepNumber: 2,
        title: '帶骨加紫洋蔥薑片高壓燉 30 分鐘',
        instruction:
          '洗淨排骨重新放入乾淨內鍋，注入剛好淹過肉面的新鮮清水，放入紫洋蔥塊與厚切薑片；蓋蓋順時鐘鎖定，按右側「雞 / 鴨 / 豬」手動調為 30 分鐘啟動。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '帶骨燉至近脫骨',
        },
      },
      {
        stepNumber: 3,
        title: '自動洩壓、分切排骨並過濾清高湯',
        instruction:
          '30 分鐘完成並自動安全洩壓後掀蓋，夾出軟嫩近脫骨的排骨置盤分切成適口小段，順手把鍋內燉軟的紫洋蔥與薑片留置盤邊備用；同時把清澈淡金黃色的豬骨高湯過濾至盆中保存。',
      },
      {
        stepNumber: 4,
        title: '原鍋擦乾，開蓋爆香蒜末、燉洋蔥與紅番茄',
        instruction:
          '將同一個內鍋洗淨並徹底擦乾，開蓋按左側「爆炒煎烤」淋少許油熱鍋，先爆香約 1 大匙蒜末，撥回盤邊留用的燉紫洋蔥與薑片同炒，再下紅番茄丁與辣椒炒至番茄軟化釋出紅油酸甜汁。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 3 分鐘',
          temperature: '150°C',
          shortAction: '炒出番茄酸甜汁',
        },
      },
      {
        stepNumber: 5,
        title: '排骨回鍋炒蝦醬，無壓輕蓋燜煮裹汁',
        instruction:
          '將切段排骨放回翻拌，加少許砂糖、約 1 大匙深紫褐色發酵蝦醬與適量濾清豬骨高湯拌開（蝦醬極鹹先別放鹽）。維持無壓切「收汁 / 醬燒」輕蓋鍋蓋（切勿鎖壓）燜煮 2–3 分鐘至裹滿油亮紅褐蝦醬番茄釉汁，按取消盛盤配白飯。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'closed_unlocked',
          durationText: '2–3 分鐘',
          shortAction: '無壓燜收蝦醬汁',
        },
        tip: '濾出的清澈豬骨高湯多餘部分留作下餐湯底超鮮甜。',
      },
    ],
  },
  {
    id: 'spec-thailand-01-tom-leng-saeb',
    title: '泰式火山排骨湯',
    subtitle: '40 分取代傳統 3 小時慢熬！開蓋現擠綠檸檬、堆疊雙色鳥眼椒超開胃',
    category: 'soup',
    cuisine: '南洋',
    settingMinutes: 42,
    realTotalMinutes: 72,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（免觸蒸氣柱且湯清肉嫩）',
    stoveDifference:
      '小蒜頭保留紫皮粗搗下鍋、洋蔥對半切，久壓不糊湯又蒜香十足；檸檬汁、魚露與鳥眼椒一律開蓋後才加，酸辣香氣不發苦。',
    avoidPitfall:
      '酸性檸檬汁絕不可隨鍋加壓以免變苦，豬脊椎骨切面鋒利建議優先換 304 不鏽鋼內鍋。',
    youtubeQuery: 'Tefal 泰式火山排骨湯 ต้มเล้งแซ่บ 萬用鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=TtGF1-CPXrY',
    sourceTag: '泰國特福官方食譜 火山排骨湯 Tom Leng Saeb',
    ingredients: [
      {
        name: '豬脊椎骨或龍骨（洗淨，血水多可先快燙）',
        amount: 1200,
        unit: '克',
        note: '5L鍋約1–1.5kg',
        group: 'main',
      },
      {
        name: '帶皮小蒜頭（保留外皮粗搗裂開）',
        amount: 2.5,
        unit: '大匙',
        note: '久壓不糊蒜香足',
        group: 'main',
      },
      { name: '洋蔥（去皮對半切）', amount: 1, unit: '顆', group: 'main' },
      {
        name: '泰式燉湯香料（香茅、南薑、瘋柑葉、香菜根）',
        amount: 1,
        unit: '大份',
        note: '香料要足才道地',
        group: 'main',
      },
      {
        name: '紅、綠鳥眼椒碎與新鮮香菜碎（起鍋封頂）',
        amount: null,
        unit: '適量',
        group: 'main',
      },
      {
        name: '溫熱水或清水',
        amount: 1200,
        unit: 'ml',
        note: '淹過龍骨低於最高水位線',
        group: 'seasoning',
      },
      {
        name: '新鮮綠檸檬（切瓣，開蓋現擠）',
        amount: 2,
        unit: '顆',
        note: '依喜好酸度增減',
        group: 'seasoning',
      },
      {
        name: '魚露',
        amount: 1,
        unit: '大匙',
        note: '開蓋邊試邊微調',
        group: 'seasoning',
      },
      {
        name: '砂糖',
        amount: 1,
        unit: '大匙',
        note: '開蓋後加入',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '龍骨與滿滿泰式香料全數入鍋',
        instruction:
          '優先裝上 304 不鏽鋼內鍋，放入豬脊椎骨，依序加入帶皮粗搗小蒜頭、拍裂香茅段、香菜根、南薑片、瘋柑葉與對半切洋蔥略撥勻；倒入清水或溫熱水淹過骨肉且低於最高水位線。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋高壓燉煮 40–45 分鐘',
        instruction:
          '蓋上鍋蓋順時鐘轉到底鎖定，按右側「煮 / 燉湯品」（或「雞 / 鴨 / 豬」）設定 40–45 分鐘按下開始，全程免顧火就能取代傳統 3 小時慢熬。',
        potAction: {
          side: 'right',
          modeName: '煮 / 燉湯品',
          lid: 'locked',
          durationText: '40–45 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '高壓燉出脫骨龍骨',
        },
        tip: '直接用溫熱水啟動可省下 10–15 分鐘升壓時間。',
      },
      {
        stepNumber: 3,
        title: '完全自動洩壓後安全斜掀鍋蓋',
        instruction:
          '行程結束後靜待自動安全洩壓完畢、止開浮閥完全落下，將鍋蓋朝遠離身體方向傾斜開啟避免蒸氣燙手。',
      },
      {
        stepNumber: 4,
        title: '開蓋現擠檸檬、調魚露砂糖並堆疊火山擺盤',
        instruction:
          '趁熱擠入新鮮綠檸檬汁，加 1 大匙砂糖與約 1 大匙魚露以湯勺輕拌試味；深碗內把脫骨軟嫩的排骨堆疊成小山、澆淋清澈酸香骨湯，頂部厚鋪紅綠鳥眼椒碎與新鮮香菜碎、旁附檸檬瓣即可上桌。',
      },
    ],
  },
  {
    id: 'spec-thailand-02-tom-super-kha-kai',
    title: '泰式酸辣雞爪湯',
    subtitle: '先開蓋汆燙去腥洗淨，再配三色醬油與南洋香料壓 25 分，一抿脫骨膠質滿滿',
    category: 'soup',
    cuisine: '南洋',
    settingMinutes: 40,
    realTotalMinutes: 65,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（保留整隻雞爪皮 Q 飽滿不破）',
    stoveDifference:
      '先開蓋汆燙逼淨血沫洗淨內鍋，再用黑醬油、薄醬油、魚露配南洋香料壓 25 分即取代 3 小時慢熬，開蓋才放鳥眼椒香菜與檸檬汁。',
    avoidPitfall:
      '酸辣提香的鳥眼椒、香菜與檸檬汁絕不可隨鍋高壓燉煮，否則發黑變苦失鮮辣。',
    youtubeQuery: 'Tefal 泰式酸辣雞爪湯 ต้มซุปเปอร์ขาไก่ 萬用鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=paX5v83_Hd0',
    sourceTag: '泰國特福官方食譜 酸辣雞爪湯 Tom Super Kha Kai',
    ingredients: [
      {
        name: '整隻雞爪（修剪指甲洗淨不剁段）',
        amount: 650,
        unit: '克',
        note: '約500–800克',
        group: 'main',
      },
      {
        name: '泰式燉湯辛香料（南薑片、香茅段、瘋柑葉、蒜頭、香菜根）',
        amount: 1,
        unit: '份',
        group: 'main',
      },
      {
        name: '紅、綠鳥眼椒（拍裂或切段，開蓋後放）',
        amount: null,
        unit: '適量',
        group: 'main',
      },
      {
        name: '新鮮香菜與刺芫荽（切大段，起鍋撒滿）',
        amount: null,
        unit: '適量',
        group: 'main',
      },
      {
        name: '高湯或清水（二段燉煮用）',
        amount: 700,
        unit: 'ml',
        note: '約500–800ml淹過料',
        group: 'seasoning',
      },
      {
        name: '三色醬料（黑醬油、薄醬油、魚露）',
        amount: null,
        unit: '適量',
        note: '調出深琥珀醬湯',
        group: 'seasoning',
      },
      { name: '鹽與糖', amount: null, unit: '適量', group: 'seasoning' },
      {
        name: '新鮮綠檸檬汁（起鍋補酸）',
        amount: null,
        unit: '適量',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '一鍋開蓋汆燙去腥（15–20 分鐘）',
        instruction:
          '將修剪好指甲的整隻雞爪與足量清水放入球釜內鍋，保持開蓋按左側「爆炒煎烤」設 15–20 分鐘，煮沸徹底逼出雞爪血水與雜質。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '15–20 分鐘',
          temperature: '150°C',
          shortAction: '開蓋汆燙去腥沫',
        },
      },
      {
        stepNumber: 2,
        title: '撈出徹底沖洗雞爪並擦乾內鍋',
        instruction:
          '時間到按取消，將燙過的雞爪全數撈出，以流動清水徹底沖淨表面浮沫與油渣；同時洗淨球釜內鍋並擦乾底部外壁再放回主機。',
      },
      {
        stepNumber: 3,
        title: '回鍋加辛香料與三色醬汁鎖蓋加壓 25 分鐘',
        instruction:
          '將洗淨雞爪放回內鍋，投入南薑、香茅、瘋柑葉、蒜頭、香菜根與黑醬油、薄醬油、魚露、鹽糖，倒入約 500–800ml 高湯或清水淹過食材（低於最高水位線）。順時鐘鎖緊上蓋，按右側「豆類 / 蹄筋」（或「雞 / 鴨 / 豬」）設 25 分鐘啟動。',
        potAction: {
          side: 'right',
          modeName: '豆類 / 蹄筋',
          lid: 'locked',
          durationText: '25 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '壓至一抿即脫骨',
        },
        tip: '設 25 分鐘一抿脫骨，若偏好微 Q 嚼勁可微調至 18–20 分鐘。',
      },
      {
        stepNumber: 4,
        title: '安全洩壓開蓋檢視油亮琥珀雞爪',
        instruction:
          '25 分鐘響鈴後靜待自動安全洩壓完畢、浮閥完全落下，朝遠離身體方向傾斜開蓋；此時雞爪已燉至油亮琥珀醬褐色、飽滿微膨近脫骨，湯汁清透深琥珀。',
      },
      {
        stepNumber: 5,
        title: '起鍋撒紅綠鳥眼椒與香菜、補擠檸檬調酸辣',
        instruction:
          '盛入深盤趁熱撒上拍裂或切段的紅綠鳥眼椒與大把新鮮香菜、刺芫荽，補擠新鮮綠檸檬汁與少許魚露試味即可酸辣配白飯上桌。',
      },
    ],
  },
  {
    id: 'spec-thailand-03-tom-hua-chai-tao-kraduk-mu',
    title: '泰式白蘿蔔排骨湯',
    subtitle: '7 朵整顆香菇配香菜根白醬油，鎖蓋壓 20–25 分蘿蔔通透排骨脫骨',
    category: 'soup',
    cuisine: '南洋',
    settingMinutes: 22,
    realTotalMinutes: 50,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（蘿蔔吸汁通透不碎散）',
    stoveDifference:
      '靈魂甘醇來自 7 朵泡發整顆乾香菇、2 根香菜根與 3 大匙泰式白醬油；厚切 1.5–2 公分蘿蔔圓片高壓 20 分就能變半透明金黃、湯匙一撥排骨即脫骨。',
    avoidPitfall:
      '含生排骨在室溫下預約切勿超過 2 小時，且總湯料須保持於內鍋最高水位線下方。',
    youtubeQuery: 'Tefal 泰式白蘿蔔排骨湯 ต้มหัวไชเท้ากระดูกหมู 萬用鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=ddBaQDvLQ2s',
    sourceTag: '泰國特福官方食譜 白蘿蔔排骨湯 完整克數版',
    ingredients: [
      {
        name: '白蘿蔔（去皮切 1.5–2 公分厚圓片）',
        amount: 600,
        unit: '克',
        note: '略削厚皮去苦味',
        group: 'main',
      },
      {
        name: '豬肋排（切 4–5 公分帶肉塊，可先快燙）',
        amount: 500,
        unit: '克',
        group: 'main',
      },
      {
        name: '乾香菇（提前泡發去蒂留整朵）',
        amount: 7,
        unit: '朵',
        group: 'main',
      },
      { name: '香菜根（洗淨整根入鍋）', amount: 2, unit: '根', group: 'main' },
      { name: '去皮蒜頭（整瓣）', amount: 20, unit: '克', group: 'main' },
      { name: '新鮮香菜葉（起鍋撒飾）', amount: null, unit: '適量', group: 'main' },
      {
        name: '高湯（或清水，改溫熱可省升壓）',
        amount: 1200,
        unit: 'ml',
        group: 'seasoning',
      },
      { name: '泰式白醬油或薄鹽醬油', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '細鹽', amount: 1, unit: '茶匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '所有食材與 1,200ml 高湯一次入鍋',
        instruction:
          '將白蘿蔔厚圓片 600g、豬肋排 500g、提前泡發整朵乾香菇 7 朵、香菜根 2 根與整瓣去皮蒜頭 20g 全數放入內鍋，加泰式白醬油 3 大匙、細鹽 1 茶匙與高湯 1,200ml（改溫熱高湯可省升壓，水位須低於最高水位線）。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋啟動壓力煲湯 20–25 分鐘',
        instruction:
          '蓋上鍋蓋順時鐘轉到底鎖定，按右側「煮 / 燉湯品」（或「雞 / 鴨 / 豬」）設定 20–25 分鐘按下開始，免顧火也不必擔心滾溢或燒乾。',
        potAction: {
          side: 'right',
          modeName: '煮 / 燉湯品',
          lid: 'locked',
          durationText: '20–25 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '一鍵壓出透心蘿蔔',
        },
        tip: '一般肋排設 20 分即脫骨；粗硬龍骨可調 25 分並把蘿蔔切至 2.5–3 公分。',
      },
      {
        stepNumber: 3,
        title: '等待完全自動洩壓再開蓋',
        instruction:
          '行程結束提示音響起後靜待自動安全洩壓完成、止開浮閥完全落下，再朝遠離身體方向傾斜開蓋。',
      },
      {
        stepNumber: 4,
        title: '檢視透亮蘿蔔與脫骨排骨、撒香菜上桌',
        instruction:
          '開蓋可見清澈金琥珀湯頭，白蘿蔔圓片完全吸汁變成半透明金黃色、豬肋排用湯匙輕壓即可骨肉分離；試喝湯頭可依口味補少許白胡椒粉，盛碗撒新鮮香菜葉即上桌。',
      },
    ],
  },
  {
    id: 'spec-vietnam-01-bo-kho',
    title: '越式椰子水紅燒牛腩',
    subtitle: '新鮮椰子水免炒壓 25–30 分，開蓋再勾薄芡濃香滑亮，沾法棍絕配',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 30,
    realTotalMinutes: 60,
    baseServings: 6,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（靜置悶 5–10 分更軟嫩）',
    stoveDifference:
      '牛肉先整大塊汆燙沖涼再切 3–4 公分方塊最鎖汁；以 1 公升新鮮椰子水搭紅木籽油與冰糖免炒直壓，開蓋才淋 20g:20ml 粉水勾芡防焦底。',
    avoidPitfall:
      '樹薯粉水務必開蓋最後才淋，紅燒牛肉調味塊放食材最上層避免沉底焦化。',
    youtubeQuery: '越式紅燒牛腩 Bo Kho 萬用鍋 椰子水 壓力鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=r4gMbM8HXC0',
    sourceTag: '越南家常料理 越式椰子水紅燒牛腩 Bo Kho',
    ingredients: [
      {
        name: '牛腩或牛腱（整塊汆燙沖涼後切 3–4 公分方塊）',
        amount: 1000,
        unit: '克',
        note: '整塊先燙更鎖汁',
        group: 'main',
      },
      {
        name: '紅蘿蔔（去皮切 3–4 公分厚段，可刻花）',
        amount: 300,
        unit: '克',
        group: 'main',
      },
      { name: '香茅（拍扁切 8–10 公分長段）', amount: 100, unit: '克', group: 'main' },
      { name: '洋蔥（小型去皮對半切）', amount: 100, unit: '克', group: 'main' },
      { name: '去皮紅蔥頭（整顆不切碎）', amount: 10, unit: '克', group: 'main' },
      { name: '去皮蒜頭（整瓣不切碎）', amount: 10, unit: '克', group: 'main' },
      {
        name: '青蔥花、越式香草與法國長棍麵包（佐餐）',
        amount: null,
        unit: '適量',
        group: 'main',
      },
      { name: '新鮮椰子水', amount: 1000, unit: 'ml', group: 'seasoning' },
      { name: '黃冰糖', amount: 20, unit: '克', group: 'seasoning' },
      {
        name: '越式紅燒牛肉調味塊',
        amount: 2,
        unit: '塊',
        note: '擺食材最上層',
        group: 'seasoning',
      },
      { name: '魚露', amount: 10, unit: 'ml', group: 'seasoning' },
      {
        name: '紅木籽油（胭脂樹油）',
        amount: 10,
        unit: 'ml',
        note: '賦予橘紅亮湯色',
        group: 'seasoning',
      },
      { name: '鹽', amount: 10, unit: '克', group: 'seasoning' },
      {
        name: '鮮味粉與味精（味精可酌減或省）',
        amount: 10,
        unit: '克',
        note: '各10克依口味調',
        group: 'seasoning',
      },
      { name: '五香粉', amount: 3, unit: '克', group: 'seasoning' },
      {
        name: '太白粉或樹薯粉（開蓋加 20ml 水調勻）',
        amount: 20,
        unit: '克',
        note: '1:1勾芡最後下',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '免炒依序疊料、淋入 1 公升新鮮椰子水',
        instruction:
          '全程免爆炒，先將整塊汆燙沖涼後切 3–4 公分方塊的牛肉鋪於內鍋底層，依序鋪香茅長段、厚切紅蘿蔔、對半小洋蔥、整顆去皮紅蔥頭與整瓣蒜頭；撒鹽、味精（可省）、鮮味粉、五香粉與大塊黃冰糖，淋魚露、紅木籽油與 1 公升新鮮椰子水，最後把 2 塊紅燒牛肉調味塊擺最上層（切勿放太白粉水）。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋高壓燉煮 25–30 分鐘',
        instruction:
          '蓋上鍋蓋順時鐘轉到底鎖定，按右側「牛 / 羊肉」設 25 分鐘啟動（若使用較硬牛腱心或偏好極致軟爛可延長至 30–35 分鐘）。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '25–30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '椰汁高壓燉紅燒牛',
        },
        tip: '想增焦香層次，亦可先用左側爆炒煎烤以紅木籽油略炒香料牛肉再倒椰子水。',
      },
      {
        stepNumber: 3,
        title: '靜置悶軟並等待完全自動洩壓',
        instruction:
          '時間歸零後讓機器完整走完自動安全洩壓並靜置悶 5–10 分鐘讓肉肌理放鬆，待浮閥完全落下再朝遠離身體方向傾斜開蓋；此時紅蘿蔔完整不散、湯底已呈透亮橘紅琥珀色。',
      },
      {
        stepNumber: 4,
        title: '開蓋淋入 20g:20ml 樹薯粉水勾薄芡',
        instruction:
          '按取消鍵後切換左側「收汁 / 醬燒」（開蓋）讓湯微滾 2–3 分鐘；將 20 克樹薯粉加 20ml 清水調成乳白粉水倒入滾湯，立刻以矽膠匙快速攪勻至滑順油亮微稠掛匙即按取消停火。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '2–3 分鐘',
          shortAction: '開蓋勾芡滑亮濃湯',
        },
      },
      {
        stepNumber: 5,
        title: '撒蔥花香草、配熱酥法國麵包享用',
        instruction:
          '盛入大碗撒上細蔥花並點綴新鮮越式香草葉，旁附烤得外酥內軟的越式法國長棍麵包沾取濃香椰汁紅燒湯享用。',
      },
    ],
  },
  {
    id: 'spec-vietnam-02-thit-kho',
    title: '越式焦糖紅燒五花肉',
    subtitle: '帶皮五花先醃再炒緊縮，淺水壓 18–20 分即皮亮肉嫩、焦糖汁濃',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 25,
    realTotalMinutes: 50,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（瘦肉回吸焦糖滷汁不柴）',
    stoveDifference:
      '先以魚露與焦糖色醃透，炒緊表面後只加水淹至肉塊 6–7 分高，開蓋直接皮亮汁濃幾乎免久收汁，也不必像直火鍋提心吊膽轉小火。',
    avoidPitfall:
      '醃料含焦糖糖分且水位淺，加壓前至少倒 150–200ml 清水並輕刮鍋底防焦。',
    youtubeQuery: '越式紅燒肉 Thit Kho 特福壓力鍋 萬用鍋五花肉',
    sourceUrl: 'https://www.youtube.com/watch?v=aqXlFO2foWA',
    sourceTag: '越南家常料理 越式焦糖紅燒肉 Thit Kho',
    ingredients: [
      {
        name: '帶皮三層五花肉（切 3–4 公分厚方塊，提早醃妥）',
        amount: 550,
        unit: '克',
        note: '約500–600克',
        group: 'main',
      },
      {
        name: '越式醃肉料（魚露、少許鹽、越式焦糖水或醬油、紅蔥蒜末）',
        amount: null,
        unit: '適量',
        note: '提早預醃上色',
        group: 'seasoning',
      },
      {
        name: '清水',
        amount: 200,
        unit: 'ml',
        note: '淹肉6–7分高防焦',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '開蓋翻炒緊縮表面、逼出醃料香氣',
        instruction:
          '保持開蓋，按左側「爆炒煎烤」約 5 分鐘，倒入已提早醃好帶淺褐色的 3–4 公分厚切五花塊，用矽膠匙或長筷翻炒至表面緊縮轉均勻焦糖黃並充分吸足魚露香氣。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '150°C',
          shortAction: '翻炒緊縮逼肉香',
        },
      },
      {
        stepNumber: 2,
        title: '加入淺水位清水（淹至肉塊 6–7 分高）',
        instruction:
          '按取消停止爆炒，倒入約 150–200ml 清水至僅淹到五花肉塊約 6–7 分高度（肉塊頂端豬皮微露水面），並用矽膠匙輕輕刮起鍋底沾黏醃料以防加壓焦底。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋高壓燉煮 18–20 分鐘',
        instruction:
          '蓋上鍋蓋順時鐘轉到底鎖定，按右側「雞 / 鴨 / 豬」設 18–20 分鐘啟動，厚切五花設足 18–20 分最軟嫩化口。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '18–20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '淺水壓出焦糖滷肉',
        },
        tip: '切得較小塊可微調至 15 分鐘；完整走完自然洩壓，瘦肉回吸滷汁最嫩不柴。',
      },
      {
        stepNumber: 4,
        title: '自然洩壓開蓋檢視油亮焦糖色、選配微收',
        instruction:
          '自動洩壓完畢後朝外傾斜開蓋，此時豬皮呈透亮焦糖紅褐色、三層成型入口軟嫩、鍋底僅留薄層濃滷汁可直接盛盤；若該次加水偏多，可開蓋按左側「收汁 / 醬燒」微收 2–3 分鐘即成。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '2–3 分鐘',
          shortAction: '選配收濃油亮滷汁',
        },
      },
    ],
  },
  {
    id: 'spec-vietnam-03-canh-dua-suon',
    title: '越式酸菜排骨湯',
    subtitle: '先開蓋翻炒越式酸菜、紅番茄與排骨逼酸香，鎖蓋壓 20–25 分清甜脫骨',
    category: 'soup',
    cuisine: '南洋',
    settingMinutes: 28,
    realTotalMinutes: 58,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（防滾湯噴濺）',
    stoveDifference:
      '煲湯前務必先開蓋用油把越式酸菜、鮮紅番茄塊與排骨一起炒香再加水，番茄紅素與油脂包覆酸菜後，高壓湯頭圓潤開胃不嗆酸。',
    avoidPitfall:
      '酸菜加番茄屬雙重酸性湯底又帶硬骨，優先用 304 不鏽鋼內鍋，若用球釜煮完勿久保溫。',
    youtubeQuery: '越式酸菜排骨湯 Canh Dua Suon 特福壓力鍋 萬用鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=aqXlFO2foWA',
    sourceTag: '越南家常料理 越式酸菜排骨湯 Canh Dua Suon',
    ingredients: [
      {
        name: '帶厚肉豬排骨（切大塊洗淨，可先快燙）',
        amount: 700,
        unit: '克',
        note: '約600–800克',
        group: 'main',
      },
      {
        name: '越式酸菜（略沖擠乾切 3–4 公分寬段）',
        amount: null,
        unit: '適量',
        note: '保留白梗與綠葉',
        group: 'main',
      },
      { name: '紅番茄（切滾刀塊）', amount: 1, unit: '顆', group: 'main' },
      { name: '蔥花（起鍋提香選配）', amount: null, unit: '適量', group: 'main' },
      {
        name: '溫熱水或清水',
        amount: 1200,
        unit: 'ml',
        note: '淹過食材低於最高水位線',
        group: 'seasoning',
      },
      { name: '炒香用油', amount: 1, unit: '大匙', group: 'seasoning' },
      {
        name: '魚露、鹽與鮮味粉',
        amount: null,
        unit: '適量',
        note: '開蓋試味微調',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '一鍋開蓋先炒越式酸菜、紅番茄與排骨',
        instruction:
          '優先裝上 304 不鏽鋼內鍋，保持開蓋按左側「爆炒煎烤」約 5 分鐘；倒少許油放入切大段的越式酸菜、鮮紅番茄塊與排骨持續翻炒，讓油脂裹覆酸菜變油潤、番茄釋出茄紅酸香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '150°C',
          shortAction: '炒出酸菜番茄香',
        },
      },
      {
        stepNumber: 2,
        title: '取消爆炒，加足量清水淹過食材',
        instruction:
          '按取消退出爆炒模式，倒入足量清水（或溫熱水加快升壓）完全淹過排骨與酸菜，確認總高度低於內鍋最高水位線。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋高壓煲湯 20–25 分鐘',
        instruction:
          '蓋上鍋蓋順時鐘轉到底鎖定，按右側「煮 / 燉湯品」（或「雞 / 鴨 / 豬」）設定 20–25 分鐘按下開始，即可免顧火安心忙其他事。',
        potAction: {
          side: 'right',
          modeName: '煮 / 燉湯品',
          lid: 'locked',
          durationText: '20–25 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '高壓熬透酸香湯',
        },
        tip: '偏愛酸菜梗保留微脆感者，可先單壓排骨 15 分，開蓋再下炒好的酸菜番茄滾 5–8 分。',
      },
      {
        stepNumber: 4,
        title: '完全洩壓開蓋調味、撒蔥花上桌',
        instruction:
          '靜待自動安全洩壓完畢、浮閥落下後朝外傾斜開蓋；此時湯色呈清澈淡黃橄欖色、厚排骨用筷輕撥即骨肉分離，試喝以魚露或鹽微調鹹酸，撒少許蔥花即可上桌。',
      },
    ],
  },
  {
    id: 'spec-russia-03-central-asian-lamb-plov',
    title: '中亞羊肉香料手抓飯',
    subtitle: '乾煸羊油炒焦香洋蔥與粗紅蘿蔔條，先壓羊肉底再鋪長米悶出金黃粒粒分明',
    category: 'rice',
    cuisine: '中亞',
    settingMinutes: 60,
    realTotalMinutes: 105,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '兩段皆採自然自動洩壓（下米段多悶 10 分防噴漿）',
    stoveDifference:
      '先壓透略微偏鹹的羊肉肉底，再把淘淨瀝乾的長秈米平鋪頂部「絕不攪拌」，改用白米／快煮米飯壓 12–15 分加悶 10 分，避免久壓把米悶糊。',
    avoidPitfall:
      '鋪米後嚴禁攪拌到底部以免米澱粉焦底，且下米段務必自然洩壓切勿手動排氣。',
    youtubeQuery: 'Tefal Plov 中亞羊肉抓飯 烏茲別克手抓飯 萬用鍋',
    sourceUrl: 'https://www.youtube.com/watch?v=dNrkEOUcDhc',
    sourceTag: '中亞俄羅斯抓飯實作 烏茲別克羊肉手抓飯 Plov',
    ingredients: [
      {
        name: '帶脂羊肉塊（切 2.5–3 公分厚大塊，可換豬或雞）',
        amount: 500,
        unit: '克',
        group: 'main',
      },
      {
        name: '羊肥油細條（或改植物油 50ml）',
        amount: 50,
        unit: '克',
        note: '切0.5公分條乾煸',
        group: 'main',
      },
      { name: '大洋蔥（切半月細片）', amount: 1, unit: '大顆', group: 'main' },
      {
        name: '紅蘿蔔（切 0.5×0.5 公分粗長條）',
        amount: 1,
        unit: '大條',
        note: '勿刨細絲防燉泥',
        group: 'main',
      },
      {
        name: '長秈米（泰國香米或印度米，徹底淘洗瀝乾）',
        amount: 300,
        unit: '克',
        group: 'main',
      },
      { name: '整顆帶皮大蒜（洗淨不剝瓣）', amount: 1, unit: '整顆', group: 'main' },
      {
        name: '整根紅辣椒（留蒂頭不切破）',
        amount: 2,
        unit: '根',
        note: '僅取清香不嗆辣',
        group: 'main',
      },
      { name: '新鮮石榴籽（起鍋點綴選配）', amount: null, unit: '適量', group: 'main' },
      {
        name: '熱水（分兩階段剛好淹過肉與米）',
        amount: 1000,
        unit: 'ml',
        note: '分兩段視水位加',
        group: 'seasoning',
      },
      {
        name: '小茴香籽／孜然籽（下鍋前掌心搓碎）',
        amount: 1,
        unit: '大匙',
        group: 'seasoning',
      },
      {
        name: '小檗果乾（可換無糖蔓越莓或酸葡萄乾）',
        amount: 1.5,
        unit: '大匙',
        group: 'seasoning',
      },
      { name: '薑黃粉', amount: 0.75, unit: '小匙', group: 'seasoning' },
      {
        name: '鹽（肉底須嘗起來略微偏鹹）',
        amount: 1,
        unit: '大匙',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '開蓋乾煸羊油（或熱油）',
        instruction:
          '按左側「爆炒煎烤」（開蓋）設 20 分鐘；將從羊肉片下的細白羊脂肪條鋪球釜鍋底中央乾煸（或改倒 50ml 植物油），慢慢煸出清亮羊油與金黃香脆油渣。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '20 分鐘',
          temperature: '150°C',
          shortAction: '煸油封煎肉與菜',
        },
      },
      {
        stepNumber: 2,
        title: '將半月洋蔥炒至深金黃色',
        instruction:
          '趁爆炒模式繼續進行，投入半月細片大洋蔥拌勻，耐心翻炒至軟透金黃、邊緣微微焦糖化上色（可趁空檔將紅蘿蔔切成 0.5 公分寬的粗長條）。',
      },
      {
        stepNumber: 3,
        title: '靜置封煎羊肉大塊再翻炒',
        instruction:
          '倒入 500g 羊肉大塊鋪在金黃洋蔥上，剛下鍋先別急著攪動，讓羊肉貼鍋高溫煎封表面鎖住肉汁，再翻炒至四面均勻轉色微焦。',
      },
      {
        stepNumber: 4,
        title: '最後 5 分鐘倒入紅蘿蔔粗長條拌炒',
        instruction:
          '待爆炒倒數剩約 5 分鐘時倒入 0.5 公分寬的紅蘿蔔粗長條，翻炒至 20 分鐘行程結束，讓洋蔥幾乎融化、紅蘿蔔略軟並裹滿羊油香氣。',
      },
      {
        stepNumber: 5,
        title: '下香料與熱水調製略微偏鹹的羊肉肉底',
        instruction:
          '依序撒入小檗果乾、薑黃粉、用手掌用力搓碎的小茴香籽與約 1 大匙鹽拌勻（肉底必須嘗起來略微偏鹹，因為白米不另加鹽），倒入熱水至剛好淹齊羊肉與紅蘿蔔（約 1.0L 線）。',
      },
      {
        stepNumber: 6,
        title: '鎖蓋壓煮羊肉肉底 25–30 分鐘，同時淘洗瀝乾長米',
        instruction:
          '蓋上鍋蓋順時鐘鎖定，按右側「牛 / 羊肉」設 25–30 分鐘壓煮肉底並等待自然自動洩壓；趁壓煮空檔將 300g 長秈米置流水下徹底淘清，放金屬細網濾杓完全瀝乾。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '25–30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '高壓燉香羊肉底',
        },
      },
      {
        stepNumber: 7,
        title: '試鹹度、平鋪長米不攪拌並埋入大蒜與辣椒',
        instruction:
          '開蓋先舀一口透亮金黃肉汁試鹹（務必確認略微偏鹹，不足此時補鹽）；將瀝乾長秈米平鋪肉底上方以匙背輕抹平整（千萬別翻攪到底部防焦鍋），緩倒熱水剛好覆蓋米面即止，米面擺 2 根完整紅辣椒並用手將整顆帶皮大蒜壓埋入米層中央。',
      },
      {
        stepNumber: 8,
        title: '二次鎖蓋改米飯行程悶煮成抓飯',
        instruction:
          '再次順時鐘鎖緊上蓋，按右側「白米 / 快煮米飯」壓煮 12–15 分鐘，結束後務必等待自然自動洩壓並再多悶 10 分鐘（切勿手動快洩，防噴漿並讓米粒回吸乾爽）。',
        potAction: {
          side: 'right',
          modeName: '白米 / 快煮米飯',
          lid: 'locked',
          durationText: '12–15 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '悶煮金黃粒粒飯',
        },
        tip: '先把羊肉壓透，下米改走米飯行程短壓，長米才不會過軟黏糊。',
      },
      {
        stepNumber: 9,
        title: '拌鬆金黃抓飯並點綴軟蒜、紅辣椒與石榴籽',
        instruction:
          '開蓋先夾起烤至軟綿如奶油的整顆大蒜與完整紅辣椒，從鍋底輕輕翻鬆均勻薑黃金黃色、粒粒分明的抓飯盛盤，頂端擺回軟蒜與紅辣椒並撒新鮮石榴籽即可享用。',
      },
    ],
  },
];
