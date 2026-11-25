import type { Recipe } from '../../types/recipe';

export const SPEC_YTOWER_A_RECIPES: Recipe[] = [
  {
    id: 'spec-ytower-tefal-01-auto-rendered-lard-and-cabbage',
    title: '自製炸豬油與豬油炒高麗菜',
    subtitle: '乾鍋加壓 20–25 分逼出雪白純豬油，再原鍋爆炒脆甜高麗菜',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 25,
    realTotalMinutes: 55,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '炸油務必自然自動洩壓；炒菜全程開蓋無壓',
    stoveDifference:
      '傳統瓦斯爐炸豬油要顧火防焦又滿室油煙，萬用鍋鎖蓋恆壓免加水就能逼出清澈金黃豬油且時間到自動停火，冷藏可保存約 2 週。',
    avoidPitfall:
      '炸油結束嚴禁手動快洩防熱油噴濺，開蓋時鍋蓋務必朝外傾斜，切勿讓凝結水滴進滾油中引起油爆。',
    youtubeQuery: '特福鮮呼吸萬用鍋 一鍵炸豬油 豬油炒高麗菜',
    sourceUrl: 'https://www.youtube.com/watch?v=U6Df7Rfj4V8',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '豬背油（去皮切 1.5–2cm 均勻小丁）', amount: 1800, unit: '克', note: '乾鍋免加水', group: 'main' },
      { name: '高麗菜（洗淨瀝乾切一口大片）', amount: 200, unit: '克', note: '炒菜用', group: 'main' },
      { name: '蒜末', amount: 20, unit: '克', group: 'main' },
      { name: '紅辣椒（斜切片）', amount: 10, unit: '克', group: 'main' },
      { name: '自製豬油', amount: 1, unit: '大匙', note: '炒高麗菜用', group: 'seasoning' },
      { name: '鹽', amount: 1, unit: '茶匙', group: 'seasoning' },
      { name: '細砂糖', amount: 0.5, unit: '茶匙', group: 'seasoning' },
      { name: '米酒', amount: 1, unit: '茶匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '乾鍋放入豬背油丁',
        instruction:
          '確認黑色陶晶球釜內鍋內部完全乾燥無水珠，將 1800g 去皮豬背油小丁全數倒入內鍋鋪平（約佔內鍋 2/3–3/4 高度，仍在最高水位線以下），全程完全不需另外加水。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋啟動高壓逼油行程',
        instruction:
          '蓋上鍋蓋並將上蓋手把順時鐘轉到底鎖定，選右側「雞／鴨／豬」將時間調至 20–25 分鐘並把壓力調高至 60 kPa 啟動（油丁較大或滿量 1800g 亦可直接按「牛／羊」預設 30 分鐘／60 kPa）。全程免顧火，時間到自動關火。',
        potAction: {
          side: 'right',
          modeName: '雞／鴨／豬',
          lid: 'locked',
          durationText: '20–25 分鐘（60 kPa）',
          releaseMode: 'natural_auto',
          shortAction: '恆壓少油煙逼油',
        },
        tip: '若份量減半（600–900g），建議調 15–20 分鐘／60 kPa 避免油渣過焦。',
      },
      {
        stepNumber: 3,
        title: '完全洩壓後傾斜開蓋檢視',
        instruction:
          '務必靜待行程結束並完全自然自動洩壓後再逆時鐘解鎖；開蓋時將蓋面朝遠離身體方向傾斜，避免上蓋凝結水滴落滾油造成油爆。此時豬油丁已縮成金黃酥香豬油渣、油體清澈琥珀金黃。',
      },
      {
        stepNumber: 4,
        title: '微涼濾渣與冷藏保存',
        instruction:
          '將內鍋取出置於隔熱墊上，待熱油稍微冷卻至不燙手後，透過細孔不鏽鋼濾網濾除豬油渣，倒入耐熱玻璃罐；完全放涼後加蓋冷藏即凝成雪白豬油（冷藏約可保存 2 週），金黃豬油渣可撒椒鹽或炒菜拌麵。',
      },
      {
        stepNumber: 5,
        title: '開蓋啟動爆炒煎烤並融化豬油爆香',
        instruction:
          '將洗淨擦乾的球釜內鍋放回機身，保持開蓋按左側「爆炒煎烤」（150°C），挖入 1 大匙自製豬油受熱融化透亮後，倒入辣椒片與蒜末於鍋底中央爆出辛香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '150°C',
          shortAction: '豬油爆香辣椒蒜末',
        },
      },
      {
        stepNumber: 6,
        title: '快炒高麗菜調味起鍋',
        instruction:
          '倒入瀝乾的高麗菜翻拌裹勻豬油，依序加入鹽 1 茶匙、糖 1/2 茶匙、米酒 1 茶匙持續翻炒，炒至高麗菜葉轉翠綠油亮、菜梗微軟仍保脆度即可按取消盛盤。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-04-sous-vide-drunken-chicken',
    title: '舒肥紹興醉雞捲',
    subtitle: '免密封袋裸泡 80°C 恆溫水浴 60 分，皮彈肉嫩不破皮',
    category: 'sousvide',
    cuisine: '台式',
    settingMinutes: 60,
    realTotalMinutes: 75,
    baseServings: 6,
    innerPot: '雙內鍋皆可',
    releaseSummary: '全程無壓（蓋上鍋蓋不鎖定，免洩壓）',
    stoveDifference:
      '傳統電鍋或水煮達 100°C 易把雞皮滾破、肉質逼柴；萬用鍋鎖定 80°C 恆溫水浴完全免套塑膠袋，如同粵式浸雞般滑嫩多汁。',
    avoidPitfall:
      '熱雞捲與煮過的藥膳高湯務必徹底放涼後再沖入紹興酒，避免高溫把酒香揮發掉並產生苦味。',
    youtubeQuery: '特福鮮呼吸萬用鍋 舒肥醉雞 80度',
    sourceUrl: 'https://www.youtube.com/watch?v=6gkBLHQBnF0',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '帶皮去骨雞腿（完整大雞腿）', amount: 3, unit: '隻', note: '切勿劃破雞皮', group: 'main' },
      { name: '當歸', amount: 1, unit: '片', group: 'main' },
      { name: '枸杞', amount: 10, unit: '克', group: 'main' },
      { name: '鹽（抹雞腿用）', amount: null, unit: '少許', group: 'seasoning' },
      { name: '米酒（抹雞腿用）', amount: null, unit: '少許', group: 'seasoning' },
      { name: '雞高湯', amount: 450, unit: 'ml', note: '醬汁基底', group: 'seasoning' },
      { name: '紹興酒', amount: 600, unit: 'ml', group: 'seasoning' },
      { name: '鹽（醉雞醬汁用）', amount: 2, unit: '茶匙', group: 'seasoning' },
      { name: '細砂糖（醉雞醬汁用）', amount: 1, unit: '茶匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '斷筋調味並捲緊綁棉線',
        instruction:
          '去骨雞腿雞皮朝下鋪平於砧板，厚肉處輕劃數刀斷筋（切勿劃破雞皮），均勻抹上少許鹽與米酒；從較厚一端緊密向內捲成緊實圓柱捲（讓完整雞皮包覆最外層），用食品級純棉繩由頭至尾均勻螺旋纏繞綁緊打結。',
      },
      {
        stepNumber: 2,
        title: '免密封袋裸泡水浴 80°C／60 分鐘',
        instruction:
          '免套塑膠袋，直接將 3 捲綁好棉線的雞腿捲單層平鋪於內鍋底部，倒入清水至完全淹過雞腿捲（約在 1/2–3/4 刻度間；改用 70–80°C 熱水可省近 20 分升溫時間）。蓋上鍋蓋但保持解鎖不鎖定，選左側「舒肥料理」設 80°C、60 分鐘啟動。',
        potAction: {
          side: 'left',
          modeName: '舒肥料理',
          lid: 'closed_unlocked',
          durationText: '60 分鐘',
          temperature: '80°C',
          shortAction: '裸泡恆溫嫩浸雞',
        },
        tip: '想留濃縮雞凍者，可改用雙層鋁箔紙捲成糖果狀或耐高溫密封袋再舒肥。',
      },
      {
        stepNumber: 3,
        title: '冰鎮降溫後泡入紹興藥膳汁至少 8 小時',
        instruction:
          '時間結束開蓋取出熟雞捲（暫不拆線維持定型），先泡冰開水 5–10 分鐘降溫讓雞皮更脆彈後排入深口保鮮盒。將雞高湯 450ml、當歸 1 片、枸杞 10g、鹽 2 茶匙與糖 1 茶匙先煮滾 2 分鐘並徹底放涼，再兌入紹興酒 600ml 淋滿淹沒雞捲，加蓋冷藏冰鎮至少 8 小時（隔夜最入味）。',
      },
      {
        stepNumber: 4,
        title: '拆線切片擺盤上桌',
        instruction:
          '食用前取出冰涼入味的醉雞捲，剪開並抽除棉線，以利刀切約 1cm 圓片排盤，淋上少許盒中酒香滷汁並點綴紅潤枸杞即可享用。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-06-thick-shrimp-omelette',
    title: '超厚蝦仁四季豆烘蛋',
    subtitle: '同鍋 120°C 先開蓋煎香蝦仁四季豆，再淋蛋液免翻面烘熟',
    category: 'bake',
    cuisine: '台式',
    settingMinutes: 25,
    realTotalMinutes: 30,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（蓋上鍋蓋不鎖定，免洩壓）',
    stoveDifference:
      '省去另起炒鍋煎料與練翻鍋的麻煩，一組 120°C／25 分鐘自訂行程前段直接開蓋爆香蝦油、後段蓋蓋燜烘，整塊厚蛋鮮香不出水。',
    avoidPitfall:
      '蝦仁務必按乾水分、四季豆切 0.5cm 細丁先煸炒去水氣，且限定用球釜不沾內鍋並維持不鎖蓋。',
    youtubeQuery: '特福鮮呼吸萬用鍋 蝦仁烘蛋 自訂行程',
    sourceUrl: 'https://www.youtube.com/watch?v=LlInUxIXTK0',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '雞蛋', amount: 8, unit: '顆', group: 'main' },
      { name: '整尾蝦仁（去腸泥徹底擦乾）', amount: 400, unit: '克', note: '不切碎更彈牙', group: 'main' },
      { name: '四季豆（去絲切 0.5cm 圓丁末）', amount: 120, unit: '克', group: 'main' },
      { name: '沙拉油', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '鹽', amount: 0.5, unit: '茶匙', group: 'seasoning' },
      { name: '白胡椒粉', amount: 0.5, unit: '茶匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '切四季豆細末並打發蛋液起微泡',
        instruction:
          '四季豆去頭尾老筋橫切約 0.5cm 細圓丁；蝦仁開背去腸泥並用紙巾徹底按乾表面水分。8 顆蛋打入大碗，以攪拌棒或打蛋器高速攪打至鵝黃且表面鋪滿細密泡沫。',
      },
      {
        stepNumber: 2,
        title: '啟動自訂行程 120°C／25 分鐘並下油熱鍋',
        instruction:
          '保持開蓋，在球釜不沾內鍋倒入 2 大匙沙拉油，按左側「自訂行程」設定 120°C、25 分鐘後按下開始鍵（此模式一啟動即倒數，前 5 分鐘正好用來爆香餡料）。',
        potAction: {
          side: 'left',
          modeName: '自訂行程',
          lid: 'open',
          durationText: '前 5 分鐘（總設 25 分）',
          temperature: '120°C',
          shortAction: '開蓋熱油準備爆香',
        },
      },
      {
        stepNumber: 3,
        title: '開蓋前 5 分鐘煎香蝦仁與四季豆末',
        instruction:
          '油微熱後倒入吸乾水分的整尾蝦仁鋪平煎炒約 5 分鐘，至蝦仁捲曲轉鮮橘紅略帶焦香；接著下四季豆末、鹽 1/2 茶匙與白胡椒粉 1/2 茶匙快炒收乾底部水氣，將料均勻鋪平鍋底。',
        tip: '冷凍退冰蝦仁若出水較久，總時間可微調至 28–30 分鐘確保烘透。',
      },
      {
        stepNumber: 4,
        title: '一鍋淋入蛋液、蓋蓋不鎖定烘至完成',
        instruction:
          '將打發起泡的蛋液緩緩澆淋覆蓋在熱騰騰的蝦仁與四季豆上（可用矽膠匙極輕微撥散料而不消泡），立刻蓋上鍋蓋保持手把「解鎖」不鎖定，放手續烘完剩餘約 20 分鐘至自動停火。',
        potAction: {
          side: 'left',
          modeName: '自訂行程',
          lid: 'closed_unlocked',
          durationText: '後 20 分鐘',
          temperature: '120°C',
          shortAction: '不鎖蓋一鍋烘熟',
        },
      },
      {
        stepNumber: 5,
        title: '開蓋檢視熟度並反扣盛盤',
        instruction:
          '行程結束開蓋確認蛋面凝結澎起、邊緣與球釜分離（可沿鍋壁輕繞一圈矽膠刮刀助鬆動），取大圓平盤反蓋鍋口迅速倒扣，即可端出底面金黃焦香的超厚蝦仁烘蛋。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-07-one-pot-zongzi',
    title: '古早味北部肉粽',
    subtitle: '從爆炒滷料、快煮 Q 彈糯米油飯到高壓蒸粽 12 分，全程免開瓦斯',
    category: 'rice',
    cuisine: '台式',
    settingMinutes: 41,
    realTotalMinutes: 95,
    baseServings: 6,
    innerPot: '雙內鍋皆可',
    releaseSummary: '煮糯米飯與蒸粽皆採自然自動洩壓',
    stoveDifference:
      '省去大炒鍋炒料、糯米泡隔夜與大蒸籠燒水顧火的繁複流程，9 杯免泡糯米搭 1.5 杯滷汁與 5 杯水高壓快煮，再鎖蓋蒸 12 分即透葉香。',
    avoidPitfall:
      '炒滷料務必補水 250ml 滾滷才能生出 1.5 杯滷汁；最後蒸粽換不鏽鋼內鍋配金屬架，或於球釜鍋改放原廠塑膠蒸盤防刮塗層。',
    youtubeQuery: '特福鮮呼吸萬用鍋 一鍋到底肉粽 北部粽',
    sourceUrl: 'https://www.youtube.com/watch?v=zP8kz-w18Is',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '胛心肉（切約 3cm 肉塊）', amount: 400, unit: '克', group: 'main' },
      { name: '紅蔥頭（切片或切粗末）', amount: 80, unit: '克', group: 'main' },
      { name: '乾香菇（泡發去蒂）', amount: 20, unit: '朵', group: 'main' },
      { name: '乾栗子（去膜泡軟）', amount: 20, unit: '顆', group: 'main' },
      { name: '蝦米（洗淨泡軟瀝乾）', amount: 40, unit: '克', group: 'main' },
      { name: '長糯米（洗淨瀝乾，免提前泡）', amount: 1200, unit: '克', note: '約 9 量米杯', group: 'main' },
      { name: '熟鹹蛋黃', amount: 10, unit: '顆', group: 'main' },
      { name: '粽葉與棉繩', amount: 22, unit: '張', note: '刷洗燙軟擦乾', group: 'main' },
      { name: '沙拉油', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '醬油（滷餡用）', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '細砂糖（滷餡用）', amount: 2, unit: '茶匙', group: 'seasoning' },
      { name: '五香粉（滷餡用）', amount: 1, unit: '茶匙', group: 'seasoning' },
      { name: '鹽（滷餡 0.5 茶匙＋米飯 1 茶匙）', amount: 1.5, unit: '茶匙', group: 'seasoning' },
      { name: '白胡椒粉（滷餡與米飯各 1 茶匙）', amount: 2, unit: '茶匙', group: 'seasoning' },
      { name: '滷料用水', amount: 250, unit: 'ml', note: '滾滷出滷汁用', group: 'seasoning' },
      { name: '煮糯米用水', amount: 5, unit: '杯', note: '配鍋底1.5杯滷汁', group: 'seasoning' },
      { name: '蒸粽用水', amount: 1, unit: '杯', note: '最後墊鍋底用', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '爆香紅蔥頭與蝦米',
        instruction:
          '使用黑色陶晶球釜內鍋保持開蓋，按左側「爆炒煎烤」將時間調長至 15 分鐘啟動；倒入 3 大匙油，下紅蔥頭末不停翻炒至金黃酥香，接著下泡發蝦米炒出濃郁海味。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '15 分鐘',
          temperature: '150°C',
          shortAction: '開蓋炒料滾滷內餡',
        },
      },
      {
        stepNumber: 2,
        title: '炒肉調味並加水 250ml 滾滷栗子香菇',
        instruction:
          '倒入胛心肉塊與泡發香菇拌炒至肉色轉白，加醬油 3 大匙、鹽 1/2 茶匙、細砂糖 2 茶匙、白胡椒粉 1 茶匙與五香粉 1 茶匙炒勻裹色；投入泡發栗子 20 顆並淋入 250ml 水，續拌滾滷至 15 分鐘結束。',
      },
      {
        stepNumber: 3,
        title: '撈起大塊餡料、留蝦米與 1.5 杯滷汁',
        instruction:
          '夾出滷好的肉塊、香菇與栗子放盤備用；鍋底保留蝦米與約 1.5 杯滷汁（過少補少許熱水湊足，過多則撈出部分防米飯太濕）。',
      },
      {
        stepNumber: 4,
        title: '拌入糯米與水高壓快煮油飯',
        instruction:
          '將剩餘鹽 1 茶匙與白胡椒粉 1 茶匙拌入鍋底滷汁調勻，倒入洗淨瀝乾的 9 杯糯米翻拌沾滿滷香，再倒入 5 杯清水略鋪平。鎖緊上蓋按右側「快煮米飯」，待行程結束並自動洩壓。',
        potAction: {
          side: 'right',
          modeName: '快煮米飯',
          lid: 'locked',
          durationText: '14 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '免泡高壓煮油飯',
        },
        tip: '若改用圓糯米（較軟黏），清水建議減至 4.5 杯。',
      },
      {
        stepNumber: 5,
        title: '開蓋趁熱翻鬆揮發水氣',
        instruction:
          '洩壓開蓋後立刻以飯匙由下往上徹底翻鬆油飯，讓多餘蒸氣散出，米粒才會粒粒分明、口感 Q 彈不黏糊。',
      },
      {
        stepNumber: 6,
        title: '折粽葉填餡綁緊成四角肉粽',
        instruction:
          '取 2 張刷淨燙軟的粽葉（小張放內、大張放外頭尾相疊）在約 1/3 處折漏斗狀並反摺底尖防漏米；填入 1 勺油飯 ➔ 塞入肉塊、香菇、栗子與熟鹹蛋黃 ➔ 填滿油飯壓平，蓋折成四角立體粽並以棉繩繞粽腰紮緊（共約包 10–12 顆）。',
      },
      {
        stepNumber: 7,
        title: '架蒸架加 1 杯水高壓蒸 12 分鐘',
        instruction:
          '換上 304 不鏽鋼內鍋放金屬小蒸架（或乾淨球釜內鍋改放原廠耐熱塑膠蒸盤），鍋底倒 1 杯水並整齊疊放粽子（單鍋約放 6–8 顆，多餘可分批）。鎖緊上蓋選右側「蒸／一鍋兩菜」按＋調至 12 分鐘啟動，洩壓開蓋即可享用。',
        potAction: {
          side: 'right',
          modeName: '蒸／一鍋兩菜',
          lid: 'locked',
          durationText: '12 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '10 kPa 蒸透葉香',
        },
        tip: '多包的肉粽可冷凍保存，要吃時同樣加 1 杯水用蒸模式蒸 15–18 分鐘回溫。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-09-one-pot-rice-pork-belly-sausage',
    title: '一飯兩菜：白飯配五花肉與香腸',
    subtitle: '整條帶皮五花與生香腸直接鋪米面，快煮米飯 14 分三品同步開飯',
    category: 'steam',
    cuisine: '台式',
    settingMinutes: 14,
    realTotalMinutes: 35,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓後多悶 5 分鐘',
    stoveDifference:
      '省去一邊顧電鍋煮飯、一邊開油鍋煎香腸與另煮蒜泥白肉的麻煩；肉類鮮油直接滲入米飯且不須減水，米水維持 1:1 就油亮 Q 彈。',
    avoidPitfall:
      '五花肉切勿先切片，整條帶皮入鍋才能鎖住肉汁不柴；肉厚逾 4cm 建議先切半條防中心未透，煮後記得洗淨矽膠圈除味。',
    youtubeQuery: '特福鮮呼吸萬用鍋 一飯兩菜 五花肉 香腸',
    sourceUrl: 'https://www.youtube.com/watch?v=lcaSI2v9JgQ',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '白米（洗淨瀝乾）', amount: 4, unit: '杯', group: 'main' },
      { name: '帶皮五花肉（整條不切塊）', amount: 300, unit: '克', note: '略退冰擦乾血水', group: 'main' },
      { name: '台式生香腸（完整不切）', amount: 5, unit: '條', group: 'main' },
      { name: '飲用水', amount: 4, unit: '杯', note: '與米維持 1:1', group: 'seasoning' },
      { name: '蒜泥辣椒醬油', amount: null, unit: '適量', note: '沾五花肉片', group: 'seasoning' },
      { name: '嫩薑絲與斜切青蒜苗', amount: null, unit: '適量', note: '起鍋佐盤', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '鋪米加水打底',
        instruction:
          '將洗淨瀝乾的 4 杯白米倒入 304 不鏽鋼內鍋（球釜亦可），加入 4 杯飲用水並稍微搖平米面，使米粒均勻浸沒水中。',
      },
      {
        stepNumber: 2,
        title: '整條放上五花肉與香腸',
        instruction:
          '將 5 條完整生香腸與 1 整條帶皮五花肉並排平鋪在米水上方，彼此避免上下重疊以利均勻受熱；擦乾內鍋外底放入主機。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋啟動快煮米飯行程',
        instruction:
          '蓋上鍋蓋並順時鐘轉到底鎖定，按右側「快煮米飯」（預設 30 kPa、14 分鐘）啟動。行程結束等待自然自動洩壓，建議不急開蓋續悶 5–10 分鐘讓厚五花肉更透、底層米飯收乾不黏。',
        potAction: {
          side: 'right',
          modeName: '快煮米飯',
          lid: 'locked',
          durationText: '14 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '一鍋同步蒸飯肉',
        },
        tip: '米飯類切勿強制手動快洩，避免澱粉泡沫噴漿。',
      },
      {
        stepNumber: 4,
        title: '開蓋夾出雙主菜、翻鬆白飯',
        instruction:
          '確認洩壓完將鍋蓋朝外傾斜掀開，用夾子先夾出紅亮完整的香腸與熟透五花肉放上瓷盤，再趁熱用飯匙由下往上翻鬆白飯，讓肉油均勻裹覆米粒。',
      },
      {
        stepNumber: 5,
        title: '改刀切盤配佐料上桌',
        instruction:
          '熟五花肉略放 2–3 分鐘不燙手後逆紋切薄片排盤，旁佐嫩薑絲與蒜泥辣椒醬油；熟香腸斜切滾刀厚塊配青蒜苗，與油香白飯同步開飯。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-10-one-pot-rice-salmon-chicken-thigh',
    title: '一飯兩菜：白飯配鮭魚與雞腿',
    subtitle: '精準減水 3.5 杯海陸一鍋蒸，魚油雞汁滲米飯依然粒粒分明',
    category: 'steam',
    cuisine: '台式',
    settingMinutes: 14,
    realTotalMinutes: 35,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓後多悶 5 分鐘',
    stoveDifference:
      '鮭魚免油煎零油煙、大雞腿免另蒸；因雞腿高壓會釋放大量鮮汁，關鍵在把 4 杯米水量精準減為 3.5 杯，才不會把白飯悶成濕糊飯。',
    avoidPitfall:
      '鮭魚與大雞腿務必完全退冰擦乾再下鍋，且煮飯水一定要少 0.5 杯；優先用不鏽鋼內鍋防骨頭刮塗層，煮後徹底洗膠條除魚味。',
    youtubeQuery: '特福鮮呼吸萬用鍋 一飯兩菜 鮭魚 雞腿',
    sourceUrl: 'https://www.youtube.com/watch?v=lcaSI2v9JgQ',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '白米（洗淨徹底瀝乾）', amount: 4, unit: '杯', group: 'main' },
      { name: '厚切輪切鮭魚排（完全退冰擦乾）', amount: 1, unit: '片', note: '厚約 2–2.5cm', group: 'main' },
      { name: '帶骨全雞腿（完全退冰擦乾）', amount: 1, unit: '支', note: '整支不切塊', group: 'main' },
      { name: '飲用水', amount: 3.5, unit: '杯', note: '關鍵減 0.5 杯水', group: 'seasoning' },
      { name: '胡椒鹽', amount: null, unit: '適量', note: '起鍋撒鮭魚', group: 'seasoning' },
      { name: '辣椒醬（或蒜蓉辣醬）', amount: null, unit: '適量', note: '起鍋沾雞腿', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '鋪米並加入減量後的 3.5 杯水',
        instruction:
          '將洗淨且徹底瀝除殘水的 4 杯白米平鋪於 304 不鏽鋼內鍋底，精準倒入減量後的 3.5 杯飲用水（比平常少 0.5 杯）並輕輕晃平。',
      },
      {
        stepNumber: 2,
        title: '左右並排放入整支雞腿與厚切鮭魚',
        instruction:
          '擦乾內鍋外底放入主機，在米水表面左半邊平放整支帶皮全雞腿（雞皮朝上）、右半邊並排平放厚切鮭魚排，互不重疊；對魚味敏感者可先在鮭魚兩面極薄擦一層鹽與米酒去腥。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋啟動快煮米飯功能',
        instruction:
          '順時鐘鎖緊上蓋，按右側「快煮米飯」（預設 30 kPa、14 分鐘）啟動；行程結束待自然自動洩壓，建議多悶 5 分鐘確保帶骨大雞腿骨邊全熟無血絲。',
        potAction: {
          side: 'right',
          modeName: '快煮米飯',
          lid: 'locked',
          durationText: '14 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '減水高壓海陸蒸',
        },
        tip: '改做 2 杯米小家庭份時，改配 1.7 杯水加半片鮭魚與 1 片去骨雞腿排。',
      },
      {
        stepNumber: 4,
        title: '開蓋夾出海陸主菜並翻鬆白飯',
        instruction:
          '洩壓後朝外傾斜開蓋，先夾出油潤熟透的全雞腿與鮭魚排分別裝盤，再立刻用飯匙翻鬆底下吸飽雞汁魚鮮卻依然粒粒分明的白飯。',
      },
      {
        stepNumber: 5,
        title: '雞腿切塊、鮭魚撒椒鹽開動',
        instruction:
          '將熟全雞腿切成長條厚塊排盤並附一小碟辣椒醬沾食，熟鮭魚表面均勻撒上胡椒鹽，海陸雙主菜配鮮香白飯一次上桌。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-11-one-pot-rice-radish-corn',
    title: '一飯兩菜：白飯配白蘿蔔與玉米',
    subtitle: '蔬食厚切鋪米高壓蒸，鎖住玉米脆甜與蘿蔔多汁，白飯飄清香',
    category: 'steam',
    cuisine: '台式',
    settingMinutes: 14,
    realTotalMinutes: 35,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓後多悶 5 分鐘',
    stoveDifference:
      '傳統水煮白蘿蔔與玉米會把甜分稀釋在湯裡，放米飯上加壓蒸熟能牢牢鎖住蔬果原甜，微許清甜菜汁還直接被白米吸收。',
    avoidPitfall:
      '白蘿蔔務必削厚一點去硬皮並輪切 3–4cm 厚塊，切太薄高壓容易蒸爛碎裂，夏季粗纖維蘿蔔可稍切薄至 2.5–3cm。',
    youtubeQuery: '特福鮮呼吸萬用鍋 一飯兩菜 白蘿蔔 玉米',
    sourceUrl: 'https://www.youtube.com/watch?v=lcaSI2v9JgQ',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '白米（洗淨瀝乾）', amount: 4, unit: '杯', group: 'main' },
      { name: '白蘿蔔（削厚皮切 3–4cm 厚圓塊）', amount: 2, unit: '小條', note: '約切 10 塊', group: 'main' },
      { name: '甜玉米（去殼鬚切 3–4cm 厚段）', amount: 2, unit: '條', note: '約切 10 段', group: 'main' },
      { name: '飲用水', amount: 4, unit: '杯', group: 'seasoning' },
      { name: '醬油膏', amount: null, unit: '適量', note: '關東煮式沾醬', group: 'seasoning' },
      { name: '黃芥末醬', amount: null, unit: '適量', note: '配醬油膏沾食', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '米水打底並分區排入蘿蔔與玉米',
        instruction:
          '將洗淨的 4 杯白米倒入黑色球釜不沾內鍋，加 4 杯水搖勻鋪平；在米水上左半邊單層密排削皮厚切的白蘿蔔圓塊、右半邊單層密排切段的甜玉米（勿疊高）。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋啟動快煮米飯模式',
        instruction:
          '擦乾內鍋外底放入機身，順時鐘鎖緊上蓋按右側「快煮米飯」（預設 30 kPa、14 分鐘）啟動；行程結束等自然自動洩壓，建議續悶 5 分鐘讓蘿蔔餘溫更透甜、飯底不沾黏。',
        potAction: {
          side: 'right',
          modeName: '快煮米飯',
          lid: 'locked',
          durationText: '14 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鎖甜蒸蔬兼煮飯',
        },
      },
      {
        stepNumber: 3,
        title: '開蓋檢視熟度並夾出雙蔬',
        instruction:
          '朝外傾斜開蓋，確認白蘿蔔已轉為半透明晶瑩玉白色、甜玉米粒飽滿金黃且底層飯乾爽鬆軟，趁熱夾出白蘿蔔與玉米盛盤。',
      },
      {
        stepNumber: 4,
        title: '翻鬆清香白飯配醬上桌',
        instruction:
          '用飯匙將吸飽蘿蔔與玉米自然清香的白飯翻鬆盛碗，小圓碟擠入醬油膏與黃芥末醬沾食蔬食即可開飯。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-12-one-pot-rice-sweet-potato-taro',
    title: '一飯兩菜：白飯配地瓜與小芋頭',
    subtitle: '帶皮同蒸不糊化不咬手，14 分一次備妥早中晚三餐主食',
    category: 'steam',
    cuisine: '台式',
    settingMinutes: 14,
    realTotalMinutes: 35,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（高澱粉嚴禁快洩）',
    stoveDifference:
      '高壓蒸地瓜與芋頭比電鍋省時一半，且生芋頭不必冒著手癢風險先削皮，刷淨外皮直接放米飯上同蒸，熟後一剝即脫皮、白飯粒粒清晰不沾糊。',
    avoidPitfall:
      '地瓜與小芋頭務必先用蔬果刷徹底刷淨表皮泥沙且保留完整外皮防糊化；特大胖地瓜建議先橫切對半防夾生。',
    youtubeQuery: '特福鮮呼吸萬用鍋 一飯兩菜 地瓜 小芋頭',
    sourceUrl: 'https://www.youtube.com/watch?v=lcaSI2v9JgQ',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '白米（洗淨瀝乾）', amount: 4, unit: '杯', group: 'main' },
      { name: '中小型地瓜（帶皮徹底刷淨泥沙）', amount: 3, unit: '條', note: '直徑 4–5cm 佳', group: 'main' },
      { name: '帶皮小芋頭（徹底刷淨泥沙毛刺）', amount: 6, unit: '顆', note: '約雞蛋大小', group: 'main' },
      { name: '飲用水', amount: 4, unit: '杯', group: 'seasoning' },
      { name: '醬油或蒜蓉醬油膏', amount: null, unit: '適量', note: '熟芋頭去皮沾食', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '刷淨外皮並排入米水上',
        instruction:
          '地瓜與小芋頭保留完整外皮在流水下徹底刷淨泥沙細根（勿削皮防鬆散糊化）。球釜內鍋放入 4 杯洗淨白米與 4 杯水鋪平，左半側排入 6 顆小芋頭、右半側平放 3 條地瓜，不重疊，高度約在內鍋 1/2 處。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋啟動快煮米飯省時蒸透',
        instruction:
          '擦乾內鍋外底放入主機，順時鐘鎖緊上蓋按右側「快煮米飯」（30 kPa、14 分鐘）啟動；行程結束務必等待自然自動洩壓完成再掀蓋。',
        potAction: {
          side: 'right',
          modeName: '快煮米飯',
          lid: 'locked',
          durationText: '14 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '帶皮高壓快熟',
        },
        tip: '若買到直徑超過 6cm 的特大胖地瓜，建議橫切對半切面朝上放置，或洩壓後多悶 10 分鐘以竹籤確認熟透。',
      },
      {
        stepNumber: 3,
        title: '開蓋檢視完整外皮與乾爽米飯',
        instruction:
          '掀蓋確認地瓜與小芋頭外皮完整無爆裂、底下白米潔白粒粒分明；夾起地瓜與芋頭置盤，輕撥掉表皮少許飯粒。',
      },
      {
        stepNumber: 4,
        title: '分餐享用一鍋三主食',
        instruction:
          '熟地瓜綿密金黃可連皮當早餐，鍋內潔白米飯翻鬆當午餐，熟小芋頭趁溫熱輕剝即輕鬆去皮（完全不咬手）沾醬油當晚餐配菜，一鍋備妥全天主食。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-13-steamed-black-bean-ribs-with-rice',
    title: '上蒸下煮：豆豉排骨配白飯',
    subtitle: '淺瓷盤接滿蒜香豆豉肉汁，搭專用蒸盤 14 分同步蒸出嫩排骨與白飯',
    category: 'steam',
    cuisine: '台式',
    settingMinutes: 14,
    realTotalMinutes: 35,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（排骨較厚可多悶 5 分）',
    stoveDifference:
      '別選火力偏弱的蒸一鍋兩菜（僅 10 kPa／8 分），改用快煮米飯（30 kPa／14 分）才能同時把 4 杯生米煮鬆、400g 帶骨生排骨蒸到滑嫩離骨。',
    avoidPitfall:
      '排骨務必先裝進直徑 18–20cm 耐熱淺瓷盤再放上蒸盤，才能留住濃郁肉汁又不滴黑底層白飯，並平鋪單層勿頂到上蓋。',
    youtubeQuery: '特福鮮呼吸萬用鍋 豆豉排骨 一鍋兩菜',
    sourceUrl: 'https://www.youtube.com/watch?v=6gkBLHQBnF0',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '豬小排（切 3–4cm 一口塊洗淨擦乾）', amount: 400, unit: '克', group: 'main' },
      { name: '白米（洗淨瀝乾）', amount: 4, unit: '杯', note: '下層白飯用', group: 'main' },
      { name: '蒜末', amount: 20, unit: '克', group: 'main' },
      { name: '紅辣椒末', amount: 10, unit: '克', note: '怕辣可去籽減量', group: 'main' },
      { name: '發酵黑豆豉（略沖瀝乾不搓碎）', amount: 15, unit: '克', group: 'main' },
      { name: '飲用水（下層煮飯用）', amount: 4, unit: '杯', group: 'seasoning' },
      { name: '太白粉', amount: 2, unit: '茶匙', note: '第一段抓醃', group: 'seasoning' },
      { name: '蠔油', amount: 2, unit: '大匙', note: '第一段抓醃', group: 'seasoning' },
      { name: '米酒', amount: 1, unit: '大匙', note: '第一段抓醃', group: 'seasoning' },
      { name: '細砂糖', amount: 0.5, unit: '茶匙', group: 'seasoning' },
      { name: '香油', amount: 1, unit: '大匙', note: '最後封鎖肉汁', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '下層鋪米加水、架上專用蒸盤',
        instruction:
          '將洗淨瀝乾的 4 杯白米倒入 304 不鏽鋼內鍋，加入 4 杯水晃平米面，再於內鍋上方穩妥架入原廠專用蒸盤。',
      },
      {
        stepNumber: 2,
        title: '兩段抓醃排骨裝入淺瓷盤放上蒸盤',
        instruction:
          '取深碗先將擦乾的豬小排與太白粉 2 茶匙、蠔油 2 大匙、米酒 1 大匙充分抓醃至醬汁吸收成滑潤薄漿；再拌入糖 1/2 茶匙、蒜末、辣椒末、豆豉與香油 1 大匙封住肉汁。將排骨連同醬料單層平鋪於直徑 18–20cm 耐熱淺瓷盤中，放上專用蒸盤（確認不堆高頂蓋）。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋啟動快煮米飯同步上蒸下煮',
        instruction:
          '擦乾內鍋外底放入主機，順時鐘鎖緊上蓋按右側「快煮米飯」（預設 30 kPa、14 分鐘）啟動；行程結束等待自然自動洩壓（排骨塊較大厚可多悶 5–10 分鐘更輕鬆骨肉分離）。',
        potAction: {
          side: 'right',
          modeName: '快煮米飯',
          lid: 'locked',
          durationText: '14 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '30 kPa 上蒸下煮',
        },
      },
      {
        stepNumber: 4,
        title: '開蓋取盤並翻鬆白飯同步開飯',
        instruction:
          '朝外傾斜掀蓋，以防燙取碗夾或厚手套平穩提起滾燙的排骨淺盤（盤底積滿鮮香琥珀豆豉肉汁）與蒸盤，將下層潔白蓬鬆的白飯翻鬆盛碗，舀一匙盤底豆豉肉汁淋飯最對味。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-14-mushroom-cured-meat-claypot-rice',
    title: '蕈菇臘味煲仔飯',
    subtitle: '開蓋煸香雙菇蒜末再切煲仔飯模式，免顧火自動結大片金黃鍋巴',
    category: 'rice',
    cuisine: '港式',
    settingMinutes: 28,
    realTotalMinutes: 55,
    baseServings: 6,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（想更脆可保溫續悶 5 分）',
    stoveDifference:
      '砂鍋煲仔飯極難拿捏火候又怕燒黑黏鍋；球釜不沾內鍋先爆炒菇香再跑煮粥／煲仔飯行程，結出大片金黃脆鍋巴還能整片輕鬆鏟起。',
    avoidPitfall:
      '臘味本身鹹香，5 杯米只需 2 大匙醬油勿再加鹽；全程限用球釜內鍋與木匙或原廠飯匙鏟鍋巴，切勿用鐵鏟刮傷塗層。',
    youtubeQuery: '特福鮮呼吸萬用鍋 蕈菇臘味飯 煲仔飯鍋巴',
    sourceUrl: 'https://www.youtube.com/watch?v=6gkBLHQBnF0',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '白米（洗淨徹底瀝乾）', amount: 5, unit: '杯', note: '6–8 人大家庭份量', group: 'main' },
      { name: '廣式臘腸（斜切 0.3–0.5cm 薄片）', amount: 140, unit: '克', group: 'main' },
      { name: '廣式肝腸（斜切 0.3–0.5cm 薄片）', amount: 140, unit: '克', group: 'main' },
      { name: '臘肉（略燙去多餘鹽切薄片）', amount: 150, unit: '克', group: 'main' },
      { name: '雪白菇（去蒂剝散免久泡水）', amount: 100, unit: '克', group: 'main' },
      { name: '鴻喜菇（去蒂剝散免久泡水）', amount: 100, unit: '克', group: 'main' },
      { name: '蒜末', amount: 20, unit: '克', group: 'main' },
      { name: '沙拉油', amount: 2, unit: '大匙', note: '爆香兼結脆鍋巴', group: 'seasoning' },
      { name: '醬油', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '白胡椒粉', amount: 1, unit: '茶匙', group: 'seasoning' },
      { name: '飲用水', amount: 5, unit: '杯', note: '與米維持 1:1', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '開蓋啟動爆炒煎烤 8 分鐘爆香蒜末與雙菇',
        instruction:
          '使用黑色陶晶球釜內鍋保持開蓋，按左側「爆炒煎烤」（150°C）將時間調至 8 分鐘啟動；倒入 2 大匙沙拉油微熱後下 20g 蒜末，以木匙翻炒至起細泡呈乳白微黃飄蒜香，再下雪白菇與鴻喜菇煸炒至略軟逼出香氣。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '8 分鐘',
          temperature: '150°C',
          shortAction: '煸香蒜末與雙菇',
        },
      },
      {
        stepNumber: 2,
        title: '下生米、三寶臘味與調味料拌勻',
        instruction:
          '倒入洗淨徹底瀝乾的 5 杯白米與切片臘腸、肝腸、臘肉翻拌，依序撒入白胡椒粉 1 茶匙、淋醬油 2 大匙並加 5 杯飲用水，由下往上徹底拌勻整平（確認勿超最高水位線）。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋啟動煮粥／煲仔飯自動結鍋巴',
        instruction:
          '蓋上鍋蓋並順時鐘鎖緊，按右側「煮粥／煲仔飯」（預設 30 kPa、20 分鐘）啟動，全程免顧火靜待烹調與自然自動洩壓完成。',
        potAction: {
          side: 'right',
          modeName: '煮粥／煲仔飯',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '免顧火結金黃鍋巴',
        },
        tip: '想吃更酥脆的鍋巴，自動洩壓後可先保溫續悶 5 分鐘再開蓋。',
      },
      {
        stepNumber: 4,
        title: '開蓋翻鏟大片金黃鍋巴趁熱享用',
        instruction:
          '洩壓後朝外傾斜掀蓋，用原廠飯匙或矽膠匙沿球釜弧壁深入鍋底向上翻拌，將底層完整金黃酥脆的鍋巴與臘味菇飯拌勻盛碗；可依個人喜好撒蔥花或淋港式甜醬油。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-15-egg-and-shrimp-fried-rice',
    title: '爆炒黃金蛋與蝦仁炒飯',
    subtitle: '150°C 開蓋快炒水氣秒散，球釜弧底翻出粒粒分明無煙鑊氣',
    category: 'rice',
    cuisine: '台式',
    settingMinutes: 10,
    realTotalMinutes: 14,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程開蓋無壓（免洩壓）',
    stoveDifference:
      '一般電子鍋火力弱又得反覆悶蓋，米飯易結團發濕；特福 150°C 爆炒煎烤可全程開蓋快散水氣，深口弧底翻炒米粒不易飛出、少油煙又有鑊氣。',
    avoidPitfall:
      '蝦仁務必先汆燙瀝乾防出水、白飯用放涼或隔夜飯；單次勿超過 2 碗飯（400g），下飯後絕不蓋蓋以免悶濕。',
    youtubeQuery: '特福鮮呼吸萬用鍋 蛋炒飯 蝦仁炒飯',
    sourceUrl: 'https://www.youtube.com/watch?v=uSW0Zndrkos',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '乾爽白飯（隔夜飯或先攤涼散水氣）', amount: 400, unit: '克', note: '約 2 碗量', group: 'main' },
      { name: '雞蛋（打散成均勻全蛋液）', amount: 2, unit: '顆', group: 'main' },
      { name: '熟蝦仁（去腸泥汆燙瀝乾擦乾）', amount: 200, unit: '克', note: '純蛋炒飯可省', group: 'main' },
      { name: '蔥花', amount: 30, unit: '克', group: 'main' },
      { name: '沙拉油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '鹽', amount: 0.5, unit: '茶匙', group: 'seasoning' },
      { name: '黑胡椒粉', amount: 0.5, unit: '茶匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動爆炒煎烤並充分熱油',
        instruction:
          '使用黑色陶晶球釜內鍋保持開蓋，按左側「爆炒煎烤」（150°C，預設 2 分請按＋調至 8–10 分鐘）啟動；倒入 1 大匙沙拉油鋪滿鍋底，開蓋充分蓄熱約 2–3 分鐘。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '8–10 分鐘',
          temperature: '150°C',
          shortAction: '開蓋 150°C 熱鍋快炒',
        },
      },
      {
        stepNumber: 2,
        title: '高溫下蛋液滑炒至半凝固或成型',
        instruction:
          '鍋夠熱後緩緩倒入打散的 2 顆蛋液，以木匙或矽膠匙迅速滑散；做「黃金蛋包飯」炒至濕潤半凝固即可停手下飯，做「蝦仁蛋炒飯」則略炒至蓬鬆蛋花成型。',
        tip: '純黃金蛋炒飯（1 碗飯配 2 顆蛋）趁蛋液半凝固時下飯，米粒會顆顆裹上金黃蛋衣。',
      },
      {
        stepNumber: 3,
        title: '加入熟蝦仁與白飯開蓋輕壓翻炒',
        instruction:
          '倒入已瀝乾擦乾的 200g 熟蝦仁炒勻沾附蛋香，再加入白飯，全程保持開蓋讓水氣蒸散；用匙背輕壓撥散飯塊並順著球釜弧壁畫圓翻炒 3–4 分鐘，至飯粒乾爽蓬鬆、顆顆分明。',
      },
      {
        stepNumber: 4,
        title: '加鹽、黑胡椒粉與蔥花快拌起鍋',
        instruction:
          '炒到飯粒乾香鬆散後，加入鹽 1/2 茶匙、黑胡椒粉 1/2 茶匙拌勻，最後倒入鮮綠蔥花快速翻炒約 20–30 秒炒出蔥香，立即按「取消」盛碗享用。',
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-18-mapo-tofu',
    title: '球釜麻婆豆腐',
    subtitle: '絞肉炒出豆瓣紅油後無壓燜燒 3 分，圓弧球釜輕推豆腐不碎不破',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 15,
    realTotalMinutes: 18,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（燜燒蓋蓋不鎖定，免洩壓）',
    stoveDifference:
      '球釜內鍋沒有直角死角且不沾鍋底，用木勺背面順著弧壁輕推豆腐就不易破散；下豆腐後不鎖蓋燜 3 分鐘，輕鬆燒出紅亮入味湯底。',
    avoidPitfall:
      '各牌辣豆瓣醬鹹辣度差異大，偏好清淡可先下 2.5–3 大匙試味調整；燜煮務必不鎖蓋，花椒粉最後開蓋再撒才不苦。',
    youtubeQuery: '特福鮮呼吸萬用鍋 麻婆豆腐 爆炒煎烤',
    sourceUrl: 'https://www.youtube.com/watch?v=mar8xL9X4z8',
    sourceTag: '楊桃美食網 楊桃文化 特福官方',
    ingredients: [
      { name: '板豆腐（切 1.5–2cm 立方丁）', amount: 300, unit: '克', note: '耐煮不易碎', group: 'main' },
      { name: '豬絞肉', amount: 200, unit: '克', note: '肥瘦 3:7 最香', group: 'main' },
      { name: '蒜末', amount: 10, unit: '克', group: 'main' },
      { name: '薑末', amount: 10, unit: '克', group: 'main' },
      { name: '蔥花', amount: 30, unit: '克', group: 'main' },
      { name: '食用油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '辣豆瓣醬', amount: 4, unit: '大匙', note: '清淡可減至3大匙', group: 'seasoning' },
      { name: '醬油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '細砂糖', amount: 1, unit: '茶匙', group: 'seasoning' },
      { name: '開水', amount: 150, unit: 'ml', group: 'seasoning' },
      { name: '太白粉水（粉水調勻）', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '花椒粉', amount: 1, unit: '茶匙', note: '起鍋前再撒', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動爆炒模式、熱油爆香薑蒜',
        instruction:
          '球釜內鍋保持開蓋，按左側「爆炒煎烤」（150°C）將時間設 15 分鐘啟動；倒入 1 大匙食用油熱鍋，下薑末 10g 與蒜末 10g 拌炒至油面起細密油泡、飄出濃郁薑蒜香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '總設 15 分鐘（爆香炒肉約 4 分）',
          temperature: '150°C',
          shortAction: '爆香薑蒜炒絞肉',
        },
      },
      {
        stepNumber: 2,
        title: '炒散豬絞肉並炒出豆瓣紅油',
        instruction:
          '倒入豬絞肉 200g 以木勺快速撥散炒至全數轉白、顆粒分明，再投入 4 大匙辣豆瓣醬持續翻炒約 1 分鐘，充分炒出紅油與醇厚豆瓣發酵香。',
      },
      {
        stepNumber: 3,
        title: '下醬湯與板豆腐丁，無壓蓋蓋燒煮 3 分鐘',
        instruction:
          '依序倒入醬油 1 大匙、細砂糖 1 茶匙、開水 150ml 與切好的板豆腐丁 300g，以木勺背面順著球釜圓弧輕輕推勻防碎；蓋上鍋蓋保持手把直向「解鎖」不鎖定，無壓燜燒約 3 分鐘入味。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'closed_unlocked',
          durationText: '3 分鐘',
          temperature: '150°C',
          shortAction: '不鎖蓋燜燒豆腐',
        },
      },
      {
        stepNumber: 4,
        title: '開蓋勾芡、撒花椒粉與蔥花起鍋',
        instruction:
          '掀開鍋蓋維持微滾，分次淋入拌勻的太白粉水 2 大匙並以木勺輕推畫圓至湯汁濃亮、紅油浮面；最後撒入花椒粉 1 茶匙與蔥花 30g 輕推兩下，立即按「取消」盛盤（全程約 8–10 分鐘完成）。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 1–2 分鐘',
          temperature: '150°C',
          shortAction: '開蓋勾芡撒花椒',
        },
      },
    ],
  },
  {
    id: 'spec-ytower-tefal-19-kung-pao-chicken',
    title: '滑嫩宮保雞丁',
    subtitle: '改用去骨雞腿丁免蛋白上漿！1 碗調好宮保醬汁開蓋 8 分快炒拌花生',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 8,
    realTotalMinutes: 12,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程開蓋無壓（免洩壓）',
    stoveDifference:
      '把容易乾柴的雞胸肉改成「去骨雞腿肉切丁」，直接省掉分蛋清、蛋白上漿與過油的繁瑣前置；醬料先在碗裡一次調勻，開蓋快炒 8 分鐘就能酸甜焦香不嗆煙。',
    avoidPitfall:
      '綜合宮保醬汁淋下鍋前再攪一下（防太白粉沉底結塊）；熟花生務必離火前 5 秒才放保酥脆，炒完立刻按取消盛盤。',
    youtubeQuery: '特福鮮呼吸萬用鍋 宮保雞丁 簡化版',
    sourceUrl: 'https://www.youtube.com/watch?v=mar8xL9X4z8',
    sourceTag: '楊桃美食網 楊桃文化 特福官方 懶人簡化版',
    ingredients: [
      { name: '去骨雞腿肉（切約 2 公分方丁，免蛋白上漿）', amount: 500, unit: '克', group: 'main' },
      { name: '青蔥（切 3 公分長段）', amount: 3, unit: '支', group: 'main' },
      { name: '蒜頭（切末）', amount: 4, unit: '瓣', group: 'main' },
      { name: '乾辣椒段（怕辣可抖掉辣椒籽）', amount: 20, unit: '克', note: '約 1 小把', group: 'main' },
      { name: '去皮原味熟花生仁（起鍋前再拌）', amount: 50, unit: '克', group: 'main' },
      { name: '食用油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '醬油（綜合宮保醬汁）', amount: 2.5, unit: '大匙', group: 'seasoning' },
      { name: '烏醋或白醋（綜合宮保醬汁）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '米酒（綜合宮保醬汁）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '細砂糖與太白粉（綜合宮保醬汁）', amount: 1, unit: '份', note: '糖 2 小匙、太白粉 1 小匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '雞腿切丁免上漿，醬料先調成一小碗',
        instruction:
          '去骨雞腿肉切約 2 公分方丁（雞腿肉自帶油花軟嫩多汁，不需抓蛋白醃漬）。拿小碗把醬油、醋、米酒、糖 2 小匙與太白粉 1 小匙先攪拌均勻成綜合宮保醬汁備用。',
      },
      {
        stepNumber: 2,
        title: '開蓋按「爆炒煎烤」8 分鐘，煎熟雞丁爆乾辣椒',
        instruction:
          '球釜內鍋保持開蓋，按左側「爆炒煎烤」設 8 分鐘啟動；倒 1 大匙油熱鍋，放雞腿丁翻炒約 4 分鐘至全數轉白微帶金黃，原鍋免起鍋直接投入蒜末、蔥段與乾辣椒段拌炒約 1 分鐘逼出宮保香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '8 分鐘',
          temperature: '150°C',
          shortAction: '開蓋快炒宮保雞丁',
        },
        tip: '喜歡川味麻香，可在此步順手加半小匙花椒粒一起炒出麻香。',
      },
      {
        stepNumber: 3,
        title: '淋入宮保醬汁收亮，撒熟花生快拌起鍋',
        instruction:
          '把碗裡的綜合醬汁再次攪勻沿鍋邊淋入，快速翻拌約 1 分鐘至酸甜醬汁濃亮裹滿雞丁，最後倒入熟花生快拌 5 秒立刻按「取消」盛盤保持酥脆。',
      },
    ],
  },
];
