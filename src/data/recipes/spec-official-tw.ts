import type { Recipe } from '../../types/recipe';

const OFFICIAL_TW_SOURCE_URL = 'https://www.tefal-home.com.tw/recipe/SMARTPROEPC/';
const OFFICIAL_TW_SOURCE_TAG = '台灣官方食譜手冊 36道世界料理 法國特福原廠';

export const SPEC_OFFICIAL_TW_RECIPES: Recipe[] = [
  {
    id: 'spec-official-tw-03-korean-kimchi-braised-beef',
    title: '韓式泡菜燉牛肉',
    subtitle: '牛小排先煎香鎖汁，蓋上不鎖高溫慢燉 8 小時酸辣極嫩',
    category: 'braise',
    cuisine: '韓式',
    settingMinutes: 510,
    realTotalMinutes: 525,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（免洩壓，時間到按取消直接開蓋）',
    stoveDifference:
      '用 90°C 無壓高溫慢燉取代瓦斯爐長時間顧火，泡菜酵素慢火軟化牛小排，免盯鍋也不會燒乾焦底。',
    avoidPitfall:
      '拌入麵粉翻炒後，加雞湯與辣醬時務必把鍋底麵粉徹底拌開，免得慢燉 8 小時沉底結塊。',
    youtubeQuery: '特福鮮呼吸萬用鍋 韓式泡菜燉牛肉 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '牛小排（英式三片薄切）', amount: 1000, unit: '克', group: 'main' },
      { name: '紅洋蔥（去皮切絲）', amount: 1, unit: '顆', group: 'main' },
      { name: '紅蘿蔔（去皮切碎）', amount: 1, unit: '根', group: 'main' },
      { name: '韓式泡菜', amount: 0.25, unit: '杯', note: '重口味可增至半杯', group: 'main' },
      { name: '蒜泥', amount: 1, unit: '大匙', group: 'main' },
      { name: '薑泥（去皮）', amount: 1, unit: '大匙', group: 'main' },
      { name: '蔥花與白芝麻', amount: null, unit: '適量', note: '起鍋裝飾用', group: 'main' },
      { name: '植物油', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '麵粉', amount: 0.25, unit: '杯', note: '嗜辣改韓式辣椒粉2大匙', group: 'seasoning' },
      { name: '低鹽生抽', amount: 0.25, unit: '杯', group: 'seasoning' },
      { name: '糖', amount: 0.25, unit: '杯', group: 'seasoning' },
      { name: '韓式辣椒醬', amount: 2, unit: '大匙', note: '依個人辣度調整', group: 'seasoning' },
      { name: '低鹽雞湯', amount: 1, unit: '杯', group: 'seasoning' },
      { name: '鹽與黑胡椒', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '倒油開啟爆炒煎烤預熱',
        instruction:
          '在內鍋中加入少量植物油，開蓋選擇左側「爆炒煎烤」功能，將時間設定為 30 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '30 分鐘',
          temperature: '150°C',
          shortAction: '熱油分批煎牛排',
        },
      },
      {
        stepNumber: 2,
        title: '分批煎香牛小排',
        instruction:
          '待萬用鍋發出提示音表示油已燒熱，放入牛小排分批煎至表面上色後先取出。',
      },
      {
        stepNumber: 3,
        title: '倒出多餘油並爆炒蔬菜辛香料',
        instruction:
          '小心鍋體高溫倒出多餘的油，放入紅洋蔥絲、紅蘿蔔碎、蒜泥與薑泥，翻炒約 5 分鐘。',
      },
      {
        stepNumber: 4,
        title: '拌入麵粉炒勻後按取消',
        instruction:
          '加入麵粉翻炒至所有材料均勻裹粉，接著按下「取消」停止爆炒行程。',
        tip: '重度嗜辣者，可將麵粉改為韓式辣椒粉 2 大匙。',
      },
      {
        stepNumber: 5,
        title: '倒入泡菜與醬料拌勻放回牛小排',
        instruction:
          '倒入低鹽雞湯、低鹽生抽、韓式泡菜、韓式辣椒醬與糖，以鹽和黑胡椒調味並將鍋底麵粉徹底拌開，再放回煎好的牛小排。',
        tip: '喜歡泡菜味更重者，泡菜份量可增加至 1/2 杯。',
      },
      {
        stepNumber: 6,
        title: '蓋上上蓋不鎖定',
        instruction: '關上上蓋，但不要順時鐘鎖上。',
      },
      {
        stepNumber: 7,
        title: '啟動高溫慢燉 8 小時',
        instruction:
          '選擇左側「高溫慢燉」功能，將時間設定為 8 小時，按下「開始」，待升溫就緒後會自動開始倒數。',
        potAction: {
          side: 'left',
          modeName: '高溫慢燉',
          lid: 'closed_unlocked',
          durationText: '8 小時',
          temperature: '90°C',
          shortAction: '90°C慢燉8小時',
        },
      },
      {
        stepNumber: 8,
        title: '開蓋撒蔥花與白芝麻上桌',
        instruction:
          '待萬用鍋發出完成提示音時按「取消」，直接打開上蓋，撒上蔥花與白芝麻即可盛盤享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-04-vietnamese-beef-pho',
    title: '越式風味牛肉粉',
    subtitle: '香茅薑蔥先爆香，紅味噌湯底高溫慢燉 3 小時搭台式米粉',
    category: 'rice',
    cuisine: '南洋',
    settingMinutes: 190,
    realTotalMinutes: 205,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（免洩壓，按取消即可開蓋）',
    stoveDifference:
      '無壓高溫慢燉 3 小時能把牛腱與香茅、紅味噌慢慢熬出清甜肉香，免顧爐火也不怕湯汁蒸發變死鹹。',
    avoidPitfall:
      '紅味噌下鍋先徹底拌溶再啟動慢燉，避免沉底結塊；最後勾芡煮稠別忘了按「取消」停火。',
    youtubeQuery: '特福鮮呼吸萬用鍋 越式牛肉粉 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '牛肩胛小排或牛腱（切 3 公分塊）', amount: 500, unit: '克', group: 'main' },
      { name: '煮熟的細米粉', amount: 440, unit: '克', group: 'main' },
      { name: '大白菜（切細絲）', amount: 300, unit: '克', group: 'main' },
      { name: '洋蔥（切絲）', amount: 2, unit: '顆', group: 'main' },
      { name: '香茅（切碎）', amount: 2, unit: '根', group: 'main' },
      { name: '薑末（去皮）', amount: 20, unit: '克', group: 'main' },
      { name: '芫荽（切碎）', amount: 2, unit: '大匙', note: '起鍋拌入', group: 'main' },
      { name: '薄荷（切碎）', amount: 2, unit: '大匙', note: '起鍋拌入', group: 'main' },
      { name: '植物油', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '紅味噌', amount: 80, unit: 'ml', note: '約 1/3 杯', group: 'seasoning' },
      { name: '清水', amount: 1000, unit: 'ml', group: 'seasoning' },
      { name: '玉米粉（加 1 大匙水調勻）', amount: 1, unit: '大匙', note: '起鍋勾芡用', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '倒油開啟爆炒煎烤預熱',
        instruction:
          '在內鍋中加入少量植物油，開蓋選擇左側「爆炒煎烤」功能，將時間設定為 4 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '4 分鐘',
          temperature: '150°C',
          shortAction: '熱油爆香香茅',
        },
      },
      {
        stepNumber: 2,
        title: '炒香洋蔥絲、香茅與薑末',
        instruction:
          '待萬用鍋發出提示音油已燒熱，加入洋蔥絲、香茅碎與薑末炒 4 分鐘，期間不斷攪拌至呈金黃色，時間到發出提示音時按「取消」。',
      },
      {
        stepNumber: 3,
        title: '拌入牛肉、清水與紅味噌',
        instruction:
          '放入牛肉塊、1000 ml 清水與紅味噌，充分攪拌至紅味噌完全溶解均勻。',
      },
      {
        stepNumber: 4,
        title: '蓋上上蓋不鎖定',
        instruction: '關上上蓋，但不要鎖上。',
      },
      {
        stepNumber: 5,
        title: '啟動高溫慢燉 3 小時',
        instruction:
          '選擇左側「高溫慢燉」功能，設定時間 3 小時並按下「開始」，待升溫就緒後開始倒數。',
        potAction: {
          side: 'left',
          modeName: '高溫慢燉',
          lid: 'closed_unlocked',
          durationText: '3 小時',
          temperature: '90°C',
          shortAction: '90°C慢燉湯底',
        },
        tip: '喜歡大白菜軟爛口感者，可在此步驟一開始就把大白菜加入同燉，省略步驟 7 的煮白菜。',
      },
      {
        stepNumber: 6,
        title: '時間到按取消開蓋',
        instruction: '待萬用鍋發出完成提示音時按「取消」，直接打開上蓋。',
      },
      {
        stepNumber: 7,
        title: '開蓋切爆炒煎烤煮熟大白菜',
        instruction:
          '開蓋選擇左側「爆炒煎烤」功能按下「開始」，放入大白菜細絲煮熟。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 6 分鐘',
          temperature: '150°C',
          shortAction: '開蓋煮白菜勾芡',
        },
      },
      {
        stepNumber: 8,
        title: '下熟米粉並勾芡至濃稠',
        instruction:
          '放入煮熟的細米粉，再將 1 大匙玉米粉與 1 大匙水調勻拌入鍋中，以木杓或矽膠杓輕拌煮至湯汁變得濃稠。',
      },
      {
        stepNumber: 9,
        title: '按取消拌入香草盛碗享用',
        instruction:
          '按下「取消」停止加熱，拌入切碎的芫荽與薄荷，即可倒入碗中享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-10-cola-pork-ribs',
    title: '可樂豬肋排',
    subtitle: '先煎上色再以牛羊高壓燉 30 分，開蓋收濃可樂焦香醬汁',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 50,
    realTotalMinutes: 75,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（待排氣完畢開蓋收汁）',
    stoveDifference:
      '一般瓦斯爐滷肋排要顧火近 1 小時，萬用鍋用 60 kPa 高壓 30 分就軟爛脫骨，可樂氣泡與糖分能讓肉質更 Q 彈油亮。',
    avoidPitfall:
      '最後收汁 10 分鐘因可樂含糖量高，請用矽膠或木鏟勤翻拌，避免焦糖過度黏鍋並保護內鍋塗層。',
    youtubeQuery: '特福鮮呼吸萬用鍋 可樂豬肋排 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '豬肋排（切 5 公分長）', amount: 500, unit: '克', group: 'main' },
      { name: '青蔥（蔥白蔥綠分開）', amount: 2, unit: '根', group: 'main' },
      { name: '薑片', amount: 2, unit: '片', group: 'main' },
      { name: '白芝麻', amount: null, unit: '適量', note: '盛盤裝飾用', group: 'main' },
      { name: '可樂', amount: 330, unit: 'ml', note: '市售 1 罐', group: 'seasoning' },
      { name: '食用油', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '米酒', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '蠔油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '生抽', amount: 0.5, unit: '大匙', group: 'seasoning' },
      { name: '老抽', amount: 0.5, unit: '大匙', group: 'seasoning' },
      { name: '鹽', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '豬肋排切段冷水汆燙去血水',
        instruction:
          '將豬肋排切成 5 公分長，放入冷水中煮滾，水滾後再續煮 2 分鐘去除血水與雜質，撈起瀝乾備用。',
      },
      {
        stepNumber: 2,
        title: '開蓋爆炒肋排至表面金黃',
        instruction:
          '內鍋加入食用油，開蓋選擇左側「爆炒煎烤」模式並設定時間 10 分鐘；待提示音響起油已熱，放入豬肋排翻炒至表面變成金黃色。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '10 分鐘',
          temperature: '150°C',
          shortAction: '煎黃肋排爆蔥薑',
        },
      },
      {
        stepNumber: 3,
        title: '下蔥白、薑片與米酒續炒後取消',
        instruction:
          '加入蔥白、薑片與米酒續炒 1–2 分鐘爆出香氣，待提示音響起按下「取消」。',
      },
      {
        stepNumber: 4,
        title: '趁餘溫拌入醬料、可樂與蔥綠',
        instruction:
          '利用鍋內餘溫加入生抽、老抽與蠔油拌勻（視口味加少許鹽），再倒入可樂並放入蔥綠。',
      },
      {
        stepNumber: 5,
        title: '蓋上上蓋並順時鐘鎖緊',
        instruction: '確認食材拌勻後，蓋上上蓋並順時鐘確實鎖緊。',
      },
      {
        stepNumber: 6,
        title: '牛羊高壓模式燉煮 30 分鐘',
        instruction:
          '選擇右側「牛 / 羊肉」模式，將時間設定為 30 分鐘並按下「開始」，待行程完成並完全排氣洩壓。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '60kPa高壓燉骨',
        },
      },
      {
        stepNumber: 7,
        title: '開蓋收汁醬燒 10 分鐘',
        instruction:
          '排氣洩壓完畢後打開上蓋，選擇左側「收汁 / 醬燒」模式並設定時間 10 分鐘，期間以矽膠或木鏟適時翻拌讓醬汁裹附肋排。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '10 分鐘',
          temperature: '110°C',
          shortAction: '收亮可樂醬汁',
        },
      },
      {
        stepNumber: 8,
        title: '盛盤撒芝麻裝飾上桌',
        instruction: '收汁時間一到即可將豬肋排夾起盛盤，撒上白芝麻裝飾享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-11-oxtail-soup',
    title: '清燉牛尾湯',
    subtitle: '牛尾冷水汆燙去腥，牛羊模式壓 45 分出滿滿膠原鮮甜清湯',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 45,
    realTotalMinutes: 70,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（保留清澈高湯不混濁）',
    stoveDifference:
      '傳統燉牛尾得慢熬 2–3 小時才出膠，萬用鍋鎖蓋 60 kPa 壓 45 分就軟透化口，湯面也清澈不混濁。',
    avoidPitfall:
      '鹽與芫荽務必等洩壓開蓋後再放，湯色才清亮不發暗；加水覆蓋牛尾時切記勿超最高水位線。',
    youtubeQuery: '特福鮮呼吸萬用鍋 牛尾湯 清燉牛尾 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '牛尾（可選帶皮款）', amount: 500, unit: '克', group: 'main' },
      { name: '薑片（分半使用）', amount: 6, unit: '片', note: '半份汆燙半份燉', group: 'main' },
      { name: '青蔥與芫荽（香菜）', amount: 1, unit: '撮', note: '芫荽起鍋再加', group: 'main' },
      { name: '米酒（分半使用）', amount: 2, unit: '大匙', note: '半份汆燙半份燉', group: 'seasoning' },
      { name: '清水', amount: null, unit: '適量', note: '剛好淹過牛尾', group: 'seasoning' },
      { name: '鹽', amount: 5, unit: '克', note: '起鍋前調味', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '另鍋加薑酒冷水汆燙牛尾',
        instruction:
          '用另一個鍋具加入冷水、一半份量的薑片與米酒，放入牛尾煮滾後再續煮 2 分鐘去除血水與雜質，瀝乾水分備用。',
        tip: '牛尾也可選用帶皮款式，燉煮後能嚐到更有層次的膠質口感。',
      },
      {
        stepNumber: 2,
        title: '牛尾入內鍋加水覆蓋',
        instruction:
          '將汆燙好的牛尾輕放入萬用鍋內鍋，倒入清水直至剛好覆蓋牛尾（注意勿超過最高水位線）。',
      },
      {
        stepNumber: 3,
        title: '加入青蔥與剩餘薑酒',
        instruction: '放入青蔥以及剩餘一半份量的薑片與米酒。',
      },
      {
        stepNumber: 4,
        title: '蓋上上蓋並順時鐘鎖緊',
        instruction: '確認密封圈就位後，蓋上上蓋並順時鐘鎖緊。',
      },
      {
        stepNumber: 5,
        title: '牛羊模式高壓清燉 45 分鐘',
        instruction:
          '選擇右側「牛 / 羊肉」模式，將時間調整為 45 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '45 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '60kPa清燉出膠',
        },
      },
      {
        stepNumber: 6,
        title: '洩壓開蓋加鹽與芫荽上桌',
        instruction:
          '行程完成並完全排氣洩壓後打開上蓋，加入 5 克鹽與芫荽調勻（亦可盛碗後才放上芫荽）即可趁熱享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-12-braised-beef-shank',
    title: '台式滷牛腱',
    subtitle: '牛腱直剖半快速吃味，八角花椒爆香壓 30 分切盤最下酒',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 35,
    realTotalMinutes: 60,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（待排氣完畢按取消開蓋）',
    stoveDifference:
      '將整條牛腱直剖成兩半再高壓滷 30 分，比傳統瓦斯爐滷整條省一半以上時間，筋膜照樣 Q 軟入味。',
    avoidPitfall:
      '冰糖炒香時請用矽膠或木鏟翻動免刮鍋底；想要省油省時，也可免炒香料全部直接入鍋壓。',
    youtubeQuery: '特福鮮呼吸萬用鍋 滷牛腱 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '牛腱', amount: 600, unit: '克', group: 'main' },
      { name: '蒜頭', amount: 5, unit: '瓣', group: 'main' },
      { name: '青蔥（蔥白蔥綠分開）', amount: 1, unit: '根', group: 'main' },
      { name: '薑片', amount: 3, unit: '片', group: 'main' },
      { name: '老抽', amount: 120, unit: 'ml', group: 'seasoning' },
      { name: '米酒', amount: 50, unit: 'ml', group: 'seasoning' },
      { name: '冰糖', amount: 10, unit: '克', group: 'seasoning' },
      { name: '八角', amount: 2, unit: '顆', note: '1–2 顆皆可', group: 'seasoning' },
      { name: '肉桂', amount: 1, unit: '克', group: 'seasoning' },
      { name: '月桂葉', amount: 1, unit: '克', group: 'seasoning' },
      { name: '乾辣椒', amount: 2, unit: '克', group: 'seasoning' },
      { name: '花椒', amount: 2, unit: '克', group: 'seasoning' },
      { name: '食用油', amount: 1, unit: '大匙', note: '爆香香料用', group: 'seasoning' },
      { name: '清水', amount: null, unit: '適量', note: '蓋過牛腱即可', group: 'seasoning' },
      { name: '鹽', amount: null, unit: '適量', note: '可省略', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '牛腱直剖半冷水汆燙去血水',
        instruction:
          '將牛腱直剖成兩半放入冷水中煮滾，水滾後再續煮 2 分鐘去除血水與雜質，撈起備用。',
      },
      {
        stepNumber: 2,
        title: '倒油開啟爆炒煎烤 5 分鐘',
        instruction:
          '在內鍋中加入少許油，開蓋選擇左側「爆炒煎烤」模式，設定時間 5 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '5 分鐘',
          temperature: '150°C',
          shortAction: '熱油爆香辛香料',
        },
        tip: '不先炒香料也可以，直接把所有材料與汆燙後的牛腱全放入內鍋，跳至步驟 5 鎖蓋壓煮。',
      },
      {
        stepNumber: 3,
        title: '下辛香料與冰糖炒香 2 分鐘',
        instruction:
          '待萬用鍋發出提示音油已熱，放入蔥白、薑片、蒜頭、八角、肉桂、花椒、月桂葉與冰糖，以木鏟或矽膠鏟炒約 2 分鐘。',
      },
      {
        stepNumber: 4,
        title: '滾醬汁上色再加水蓋過牛腱',
        instruction:
          '加入老抽與米酒續滾 1 分鐘，放入牛腱滾 1 分鐘後翻面再滾 1 分鐘，接著放入乾辣椒與蔥綠，倒入清水直至蓋住牛腱。',
      },
      {
        stepNumber: 5,
        title: '蓋上上蓋並順時鐘鎖緊',
        instruction: '若爆炒尚未結束先按「取消」，蓋上上蓋並順時鐘確實鎖緊。',
      },
      {
        stepNumber: 6,
        title: '牛羊高壓模式燉煮 30 分鐘',
        instruction:
          '選擇右側「牛 / 羊肉」模式，將時間設定為 30 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '60kPa燉透牛腱',
        },
      },
      {
        stepNumber: 7,
        title: '洩壓按取消開蓋享用',
        instruction:
          '行程完成並完全排氣洩壓後，按下「取消」打開上蓋即可享用（待略放涼再切薄片更平整不易散）。',
      },
    ],
  },
  {
    id: 'spec-official-tw-13-dongpo-pork',
    title: '杭式東坡肉',
    subtitle: '蔥薑鋪底豬皮朝下高壓壓 30 分，翻面開蓋收出紅亮濃汁',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 40,
    realTotalMinutes: 65,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（按取消開蓋再翻面收汁）',
    stoveDifference:
      '免蒸免炸也免顧陶鍋慢煨 3 小時，蔥薑墊底、豬皮朝下直接 60 kPa 壓 30 分就肥而不膩、酥爛不碎。',
    avoidPitfall:
      '壓煮完五花肉極軟嫩，翻面讓豬皮朝上時務必用矽膠夾或木鏟輕托，避免肉塊碎裂或刮鍋。',
    youtubeQuery: '特福鮮呼吸萬用鍋 東坡肉 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '帶皮豬五花肉', amount: 500, unit: '克', group: 'main' },
      { name: '青蔥', amount: 1, unit: '根', note: '鋪鍋底防沾', group: 'main' },
      { name: '薑片', amount: 4, unit: '片', note: '3–4 片鋪鍋底', group: 'main' },
      { name: '米酒', amount: 150, unit: 'ml', group: 'seasoning' },
      { name: '生抽', amount: 40, unit: 'ml', group: 'seasoning' },
      { name: '老抽', amount: 20, unit: 'ml', group: 'seasoning' },
      { name: '冰糖', amount: 10, unit: '克', group: 'seasoning' },
      { name: '清水', amount: null, unit: '適量', note: '剛好淹過五花肉', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '五花肉冷水汆燙去血水',
        instruction:
          '將帶皮豬五花放入冷水中煮滾，水滾後再續煮 2 分鐘去除血水與雜質，撈起洗淨。',
      },
      {
        stepNumber: 2,
        title: '切成 4–5 公分方塊',
        instruction: '將汆燙好的五花肉切成約 4–5 公分大小的方塊。',
        tip: '五花肉可先以棉繩十字綑綁定型，防止燉煮後鬆散變形。',
      },
      {
        stepNumber: 3,
        title: '鍋底鋪薑片與青蔥',
        instruction: '在內鍋底部均勻鋪上薑片與青蔥段防沾。',
      },
      {
        stepNumber: 4,
        title: '豬皮朝下排放五花肉',
        instruction: '將五花肉塊以「豬皮向下」的方式排放入內鍋中。',
      },
      {
        stepNumber: 5,
        title: '倒入滷汁與覆蓋肉塊的水量',
        instruction:
          '加入生抽、老抽、米酒與冰糖，再倒入足以覆蓋豬肉的清水。',
      },
      {
        stepNumber: 6,
        title: '蓋上上蓋並順時鐘鎖緊',
        instruction: '蓋上上蓋並順時鐘確實鎖緊。',
      },
      {
        stepNumber: 7,
        title: '牛羊高壓模式燉煮 30 分鐘',
        instruction:
          '選擇右側「牛 / 羊肉」模式，將時間設定為 30 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '皮朝下高壓燉酥',
        },
      },
      {
        stepNumber: 8,
        title: '洩壓開蓋反轉肉塊讓豬皮朝上',
        instruction:
          '行程完成並完全排氣洩壓後，按下「取消」打開上蓋，以矽膠夾或木鏟輕托五花肉反轉，使豬皮朝上。',
      },
      {
        stepNumber: 9,
        title: '開蓋收汁至濃稠紅亮',
        instruction:
          '開蓋選擇左側「收汁 / 醬燒」功能，適時舀湯汁淋在豬皮表面，待醬汁變得濃稠發亮即可手動停止起鍋。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '約 8–10 分鐘',
          temperature: '110°C',
          shortAction: '翻面淋汁收紅亮',
        },
      },
    ],
  },
  {
    id: 'spec-official-tw-14-soy-glazed-lamb-ribs',
    title: '中式醬燒羊肋排',
    subtitle: '八角花椒肉桂爆香去羶，少水鎖蓋壓 30 分軟嫩鹹香入骨',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 38,
    realTotalMinutes: 65,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '自然自動洩壓（開蓋視濃稠度決定是否收汁）',
    stoveDifference:
      '用中式八角、花椒與肉桂取代西式香料，鎖蓋壓煮僅需 100 ml 水就能把羊肋排燉到軟爛脫骨、毫不腥羶。',
    avoidPitfall:
      '水量僅 100 ml 且含冰糖老抽，鎖蓋前務必拌勻確認鍋底無黏附物；翻動帶骨羊排切勿硬刮鍋底。',
    youtubeQuery: '特福鮮呼吸萬用鍋 醬燒羊肋排 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '羊肋排', amount: 460, unit: '克', group: 'main' },
      { name: '紅蘿蔔（切滾刀塊）', amount: 1, unit: '根', group: 'main' },
      { name: '蒜頭', amount: 8, unit: '瓣', group: 'main' },
      { name: '薑片', amount: 4, unit: '片', note: '3–4 片', group: 'main' },
      { name: '青蔥', amount: 1, unit: '根', group: 'main' },
      { name: '食用油', amount: 15, unit: 'ml', group: 'seasoning' },
      { name: '米酒', amount: 15, unit: 'ml', group: 'seasoning' },
      { name: '老抽', amount: 10, unit: 'ml', note: '不加鹽可增至30ml', group: 'seasoning' },
      { name: '清水', amount: 100, unit: 'ml', group: 'seasoning' },
      { name: '冰糖', amount: 10, unit: '克', group: 'seasoning' },
      { name: '八角', amount: 2, unit: '顆', group: 'seasoning' },
      { name: '月桂葉', amount: 2, unit: '片', group: 'seasoning' },
      { name: '肉桂棒', amount: 1, unit: '根', group: 'seasoning' },
      { name: '花椒', amount: null, unit: '適量', note: '依個人喜好', group: 'seasoning' },
      { name: '鹽', amount: null, unit: '適量', note: '可省略並加重老抽', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '羊肋排冷水汆燙去血水',
        instruction:
          '將羊肋排放入冷水中煮滾，水滾後再續煮 2 分鐘去除血水與雜質，撈起瀝乾備用。',
      },
      {
        stepNumber: 2,
        title: '倒油開啟爆炒煎烤 3 分鐘',
        instruction:
          '在內鍋中加入 15 ml 油，開蓋選擇左側「爆炒煎烤」模式，設定時間 3 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '3 分鐘',
          temperature: '150°C',
          shortAction: '爆香八角花椒',
        },
      },
      {
        stepNumber: 3,
        title: '爆香中式辛香料與酒醬',
        instruction:
          '待萬用鍋發出提示音油已熱，加入花椒、八角、薑片、肉桂棒、月桂葉，再加入蒜頭、青蔥、米酒與老抽翻炒至香味釋出。',
        tip: '若選擇不加鹽，可將老抽用量增加至 30 ml 提色增鮮。',
      },
      {
        stepNumber: 4,
        title: '放入羊肋排與配料拌勻',
        instruction:
          '放入汆燙好的羊肋排、紅蘿蔔、100 ml 清水、冰糖與鹽，以木鏟或矽膠鏟充分攪拌均勻並確認鍋底無黏附。',
      },
      {
        stepNumber: 5,
        title: '鎖蓋啟動牛羊模式 30 分鐘',
        instruction:
          '蓋上上蓋並順時鐘鎖緊，選擇右側「牛 / 羊肉」模式，將時間設定為 30 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '60kPa燉軟羊排',
        },
      },
      {
        stepNumber: 6,
        title: '洩壓開蓋視濃度收汁上桌',
        instruction:
          '行程完成並完全排氣洩壓後打開上蓋檢查醬汁濃度；若希望醬汁更濃稠，先按「取消」再於開蓋狀態選擇左側「收汁 / 醬燒」收濃即完成。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '110°C',
          shortAction: '視濃度收濃醬汁',
        },
      },
    ],
  },
  {
    id: 'spec-official-tw-15-cantonese-buddha-jumps-over-the-wall',
    title: '粵式佛跳牆',
    subtitle: '乾鮑花膠海參干貝全入鍋，一鍵壓 30 分出濃醇養生高湯',
    category: 'soup',
    cuisine: '台式',
    settingMinutes: 30,
    realTotalMinutes: 55,
    baseServings: 4,
    innerPot: '雙內鍋皆可',
    releaseSummary: '自然自動洩壓（保留清甜山珍海味膠質）',
    stoveDifference:
      '不用抱著甕罐文火慢煨半天，海味提前一晚泡發洗淨，全料入鍋用 40 kPa 壓 30 分就湯醇料軟、膠質滿滿。',
    avoidPitfall:
      '海味與湯水量多，加水切勿超過內鍋最高水位線防溢閥；用完趁溫水清洗密封圈免殘留海味。',
    youtubeQuery: '特福鮮呼吸萬用鍋 粵式佛跳牆 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '乾鮑魚', amount: 4, unit: '隻', group: 'main' },
      { name: '乾海參', amount: 4, unit: '條', group: 'main' },
      { name: '乾花膠', amount: 2, unit: '片', note: '愛濃稠可增至4片', group: 'main' },
      { name: '乾干貝', amount: 4, unit: '粒', group: 'main' },
      { name: '乾海螺', amount: 4, unit: '件', group: 'main' },
      { name: '豬腱', amount: 400, unit: '克', group: 'main' },
      { name: '雞塊（或完整半雞）', amount: 0.5, unit: '隻', group: 'main' },
      { name: '冬瓜（切大塊）', amount: 400, unit: '克', group: 'main' },
      { name: '紅棗', amount: 10, unit: '克', group: 'main' },
      { name: '枸杞', amount: 5, unit: '克', group: 'main' },
      { name: '薑片', amount: 2, unit: '片', group: 'main' },
      { name: '鹽', amount: 3, unit: '克', group: 'seasoning' },
      { name: '清水', amount: null, unit: '適量', note: '勿超過最高水位線', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '所有海味泡水一晚並洗淨',
        instruction:
          '提前準備乾鮑魚、乾海參、乾花膠、乾干貝與乾海螺，浸泡於水中一晚發開，再清洗乾淨。',
      },
      {
        stepNumber: 2,
        title: '豬腱冷水汆燙去血水',
        instruction:
          '將豬腱加入冷水中煮滾，水煮滾後再續煮 2 分鐘去除血水與雜質，撈起洗淨。',
      },
      {
        stepNumber: 3,
        title: '全部材料與清水放入內鍋',
        instruction:
          '將豬腱、雞塊、所有泡發海味、冬瓜、薑片、枸杞、紅棗與鹽全放入內鍋，倒入清水（勿超過內鍋最高水位線）。',
        tip: '雞肉也可直接使用完整半雞；喜歡湯汁帶濃稠感者，花膠可增加至 4 片。',
      },
      {
        stepNumber: 4,
        title: '鎖蓋啟動雞鴨豬模式 30 分鐘',
        instruction:
          '蓋上上蓋並順時鐘鎖緊，選擇右側「雞 / 鴨 / 豬」功能，設定時間 30 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '40kPa煲出膠質',
        },
      },
      {
        stepNumber: 5,
        title: '排氣洩壓後開蓋享用',
        instruction:
          '行程完成並完全排氣洩壓後，解鎖打開上蓋即可盛湯享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-16-soy-braised-pork',
    title: '古早味醬燒豬肉',
    subtitle: '冰糖八角肉桂先炒香，鎖蓋壓 25 分再收濃甜腴不膩超下飯',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 35,
    realTotalMinutes: 60,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（按取消開蓋再收汁）',
    stoveDifference:
      '一鍋從炒糖爆香做到加壓燉軟再收汁，免換炒鍋與砂鍋，25 分鐘就讓醬紅色澤均勻扒上每塊豬肉。',
    avoidPitfall:
      '配方含 30 克冰糖與生老抽，炒香料與最後開蓋收汁時請用木鏟或矽膠鏟勤拌防糖醬焦底。',
    youtubeQuery: '特福鮮呼吸萬用鍋 醬燒豬肉 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '豬肉（切塊）', amount: 500, unit: '克', group: 'main' },
      { name: '薑片', amount: 3, unit: '片', group: 'main' },
      { name: '青蔥（蔥白切段）', amount: 1, unit: '根', group: 'main' },
      { name: '食用油', amount: 1, unit: '大匙', note: '爆香香料用', group: 'seasoning' },
      { name: '冰糖', amount: 30, unit: '克', group: 'seasoning' },
      { name: '生抽', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '老抽', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '米酒', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '八角', amount: 3, unit: '顆', group: 'seasoning' },
      { name: '肉桂', amount: 2, unit: '克', group: 'seasoning' },
      { name: '清水', amount: null, unit: '適量', note: '覆蓋豬肉即可', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '豬肉切塊冷水汆燙去血水',
        instruction:
          '將豬肉切塊放入冷水中以中小火煮滾，水滾後再續煮 2 分鐘去除血水與雜質，撈起備用。',
      },
      {
        stepNumber: 2,
        title: '開蓋啟動爆炒煎烤 5 分鐘',
        instruction:
          '開蓋選擇左側「爆炒煎烤」功能，將時間設定為 5 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '5 分鐘',
          temperature: '150°C',
          shortAction: '熱鍋爆香香料',
        },
        tip: '不先炒香料也可以，直接將全部材料與豬肉放入鍋中跳至步驟 4 進行。',
      },
      {
        stepNumber: 3,
        title: '倒油爆香薑、冰糖與香料',
        instruction:
          '待萬用鍋發出提示音預熱完成，在內鍋倒入少許油，加入薑片、冰糖、八角、肉桂與蔥白翻炒約 2 分鐘。',
      },
      {
        stepNumber: 4,
        title: '加醬料滾開再下豬肉塊',
        instruction:
          '倒入米酒、生抽與老抽煮滾約 1 分鐘，再放入汆燙好的豬肉塊拌滾至爆炒時間結束。',
      },
      {
        stepNumber: 5,
        title: '加水蓋過豬肉並鎖緊上蓋',
        instruction:
          '倒入足以覆蓋豬肉的清水，蓋上上蓋並順時鐘確實鎖緊。',
      },
      {
        stepNumber: 6,
        title: '雞鴨豬模式中壓燉煮 25 分鐘',
        instruction:
          '選擇右側「雞 / 鴨 / 豬」功能，將時間設定為 25 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '25 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '40kPa燉透豬肉',
        },
      },
      {
        stepNumber: 7,
        title: '洩壓開蓋收汁至醬紅濃稠',
        instruction:
          '行程完成並排氣洩壓後，按下「取消」打開上蓋；於開蓋狀態選擇左側「收汁 / 醬燒」，勤拌煮至醬汁濃稠即可停止。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '110°C',
          shortAction: '開蓋收濃醬汁',
        },
      },
      {
        stepNumber: 8,
        title: '起鍋配熱米飯享用',
        instruction: '盛盤上桌，配熱騰騰的米飯慢慢享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-17-chestnut-braised-chicken',
    title: '栗子炆雞',
    subtitle: '免爆香一鍋醃好直接壓 20 分，雞肉滑嫩栗子鬆甜超下飯',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 25,
    realTotalMinutes: 50,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（排氣完成開蓋收濃）',
    stoveDifference:
      '省去先炸栗子與炒鍋爆香的繁複步驟，雞塊與栗子拌勻醃料直接中壓 20 分就同步熟透、鬆軟不散。',
    avoidPitfall:
      '栗子富含澱粉，最後開蓋收汁會迅速變濃，請用矽膠鏟輕推翻拌防黏底並保護栗子不碎裂。',
    youtubeQuery: '特福鮮呼吸萬用鍋 栗子炆雞 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '雞肉（切小塊）', amount: 0.5, unit: '隻', group: 'main' },
      { name: '去皮栗子', amount: 200, unit: '克', group: 'main' },
      { name: '薑片', amount: 10, unit: '克', group: 'main' },
      { name: '蒜頭', amount: 3, unit: '瓣', group: 'main' },
      { name: '蔥花', amount: null, unit: '適量', note: '盛盤裝飾用', group: 'main' },
      { name: '生抽', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '老抽', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '米酒', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '糖', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '八角', amount: 3, unit: '顆', group: 'seasoning' },
      { name: '鹽', amount: 3, unit: '克', group: 'seasoning' },
      { name: '清水', amount: null, unit: '適量', note: '覆蓋雞肉即可', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '雞塊與所有醃料拌勻稍醃',
        instruction:
          '將雞肉切成小塊，與薑片、蒜頭、八角、老抽、生抽、米酒、糖、鹽混合拌勻，稍醃一會。',
        tip: '若買到帶皮栗子，可煮一鍋水滾後熄火，將栗子浸泡 3 分鐘即可輕鬆去皮。',
      },
      {
        stepNumber: 2,
        title: '鍋底鋪栗子放雞肉並加水覆蓋',
        instruction:
          '在內鍋底部先放入去皮栗子，再鋪上雞肉與醃料，倒入足以覆蓋雞肉的水量。',
      },
      {
        stepNumber: 3,
        title: '蓋上上蓋並順時鐘鎖緊',
        instruction: '確認食材擺平後，蓋上上蓋並順時鐘確實鎖緊。',
      },
      {
        stepNumber: 4,
        title: '雞鴨豬模式中壓 20 分鐘',
        instruction:
          '選擇右側「雞 / 鴨 / 豬」功能，將時間設定為 20 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '20 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '40kPa壓熟雞栗',
        },
      },
      {
        stepNumber: 5,
        title: '洩壓開蓋收汁至濃稠',
        instruction:
          '行程完成並排氣洩壓後，按「取消」打開上蓋；於開蓋狀態選擇左側「收汁 / 醬燒」，以矽膠鏟輕柔翻動將醬汁煮至濃稠即可停止。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '約 5 分鐘',
          temperature: '110°C',
          shortAction: '開蓋收濃醬汁',
        },
      },
      {
        stepNumber: 6,
        title: '盛盤撒蔥花裝飾',
        instruction: '將雞肉與栗子盛盤，撒上蔥花裝飾即可配白飯享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-18-hakka-taro-braised-duck',
    title: '客家芋頭炆鴨',
    subtitle: '芋頭鴨皮先煎定型逼油，腐乳紹興醬汁中壓 19 分綿密噴香',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 39,
    realTotalMinutes: 65,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（排氣完畢開蓋視濃度收汁）',
    stoveDifference:
      '原鍋先煎封芋頭表面並逼出多餘鴨油，不用另起炸鍋，再鎖蓋 19 分鐘就能讓芋頭吸滿鴨香與腐乳濃汁。',
    avoidPitfall:
      '鴨皮煎出大量鴨油後務必倒出多餘油脂只留約 1 大匙，才不會整鍋油膩；拌炒腐乳冰糖要防黏底。',
    youtubeQuery: '特福鮮呼吸萬用鍋 客家芋頭炆鴨 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '鴨肉（切大塊去多餘油脂）', amount: 0.5, unit: '隻', group: 'main' },
      { name: '芋頭（切約 3 公分方塊）', amount: 500, unit: '克', group: 'main' },
      { name: '薑片', amount: 5, unit: '片', group: 'main' },
      { name: '蒜頭', amount: 6, unit: '瓣', group: 'main' },
      { name: '青蔥（蔥白蔥綠分開）', amount: 3, unit: '根', group: 'main' },
      { name: '植物油', amount: 1, unit: '大匙', note: '煎芋頭用', group: 'seasoning' },
      { name: '麻油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '紹興酒', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '蠔油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '老抽', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '生抽', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '豆腐乳', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '冰糖', amount: 15, unit: '克', group: 'seasoning' },
      { name: '清水', amount: 1, unit: '杯', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '倒油開啟爆炒煎烤 15 分鐘預熱',
        instruction:
          '在內鍋中加入少量植物油，開蓋選擇左側「爆炒煎烤」功能，將時間設定為 15 分鐘並按下「開始」，等待提示音響起表示油已燒熱。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '15 分鐘',
          temperature: '150°C',
          shortAction: '煎芋頭逼鴨油',
        },
      },
      {
        stepNumber: 2,
        title: '分兩批將芋頭煎至金黃備用',
        instruction:
          '先放入一半份量的芋頭塊煎至表面金黃取出備用，再將另一半芋頭煎至金黃色同樣取出備用。',
      },
      {
        stepNumber: 3,
        title: '鴨皮朝下煎金黃並倒出多餘油脂',
        instruction:
          '將鴨塊以鴨皮朝下煎約 3 分鐘直到鴨皮變成金黃色，取出鴨肉，倒出多餘鴨油並留下約 1 大匙油於鍋底。',
      },
      {
        stepNumber: 4,
        title: '炒香蒜薑蔥白並拌入腐乳醬料',
        instruction:
          '放入蒜頭、薑片與蔥白炒香，接著加入紹興酒、蠔油、生抽、老抽、豆腐乳、冰糖、麻油、蔥綠與 1 杯清水拌勻。',
      },
      {
        stepNumber: 5,
        title: '放回鴨肉芋頭，按取消並鎖緊上蓋',
        instruction:
          '放回鴨肉與芋頭，按下「取消」停止爆炒模式，蓋上上蓋並順時鐘鎖緊。',
        tip: '喜歡較硬芋頭口感者，此步可先不放芋頭，待鴨肉壓好開蓋再放入，改選「蒸 / 一鍋兩菜」加壓 10 分鐘。',
      },
      {
        stepNumber: 6,
        title: '雞鴨豬模式中壓燉煮 19 分鐘',
        instruction:
          '選擇右側「雞 / 鴨 / 豬」功能，將時間設定為 19 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '19 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '40kPa燜透芋鴨',
        },
      },
      {
        stepNumber: 7,
        title: '排氣洩壓後開蓋拌勻',
        instruction:
          '行程完成並完全排氣洩壓後，解鎖並打開上蓋，輕柔拌勻即可享用。',
      },
      {
        stepNumber: 8,
        title: '視濃度開蓋收汁 5 分鐘（選用）',
        instruction:
          '若希望醬汁變得更濃稠，開蓋選擇左側「收汁 / 醬燒」功能，讓醬汁開蓋蒸發約 5 分鐘至理想濃稠度。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '5 分鐘',
          temperature: '110°C',
          shortAction: '視濃度收濃醬汁',
        },
      },
      {
        stepNumber: 9,
        title: '盛盤撒蔥花配熱飯享用',
        instruction: '上碟後可撒上蔥花裝飾，配熱白飯趁熱享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-19-taiwanese-butter-corn',
    title: '台式奶油玉米',
    subtitle: '蒸架加鹽水微壓 10 分鎖住脆甜多汁，趁熱抹奶油撒黑胡椒',
    category: 'steam',
    cuisine: '台式',
    settingMinutes: 10,
    realTotalMinutes: 22,
    baseServings: 4,
    innerPot: '雙內鍋皆可',
    releaseSummary: '自然自動洩壓（排氣完畢按取消開蓋）',
    stoveDifference:
      '不用燒一大鍋滾水煮到甜味流失，只需 1 杯鹽水放蒸架以 10 kPa 微壓蒸 10 分，玉米飽滿清甜又省水電。',
    avoidPitfall:
      '內鍋務必倒入 1 杯水並放上托架再擺玉米防乾燒；趁剛出鍋的熱度馬上抹奶油才會均勻融化。',
    youtubeQuery: '特福鮮呼吸萬用鍋 奶油玉米 蒸玉米 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '玉米（去皮去鬚）', amount: 4, unit: '條', group: 'main' },
      { name: '清水', amount: 250, unit: 'ml', note: '約 1 杯', group: 'seasoning' },
      { name: '奶油', amount: null, unit: '適量', note: '出鍋趁熱塗抹', group: 'seasoning' },
      { name: '鹽與黑胡椒', amount: null, unit: '適量', note: '鍋底水加一小撮鹽', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '倒鹽水放托架並擺上玉米',
        instruction:
          '將 250 ml 清水與一小撮鹽倒入內鍋中，放入蒸煮托架後，將去皮去鬚的玉米擺放在托架上。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋啟動蒸煮模式 10 分鐘',
        instruction:
          '蓋上上蓋並順時鐘鎖緊，選擇右側「蒸 / 一鍋兩菜」模式，將時間調整為 10 分鐘並按下「開始」，達壓就緒後自動開始倒數。',
        potAction: {
          side: 'right',
          modeName: '蒸 / 一鍋兩菜',
          lid: 'locked',
          durationText: '10 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '10kPa鎖甜蒸熟',
        },
      },
      {
        stepNumber: 3,
        title: '洩壓按取消開蓋取出玉米',
        instruction:
          '行程完成並完全排氣洩壓後，按下「取消」，打開上蓋取出熱騰騰的玉米。',
      },
      {
        stepNumber: 4,
        title: '趁熱塗抹奶油並撒上黑胡椒',
        instruction:
          '趁玉米剛出鍋的熱度均勻塗抹奶油，再撒上黑胡椒即可享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-20-asian-fish-parcels',
    title: '亞洲風味紙包魚',
    subtitle: '烘焙紙封住檸檬薑蔥醬香，微壓蒸 12 分魚肉細嫩不乾柴',
    category: 'steam',
    cuisine: '台式',
    settingMinutes: 12,
    realTotalMinutes: 25,
    baseServings: 4,
    innerPot: '雙內鍋皆可',
    releaseSummary: '自然自動洩壓（拆開紙包留意滾燙蒸氣）',
    stoveDifference:
      '免開大烤箱預熱，利用萬用鍋 10 kPa 蒸氣讓熱氣在烘焙紙包內循環，魚片熟度均勻嫩口、鮮汁一滴不漏。',
    avoidPitfall:
      '內鍋記得倒 2 杯水再放托架與紙包魚，紙包封口摺緊避免湯汁外漏；拆開紙包時小心熱氣燙手。',
    youtubeQuery: '特福鮮呼吸萬用鍋 紙包魚 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '白肉魚片（每片約 150 克）', amount: 4, unit: '片', note: '推薦鱈魚或比目魚', group: 'main' },
      { name: '台灣綠蘆筍（削皮切半）', amount: 2, unit: '束', group: 'main' },
      { name: '青蔥（切細絲）', amount: 2, unit: '根', group: 'main' },
      { name: '芫荽（香菜）', amount: 0.5, unit: '杯', group: 'main' },
      { name: '薑末（去皮）', amount: 4, unit: '小匙', group: 'main' },
      { name: '生抽', amount: 4, unit: '大匙', group: 'seasoning' },
      { name: '檸檬汁', amount: 1, unit: '顆', group: 'seasoning' },
      { name: '二砂糖', amount: 1, unit: '小匙', group: 'seasoning' },
      { name: '清水', amount: 2, unit: '杯', note: '倒鍋底蒸煮用', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '略煎魚皮並裁備四大張烘焙紙',
        instruction:
          '將每片魚柳的魚皮略煎 2–3 次，並準備四大張烘焙紙或錫箔紙（一片魚包一張）。',
        tip: '推薦選用鱈魚或比目魚配白飯最滑嫩；不煎魚皮直接包蒸口感會更清爽。',
      },
      {
        stepNumber: 2,
        title: '混合調勻檸檬生抽醬汁',
        instruction: '將檸檬汁、生抽與二砂糖充分混合攪拌至糖溶解。',
      },
      {
        stepNumber: 3,
        title: '分四份包覆蘆筍、魚柳與醬汁',
        instruction:
          '在烘焙紙上先鋪綠蘆筍與蔥絲，擺上魚柳，放上薑末與芫荽，淋入 1/4 份量醬汁後將四邊摺緊包覆起來，重複包好四份。',
      },
      {
        stepNumber: 4,
        title: '內鍋倒水架托架，放入紙包魚鎖蓋',
        instruction:
          '內鍋倒入 2 杯清水，放入蒸煮托架後再擺上紙包魚，蓋上上蓋並順時鐘鎖緊。',
      },
      {
        stepNumber: 5,
        title: '蒸煮模式微壓 12 分鐘',
        instruction:
          '選擇右側「蒸 / 一鍋兩菜」模式，將時間調整為 12 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '蒸 / 一鍋兩菜',
          lid: 'locked',
          durationText: '12 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '10kPa紙包蒸嫩',
        },
      },
      {
        stepNumber: 6,
        title: '排氣洩壓後按取消開蓋',
        instruction: '行程完成並完全排氣洩壓後，按下「取消」打開上蓋。',
      },
      {
        stepNumber: 7,
        title: '盛盤拆包淋原汁享用',
        instruction:
          '取出紙包魚上碟，拆開紙包時留意滾燙蒸氣，再淋上紙包內醬汁趁熱享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-21-chicken-broth-abalone-asparagus',
    title: '雞汁鮑魚佐蘆筍',
    subtitle: '先以 70°C 低溫慢燉出清澈老母雞湯，再啟燉鮑魚專程軟糯入魂',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 825,
    realTotalMinutes: 855,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（高湯段無壓，燉鮑魚段高壓洩壓）',
    stoveDifference:
      '傳統發泡乾鮑煨煮得守鍋翻顧一整天，善用 70°C 低溫慢燉吊湯加專屬「燉鮑魚」60 kPa 長時行程，輕鬆做出飯店級軟糯感。',
    avoidPitfall:
      '乾鮑魚須提早 48 小時用 400 ml 過濾水浸發去腸；汆燙洗淨內鍋後務必擦乾外壁再放回主機。',
    youtubeQuery: '特福鮮呼吸萬用鍋 燉鮑魚 雞汁鮑魚 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '乾鮑魚（32–26 頭）', amount: 6, unit: '隻', note: '4–8 隻皆可', group: 'main' },
      { name: '蘆筍（汆燙擺盤）', amount: 120, unit: '克', group: 'main' },
      { name: '中型雞（去皮，熬高湯用）', amount: 1, unit: '隻', group: 'main' },
      { name: '豬肋排（切塊，熬高湯用）', amount: 300, unit: '克', group: 'main' },
      { name: '金華火腿（切丁，熬高湯用）', amount: 30, unit: '克', group: 'main' },
      { name: '清水（汆燙用）', amount: 1000, unit: 'ml', group: 'seasoning' },
      { name: '清水（熬雞湯用）', amount: 1000, unit: 'ml', group: 'seasoning' },
      { name: '蠔油', amount: 1, unit: '大匙', note: '最後調味勾芡', group: 'seasoning' },
      { name: '玉米粉水', amount: null, unit: '適量', note: '起鍋勾芡選配', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '乾鮑魚提前以過濾水浸發 48 小時',
        instruction: '將乾鮑魚洗淨，放入 400 ml 已過濾的清水中浸發 48 小時。',
      },
      {
        stepNumber: 2,
        title: '浸發期間先著手熬製優質雞湯',
        instruction: '利用浸發鮑魚的空檔，先準備熬煮高湯所需的去皮雞、排骨與火腿丁。',
      },
      {
        stepNumber: 3,
        title: '蓋上不鎖煮沸汆燙雞肉與排骨',
        instruction:
          '內鍋倒入 1000 ml 清水，選擇左側「爆炒煎烤」設 20 分鐘並蓋上上蓋不鎖定；待提示音響起加熱完成，放入雞與排骨煮至水滾後按「取消」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'closed_unlocked',
          durationText: '約 10–20 分鐘',
          temperature: '150°C',
          shortAction: '蓋上不鎖滾燙',
        },
      },
      {
        stepNumber: 4,
        title: '沖洗肉塊與內鍋並擦乾放回',
        instruction:
          '倒掉汆燙水，將雞與排骨沖洗乾淨，同時洗淨內鍋並徹底擦乾內鍋外壁，再把肉塊重新放回鍋內。',
      },
      {
        stepNumber: 5,
        title: '加入金華火腿丁與 1000 ml 清水',
        instruction:
          '加入切丁的金華火腿與 1000 ml 清水，蓋上上蓋但不要鎖上（低溫慢燉屬無壓行程）。',
      },
      {
        stepNumber: 6,
        title: '低溫慢燉 8 小時熬出優質雞湯',
        instruction:
          '選擇左側「低溫慢燉」模式，設定時間 8 小時並按下「開始」；完成後將清澈高湯濾出冷藏備用（雞肉與排骨可另作他用）。',
        potAction: {
          side: 'left',
          modeName: '低溫慢燉',
          lid: 'closed_unlocked',
          durationText: '8 小時',
          temperature: '70°C',
          shortAction: '70°C清吊高湯',
        },
      },
      {
        stepNumber: 7,
        title: '鮑魚浸發完成並清除鮑魚腸',
        instruction: '待鮑魚浸發滿 48 小時後，將鮑魚腸徹底清除洗淨。',
      },
      {
        stepNumber: 8,
        title: '倒入雞高湯啟動燉鮑魚行程',
        instruction:
          '將鮑魚與 500 ml 優質雞湯放入內鍋，蓋上上蓋並順時鐘鎖緊，選擇右側「燉鮑魚」模式設定 5 小時 25 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '燉鮑魚',
          lid: 'locked',
          durationText: '5 小時 25 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '60kPa專程煨鮑',
        },
        tip: '中小型乾鮑設 5 小時 25 分鐘；若使用大型乾鮑，可採模式預設的 9 小時 55 分鐘。',
      },
      {
        stepNumber: 9,
        title: '洩壓取出鮑魚，蠔油勾芡佐蘆筍上桌',
        instruction:
          '行程完成並完全排氣洩壓後開蓋取出鮑魚；在餘下高湯中加入蠔油，若欲勾芡可開蓋選擇左側「收汁 / 醬燒」，緩緩拌入玉米粉水輕攪至濃稠，淋在鮑魚上並佐蘆筍享用。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '約 3 分鐘',
          temperature: '110°C',
          shortAction: '蠔油勾芡提亮',
        },
      },
    ],
  },
  {
    id: 'spec-official-tw-22-waterless-roast-chicken',
    title: '無水燒雞',
    subtitle: '免烤箱免滴水，蔥薑墊底自訂 120°C 烤 50 分皮亮多汁',
    category: 'bake',
    cuisine: '台式',
    settingMinutes: 50,
    realTotalMinutes: 55,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（免洩壓，時間到直接開蓋）',
    stoveDifference:
      '不用大烤箱也不必顧火怕烤焦，以大量蔥薑鋪底隔熱、自訂 120°C 無水悶烤 50 分，雞肉鮮嫩又鎖住滿滿雞汁。',
    avoidPitfall:
      '因全程不加水且含蜜糖，薑片與青蔥務必完整鋪滿整個鍋底防焦沾，雞身下鍋前也須確實擦乾。',
    youtubeQuery: '特福鮮呼吸萬用鍋 無水燒雞 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '全雞（洗淨）', amount: 600, unit: '克', note: '小型全雞 1 隻', group: 'main' },
      { name: '薑片與青蔥', amount: null, unit: '適量', note: '足量鋪滿鍋底', group: 'main' },
      { name: '米酒', amount: 100, unit: 'ml', group: 'seasoning' },
      { name: '蜜糖', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '生抽', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '老抽', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '鹽', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '全雞以酒、醬油與蜜糖醃漬 2 小時',
        instruction:
          '將雞洗淨，浸泡於米酒、生抽、老抽、蜜糖與鹽中醃漬 2 小時入味。',
        tip: '想要成品顏色更深亮誘人，可改用「蠔油＋老抽」搭配調色。',
      },
      {
        stepNumber: 2,
        title: '確實擦乾雞身水分',
        instruction: '取出醃好的雞，用紙巾將表面水分徹底擦乾以利上色。',
      },
      {
        stepNumber: 3,
        title: '用薑片與青蔥鋪滿整個內鍋底',
        instruction: '以大量薑片與青蔥完整覆蓋整個內鍋底部隔熱防焦。',
      },
      {
        stepNumber: 4,
        title: '將全雞放上蔥薑層',
        instruction: '把擦乾的全雞穩妥擺放在蔥薑之上。',
      },
      {
        stepNumber: 5,
        title: '蓋上上蓋不鎖定',
        instruction: '關上上蓋，但不要順時鐘鎖上。',
      },
      {
        stepNumber: 6,
        title: '自訂行程 120°C 悶烤 50 分鐘',
        instruction:
          '選擇左側「自訂行程」模式，將溫度設定為 120°C、時間設定為 50 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '自訂行程',
          lid: 'closed_unlocked',
          durationText: '50 分鐘',
          temperature: '120°C',
          shortAction: '120°C無水悶烤',
        },
      },
      {
        stepNumber: 7,
        title: '時間到直接開蓋享用',
        instruction: '行程結束無須洩壓，直接打開上蓋取出切塊並淋上鍋底雞汁享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-23-taiwanese-salt-baked-shrimp',
    title: '台式鹽焗蝦',
    subtitle: '海鹽包覆自訂 110°C 乾焗 25 分，紅亮鎖汁蝦肉爽脆彈牙',
    category: 'braise',
    cuisine: '台式',
    settingMinutes: 25,
    realTotalMinutes: 30,
    baseServings: 4,
    innerPot: '304不鏽鋼內鍋優先',
    releaseSummary: '全程無壓（免洩壓，時間到直接開蓋）',
    stoveDifference:
      '傳統鹽焗得開火炒燙粗鹽容易過火老掉，用自訂 110°C 恆溫無壓悶焗，蝦殼紅亮不焦、蝦肉脆彈不縮水。',
    avoidPitfall:
      '鋪鹽與夾蝦動作要輕防粗鹽刮鍋；冷卻後務必立即泡水溶解殘鹽洗淨擦乾，勿讓濃鹽久留鍋內。',
    youtubeQuery: '特福鮮呼吸萬用鍋 鹽焗蝦 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '大草蝦（洗淨）', amount: 250, unit: '克', group: 'main' },
      { name: '薑片', amount: 5, unit: '克', group: 'main' },
      { name: '青蔥', amount: 5, unit: '克', group: 'main' },
      { name: '海鹽', amount: 500, unit: '克', group: 'seasoning' },
      { name: '米酒', amount: 5, unit: 'ml', group: 'seasoning' },
      { name: '檸檬（榨汁）', amount: 1, unit: '顆', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '大草蝦以米酒與檸檬汁去腥',
        instruction: '將大草蝦洗淨，浸泡於米酒與檸檬汁中略醃去腥。',
      },
      {
        stepNumber: 2,
        title: '內鍋底鋪滿海鹽',
        instruction: '動作放輕，將大部分海鹽均勻覆蓋鋪平於內鍋底部。',
      },
      {
        stepNumber: 3,
        title: '擺上草蝦、薑片與青蔥',
        instruction: '將草蝦、薑片與青蔥平放排在海鹽層上。',
      },
      {
        stepNumber: 4,
        title: '上層再薄撒少量海鹽',
        instruction: '在蝦子上方再均勻薄撒少量海鹽。',
      },
      {
        stepNumber: 5,
        title: '蓋上上蓋不鎖定',
        instruction: '關上上蓋，但不要順時鐘鎖上。',
      },
      {
        stepNumber: 6,
        title: '自訂行程 110°C 乾焗 25 分鐘',
        instruction:
          '選擇左側「自訂行程」模式，將溫度設定為 110°C、時間設定為 25 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '自訂行程',
          lid: 'closed_unlocked',
          durationText: '25 分鐘',
          temperature: '110°C',
          shortAction: '110°C海鹽乾焗',
        },
        tip: '若改用小型蝦，請將自訂行程時間縮短為 15 分鐘即可。',
      },
      {
        stepNumber: 7,
        title: '時間到直接開蓋享用',
        instruction: '行程結束無須洩壓，直接打開上蓋夾出草蝦撥去表面粗鹽即可趁熱享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-24-braised-beef-potato',
    title: '紅燒馬鈴薯牛肉',
    subtitle: '牛肉先高壓 30 分再下馬鈴薯微壓 10 分，肉爛薯綿不化糊',
    category: 'braise',
    cuisine: '日式',
    settingMinutes: 45,
    realTotalMinutes: 75,
    baseServings: 3,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '兩段皆自然自動洩壓（開蓋後再放馬鈴薯番茄）',
    stoveDifference:
      '採「先壓肉、後壓薯」兩段接力法：牛肉先 60 kPa 壓 30 分軟爛，再切 10 kPa 微壓 10 分，馬鈴薯完整綿密不碎糊。',
    avoidPitfall:
      '番茄與馬鈴薯切勿一開始就跟牛肉同壓，務必等第一段洩壓開蓋後再下鍋，才不會全燉成泥。',
    youtubeQuery: '特福鮮呼吸萬用鍋 馬鈴薯燉肉 紅燒馬鈴薯牛肉 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '牛肩胛小排（切 3 公分塊）', amount: 300, unit: '克', group: 'main' },
      { name: '馬鈴薯（去皮切大塊）', amount: 3, unit: '顆', note: '第二段再下鍋', group: 'main' },
      { name: '番茄（切八瓣）', amount: 2, unit: '顆', note: '第二段再下鍋', group: 'main' },
      { name: '洋蔥（切六瓣）', amount: 1, unit: '顆', group: 'main' },
      { name: '紅蘿蔔（切滾刀塊）', amount: 100, unit: '克', note: '約 1 根', group: 'main' },
      { name: '薑片', amount: 5, unit: '克', group: 'main' },
      { name: '蒜頭（拍開）', amount: 2, unit: '瓣', note: '1–2 瓣', group: 'main' },
      { name: '青蔥（蔥白蔥綠分開）', amount: 1, unit: '根', group: 'main' },
      { name: '食用油', amount: 1, unit: '大匙', note: '爆炒辛香料用', group: 'seasoning' },
      { name: '醬油', amount: 2.5, unit: '大匙', note: '2–3 大匙依鹹度', group: 'seasoning' },
      { name: '米酒', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '番茄醬', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '清水', amount: 250, unit: 'ml', note: '覆蓋食材', group: 'seasoning' },
      { name: '乾辣椒', amount: null, unit: '適量', note: '依辣度調整', group: 'seasoning' },
      { name: '鹽', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '將蔬菜與牛肉切成適口大小',
        instruction:
          '把紅蘿蔔切滾刀、番茄切八瓣、洋蔥切六瓣、馬鈴薯切塊，牛肩胛小排切約 3 公分塊備用。',
        tip: '若改用牛腱肉，建議另鍋以冷水加薑片與米酒煮滾續煮 2 分鐘汆燙去血水。',
      },
      {
        stepNumber: 2,
        title: '倒油開啟爆炒煎烤 5 分鐘',
        instruction:
          '內鍋加入少許食用油，開蓋選擇左側「爆炒煎烤」模式，設定時間 5 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '5 分鐘',
          temperature: '150°C',
          shortAction: '爆香炒料上色',
        },
      },
      {
        stepNumber: 3,
        title: '爆香薑、蒜與蔥白',
        instruction: '待萬用鍋發出提示音油已熱，加入薑片、蒜頭與蔥白爆炒 1–2 分鐘。',
      },
      {
        stepNumber: 4,
        title: '翻炒洋蔥、紅蘿蔔與牛肉',
        instruction: '放入洋蔥與紅蘿蔔翻炒，接著加入牛肉塊一同拌炒。',
      },
      {
        stepNumber: 5,
        title: '拌入醬油、米酒與番茄醬炒香',
        instruction:
          '加入乾辣椒、米酒、番茄醬與醬油，期間不斷翻炒均勻讓牛肉沾附醬香。',
        tip: '若使用薄鹽醬油，成品顏色會較淡，起鍋前可依口味斟酌加鹽。',
      },
      {
        stepNumber: 6,
        title: '時間到加水覆蓋並下蔥綠',
        instruction:
          '待爆炒提示音響起時，倒入清水直至覆蓋所有材料，並放入蔥綠。',
      },
      {
        stepNumber: 7,
        title: '鎖蓋啟動牛羊模式 30 分鐘',
        instruction:
          '蓋上上蓋並順時鐘鎖緊，選擇右側「牛 / 羊肉」模式，將時間設定為 30 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '60kPa先燉牛肉',
        },
      },
      {
        stepNumber: 8,
        title: '排氣洩壓後按取消開蓋',
        instruction: '行程完成並完全排氣洩壓後，按下「取消」，打開上蓋。',
      },
      {
        stepNumber: 9,
        title: '下番茄與馬鈴薯，微壓蒸煮 10 分鐘',
        instruction:
          '加入番茄與馬鈴薯塊，再次蓋上上蓋並順時鐘鎖緊，選擇右側「蒸 / 一鍋兩菜」模式，將時間調為 10 分鐘並按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '蒸 / 一鍋兩菜',
          lid: 'locked',
          durationText: '10 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '10kPa壓綿馬鈴薯',
        },
      },
      {
        stepNumber: 10,
        title: '再次洩壓按取消開蓋',
        instruction: '行程完成並完全排氣洩壓後，按下「取消」，打開上蓋試味補鹽。',
      },
      {
        stepNumber: 11,
        title: '盛盤撒青蔥裝飾上桌',
        instruction: '盛盤時可撒上青蔥點綴提香，趁熱享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-25-apple-yogurt-cake',
    title: '蘋果優格蛋糕',
    subtitle: '先開爆炒預熱內鍋再轉無壓烘烤 59 分，蓬鬆濕潤果香清新',
    category: 'bake',
    cuisine: '日式',
    settingMinutes: 67,
    realTotalMinutes: 75,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（免洩壓，時間到立即開蓋）',
    stoveDifference:
      '免大型烤箱也能烤戚風系甜點，趁打發蛋白時先以爆炒模式空鍋預熱，再切無壓烘烤 59 分，底部上色均勻不回縮。',
    avoidPitfall:
      '預熱後內鍋極燙，鋪烘焙紙與倒麵糊切記防燙；切換烘烤前若預熱未停記得先按「取消」，且上蓋勿鎖。',
    youtubeQuery: '特福鮮呼吸萬用鍋 蘋果優格蛋糕 無壓烘烤 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '蘋果（中型，去皮去籽切丁）', amount: 1, unit: '顆', group: 'main' },
      { name: '雞蛋（蛋黃蛋白分開）', amount: 3, unit: '顆', group: 'main' },
      { name: '原味優格', amount: 110, unit: '克', group: 'main' },
      { name: '低筋麵粉', amount: 80, unit: '克', group: 'main' },
      { name: '玉米粉', amount: 70, unit: '克', group: 'main' },
      { name: '烤杏仁片', amount: 4, unit: '大匙', note: '成品裝飾用', group: 'main' },
      { name: '細白砂糖', amount: 70, unit: '克', note: '分三次打發蛋白', group: 'seasoning' },
      { name: '植物油', amount: 30, unit: 'ml', group: 'seasoning' },
      { name: '檸檬汁', amount: 30, unit: 'ml', group: 'seasoning' },
      { name: '檸檬皮屑', amount: 0.5, unit: '顆', group: 'seasoning' },
      { name: '泡打粉', amount: 1, unit: '小匙', group: 'seasoning' },
      { name: '焦糖醬', amount: 8, unit: '大匙', note: '成品淋面用', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '粉類全部過篩備用',
        instruction: '將低筋麵粉、玉米粉與泡打粉一起過篩備用。',
      },
      {
        stepNumber: 2,
        title: '分蛋至無水無油容器',
        instruction: '將雞蛋分為蛋黃與蛋白，分別放置於無水無油的乾淨容器內。',
      },
      {
        stepNumber: 3,
        title: '蛋黃拌勻優格與植物油',
        instruction: '蛋黃加入原味優格攪拌至完全無顆粒，再倒入植物油拌勻。',
      },
      {
        stepNumber: 4,
        title: '拌入檸檬皮屑與過篩粉類',
        instruction: '加入半顆檸檬皮屑與過篩好的粉類混合物，攪拌均勻成蛋黃麵糊。',
      },
      {
        stepNumber: 5,
        title: '先開爆炒煎烤 8 分鐘預熱內鍋',
        instruction:
          '空內鍋開蓋選擇左側「爆炒煎烤」功能，將時間設定為 8 分鐘，按下「開始」先行預熱。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '8 分鐘',
          temperature: '150°C',
          shortAction: '同步預熱內鍋',
        },
      },
      {
        stepNumber: 6,
        title: '分三次加糖將蛋白打至硬性發泡',
        instruction:
          '蛋白先打出粗泡，細白砂糖分三次加入打發，再加入檸檬汁繼續打至硬性發泡（舉起攪拌頭可拉出挺立尖勾）。',
      },
      {
        stepNumber: 7,
        title: '分兩次取蛋白霜輕拌入蛋黃糊',
        instruction:
          '先挖出 1/3 蛋白霜加入蛋黃糊內輕拌均勻，再挖入另外 1/3 蛋白霜繼續輕拌均勻。',
      },
      {
        stepNumber: 8,
        title: '蛋黃糊倒回蛋白霜快速切拌勻',
        instruction: '最後將蛋黃糊倒入剩餘蛋白霜鍋內，以刮刀快速輕柔翻拌均勻。',
      },
      {
        stepNumber: 9,
        title: '鋪烘焙紙、放蘋果丁並倒入麵糊',
        instruction:
          '小心內鍋高溫防燙，於內鍋底部鋪上烘焙紙，放入去皮去籽的蘋果丁，再將蛋糕麵糊倒入鍋中。',
      },
      {
        stepNumber: 10,
        title: '取消預熱並蓋上上蓋不鎖定',
        instruction: '若之前的預熱行程尚未完成，先按「取消」，再關上上蓋但不要鎖上。',
      },
      {
        stepNumber: 11,
        title: '無壓烘烤 59 分鐘',
        instruction:
          '選擇左側「無壓烘烤」模式，將時間設定為 59 分鐘，按下「開始」，待升溫就緒後開始倒數。',
        potAction: {
          side: 'left',
          modeName: '無壓烘烤',
          lid: 'closed_unlocked',
          durationText: '59 分鐘',
          temperature: '120–150°C',
          shortAction: '無壓恆溫烤透',
        },
      },
      {
        stepNumber: 12,
        title: '聽到完成提示音立即開蓋',
        instruction: '待萬用鍋發出提示音時，立即打開上蓋防回潮。',
      },
      {
        stepNumber: 13,
        title: '放涼至微溫後輕刮邊緣倒扣脫模',
        instruction:
          '取出內鍋冷卻至微溫後，以矽膠刮刀輕刮蛋糕邊緣，再將蛋糕倒扣出來。',
      },
      {
        stepNumber: 14,
        title: '淋焦糖醬撒杏仁片裝飾',
        instruction: '蛋糕表面淋上焦糖醬，再撒上烤杏仁片做裝飾即可切片享用。',
      },
    ],
  },
  {
    id: 'spec-official-tw-30-thai-green-curry-chicken',
    title: '泰式綠咖哩雞',
    subtitle: '先炒開綠咖哩與椰漿香氣，分兩段壓熟雞腿與南瓜辛香濃郁',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 49,
    realTotalMinutes: 75,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '兩段皆自然自動洩壓（第二段壓南瓜防化泥）',
    stoveDifference:
      '免守爐火慢煮，先以 40 kPa 壓透帶骨雞腿，再下南瓜用 10 kPa 微壓 10 分，雞肉多汁脫骨、南瓜香甜成塊。',
    avoidPitfall:
      '炒綠咖哩醬與煮椰漿時請用矽膠或木鏟持續翻拌防黏底；下雞腿前先按「取消」停止爆炒再鎖蓋。',
    youtubeQuery: '特福鮮呼吸萬用鍋 泰式綠咖哩雞 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '大雞腿（上下分開、先以鹽醃漬）', amount: 4, unit: '支', group: 'main' },
      { name: '南瓜（切大塊）', amount: 300, unit: '克', note: '第二段下鍋', group: 'main' },
      { name: '香茅（切碎）', amount: 2, unit: '根', note: '無鮮品改香茅粉1小匙', group: 'main' },
      { name: '新鮮高良薑（3 公分）', amount: 1, unit: '塊', group: 'main' },
      { name: '蒜頭（拍碎）', amount: 3, unit: '瓣', group: 'main' },
      { name: '泰式綠鳥眼辣椒', amount: 3, unit: '根', note: '依個人辣度增減', group: 'main' },
      { name: '芫荽（香菜）', amount: 1, unit: '撮', group: 'main' },
      { name: '泰國羅勒葉（或九層塔）', amount: 1, unit: '撮', note: '起鍋拌入', group: 'main' },
      { name: '檸檬角', amount: null, unit: '適量', note: '擺盤擠汁用', group: 'main' },
      { name: '椰漿', amount: 400, unit: 'ml', note: '市售 14oz 1 罐', group: 'seasoning' },
      { name: '泰式綠咖哩醬', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '魚露', amount: 1, unit: '大匙', note: '起鍋前調味', group: 'seasoning' },
      { name: '植物油', amount: 1, unit: '小匙', group: 'seasoning' },
      { name: '鹽與黑胡椒', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '倒油開啟爆炒煎烤 15 分鐘',
        instruction:
          '在內鍋中加入少許植物油，開蓋選擇左側「爆炒煎烤」模式，將時間設定為 15 分鐘並按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 5–15 分鐘',
          temperature: '150°C',
          shortAction: '爆香香料與咖哩',
        },
      },
      {
        stepNumber: 2,
        title: '等待熱油提示音響起',
        instruction: '等待萬用鍋發出提示音，表示油已燒熱。',
      },
      {
        stepNumber: 3,
        title: '爆香南洋辛香料並炒深咖哩醬',
        instruction:
          '放入蒜頭、綠鳥眼辣椒、高良薑、半份芫荽與香茅爆炒約 1 分鐘至香味釋出，再加入泰式綠咖哩醬翻炒約 3 分鐘，直到咖哩醬色澤稍微加深。',
        tip: '可改用市售泰式綠咖哩醬調理包並省略辣椒與高良薑；無新鮮香茅可用 1 小匙香茅粉替代。',
      },
      {
        stepNumber: 4,
        title: '倒入椰漿慢煮 1 分鐘',
        instruction: '倒入椰漿拌勻，以矽膠鏟輕拌慢煮約 1 分鐘防黏底。',
      },
      {
        stepNumber: 5,
        title: '放鹽醃雞腿、停止爆炒並鎖蓋',
        instruction:
          '加入已以鹽醃漬過的雞腿塊，按下「取消」停止爆炒模式，蓋上上蓋並順時鐘鎖緊。',
      },
      {
        stepNumber: 6,
        title: '雞鴨豬模式中壓燉煮 19 分鐘',
        instruction:
          '選擇右側「雞 / 鴨 / 豬」功能，將時間設定為 19 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '雞 / 鴨 / 豬',
          lid: 'locked',
          durationText: '19 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '40kPa壓透雞腿',
        },
      },
      {
        stepNumber: 7,
        title: '洩壓開蓋下南瓜，微壓 10 分鐘',
        instruction:
          '行程完成並排氣洩壓後解鎖開蓋，放入南瓜塊再次蓋緊鎖上上蓋，選擇右側「蒸 / 一鍋兩菜」功能設定 10 分鐘並按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '蒸 / 一鍋兩菜',
          lid: 'locked',
          durationText: '10 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '10kPa壓鬆南瓜',
        },
      },
      {
        stepNumber: 8,
        title: '洩壓開蓋視濃度收汁 5 分鐘（選用）',
        instruction:
          '行程完成並排氣洩壓後打開上蓋檢查濃稠度；若希望醬汁更濃稠，開蓋選擇左側「收汁 / 醬燒」蒸發約 5 分鐘至理想稠度。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '5 分鐘',
          temperature: '110°C',
          shortAction: '視濃度收濃醬汁',
        },
      },
      {
        stepNumber: 9,
        title: '拌入魚露、芫荽與羅勒調味上桌',
        instruction:
          '加入魚露、剩餘芫荽與泰國羅勒葉拌勻，以鹽與黑胡椒調好味道，上桌佐檸檬角享用。',
        tip: '泰國羅勒葉可直接以九層塔替代。',
      },
    ],
  },
  {
    id: 'spec-official-tw-31-coconut-pumpkin-green-curry-beef',
    title: '椰香南瓜綠咖哩牛',
    subtitle: '炒開咖哩麵粉糊再入牛肉南瓜，70°C 低溫慢燉 6 小時溫潤不柴',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 370,
    realTotalMinutes: 385,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '全程無壓（免洩壓，按取消直接開蓋）',
    stoveDifference:
      '以 70°C 無壓低溫慢燉 6 小時取代猛火滾煮，奶油南瓜塊完整不糊化，牛肩胛吸滿椰奶辛香更加溫順柔嫩。',
    avoidPitfall:
      '拌入麵粉、番茄醬與椰漿煮滾時請用矽膠或木匙徹底拌勻，避免 6 小時慢燉期間鍋底沉積黏焦。',
    youtubeQuery: '特福鮮呼吸萬用鍋 椰香南瓜綠咖哩牛 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '無骨牛肩胛小排（切每塊 30 克）', amount: 900, unit: '克', note: '800–1000 克皆可', group: 'main' },
      { name: '奶油南瓜（去皮切粒）', amount: 600, unit: '克', group: 'main' },
      { name: '洋蔥（切碎）', amount: 1, unit: '顆', group: 'main' },
      { name: '蒜頭（拍碎）', amount: 2, unit: '瓣', group: 'main' },
      { name: '芫荽碎', amount: 80, unit: 'ml', note: '約 1/3 杯裝飾用', group: 'main' },
      { name: '椰漿', amount: 400, unit: 'ml', note: '市售 14oz 1 罐', group: 'seasoning' },
      { name: '雞湯', amount: 1, unit: '杯', group: 'seasoning' },
      { name: '泰式綠咖哩醬', amount: 2, unit: '大匙', note: '1–2 大匙或調理包100克', group: 'seasoning' },
      { name: '麵粉', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '二砂糖', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '檸檬汁', amount: 3, unit: '大匙', group: 'seasoning' },
      { name: '番茄醬', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '魚露', amount: 2, unit: '大匙', group: 'seasoning' },
      { name: '植物油', amount: 1, unit: '大匙', group: 'seasoning' },
      { name: '鹽與胡椒粉', amount: null, unit: '適量', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '倒油開啟爆炒煎烤 10 分鐘',
        instruction:
          '在內鍋中加入少許植物油，開蓋選擇左側「爆炒煎烤」模式，設定時間 10 分鐘，按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '10 分鐘',
          temperature: '150°C',
          shortAction: '炒香洋蔥咖哩糊',
        },
      },
      {
        stepNumber: 2,
        title: '炒香洋蔥碎與蒜頭 3 分鐘',
        instruction: '待萬用鍋發出提示音油已熱，放入洋蔥碎與拍碎蒜頭翻炒 3 分鐘。',
      },
      {
        stepNumber: 3,
        title: '炒香綠咖哩醬、麵粉與番茄醬',
        instruction:
          '炒至香味釋出後，加入泰式綠咖哩醬、麵粉與番茄醬，持續翻炒約 3 分鐘。',
        tip: '可用市售泰式綠咖哩醬調理包，使用 2 包（共 100 克）即可。',
      },
      {
        stepNumber: 4,
        title: '倒入椰漿與高湯煮滾後按取消',
        instruction:
          '加入椰漿、雞湯、檸檬汁、二砂糖、魚露、鹽與胡椒粉，以矽膠或木匙徹底拌勻煮滾後按下「取消」。',
      },
      {
        stepNumber: 5,
        title: '加入牛肉與南瓜，蓋上上蓋不鎖定',
        instruction: '放入牛肩胛肉塊與奶油南瓜粒拌勻，關上上蓋但不要鎖上。',
      },
      {
        stepNumber: 6,
        title: '低溫慢燉 6 小時',
        instruction:
          '選擇左側「低溫慢燉」功能，設定時間 6 小時並按下「開始」，待升溫就緒後自動開始倒數。',
        potAction: {
          side: 'left',
          modeName: '低溫慢燉',
          lid: 'closed_unlocked',
          durationText: '6 小時',
          temperature: '70°C',
          shortAction: '70°C慢燉6小時',
        },
      },
      {
        stepNumber: 7,
        title: '時間到按取消直接開蓋',
        instruction: '待萬用鍋發出提示音時按「取消」，直接打開上蓋。',
      },
      {
        stepNumber: 8,
        title: '盛盤撒芫荽碎裝飾享用',
        instruction: '盛盤後撒上芫荽碎裝飾即可趁熱上桌。',
      },
    ],
  },
  {
    id: 'spec-official-tw-35-beef-rendang',
    title: '巴東牛肉',
    subtitle: '先收乾水再拌全脂椰漿高壓壓 30 分，辛香濃油超下飯',
    category: 'braise',
    cuisine: '南洋',
    settingMinutes: 50,
    realTotalMinutes: 75,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '自然自動洩壓（開蓋視濃稠度收汁 5–8 分）',
    stoveDifference:
      '傳統印尼仁當牛肉要小火翻炒收乾 3–4 小時，萬用鍋先收乾水拌椰漿再 60 kPa 壓 30 分，省下 3 小時照樣逼出濃橘香料油。',
    avoidPitfall:
      '步驟 5 務必先把半杯水完全煮乾再倒全脂椰漿；開蓋收汁別收太乾，醬汁放涼後會更濃稠。',
    youtubeQuery: '特福鮮呼吸萬用鍋 巴東牛肉 仁當牛肉 CY625870',
    sourceUrl: OFFICIAL_TW_SOURCE_URL,
    sourceTag: OFFICIAL_TW_SOURCE_TAG,
    ingredients: [
      { name: '牛肋條（切約 3 公分塊）', amount: 750, unit: '克', group: 'main' },
      { name: '洋蔥（切碎）', amount: 1, unit: '杯', group: 'main' },
      { name: '薑泥', amount: 1, unit: '大匙', group: 'main' },
      { name: '蒜泥', amount: 1, unit: '大匙', group: 'main' },
      { name: '小辣椒', amount: 1, unit: '根', note: '依辣度爆香時加入', group: 'main' },
      { name: '椰絲', amount: 2, unit: '大匙', note: '盛盤裝飾用', group: 'main' },
      { name: '巴東咖哩醬', amount: 30, unit: '克', note: '可用市售醬包', group: 'seasoning' },
      { name: '全脂椰漿', amount: 1, unit: '杯', group: 'seasoning' },
      { name: '清水', amount: 0.5, unit: '杯', group: 'seasoning' },
      { name: '植物油', amount: 1, unit: '大匙', group: 'seasoning' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '倒油開啟爆炒煎烤 15 分鐘',
        instruction:
          '在內鍋中加入少許植物油，開蓋選擇左側「爆炒煎烤」模式，將時間設定為 15 分鐘並按下「開始」。',
        potAction: {
          side: 'left',
          modeName: '爆炒煎烤',
          lid: 'open',
          durationText: '約 10–15 分鐘',
          temperature: '150°C',
          shortAction: '炒香巴東醬收水',
        },
      },
      {
        stepNumber: 2,
        title: '爆香洋蔥、薑泥與蒜泥 1 分鐘',
        instruction:
          '待萬用鍋發出提示音油已熱，放入洋蔥碎、薑泥與蒜泥（嗜辣者同下小辣椒）翻炒 1 分鐘。',
      },
      {
        stepNumber: 3,
        title: '下巴東咖哩醬翻炒 2 分鐘',
        instruction: '加入巴東咖哩醬並不斷翻炒，炒煮 2 分鐘釋放濃郁香料香。',
        tip: '可使用市售巴東咖哩醬包；若牛肋條提前一晚先用巴東醬醃漬會更入味。',
      },
      {
        stepNumber: 4,
        title: '下牛肋條翻炒約 4 分鐘',
        instruction: '加入切塊牛肋條，不斷翻炒約 4 分鐘均勻裹上香料。',
      },
      {
        stepNumber: 5,
        title: '先煮乾半杯水，再拌入全脂椰漿',
        instruction:
          '加入 1/2 杯水拌勻，煮至鍋內水分完全收乾後，再倒入全脂椰漿拌勻。',
        tip: '務必待半杯水分完全收乾後再倒入全脂椰漿，才能逼出最濃香的香料椰油。',
      },
      {
        stepNumber: 6,
        title: '取消爆炒，蓋上上蓋並鎖緊',
        instruction: '按下「取消」停止爆炒煎烤功能，蓋上上蓋並順時鐘鎖緊。',
      },
      {
        stepNumber: 7,
        title: '牛羊高壓模式燉煮 30 分鐘',
        instruction:
          '選擇右側「牛 / 羊肉」模式，將時間設定為 30 分鐘，按下「開始」。',
        potAction: {
          side: 'right',
          modeName: '牛 / 羊肉',
          lid: 'locked',
          durationText: '30 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '60kPa燉透牛肋',
        },
      },
      {
        stepNumber: 8,
        title: '洩壓開蓋視濃度收汁 5–8 分鐘（選用）',
        instruction:
          '行程完成並排氣洩壓後打開上蓋檢查濃度；若希望醬汁更濃稠，開蓋選擇左側「收汁 / 醬燒」蒸發 5–8 分鐘並輕拌防黏底（醬汁放涼後會更稠，切忌收得過乾）。',
        potAction: {
          side: 'left',
          modeName: '收汁 / 醬燒',
          lid: 'open',
          durationText: '5–8 分鐘',
          temperature: '110°C',
          shortAction: '收濃香料椰油',
        },
      },
      {
        stepNumber: 9,
        title: '淋於熱飯上撒椰絲享用',
        instruction: '起鍋淋在熱白飯上，撒上椰絲裝飾即可享用。',
      },
    ],
  },
];
