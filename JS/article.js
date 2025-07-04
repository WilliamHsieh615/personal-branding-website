document.addEventListener("DOMContentLoaded", () => {
  const pages = [
    "start-from-scratch.html",
    "job-interview.html",
    "react-intro.html",
    "good-resume.html",
    "css-magic.html",
    "mental-journey.html",
    "vue3-composition-api.html",
    "git.html",
    "seo.html",
    "automation.html",
    "typescript.html",
    "unit-test.html"
  ];

  const currentPage = location.pathname.split("/").pop();
  const currentIndex = pages.indexOf(currentPage);
  const container = document.querySelector(".changePage");

  // 上/下一頁按鈕邏輯
  if (container && currentIndex !== -1) {
    if (currentIndex > 0) {
      const prevPage = pages[currentIndex - 1];
      container.insertAdjacentHTML("afterbegin", `
        <a href="${prevPage}" class="prev" data-aos="fade-right">
          <i class="bi bi-chevron-left"></i> 上一頁
        </a>`);
    }
    if (currentIndex < pages.length - 1) {
      const nextPage = pages[currentIndex + 1];
      container.insertAdjacentHTML("beforeend", `
        <a href="${nextPage}" class="next" data-aos="fade-left">
          下一頁 <i class="bi bi-chevron-right"></i>
        </a>`);
    }
  }

  axios.get("../data/essays.json")
    .then(res => {
      const allList = [
        ...res.data.newest.map(item => ({ ...item, type: "newest" })),
        ...res.data.popular.map(item => ({ ...item, type: "popular" })),
        ...res.data.normal.map(item => ({ ...item, type: "normal" }))
      ];

      // 渲染文章標籤內容
      allList.forEach(item => {
        const targetEl = document.querySelector(`.${item.name}`);
        if (!targetEl) return;

        let tagsHtml = item.tags.map(tag => `<a href="${item.link}" class="tag">${tag}</a>`).join("");

        if (item.type === "newest") {
          tagsHtml += `<a href="${item.link}" class="tag tag_important">最新文章</a>`;
        }
        if (item.type === "popular") {
          tagsHtml += `<a href="${item.link}" class="tag tag_important">人氣文章</a>`;
        }

        const html = `
          <img src="../image/blog/About Section.png" alt="Section" data-aos="fade-right">
          <div class="essay" data-aos="fade-left">
            <time datetime="${item.date}">${item.date}</time>
            <div class="tags">${tagsHtml}</div>
            <h3>${item.title}</h3>
          </div>
        `;
        targetEl.innerHTML = html;
      });

      // 延伸閱讀隨機取 3 篇不重複文章
      const otherEssays = allList.filter(item => item.link !== currentPage);
      const shuffled = otherEssays.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);

      const extendUl = document.querySelector(".extend ul");
      if (extendUl) {
        const extendHTML = selected.map(item =>
          `<li><a href="${item.link}">${item.title}</a></li>`
        ).join("");
        extendUl.innerHTML = extendHTML;
      }

      AOS.refresh();
    })
    .catch(err => {
      console.error("資料讀取失敗", err);
    });
});