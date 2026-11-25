import type { Recipe } from '../../types/recipe';

export const SPEC_OFFICIAL_OVERSEAS_RECIPES: Recipe[] = [
  {
    id: 'spec-official-02-tefal-hk-thai-yellow-curry-chicken',
    title: '泰式黃咖哩雞',
    subtitle: '原鍋爆香南洋辛香料與黃咖哩醬，鎖蓋壓 29 分雞腿入味脫骨',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 39,
    realTotalMinutes: 65,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（免手動碰閥）',
    stoveDifference:
      '用純香料泰式黃咖哩「醬」取代含澱粉日式咖哩塊，配椰漿可安心鎖蓋直壓不焦底；鮮呼吸動態變壓讓咖哩直透雞骨，免站爐邊拌鍋。',
    avoidPitfall:
      '炒咖哩醬必淋少許清水防沾焦，且魚露、香菜與九層塔一定要等洩壓開蓋收汁後再拌才香不變黑。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 泰式黃咖哩雞',
    sourceUrl: 'https://www.youtube.com/watch?v=WGn6NTgwfwE',
    sourceTag: 'Tefal 香港官方食譜',
    ingredients: [
      { name: '帶骨大雞腿（切分腿排與棒腿、抹鹽）', amount: 4, unit: '支', group: 'main' },
      { name: '蒜頭（拍碎）', amount: 3, unit: '瓣', group: 'main' },
      { name: '新鮮高良薑（切薄片）', amount: 1, unit: '塊', note: '約 2.5 公分', group: 'main' },
      { name: '新鮮香茅（拍裂切長段）', amount: 2, unit: '根', group: 'main' },
      { name: '鳥眼辣椒或紅辣椒（斜切片）', amount: 3, unit: '條', note: '依辣度調整', group: 'main' },
      { name: '新鮮香菜（帶莖整束）', amount: 1, unit: '小把', note: '另留少許葉起鍋放', group: 'main' },
      { name: '泰式羅勒葉（或九層塔）', amount: 1, unit: '小把', note: '最後開蓋拌入', group: 'main' },
      { name: '新鮮檸檬或萊姆角', amount: 4, unit: '角', note: '上桌佐餐擠汁', group: 'main' },
      { name: '泰式黃咖哩醬', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '椰漿', amount: 400, unit: 'ml', note: '約 1 罐', group: 'seasoning' },
      { name: '清水', amount: 40, unit: 'ml', note: '炒咖哩醬防沾用', group: 'seasoning' },
      { name: '植物油', amount: 1, unit: '小匙', group: 'seasoning' },
      { name: '魚露', amount: 1, unit: '大匙', note: '起鍋前加入', group: 'seasoning' },
      { name: '鹽與鮮磨黑胡椒', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動爆炒煎烤並預熱',
        instruction:
          '雞腿排與棒棒腿先均勻抹少許鹽備用。保持開蓋，在球釜不沾內鍋倒入 1 小匙植物油；按左側「爆炒煎烤」，將時間從預設 2 分鐘調長至 20 分鐘（保留充裕炒料緩衝時間）並啟動，等待油熱提示音響起。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '20 分鐘（炒約 5 分取消）',
          temperature: '150°C',
          shortAction: '開蓋熱油炒料',
        },
      },
      {
        stepNumber: 2,
        title: '爆香南洋辛香料 1 分鐘',
        instruction:
          '油熱後先下拍碎蒜頭與高良薑片，接著放入帶莖香菜、切片辣椒與拍鬆的香茅段，以耐熱矽膠平鏟翻炒約 1 分鐘至南洋香氣全面釋出。',
      },
      {
        stepNumber: 3,
        title: '加水炒香黃咖哩醬 3 分鐘',
        instruction:
          '加入 2 大匙泰式黃咖哩醬，隨即淋入少量清水（約 30–50 ml）幫助醬體化開防黏底，持續翻炒約 3 分鐘至咖哩醬與辛香料融合、色澤略為變深。',
      },
      {
        stepNumber: 4,
        title: '倒入椰漿煮滾再放雞腿',
        instruction:
          '倒入整罐 400 ml 椰漿徹底拌勻，開蓋微滾慢煮 1 分鐘至化為均勻乳黃色咖哩湯底；將抹鹽雞腿塊逐一放入浸入湯汁中，進壓前先用矽膠鏟把鍋底咖哩醬刮勻化散防焦底。',
      },
      {
        stepNumber: 5,
        title: '取消煎炒、鎖蓋加壓 29 分鐘',
        instruction:
          '按下「取消」停止爆炒模式，蓋上鍋蓋並順時鐘鎖緊；按右側「雞／鴨／豬」將時間調至 29 分鐘並啟動，行程結束靜待自動安全洩壓。',
        potAction: {
          side: 'right',
          modeName: '雞／鴨／豬',
          lid: 'locked',
          durationText: '29 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸壓透雞骨',
        },
        tip: '若用嫩肉雞腿或去骨雞腿肉，設 15–20 分鐘已相當軟嫩；大型仿土雞腿或想一撥脫骨則照設 29 分鐘。',
      },
      {
        stepNumber: 6,
        title: '洩壓開蓋、視需要收汁與調味',
        instruction:
          '確認安全浮閥落下再解鎖開蓋檢查濃稠度；若希望更濃郁，保持開蓋選左側「收汁／醬燒」蒸發收濃約 5 分鐘（醬汁放涼後還會自然變濃）。最後關機拌入 1 大匙魚露、新鮮香菜與泰式羅勒葉，試味補鹽與黑胡椒，配白飯與萊姆角享用。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '5 分鐘（選配）',
          shortAction: '收濃拌魚露香草',
        },
      },
    ],
  },
  {
    id: 'spec-official-04-tefal-hk-coconut-chicken-soup',
    title: '港式椰子雞湯',
    subtitle: '老椰肉搭全雞與豬瘦肉，高壓煲湯 30 分熬出廣式老火清甜',
    category: 'soup',
    cuisine: '港式',
    settingMinutes: 30,
    realTotalMinutes: 60,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（嚴禁快洩防噴湯）',
    stoveDifference:
      '廣式老火湯在瓦斯爐要慢滾 2 小時以上，鮮呼吸動態變壓只需 30 分就能把老椰肉與雞骨甜味壓進湯裡；多加 200 克豬瘦肉湯頭更醇厚甘甜。',
    avoidPitfall:
      '切勿誤加 5 茶匙鹽以免死鹹！全程不放鹽燉煮，開蓋試喝再從 1 小匙慢慢調整；連料帶湯勿超過內鍋最高水位線防噴湯。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 椰子雞湯',
    sourceUrl: 'https://www.youtube.com/watch?v=Z9aQn4scAc8',
    sourceTag: 'Tefal 香港官方食譜',
    ingredients: [
      { name: '全雞（去頭腳、先冷水汆燙洗淨）', amount: 1, unit: '隻', note: '中小型全雞', group: 'main' },
      { name: '豬瘦肉（大塊、先冷水汆燙洗淨）', amount: 200, unit: '克', note: '提鮮增醇厚感', group: 'main' },
      { name: '新鮮老椰子（倒出椰水、椰肉切厚塊）', amount: 1, unit: '顆', note: '留棕色薄皮更香', group: 'main' },
      { name: '老薑（切厚片）', amount: 20, unit: '克', note: '約 4–5 片', group: 'main' },
      { name: '清水', amount: 2000, unit: 'ml', note: '視雞大小勿超最高水位線', group: 'seasoning' },
      { name: '鹽', amount: 1, unit: '小匙', note: '起鍋試味再微調', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '全食材依序入鍋',
        instruction:
          '全雞與豬瘦肉先冷水下鍋煮沸汆燙去血沫洗淨；老椰子過濾出椰子水備用，挖出厚椰肉切 3–4 公分塊。內鍋依序放入全雞、大塊豬瘦肉與椰子肉，倒入 2 公升清水與天然椰子水（務必先放料再注水，嚴守低於最高水位線 2–3 公分），頂端擺入厚切薑片。',
      },
      {
        stepNumber: 2,
        title: '蓋上鍋蓋並確實鎖緊',
        instruction:
          '闔上掀蓋式鍋蓋，將頂部手把順時鐘旋轉到底確實鎖定。',
      },
      {
        stepNumber: 3,
        title: '選擇「煮／燉湯品」設定 30 分鐘',
        instruction:
          '按面板右側切換至「煮／燉湯品」，按「+」鍵將時間調增至 30 分鐘後按下開始啟動；本機自動執行鮮呼吸動態變壓，不需另外手動設定壓力值。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸煲老火湯',
        },
      },
      {
        stepNumber: 4,
        title: '鮮呼吸動態變壓提鮮',
        instruction:
          '烹調期間上蓋限壓閥會隨智慧壓力曲線規律輕吐微蒸氣，透過壓力高低起伏替雞肉與椰肉深層提鮮，逼出清澈無雜質的天然甘甜。',
      },
      {
        stepNumber: 5,
        title: '自動洩壓、開蓋試味加鹽盛湯',
        instruction:
          '行程完成響起提示音並待自動安全洩壓完畢後（切勿強行手動排氣以免熱湯噴濺），解鎖掀蓋；撈去表面微量浮油，依個人口味從 1 小匙起分次加鹽拌勻，即可盛湯享用。',
      },
    ],
  },
  {
    id: 'spec-official-06-tefal-hk-plum-braised-duck',
    title: '港式梅子鴨',
    subtitle: '鴨皮先煎逼油去膩，搭白腐乳與醃酸梅壓 25–30 分入骨開胃',
    category: 'braise',
    cuisine: '港式',
    settingMinutes: 38,
    realTotalMinutes: 65,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（免手動碰閥）',
    stoveDifference:
      '鴨皮肥厚容易油膩，先開蓋皮朝下乾煎逼油並倒掉多餘鴨油只留 1 大匙；搭配白腐乳與老抽，鮮呼吸壓 25–30 分即如茶樓燜鴨般酸甜入骨。',
    avoidPitfall:
      '帶骨鴨塊若改用球釜不沾內鍋務必用矽膠夾護塗層；腐乳下鍋前先用紹興酒壓泥拌開，免得沉底結塊偏鹹。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 港式梅子鴨 腐乳梅子鴨',
    sourceUrl: 'https://www.youtube.com/watch?v=88I7gVq3bcs',
    sourceTag: 'Tefal 香港官方食譜',
    ingredients: [
      { name: '大鴨（修除多餘肥油、切 2–3 大塊）', amount: 0.5, unit: '隻', group: 'main' },
      { name: '醃漬濕酸梅／蘇梅（略壓破）', amount: 6, unit: '顆', note: '非生鮮水果李子', group: 'main' },
      { name: '老薑（切片）', amount: 5, unit: '片', group: 'main' },
      { name: '去皮蒜頭（整瓣不切碎）', amount: 6, unit: '瓣', group: 'main' },
      { name: '青蔥（蔥白切段、蔥綠切細絲）', amount: 3, unit: '根', note: '蔥綠最後擺盤', group: 'main' },
      { name: '植物油', amount: 1, unit: '小匙', note: '起鍋逼油用', group: 'seasoning' },
      { name: '白腐乳（連少許汁壓泥）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '紹興酒', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '蠔油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '醬油（生抽）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '老抽（上色黑醬油）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '冰糖', amount: 15, unit: '克', note: '約 1 小塊', group: 'seasoning' },
      { name: '清水', amount: 240, unit: 'ml', note: '約 1 量杯', group: 'seasoning' },
      { name: '麻油', amount: 1, unit: '大匙', note: '起鍋前淋入提香', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動爆炒模式預熱',
        instruction:
          '半隻鴨修掉屁股與表層過厚脂肪後切 2–3 大塊，白腐乳先用少許紹興酒壓泥拌開。內鍋倒入少量植物油，保持開蓋按左側「爆炒煎烤」，將時間調長至 20 分鐘啟動，等待油熱提示音響起。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '20 分鐘（炒約 6 分取消）',
          temperature: '150°C',
          shortAction: '開蓋煎鴨逼油',
        },
      },
      {
        stepNumber: 2,
        title: '鴨皮朝下乾煎逼油 3 分鐘',
        instruction:
          '油熱後將大鴨塊「鴨皮朝下」貼鍋放入，乾煎約 3 分鐘至鴨皮逼出油脂並呈金黃香脆；先夾出鴨塊，將鍋中多餘鴨油倒出（可裝瓶留作炒青菜），僅保留約 1 大匙鴨油。',
      },
      {
        stepNumber: 3,
        title: '爆香辛香料並下鴨與全套醬汁',
        instruction:
          '用鍋內餘油放入整粒蒜頭、5 片薑片與青蔥白段炒香；將煎香的鴨塊夾回鍋中，依序淋入紹興酒、蠔油、醬油（生抽）、老抽、壓散的腐乳、冰糖與 1 杯清水，最後放入 6 顆醃漬酸梅，按「取消」停止爆炒模式，闔上鍋蓋並順時鐘鎖緊。',
      },
      {
        stepNumber: 4,
        title: '鮮呼吸壓力燜煮 25–29 分鐘',
        instruction:
          '按右側選擇「雞／鴨／豬」，設定 25–29 分鐘啟動（若為較老的紅面番鴨或愛極脫骨可改選「牛／羊」設 30–35 分鐘），透過鮮呼吸動態變壓讓梅子酸香與腐乳濃汁滲透鴨肉，行程結束待自動安全洩壓。',
        potAction: {
          side: 'right',
          modeName: '雞／鴨／豬',
          lid: 'locked',
          durationText: '25–29 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸燜透入骨',
        },
      },
      {
        stepNumber: 5,
        title: '開蓋收汁與切件擺盤',
        instruction:
          '洩壓開蓋後檢查醬汁濃稠度，若偏稀則保持開蓋選左側「收汁／醬燒」蒸發收濃約 5 分鐘至琥珀醬汁油亮掛皮，關機前淋少許麻油提香；大鴨塊略放涼斬適口件擺盤，連同綿軟整顆燜蒜與酸梅澆汁撒新鮮蔥絲，配白飯享用。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '5 分鐘',
          shortAction: '收濃淋油擺盤',
        },
      },
    ],
  },
  {
    id: 'spec-official-08-tefal-hk-scallop-chicken-congee',
    title: '干貝滑雞粥',
    subtitle: '白米先拌油醃 30 分，煮粥 20 分開花綿滑如廣式生滾老火粥',
    category: 'rice',
    cuisine: '港式',
    settingMinutes: 20,
    realTotalMinutes: 50,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '務必自然自動洩壓（嚴禁快洩防噴漿）',
    stoveDifference:
      '廣東粥老店密技就是洗淨白米先拌 1 小匙油醃 30 分，高壓滾煮時米粒瞬間爆開花；加上鮮呼吸動態變壓，免站爐邊攪拌也不焦底。',
    avoidPitfall:
      '切勿誤加 8 茶匙鹽與 15 茶匙胡椒粉以免毀鍋！改起鍋試味加約 1 小匙鹽與少許胡椒；總料勿超 1/2 線且禁快洩防噴漿。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 瑤柱滑雞粥 干貝滑雞粥',
    sourceUrl: 'https://www.youtube.com/watch?v=Jp9JJPtkHSk',
    sourceTag: 'Tefal 香港官方食譜',
    ingredients: [
      { name: '白米（洗淨瀝乾、拌油醃 30 分）', amount: 2, unit: '米杯', note: '喜稀可改 1.5 杯', group: 'main' },
      { name: '嫩雞肉塊（先醃漬 20 分）', amount: 500, unit: '克', note: '約半隻雞或2去骨腿', group: 'main' },
      { name: '乾干貝（泡水軟化撕絲、留泡水）', amount: 5, unit: '顆', group: 'main' },
      { name: '嫩薑絲', amount: 4, unit: '小匙', note: '少許醃雞其餘撒用', group: 'main' },
      { name: '青蔥花', amount: 10, unit: '克', note: '起鍋撒用', group: 'main' },
      { name: '清水（含泡干貝水）', amount: 7, unit: '米杯', note: '總料不超內鍋 1/2', group: 'seasoning' },
      { name: '食用油（醃白米用）', amount: 1, unit: '小匙', note: '約 5ml 助米開花', group: 'seasoning' },
      { name: '紹興酒（醃雞肉用）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '醬油（醃雞肉用）', amount: 1.5, unit: '小匙', group: 'seasoning' },
      { name: '鹽', amount: 1, unit: '小匙', note: '開蓋試味再微調', group: 'seasoning' },
      { name: '白胡椒粉', amount: 0.25, unit: '小匙', note: '醃雞起鍋各撒少許', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '干貝泡發、醃雞、油醃白米並全料入鍋',
        instruction:
          '乾干貝先泡軟捏撕細絲（留鮮水）；雞塊以紹興酒、醬油、少許薑絲與少許白胡椒粉抓勻醃 20 分鐘；白米洗淨瀝乾拌入 1 小匙食用油靜置醃 30 分鐘。將油醃白米倒入球釜內鍋，注入 7 米杯清水（含泡干貝水），鋪入醃雞塊與干貝絲略撥平，確認總量絕不超過內鍋 1/2 安全線。',
        tip: '想煮較稀口感（如 1:6 稀粥）可把白米減為 1–1.5 杯並改用 2 支去骨雞腿，確保絕不逾 1/2 刻度線。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋啟動「煮粥／煲仔飯」預設 20 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘轉到底鎖緊，按右側選擇「煮粥／煲仔飯」，直接沿用預設 20 分鐘按下開始啟動。',
        potAction: {
          side: 'right',
          modeName: '煮粥／煲仔飯',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸熬綿滑粥',
        },
      },
      {
        stepNumber: 3,
        title: '鮮呼吸變壓熬出綿滑米花',
        instruction:
          '烹調期間機器自動進行動態變壓按摩，使裹油米粒充分翻滾爆花打綿，同時減少沉底沾黏，把干貝與雞肉鮮味完整融入粥底。',
      },
      {
        stepNumber: 4,
        title: '完整自然洩壓、開蓋調味撒蔥薑',
        instruction:
          '行程結束後務必等待自動安全洩壓完畢（嚴禁手動快洩防滾燙米漿噴濺），待浮閥落下解鎖開蓋輕攪均勻；依個人鹹淡加入約 1–1.5 小匙鹽與少許白胡椒粉拌勻，盛碗撒新鮮細薑絲與青蔥花即可享用。',
      },
    ],
  },
  {
    id: 'spec-official-11-tefal-sg-korean-stew-chef-eric-teo',
    title: '韓式海鮮泡菜湯飯',
    subtitle: '球釜一鍋先爆香五花肉與泡菜，再免加壓滾煮米飯與綜合海鮮',
    category: 'rice',
    cuisine: '韓式',
    settingMinutes: 25,
    realTotalMinutes: 30,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（免洩壓）',
    stoveDifference:
      '全程開蓋與免鎖蓋一鍋到底，先當炒鍋爆香五花肉與泡菜，再切自訂行程 150°C 滾煮；米少水多且先泡水，煮出湯清米彈的韓式泡菜國飯。',
    avoidPitfall:
      '日本米務必先泡水 20–30 分才能在 15 分鐘無壓滾熟；海鮮與蒜苗最後 2 分鐘才下鍋燜，久煮會變老柴。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 韓式海鮮泡菜湯飯',
    sourceUrl: 'https://www.youtube.com/watch?v=8H_BSw9dFcA',
    sourceTag: 'Tefal 星馬菲官方食譜',
    ingredients: [
      { name: '日本米（洗淨提前泡水 20–30 分瀝乾）', amount: 60, unit: '克', group: 'main' },
      { name: '豬五花肉（切薄片）', amount: 100, unit: '克', group: 'main' },
      { name: '韓式泡菜', amount: 200, unit: '克', group: 'main' },
      { name: '白洋蔥（順紋縱切絲）', amount: 0.5, unit: '顆', note: '順紋切保留口感', group: 'main' },
      { name: '綜合海鮮（花枝、魚片、去腸鮮蝦）', amount: 200, unit: '克', note: '切適口大小', group: 'main' },
      { name: '蒜苗或大蔥（斜切厚片）', amount: 1, unit: '根', note: '最後下鍋保脆', group: 'main' },
      { name: '蒜末', amount: 1, unit: '大匙', group: 'main' },
      { name: '香菜或蔥花', amount: null, unit: '少許', note: '起鍋點綴', group: 'main' },
      { name: '芝麻油', amount: 1, unit: '大匙', note: '分兩次淋入增香', group: 'seasoning' },
      { name: '韓式辣椒醬', amount: 1.5, unit: '大匙', note: '依辣度微調', group: 'seasoning' },
      { name: '醬油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '清水', amount: 1000, unit: 'ml', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動高溫預熱並逼香五花肉',
        instruction:
          '日本米提前泡水 20–30 分鐘瀝乾，白洋蔥順紋切絲、蒜苗斜切約 1 公分厚片。保持開蓋按左側「爆炒煎烤」預熱約 1 分鐘；淋入少許芝麻油，放入 100 克豬五花薄片翻炒逼油出香。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '150°C',
          shortAction: '開蓋爆炒五花泡菜',
        },
      },
      {
        stepNumber: 2,
        title: '依序爆炒泡菜、辛香料與泡過水的米',
        instruction:
          '倒入 200 克韓式泡菜拌炒出紅亮香氣，續入白洋蔥絲、蒜末、補淋少許芝麻油與韓式辣椒醬拌勻；最後倒入瀝乾的預泡日本米翻炒均勻，讓每粒米都沾上辣油香氣。',
      },
      {
        stepNumber: 3,
        title: '沖入 1 公升清水免鎖蓋滾煮湯飯',
        instruction:
          '倒入 1000 ml 清水與 1 大匙醬油拌勻，按「取消」停止爆炒；蓋上鍋蓋「不鎖定」，切換左側「自訂行程」設 150°C、18 分鐘啟動，滾煮約 13–15 分鐘至橘紅湯底大滾沸騰、米粒膨脹吸飽湯汁。',
        potAction: {
          side: 'left',
          modeName: '自訂行程',
          lid: 'closed_unlocked',
          durationText: '18 分鐘',
          temperature: '150°C',
          shortAction: '免鎖蓋滾煮湯飯',
        },
        tip: '自訂行程一按開始即倒數且結束不自動保溫；想更快也可改鎖蓋壓力煮 6–8 分後自然洩壓再開蓋下海鮮。',
      },
      {
        stepNumber: 4,
        title: '最後下蒜苗與綜合海鮮燜熟',
        instruction:
          '行程剩餘最後約 3–5 分鐘時掀蓋，先撒入斜切蒜苗片，緊接著放入紅鯛魚片、花枝與鮮蝦，再蓋回鍋蓋（不鎖定）利用剩餘時間燜煮 2 分鐘；開蓋見花枝捲曲轉白、魚片熟透、鮮蝦轉紅即可關機盛入深碗，撒蔥花趁熱享用。',
      },
    ],
  },
  {
    id: 'spec-official-12-tefal-sg-japanese-chashu-ieatishootipost',
    title: '日式拉麵叉燒',
    subtitle: '五花肉捲綁刷老抽，1:1:1:1 黃金滷汁壓 45 分抵三小時慢燉',
    category: 'braise',
    cuisine: '日式',
    settingMinutes: 48,
    realTotalMinutes: 75,
    baseServings: 6,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（免手動碰閥）',
    stoveDifference:
      '傳統拉麵叉燒在瓦斯爐要文火顧 3 小時，鮮呼吸高壓只需 45 分鐘即筷子直穿；滷汁只需達鍋內 1/2 線不必全淹沒，五花肉加壓會再釋出肉汁。',
    avoidPitfall:
      '提把棉線務必全數塞進內鍋內側，切勿夾到鍋蓋膠條以免漏氣不上壓；原鍋煮清酒切忌明火點燃以免傷機身。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 日式拉麵叉燒',
    sourceUrl: 'https://www.youtube.com/watch?v=OaHJUNgX2cc',
    sourceTag: 'Tefal 星馬菲官方食譜',
    ingredients: [
      { name: '帶皮整塊豬五花（去軟骨捲緊綁棉線）', amount: 1000, unit: '克', note: '挑肥瘦均勻上段', group: 'main' },
      { name: '日本大蔥（切大段）', amount: 1, unit: '根', group: 'main' },
      { name: '帶皮老薑（切片免去皮）', amount: 2, unit: '大片', group: 'main' },
      { name: '帶皮蒜頭（洗淨免剝皮）', amount: 6, unit: '瓣', group: 'main' },
      { name: '老抽（燙後刷豬皮上色用）', amount: 1, unit: '大匙', note: '趁熱刷更吸色', group: 'seasoning' },
      { name: '味醂', amount: 240, unit: 'ml', note: '標準量杯 1 杯', group: 'seasoning' },
      { name: '日本清酒', amount: 240, unit: 'ml', note: '標準量杯 1 杯', group: 'seasoning' },
      { name: '日式醬油', amount: 200, unit: 'ml', note: '台式醬油改 160ml', group: 'seasoning' },
      { name: '清水', amount: 240, unit: 'ml', note: '標準量杯 1 杯', group: 'seasoning' },
      { name: '天然冰糖（或白砂糖）', amount: 50, unit: '克', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '捲綁棉線並熱水汆燙去雜質腥味',
        instruction:
          '豬五花皮朝下平放，水平片除底層軟骨修成均勻厚片；借乾淨布巾像捲壽司般捲緊成圓筒（豬皮朝外），拉緊食品級粗棉線滾動螺旋綁實，中央再縱向多綁一圈當提把。另起滾水將肉捲緩緩放入汆燙數分鐘去血沫腥味，撈出定型。',
      },
      {
        stepNumber: 2,
        title: '趁熱刷老抽風乾上色',
        instruction:
          '趁豬皮仍燙熱時，用耐熱刷把老抽均勻刷滿整圈豬皮與表面（熱皮最能吸進深醬色），放一旁靜置風乾定色。',
      },
      {
        stepNumber: 3,
        title: '煮除酒精並調製 1:1:1:1 黃金滷汁',
        instruction:
          '內鍋倒入 1 杯味醂與 1 杯日本清酒，開蓋按左側「爆炒煎烤」煮滾 2–3 分鐘徹底揮發嗆口酒精（切勿在萬用鍋上方明火點燃）；按取消後加入日式醬油（台灣濃口醬油建議酌減）、1 杯清水與 50 克冰糖拌溶試味，此時滷汁應略偏鹹甜重口。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 3 分鐘',
          temperature: '150°C',
          shortAction: '煮滾揮發酒氣',
        },
      },
      {
        stepNumber: 4,
        title: '入萬用鍋鎖蓋高壓 45 分鐘',
        instruction:
          '將風乾上色的五花肉捲放入內鍋，務必確認提把棉線全數塞進鍋內側不夾膠條，旁塞大蔥段、2 片薑與帶皮蒜頭（滷汁約達內鍋 1/2 刻度屬正常）。順時鐘鎖緊上蓋，按右側「牛／羊」將時間調至 45 分鐘啟動，結束靜待自動安全洩壓。',
        potAction: {
          side: 'right',
          modeName: '牛／羊',
          lid: 'locked',
          durationText: '45 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸高壓滷透',
        },
      },
      {
        stepNumber: 5,
        title: '原鍋浸泡入味與冷藏定型切片',
        instruction:
          '洩壓開蓋後肉捲油亮紅褐且筷子可輕鬆戳穿；不急著吃可留在原鍋滷汁中保溫浸泡數小時更入味。取出包好放冰箱冷藏隔夜定型後再拆棉線，就能切出整齊圓潤不散碎的拉麵級叉燒薄片，吃前淋熱滷汁或微炙燒，配拉麵、白飯或刈包皆絕佳。',
      },
    ],
  },
  {
    id: 'spec-official-13-tefal-my-steamed-sea-bass',
    title: '蒜香青花菜清蒸鱸魚',
    subtitle: '一鍋先炒黑胡椒青花菜淋醬，洗鍋架鋁箔船壓蒸 8 分嫩滑不破皮',
    category: 'steam',
    cuisine: '南洋',
    settingMinutes: 13,
    realTotalMinutes: 28,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '即時排氣洩壓（免餘溫把魚悶老）',
    stoveDifference:
      '比一般只淋醬油蒸魚更有配菜香氣，先開蓋炒蒜香黑胡椒青花菜淋醬盛起，洗鍋後用鋁箔紙折船放蒸盤鎖蓋壓 8 分，鮮汁全鎖住又不破魚皮。',
    avoidPitfall:
      '蒸魚最怕餘溫悶老，8 分鐘結束務必立即安全手動洩壓開蓋，且鍋底清水不可高過蒸盤底部以免浸濕魚肉。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 清蒸鱸魚 蒸魚',
    sourceUrl: 'https://www.youtube.com/watch?v=QasxljINAIo',
    sourceTag: 'Tefal 星馬菲官方食譜',
    ingredients: [
      { name: '鱸魚（抹鹽與黑胡椒、鋪少許薑蔥）', amount: 0.5, unit: '尾', note: '用鋁箔紙折船盛裝', group: 'main' },
      { name: '青花菜（切一口迷你小朵）', amount: 0.25, unit: '顆', group: 'main' },
      { name: '洋蔥（切細丁）', amount: 1, unit: '大匙', group: 'main' },
      { name: '蒜末', amount: 1, unit: '大匙', group: 'main' },
      { name: '嫩薑（切細絲）', amount: 1, unit: '大匙', group: 'main' },
      { name: '蔥花', amount: null, unit: '少許', note: '盛盤點綴用', group: 'main' },
      { name: '食用油', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '醬油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '魚露', amount: 1, unit: '小匙', group: 'seasoning' },
      { name: '黑胡椒', amount: 1, unit: '小匙', note: '喜辣可酌加', group: 'seasoning' },
      { name: '清水（炒醬用）', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '清水（蒸魚鍋底用）', amount: 300, unit: 'ml', note: '約1/4鍋高低於蒸盤', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '開蓋預熱並炒香蒜洋蔥與青花菜',
        instruction:
          '保持開蓋按左側「爆炒煎烤」預熱 30 秒至 1 分鐘；倒入 2 大匙油熱鍋 10–15 秒，依序下 1 大匙洋蔥丁與 1 大匙蒜末炒出蒜香，接著倒入迷你小朵青花菜翻炒。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 4 分鐘',
          temperature: '150°C',
          shortAction: '開蓋炒蒜香淋醬',
        },
      },
      {
        stepNumber: 2,
        title: '調味成蒜香黑胡椒淋醬並盛出洗鍋',
        instruction:
          '依序加入 1 大匙醬油、1 小匙魚露、1 小匙黑胡椒、1 大匙細薑絲與 1 大匙清水，拌炒至青花菜翠綠微軟、醬汁收濃發亮後盛出裝碗備用；按取消關機讓內鍋稍降溫後簡單沖洗乾淨。',
      },
      {
        stepNumber: 3,
        title: '內鍋加水並架蒸盤壓力清蒸 8 分鐘',
        instruction:
          '洗淨內鍋倒入約 1/4 鍋高清水（約 250–350 ml，水面低於蒸盤底）；鋁箔紙折成開口船形托盤盛放抹鹽與黑胡椒、鋪薑絲蔥段的半尾鱸魚，擺進原廠白色蒸盤入鍋。順時鐘鎖緊上蓋，按右側「蒸／一鍋兩菜」設 8 分鐘啟動（薄魚菲力可縮至 6 分、整尾厚魚 10 分）。',
        potAction: {
          side: 'right',
          modeName: '蒸／一鍋兩菜',
          lid: 'locked',
          durationText: '8 分鐘',
          releaseMode: 'quick_manual',
          shortAction: '高壓鎖汁蒸鱸魚',
        },
      },
      {
        stepNumber: 4,
        title: '即時洩壓出鍋並淋上蒜香青花菜醬',
        instruction:
          '8 分鐘倒數結束立刻安全手動洩壓（手臉遠離排氣孔防燙），浮閥落下後朝外傾斜開蓋；連同鋁箔紙船整份移至大白盤上，均勻舀淋預炒好的蒜香黑胡椒青花菜醬，可撒蔥花提香即上桌。',
      },
    ],
  },
  {
    id: 'spec-official-16-tefal-ph-beef-sinigang',
    title: '菲式四季桔牛腱酸湯',
    subtitle: '先壓 45 分熬純淨牛骨高湯，再煮芋頭蘿蔔與金桔汁清酸暖胃',
    category: 'soup',
    cuisine: '南洋',
    settingMinutes: 55,
    realTotalMinutes: 95,
    baseServings: 6,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '第一段自然自動洩壓，第二段短壓或開蓋滾煮',
    stoveDifference:
      '菲式牛腱酸湯在瓦斯爐要燉 3–4 小時，採「先壓純牛湯濾油、再煮酸湯蔬菜」兩段法，牛腱 45 分即軟透、蔬菜不糊爛，多出的純牛高湯還能冷凍備用。',
    avoidPitfall:
      '上蓋限壓閥原本就是微鬆設計切勿壓死；新鮮金桔汁久煮易帶微苦，建議起鍋前再補一半並燙空心菜最翠綠清香。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 菲式牛肉酸湯 Beef Sinigang',
    sourceUrl: 'https://www.youtube.com/watch?v=xXaYW6rac3s',
    sourceTag: 'Tefal 星馬菲官方食譜',
    ingredients: [
      { name: '帶骨牛腱厚片（橫切約 2 公分厚）', amount: 1000, unit: '克', group: 'main' },
      { name: '老薑（切片）', amount: 5, unit: '片', group: 'main' },
      { name: '芋頭（去皮切 2 公分方塊）', amount: 150, unit: '克', note: '煮後湯微帶滑順感', group: 'main' },
      { name: '白蘿蔔（削皮切薄圓片）', amount: 150, unit: '克', group: 'main' },
      { name: '牛番茄（每顆切 4 大塊）', amount: 2, unit: '顆', group: 'main' },
      { name: '新鮮香茅（手拗對折拍裂）', amount: 3, unit: '支', group: 'main' },
      { name: '微辣綠長辣椒（縱向剖開）', amount: 3, unit: '根', group: 'main' },
      { name: '空心菜或青江菜（洗淨切段）', amount: 1, unit: '小把', note: '起鍋前燙熟', group: 'main' },
      { name: '清水', amount: 2000, unit: 'ml', note: '勿超過最高水位線', group: 'seasoning' },
      { name: '魚露', amount: 2, unit: '大匙', note: '依鹹度微調', group: 'seasoning' },
      { name: '新鮮現擠金桔／四季桔汁', amount: 3, unit: '大匙', note: '一半同煮一半後補', group: 'seasoning' },
      { name: '鹽與黑胡椒', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '第一階段：高壓 45 分鐘嫩化牛腱熬純高湯',
        instruction:
          '將約 1 公斤厚切帶骨牛腱放入內鍋，倒入 2 公升清水並放數片老薑（先不加酸味與蔬菜）；蓋上鍋蓋確認頂端限壓閥自然微鬆勿壓死，順時鐘鎖緊後按右側「牛／羊」設 45 分鐘啟動。',
        potAction: {
          side: 'right',
          modeName: '牛／羊',
          lid: 'locked',
          durationText: '45 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '高壓燉透牛腱湯',
        },
      },
      {
        stepNumber: 2,
        title: '自動洩壓開蓋、取出嫩牛腱並過濾分裝高湯',
        instruction:
          '行程完成待自動安全洩壓跳至保溫後解鎖開蓋；夾出燉到極致軟嫩的牛腱放盤，將清澈金黃牛骨高湯過濾倒入湯壺並撇去表層多餘牛油（多餘純高湯可冷凍留作煮粥或燉菜）。',
      },
      {
        stepNumber: 3,
        title: '第二階段：下酸湯蔬菜、金桔魚露煮透並燙葉菜',
        instruction:
          '清空內鍋依序放入芋頭丁、白蘿蔔薄片、拍裂香茅、剖開綠辣椒與番茄塊，倒回適量金黃牛高湯與嫩牛腱，加 2 大匙魚露、一半現擠金桔汁與黑胡椒試味；鎖蓋按右側「蒸／一鍋兩菜」設 8–10 分鐘至芋頭鬆綿、白蘿蔔透味（亦可不鎖蓋改開蓋「爆炒煎烤」滾 10–12 分）。開蓋投入空心菜拌燙 30 秒至翠綠軟化，補入剩餘現擠金桔汁並試鹹度即可盛碗。',
        potAction: {
          side: 'right',
          modeName: '蒸／一鍋兩菜',
          lid: 'locked',
          durationText: '8–10 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '煮透酸湯蔬菜',
        },
        tip: '偏好傳統街邊酸湯味者，也可將金桔汁換成羅望子泥或酸湯粉。',
      },
    ],
  },
  {
    id: 'spec-official-17-tefal-ph-cy625-patatim',
    title: '菲式滷豬腳',
    subtitle: '免炸免爆香 7 料全下，鎖蓋壓 30 分出焦糖蹄膀夾刈包最對味',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 30,
    realTotalMinutes: 60,
    baseServings: 6,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（保留皮 Q 不破）',
    stoveDifference:
      '源自閩南滷蹄膀的菲華年菜，省去傳統油炸豬皮與爆香顧火，整支 1 公斤大蹄膀直接進 5L 內鍋高壓 30 分就紅亮 Q 彈，愛入口即化可拉至 40 分。',
    avoidPitfall:
      '台灣純釀醬油比菲式醬油偏鹹，建議先放 160–180 ml 試味；高膠質蹄膀務必等自動洩壓才不會乾縮破皮。',
    youtubeQuery: 'Tefal 鮮呼吸萬用鍋 菲式滷豬腳 Patatim',
    sourceUrl: 'https://www.youtube.com/watch?v=2b_DwaKDwj0',
    sourceTag: 'Tefal 星馬菲官方食譜',
    ingredients: [
      { name: '整支帶皮帶骨豬蹄膀（洗淨去毛）', amount: 1000, unit: '克', note: '喜清爽可先汆燙', group: 'main' },
      { name: '乾香菇（溫水泡軟去蒂）', amount: 6, unit: '朵', group: 'main' },
      { name: '蒜頭（去皮切厚片）', amount: 5, unit: '瓣', group: 'main' },
      { name: '八角', amount: 2, unit: '顆', group: 'main' },
      { name: '白色刈包／荷葉包（選配佐餐）', amount: 6, unit: '個', note: '夾肉淋汁最道地', group: 'main' },
      { name: '豬大骨高湯（或清水加少許高湯粉）', amount: 1000, unit: 'ml', group: 'seasoning' },
      { name: '醬油', amount: 180, unit: 'ml', note: '台式醬油略減量', group: 'seasoning' },
      { name: '冰糖', amount: 35, unit: '克', note: '約 2–3 大匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '整塊豬腳入鍋並鋪上高湯與辛香料',
        instruction:
          '免熱鍋、免爆炒，直接將洗淨去毛的 1 公斤整支帶皮豬腳放入內鍋（講究清爽可先冷水汆燙 3 分鐘洗淨浮沫）；倒入 1 公升豬高湯，把醬油直接均勻澆淋在雪白豬皮表面幫助上色，依序撒上厚切蒜片、2 顆八角、泡軟乾香菇與冰糖。',
      },
      {
        stepNumber: 2,
        title: '將頂部辛香料撥入四周滷汁中',
        instruction:
          '用耐熱矽膠刮刀將堆在豬皮頂端的蒜片、冰糖與香菇輕輕撥進豬腳四周的滷汁裡浸潤，確保加壓時冰糖融化均勻不卡在皮上、香菇完全吸汁。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋選「牛／羊」高壓 30 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘轉到底鎖緊，按右側選擇「牛／羊」，將時間設為 30 分鐘按下開始啟動（喜愛筷子一撥脫骨口感或蹄膀超過 1.2 公斤可拉長至 40–45 分鐘），行程結束靜待自動安全洩壓。',
        potAction: {
          side: 'right',
          modeName: '牛／羊',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '一鍵高壓滷蹄膀',
        },
      },
      {
        stepNumber: 4,
        title: '開蓋整塊夾出配刈包享用（選配收汁）',
        instruction:
          '洩壓開蓋後，用耐熱矽膠大食物夾小心夾起焦糖紅棕、晶亮彈軟的整支豬腳與香菇盛入深碗，淋上甘甜滷汁配熱刈包即可上桌；想要濃稠焦亮光澤，可先撇除表層浮油，開蓋按左側「收汁／醬燒」收濃 5–8 分鐘（可勾極薄太白粉芡）再澆回蹄膀表面。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '5–8 分鐘（選配）',
          shortAction: '收濃焦亮澆頭汁',
        },
      },
    ],
  },
  {
    id: 'spec-official-18-tfal-jp-chikuzenni',
    title: '和風筑前煮',
    subtitle: '免顧火落蓋熬煮，根莖雞腿一鍋直壓 5–8 分鐘脆軟適中超下飯',
    category: 'braise',
    cuisine: '日式',
    settingMinutes: 8,
    realTotalMinutes: 26,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '即時排氣洩壓（防紅蘿蔔牛蒡過爛）',
    stoveDifference:
      '傳統瓦斯爐煮筑前煮得先炒再蓋落蓋慢熬 30 分，萬用鍋全下按「蒸／一鍋兩菜」微壓 5–8 分即透心；在 5L 寬底鍋中滷汁顯低屬正常，放涼靜置最能吸進柴魚甘香。',
    avoidPitfall:
      '總稀液體（高湯加醬酒）務必超過 150 ml 且先拌融砂糖防焦底；行程結束即時洩壓才不會悶爛紅蘿蔔。',
    youtubeQuery: 'T-fal 電壓力鍋 筑前煮 鮮呼吸萬用鍋',
    sourceUrl: 'https://www.t-fal.co.jp/',
    sourceTag: '日本 T-fal 官方食譜',
    ingredients: [
      { name: '去骨雞腿肉（切 3–4 公分一口塊）', amount: 200, unit: '克', group: 'main' },
      { name: '蓮藕（去皮切 1 公分厚片、泡醋水瀝乾）', amount: 80, unit: '克', group: 'main' },
      { name: '牛蒡（刮皮切 1 公分斜塊、泡水瀝乾）', amount: 60, unit: '克', group: 'main' },
      { name: '紅蘿蔔（去皮切滾刀塊）', amount: 60, unit: '克', group: 'main' },
      { name: '蒟蒻（手撕一口塊、先滾水汆燙去鹼）', amount: 80, unit: '克', group: 'main' },
      { name: '新鮮香菇（去蒂切 4 塊）', amount: 2, unit: '朵', group: 'main' },
      { name: '燙熟四季豆或荷蘭豆（選配擺盤）', amount: 5, unit: '根', group: 'main' },
      { name: '柴魚高湯', amount: 100, unit: 'ml', group: 'seasoning' },
      { name: '醬油', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '清酒', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '味醂', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '砂糖', amount: 1, unit: '大匙', note: '務必先拌溶防焦底', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '所有食材與和風醬汁入鍋拌勻',
        instruction:
          '蒟蒻手撕成凹凸一口塊先滾水汆燙 1–2 分去鹼瀝乾；蓮藕、牛蒡與紅蘿蔔切約 1–1.5 公分相近大小滾刀塊並確實瀝乾。依序將根莖類、蒟蒻、香菇與雞腿塊放入內鍋，倒入預先拌溶的柴魚高湯、醬油、清酒、砂糖與味醂，以矽膠鏟輕拌撥平，確認鍋底無砂糖顆粒沉澱（若總液體低於 150 ml 先補 30–50 ml 水）。',
        tip: '想要居酒屋麻油香氣，入鍋前可先開「爆炒煎烤」用 1 小匙麻油略炒雞腿與根莖 2 分鐘再倒醬汁；想多做常備菜可直接放大 1.5–2 倍，壓力時間照舊 5 分鐘。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋啟動「蒸／一鍋兩菜」5–8 分鐘',
        instruction:
          '確認內鍋外壁乾燥，蓋上鍋蓋並順時鐘鎖緊；按右側選擇「蒸／一鍋兩菜」將時間調整為 5–8 分鐘啟動（愛爽脆設 5–6 分，愛軟透設 8 分），經約 10 分鐘升壓後開始倒數。',
        potAction: {
          side: 'right',
          modeName: '蒸／一鍋兩菜',
          lid: 'locked',
          durationText: '5–8 分鐘',
          releaseMode: 'quick_manual',
          shortAction: '微壓快煮透根莖',
        },
      },
      {
        stepNumber: 3,
        title: '即時洩壓開蓋檢視防根莖過爛',
        instruction:
          '行程結束響起提示音後，立即執行安全即時洩壓（手臉遠離排氣孔，避免保溫悶久使紅蘿蔔軟爛），確認浮閥降下後將鍋蓋朝外傾斜打開防燙水滴落。',
      },
      {
        stepNumber: 4,
        title: '拌勻收亮或靜置入味盛盤',
        instruction:
          '開蓋以矽膠鏟由下往上溫柔翻拌讓食材裹勻醬汁；若偏愛乾爽油亮的便當常備菜口感，不鎖蓋切左側「收汁／醬燒」滾煮 2–3 分鐘至鍋底僅剩薄亮醬汁即起鍋。靜置降溫 15–30 分鐘最會吸味，盛盤點綴燙熟四季豆段。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '2–3 分鐘（選配）',
          shortAction: '收濃掛上味醂光',
        },
      },
    ],
  },
  {
    id: 'spec-official-19-tfal-jp-qingjiao-rousi',
    title: '日式青椒肉絲',
    subtitle: '全程開蓋 150°C 恆溫無煙爆炒 8 分鐘，肉絲滑嫩青椒翠綠挺脆',
    category: 'braise',
    cuisine: '日式',
    settingMinutes: 8,
    realTotalMinutes: 10,
    baseServings: 2,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（免洩壓）',
    stoveDifference:
      '利用 150°C 恆溫無煙開蓋快炒，零油煙免洗瓦斯爐；5L 寬底球釜能把 2 人份食材攤平快蒸水氣，青椒更脆亮，但不適合一次硬塞 4 人份以上。',
    avoidPitfall:
      '切勿冷鍋下裹粉牛肉絲以免黏成團；先空鍋預熱足 2 分鐘再下油，且青椒一轉油亮翠綠即可提前取消起鍋防炒黃。',
    youtubeQuery: 'T-fal 電壓力鍋 青椒肉絲 鮮呼吸萬用鍋',
    sourceUrl: 'https://www.t-fal.co.jp/',
    sourceTag: '日本 T-fal 官方食譜',
    ingredients: [
      { name: '牛腿肉絲（逆紋切約 5mm，先抓醃）', amount: 150, unit: '克', note: '亦可等量改豬肉絲', group: 'main' },
      { name: '青椒（去籽順紋切細絲）', amount: 2, unit: '顆', group: 'main' },
      { name: '紅甜椒（去籽順紋切細絲）', amount: 0.5, unit: '顆', group: 'main' },
      { name: '熟竹筍絲（沖淨徹底壓乾水分）', amount: 50, unit: '克', group: 'main' },
      { name: '醬油（醃牛肉用）', amount: 0.5, unit: '大匙', group: 'seasoning' },
      { name: '清酒（醃牛肉用）', amount: 0.5, unit: '大匙', group: 'seasoning' },
      { name: '太白粉（醃牛肉用）', amount: 0.5, unit: '大匙', group: 'seasoning' },
      { name: '耐熱植物油', amount: 1, unit: '小匙', note: '5L寬底防沾補油', group: 'seasoning' },
      { name: '麻油', amount: 0.5, unit: '小匙', note: '起鍋前淋入更香', group: 'seasoning' },
      { name: '蠔油', amount: 0.5, unit: '大匙', note: '預調成綜合醬碗', group: 'seasoning' },
      { name: '雞粉', amount: 0.5, unit: '小匙', group: 'seasoning' },
      { name: '薑泥', amount: 0.5, unit: '小匙', group: 'seasoning' },
      { name: '蒜泥', amount: 0.5, unit: '小匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '啟動左側「爆炒煎烤」並確實預熱',
        instruction:
          '牛肉絲先抓勻 1/2 大匙醬油與 1/2 大匙清酒至吸水，再拌入 1/2 大匙太白粉裹薄粉；另將蠔油、雞粉、薑泥與蒜泥先調成綜合醬碗。保持全程開蓋不鎖定，選左側「爆炒煎烤」將時間調至 8 分鐘啟動，先空鍋預熱 1.5–2 分鐘至手懸鍋口明顯溫熱。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '8 分鐘',
          temperature: '150°C',
          shortAction: '150°C恆溫開蓋快炒',
        },
      },
      {
        stepNumber: 2,
        title: '下油將牛肉絲滑炒至變色',
        instruction:
          '倒入 1 小匙耐熱植物油潤鍋（若照原譜只用 1/2 小匙麻油亦可，但 5L 寬底多補植物油較防黏），放入抓醃牛肉絲迅速撥散平鋪，先靜置煎 20–30 秒讓太白粉層定型，再翻炒約 2 分鐘至轉灰褐色、約八分熟。',
      },
      {
        stepNumber: 3,
        title: '投入青椒、紅椒與熟筍三絲翻炒',
        instruction:
          '緊接著投入徹底壓乾水分的青椒絲、紅甜椒絲與熟筍絲，與牛肉絲持續翻炒約 2–3 分鐘至青椒沾上油光、邊緣轉亮翠綠且散發清香。',
      },
      {
        stepNumber: 4,
        title: '倒入綜合蠔油蒜薑醬快速合味起鍋',
        instruction:
          '沿鍋邊淋入預先調勻的綜合醬碗（若略乾可點 1 小匙清酒或清水助拌開），快速翻炒 1–1.5 分鐘讓薄芡均勻巴附三絲，淋入 1/2 小匙麻油提香；確認牛肉全熟無積湯即可提前按取消盛盤，不必等 8 分鐘跑完以免青椒變黃。',
      },
    ],
  },
  {
    id: 'spec-official-20-tfal-jp-buta-no-kakuni',
    title: '日式豚角煮',
    subtitle: '厚切五花先煎逼油，高壓 20 分加自然洩壓浸味肥肉化口不膩',
    category: 'braise',
    cuisine: '日式',
    settingMinutes: 30,
    realTotalMinutes: 65,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '務必自然自動洩壓＋保溫浸味（筷子一撥即開）',
    stoveDifference:
      '轉用到 5L 寬底內鍋時，清酒加清水請提高至 150–200 ml 才防高糖焦底；壓完絕不可急洩，靠自然洩壓加靜置浸味，瘦肉才不柴、肥肉晶瑩如凍。',
    avoidPitfall:
      '含 3 大匙砂糖極易焦鍋，入壓前先確認糖已完全拌溶；開蓋收汁最後 1 分鐘緊盯液面，鍋底剩約 0.5 公分即關機。',
    youtubeQuery: 'T-fal 電壓力鍋 豚角煮 日式控肉',
    sourceUrl: 'https://www.t-fal.co.jp/',
    sourceTag: '日本 T-fal 官方食譜',
    ingredients: [
      { name: '豬五花肉塊（橫切約 2 公分厚方塊）', amount: 600, unit: '克', note: '帶皮或去皮皆可', group: 'main' },
      { name: '青蔥綠尾段', amount: 15, unit: '公分', note: '去腥用', group: 'main' },
      { name: '帶皮老薑（切片）', amount: 4, unit: '片', group: 'main' },
      { name: '去殼水煮蛋（選配）', amount: 4, unit: '顆', note: '洩壓開蓋後浸泡', group: 'main' },
      { name: '醬油', amount: 4, unit: '大匙', group: 'seasoning' },
      { name: '砂糖（二砂、上白糖或冰糖）', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '清酒', amount: 80, unit: 'ml', note: '酒加清水共200ml', group: 'seasoning' },
      { name: '清水', amount: 120, unit: 'ml', note: '5L寬底足量防焦', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '五花肉前處理（無油乾煎封油或汆燙擇一）',
        instruction:
          '開蓋選左側「爆炒煎烤」，免放油將 2 公分厚豬五花肥油面朝下排入鍋底，每面乾煎 1–2 分鐘至金黃焦香逼出豬油；按取消用厚廚房紙巾把鍋底過多豬油徹底吸除（若偏好清爽派，亦可另鍋冷水汆燙 3–5 分洗淨瀝乾，直接跳至第 2 步）。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '6–8 分鐘',
          temperature: '150°C',
          shortAction: '乾煎逼油去腥膩',
        },
      },
      {
        stepNumber: 2,
        title: '單層鋪料並注入拌溶滷汁',
        instruction:
          '將五花肉塊單層平鋪於內鍋底不堆疊，上方擺上青蔥綠段與 4 片帶皮薑片；依序倒入 4 大匙醬油、3 大匙砂糖，以及清酒 80 ml 與清水 120 ml（確保酒水合計達 150–200 ml 防 5L 鍋焦底），攪勻確認砂糖完全溶解無沉澱。',
      },
      {
        stepNumber: 3,
        title: '鎖蓋鮮呼吸高壓 20 分鐘',
        instruction:
          '蓋上鍋蓋順時鐘轉到底鎖緊，按右側選擇「雞／鴨／豬」設 20 分鐘啟動（若切 3.5–4 公分超大厚塊或家中長輩偏好極致綿爛，可調至 25–29 分鐘，或改選「牛／羊」設 30 分鐘）。',
        potAction: {
          side: 'right',
          modeName: '雞／鴨／豬',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '鮮呼吸軟化三層肉',
        },
      },
      {
        stepNumber: 4,
        title: '務必自然洩壓並靜置保溫浸味',
        instruction:
          '20 分鐘響鈴後切勿手動強制快洩，讓機器完整執行自動自然洩壓（約 15–20 分鐘）；洩壓後維持保溫或蓋鍋靜置 15–30 分鐘（此時可開蓋投入剝殼水煮蛋一同浸漬入味），讓肉纖維放鬆回吸甘醇醬汁。',
      },
      {
        stepNumber: 5,
        title: '（選配）開蓋收汁上色與擺盤享用',
        instruction:
          '開蓋夾除蔥薑並撇去表層浮油即可盛盤；若想呈現居酒屋濃厚琥珀光澤，保持開蓋切左側「收汁／醬燒」滾煮 3–5 分鐘並不斷舀濃汁澆淋肉面，見鍋底餘約 0.5 公分微稠立即關機起鍋，佐日式黃芥末與白蔥絲解膩。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '3–5 分鐘（選配）',
          shortAction: '澆汁收亮焦糖色',
        },
      },
    ],
  },
  {
    id: 'spec-official-21-tfal-jp-waterless-chicken-curry',
    title: '無水番茄雞肉咖哩',
    subtitle: '一滴水不加改用純咖哩粉直壓 12 分，洋蔥番茄融出清爽濃醬',
    category: 'braise',
    cuisine: '日式',
    settingMinutes: 12,
    realTotalMinutes: 40,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（免手動碰閥）',
    stoveDifference:
      '改用零澱粉純「咖哩粉」搭大量洋蔥與番茄罐頭原汁，完全不加水也能直壓不焦底、清爽少油；若只備有含澱粉咖哩塊，務必壓完開蓋後再融化。',
    avoidPitfall:
      '嚴守由下而上「洋蔥→番茄含汁→雞腿→最頂端咖哩粉與蜂蜜」鋪層，加壓前絕不可攪到底以免蜂蜜與咖哩粉焦底。',
    youtubeQuery: 'T-fal 電壓力鍋 無水番茄雞肉咖哩 鮮呼吸萬用鍋',
    sourceUrl: 'https://www.t-fal.co.jp/',
    sourceTag: '日本 T-fal 官方食譜',
    ingredients: [
      { name: '去骨雞腿塊（切一口塊、鹽胡椒抓醃）', amount: 400, unit: '克', group: 'main' },
      { name: '中大洋蔥（切約 1 公分細丁鋪底）', amount: 2, unit: '顆', note: '合計約 400 克', group: 'main' },
      { name: '切丁番茄罐頭（連罐內番茄汁全用）', amount: 400, unit: '克', note: '1 整罐免加水', group: 'main' },
      { name: '純香料咖哩粉（非塊狀咖哩塊）', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '西式洋風高湯粉或雞湯粉', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '蜂蜜', amount: 0.5, unit: '大匙', note: '柔和番茄酸度', group: 'seasoning' },
      { name: '鹽（抓醃雞腿用）', amount: 0.67, unit: '小匙', note: '約 2/3 小匙', group: 'seasoning' },
      { name: '胡椒粉（抓醃雞腿用）', amount: null, unit: '少許', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '嚴守由下而上防焦鋪層順序（不攪拌到底）',
        instruction:
          '去骨雞腿塊先以 2/3 小匙鹽與少許胡椒抓醃 5–10 分鐘。完全不額外加水，嚴格由下而上鋪入內鍋：① 最底層鋪滿 2 顆洋蔥細丁（約 350–450 克，若洋蔥偏小多補半顆鋪滿 5L 鍋底）→ ② 倒入整罐 400 克切丁番茄連茄汁滲底 → ③ 分散排上雞腿塊 → ④ 最上層撒咖哩粉、高湯粉並淋蜂蜜，切勿攪拌到底。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋啟動無水高壓 12 分鐘',
        instruction:
          '蓋上鍋蓋並順時鐘轉到底鎖緊，按右側選擇「雞／鴨／豬」設 12 分鐘啟動（預設 40 千帕能讓洋蔥完全化泥成濃醬；若愛洋蔥保留微粒可按「壓力調節」降至 30 千帕）。',
        potAction: {
          side: 'right',
          modeName: '雞／鴨／豬',
          lid: 'locked',
          durationText: '12 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '無水壓融洋蔥番茄',
        },
      },
      {
        stepNumber: 3,
        title: '自動洩壓開蓋並由下往上徹底拌勻',
        instruction:
          '行程結束等待自動安全洩壓完畢、浮閥降下後朝外傾斜開蓋；立刻用耐熱矽膠鏟從鍋底往上徹底翻拌並略壓軟透番茄洋蔥，讓上層蒸透的咖哩粉、蜂蜜與底層蔬菜原汁融為橘棕濃醬。',
        tip: '咖哩粉富含薑黃易留味，煮完建議儘快清洗膠條，或放 2 杯水加檸檬片蒸 5 分鐘除味。',
      },
      {
        stepNumber: 4,
        title: '試味並視濃稠度決定是否收汁',
        instruction:
          '試味調整鹹酸（覺偏酸可補少許蜂蜜或趁餘溫拌入 15 克奶油與鮮奶油變身奶油咖哩）；若醬汁偏稀，不鎖蓋切左側「收汁／醬燒」邊拌邊小滾 3–5 分鐘至濃郁閃亮，盛盤配白飯或烤餅享用。',
        potAction: {
          side: 'left',
          modeName: '收汁／醬燒',
          lid: 'open',
          durationText: '3–5 分鐘（選配）',
          shortAction: '邊拌邊收濃茄醬',
        },
      },
    ],
  },
  {
    id: 'spec-official-23-tfal-jp-one-minute-steamed-pudding',
    title: '一分鐘零氣孔蒸布丁',
    subtitle: '常溫蛋奶過篩封鋁箔，極短加壓 1 分靠自然洩壓餘熱凝成鏡面滑嫩',
    category: 'steam',
    cuisine: '日式',
    settingMinutes: 1,
    realTotalMinutes: 25,
    baseServings: 4,
    innerPot: '雙內鍋皆可',
    releaseSummary: '務必自然自動洩壓＋悶 10–15 分（嚴禁快洩）',
    stoveDifference:
      '蛋奶超過 90°C 沸騰就會起氣孔，靠 300 ml 常溫水升壓、極短加壓 1 分立刻按取消停火，再靠自然洩壓餘熱柔和凝結；也可用「舒肥料理」85°C 水浴零失敗。',
    avoidPitfall:
      '蛋與鮮奶必退室溫且鍋底只用常溫水；「蒸／一鍋兩菜」最短設 3 分鐘，切勿蒸滿，倒數滿 1 分（螢幕顯示剩 2 分）立刻按「取消」靠餘熱悶 10–15 分。',
    youtubeQuery: 'T-fal 電壓力鍋 1分鐘蒸布丁 鮮呼吸萬用鍋 布丁',
    sourceUrl: 'https://www.t-fal.co.jp/',
    sourceTag: '日本 T-fal 官方食譜',
    ingredients: [
      { name: '常溫中型雞蛋（提前退冰 30–60 分）', amount: 3, unit: '顆', note: '不可冰蛋直接用', group: 'main' },
      { name: '常溫全脂鮮奶（提前退冰至室溫）', amount: 300, unit: 'ml', note: '可換80ml鮮奶油', group: 'main' },
      { name: '鋁箔紙（約 12×12 公分）', amount: 4, unit: '張', note: '獨立封緊4杯口', group: 'main' },
      { name: '細砂糖', amount: 30, unit: '克', group: 'seasoning' },
      { name: '鍋底蒸煮常溫清水', amount: 300, unit: 'ml', note: '切忌滾水免升壓過快', group: 'seasoning' },
      { name: '香草精（選配）', amount: 3, unit: '滴', group: 'seasoning' },
      { name: '焦糖淋醬', amount: null, unit: '適量', note: '冰透享用前淋上', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '輕柔打散常溫蛋液防起泡',
        instruction:
          '雞蛋 3 顆與全脂鮮奶 300 ml 務必提前於室溫靜置 30–60 分鐘退冰。將常溫雞蛋與 30 克砂糖放入攪拌盆，用筷子或打蛋器貼緊盆底左右「畫一字」輕柔切拌至蛋液混合融糖，切忌快速打圈混入空氣。',
      },
      {
        stepNumber: 2,
        title: '緩緩拌入常溫牛奶並過篩 1–2 次',
        instruction:
          '沿盆邊緩緩倒入 300 ml 常溫鮮奶（選配香草精此時滴入）輕拌至完全融糖無沉澱，務必以細目濾網過篩 1–2 次至帶嘴量杯，徹底濾除蛋筋與細泡。',
      },
      {
        stepNumber: 3,
        title: '分裝 4 杯、消泡並以鋁箔紙嚴密封頂',
        instruction:
          '將布丁液平均分裝入 4 個直徑約 7 公分耐熱杯（約 7–8 分滿），用小湯匙或廚房紙巾邊角輕觸吸掉表面零星氣泡，每杯各蓋 1 張鋁箔紙沿杯緣確實壓緊包實，防高壓凝結水滴落表面坑疤。',
      },
      {
        stepNumber: 4,
        title: '300 ml 常溫水架蒸盤極短加壓 1 分鐘',
        instruction:
          '內鍋倒入 300 ml 室溫清水並架上原廠蒸盤（水面低於蒸盤不泡杯底），平排 4 個封箔布丁杯後順時鐘鎖緊上蓋；按右側「蒸／一鍋兩菜」調至最短 3 分鐘啟動，待升壓完成螢幕開始倒數並過了 1 分鐘（顯示剩 2 分）立刻按下「取消」停止加熱！',
        potAction: {
          side: 'right',
          modeName: '蒸／一鍋兩菜',
          lid: 'locked',
          durationText: '3 分鐘（倒數 1 分按取消）',
          releaseMode: 'natural_auto',
          shortAction: '極短加壓1分定型',
        },
        tip: '也能改用左側「舒肥料理」85°C／25–30 分（蓋蓋不鎖定、內鍋 70–80°C 溫熱水淹杯身 1/2 高度）恆溫水浴，物理上 100% 絕不起氣孔！',
      },
      {
        stepNumber: 5,
        title: '嚴禁快洩！靠自然洩壓與餘熱柔和凝結',
        instruction:
          '完成 1 分鐘加壓（或手動按取消）後切勿手動急洩，維持鎖蓋讓機器進行自然洩壓並蓋鍋靜置保溫 10–15 分鐘（薄玻璃杯約 10 分、厚陶瓷烤盅約 15 分），讓中心精準停在 80–85°C 最嫩凝結區。',
      },
      {
        stepNumber: 6,
        title: '開蓋晃杯檢核、放涼冷藏並淋焦糖享用',
        instruction:
          '浮閥落下後朝外傾斜開蓋，戴隔熱手套取出並小心掀開鋁箔紙；水平輕晃杯身見邊緣凝結、正中央像軟果凍般微微彈晃即完美熟度（若中心仍流質可蓋回靠餘溫再悶 5–10 分）。放涼包保鮮膜冷藏 2–3 小時定型，吃前淋適量焦糖醬享用。',
      },
    ],
  },
];
