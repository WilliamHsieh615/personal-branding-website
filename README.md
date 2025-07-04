# 個人品牌網站 (Personal Branding Website)

🔗 [專案連結](https://williamhsieh615.github.io/PersonalBrandingWebsite/)

### 專案簡介
一個現代、響應式的個人品牌與作品展示網站，專為前端工程師兼職涯諮詢師打造。結合首頁特色輪播、部落格文章動態載入、深度文章頁面、郵件訂閱功能與回到頂部按鈕，完整展現個人專業服務與內容。

### 技術棧
- **HTML5** + **SCSS**（使用變數、Flexbox／Grid）  
- **JavaScript (ES6+)**  
  - [Axios](https://github.com/axios/axios)（動態抓取 JSON）  
  - [Swiper.js](https://swiperjs.com/)（首頁輪播）  
  - [AOS](https://michalsnik.github.io/aos/)（滾動動畫）
  - [SweetAlert2](https://sweetalert2.github.io/)（美化彈出提示視窗） 
  - [jQuery](https://jquery.com/)（Read More 收合功能）  
- **Bootstrap Icons**
- **Google Fonts**  
- [**Mailchimp 嵌入表單**](https://mailchimp.com/landers/email-marketing-platform/?ds_c=DEPT_AOC_Google_Search_ROW_EN_Brand_Acquire_Omega_Manual-NE_T3&ds_kids=p81005570474&ds_a_lid=kwd-2285511033&ds_cid=71700000120288589&ds_agid=58700008803527157&gad_source=1&gad_campaignid=21865451006&gbraid=0AAAAADh1Fp2jaG6pjxmJQMsg96K5tlYQJ&gclid=CjwKCAjw6NrBBhB6EiwAvnT_rjo0N6KWVGxlhyII2Qi58w2AbWJpf27z4cYlrY5DDLo6ARWi10pc0hoCQ7UQAvD_BwE&gclsrc=aw.ds)
- **響應式設計**：手機／平板／桌面等多種斷點  

### 核心功能

1. **動態文章列表**  
   - [essays.json](https://github.com/WilliamHsieh615/PersonalBrandingWebsite/blob/main/data/essays.json) 提供 newest、popular、normal 三種分類  
   - JSON 內容驅動列表渲染、自動加上「最新文章／人氣文章」標籤  
   - 關鍵字即時搜尋／篩選  

2. **部落格精選輪播**  
   - Swiper.js 設定 1–3 張可見  
   - 自動播放、滑鼠滾輪、左右箭頭導航  

3. **深度文章頁面**  
   - 12 篇獨立 HTML 頁面，依 JSON `link` 欄位連結  
   - 滾動時 AOS 動畫效果  
   - 自動插入「上一頁／下一頁」連結  

4. **延伸閱讀隨機推薦**  
   - 排除當前文章後，隨機挑 3 篇不重複文章  
   - 自動寫入「延伸閱讀」清單  

5. **電子報訂閱**  
   - Mailchimp 表單嵌入  
   - 使用 `fetch(..., { mode: 'no-cors' })` 送出  
   - 成功後顯示 SweetAlert2 提示  

6. **回到頂部按鈕**  
   - 滾動超過 100px 後顯示  
   - 點擊平滑滾回頁面頂部  

### 頁面預覽

<!-- 將下列 image 替換為你自己的截圖路徑 -->
| 首頁 Hero      | 精選輪播         | 部落格列表       |
|:---------------:|:---------------:|:---------------:|
| ![首頁](./screenshots/home.png) | ![輪播](./screenshots/carousel.png) | ![列表](./screenshots/blog-list.png) |

| 文章詳情       | 分頁 & 收合功能  | 回到頂部 & 訂閱  |
|:---------------:|:---------------:|:---------------:|
| ![文章](./screenshots/article.png) | ![分頁](./screenshots/pagination.png) | ![訂閱](./screenshots/subscribe.png) |

### 使用說明

1. **將程式碼 clone 下來**  
   ```bash
   git clone https://github.com/your‑username/PersonalBrandingWebsite.git
   cd PersonalBrandingWebsite
2. **（可選）安裝依賴並編譯 SCSS**
   ```bash
   npm install
   npm run build:css
3. 以本機伺服器開啟
   ```bash
   npx http-server .
   
   （或直接雙擊 index.html 開啟瀏覽器）
4. 部署
   - GitHub Pages：啟用 Pages，指向 gh-pages 分支或 docs/ 資料夾
   - Netlify / Vercel：連結 GitHub repo，自動部署
