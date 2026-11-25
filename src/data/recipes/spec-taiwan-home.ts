import type { Recipe } from '../../types/recipe';

export const SPEC_TAIWAN_HOME_RECIPES: Recipe[] = [
  {
    id: 'spec-taiwan-home-01-mung-bean-soup',
    title: '古早味綠豆湯',
    subtitle: '免泡豆鎖蓋壓 25 分鬆軟微開花，開蓋拌二砂糖消暑零失敗',
    category: 'dessert',
    cuisine: '台式',
    settingMinutes: 25,
    realTotalMinutes: 55,
    baseServings: 4,
    innerPot: '球釜不沾內鍋',
    releaseSummary: '務必自然自動洩壓（防澱粉噴漿、豆仁更綿密）',
    stoveDifference:
      '不用提前泡豆也不用在瓦斯爐邊顧火怕撲鍋！綠豆洗淨直接下鍋按「煮／燉湯品」壓 25 分鐘就會鬆軟微開花；最關鍵是「糖一定要等洩壓開蓋後再放」，提早加糖會讓豆皮變硬煮不爛。',
    avoidPitfall:
      '綠豆含澱粉易起泡，綠豆加清水總高度務必低於內鍋 2/3 且嚴禁手動急排，等安全閥自然落下再開蓋；若剛煮過滷肉等重口味菜色，記得先洗淨矽膠密封圈再煮甜湯。',
    youtubeQuery: '特福鮮呼吸萬用鍋 綠豆湯 免泡水',
    sourceUrl: 'https://icook.tw/recipes/480635',
    sourceTag: '台灣家常食譜 懶人一鍵版',
    ingredients: [
      {
        name: '台灣毛綠豆（洗淨免泡水）',
        amount: 1,
        unit: '米杯',
        note: '約 150 公克，挑掉浮起壞豆；油綠豆亦可',
        group: 'main',
      },
      {
        name: '清水（溫熱水更省升壓時間）',
        amount: 7,
        unit: '米杯',
        note: '約 1260 毫升；喜清湯可加至 8 杯，勿超內鍋 2/3',
        group: 'seasoning',
      },
      {
        name: '二砂糖（開蓋後再放）',
        amount: 0.5,
        unit: '米杯',
        note: '約 75 公克，依甜度增減；改冰糖較清爽',
        group: 'seasoning',
      },
      {
        name: '鹽（提甜解膩，選配）',
        amount: null,
        unit: '1 小撮',
        note: '畫龍點睛不死甜',
        group: 'seasoning',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '淘洗綠豆挑壞豆、與清水直接入鍋',
        instruction:
          '將綠豆倒進大碗加清水輕輕搓洗 2 次，把浮在水面上的乾癟空殼豆撈掉並瀝乾（完全不用泡水）。把綠豆與 7 米杯清水倒入球釜內鍋，確認總高度不超過內鍋 2/3 刻度線。',
        tip: '這一步千萬不要先加糖！提早加糖會讓綠豆皮硬化，壓完還是會有硬心。',
      },
      {
        stepNumber: 2,
        title: '鎖蓋按「煮／燉湯品」壓 25 分鐘',
        instruction:
          '蓋上鍋蓋並將上蓋手把順時鐘轉到底鎖定，按右側「煮／燉湯品」（預設 30 千帕、不需改壓力），按加號將時間調至 25 分鐘後按下開始。結束後不要手動排氣，靜待自然自動洩壓至安全閥完全落下。',
        potAction: {
          side: 'right',
          modeName: '煮／燉湯品',
          lid: 'locked',
          durationText: '25 分鐘',
          releaseMode: 'natural_auto',
          shortAction: '免泡豆溫壓煮鬆',
        },
        tip: '喜歡顆粒完整不爆開可直接用預設 20 分鐘；喜歡更綿密帶豆沙感可調到 30 分鐘。',
      },
      {
        stepNumber: 3,
        title: '安全開蓋後趁熱拌入二砂糖與少許鹽',
        instruction:
          '確認安全閥落下後，將鍋蓋朝遠離身體方向傾斜掀開（避免蓋緣熱水滴到手）。趁熱倒入二砂糖與 1 小撮鹽，用矽膠匙輕輕拌到糖完全融化即可；放涼冰進冰箱隔天更香甜消暑。',
        tip: '冰鎮過後甜度會降下來，若要冰著喝，熱熱試喝覺得偏甜一點點冰過就剛剛好。',
      },
    ],
  },
];
