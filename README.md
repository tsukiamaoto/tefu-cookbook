# tefu-cookbook｜Tefal 鮮呼吸智能萬用鍋（CY625870）廚房食譜瀏覽器

專為 **料理老鳥長輩 × iPad mini 6（廚房支架邊看邊煮）** 打造的極簡大字 PWA 食譜瀏覽器，整合 `docs/spec/recipes` 中的亞洲料理食譜與亞洲家常菜，同一道菜只顯示選定版本。

## 設計特色

* **零多餘雜訊、全站統一大字**：首頁直接呈現搜尋、分類、料理風味與大字卡片；無標題列、收藏、字體切換、計時器、語音朗讀、食材勾選框或備忘欄。
* **開頁直入食材與完整步驟**：無「上一步／下一步」翻頁操作，全部食譜共用料理頁，橫放左側顯示食材、右側顯示編號步驟。有份量基準的食譜可換算人數；文件食譜可展開完整來源；每一步直接用橘色（左側無壓）／藍色（右側壓力）清楚標示 CY625870 按鍵、蓋子鎖定與洩壓方式，附老鳥轉鍋重點、雙時間（設定 vs 實際開飯）與螢幕防休眠（Wake Lock）。
* **PWA 離線快取＋GitHub Pages 自動部署**：在 iPad mini 6 Safari 打開網址點「分享 ➔ 加入主畫面」，即為全螢幕無網址列的廚房食譜本。

## 本機開發與測試

```bash
npm install
npm run dev      # 啟動本機與區網預覽（iPad 連同一個 Wi-Fi 即可開）
npm test         # 執行食譜資料與格式化單元測試
npm run build    # TypeScript 檢查並建置 dist/
```

## 部署至 GitHub Pages

已內建 `.github/workflows/deploy.yml`：
1. 將專案推送至 GitHub `main` 分支。
2. 到 GitHub Repository 的 **Settings ➔ Pages ➔ Build and deployment ➔ Source** 選擇 **GitHub Actions**。
3. 執行完成後，用 iPad mini 6 的 Safari 開啟部署網址，點「分享 ➔ 加入主畫面」即可永久一鍵開啟。

## 參考規格文件

完整機型規格、實戰避坑與 UI/UX 設計請見 [docs/spec/README.md](./docs/spec/README.md)。
