document.addEventListener("DOMContentLoaded", function () {

  let el_essays = [];

  // 文章渲染
  function renderEssays(essays) {

    console.log(essays);
    console.log(essays.newest);
    console.log(essays.popular);
    console.log(essays.normal);

    const essayContainerIndexJS = document.querySelector(".essayContainerIndexJS");
    const essayContainerBlogJS = document.querySelector(".essayContainerBlogJS");

    // 文章處理
    const combinedEssays = [];

    essays.newest.forEach(item => {
      combinedEssays.push({ ...item, type: 'newest' });
    });

    essays.popular.forEach(item => {
      combinedEssays.push({ ...item, type: 'popular' });
    });

    essays.normal.forEach(item => {
      combinedEssays.push({ ...item, type: 'normal' });
    });

    combinedEssays.sort((a, b) => new Date(b.date) - new Date(a.date));

    function renderEssaysList(essayArray, containerSelector) {
      const container = document.querySelector(containerSelector);
      if (!container) return;

      let htmlStr = '';

      essayArray.forEach(item => {
        let importantTag = '';
        if (item.type === 'newest') {
          importantTag = `<a href="${item.link}" class="tag tag_important">最新文章</a>`;
        } else if (item.type === 'popular') {
          importantTag = `<a href="${item.link}" class="tag tag_important">人氣文章</a>`;
        }

        let tagsStr = item.tags.map(tag => `<a href="${item.link}" class="tag">${tag}</a>`).join('');

        let allTagsStr = tagsStr + importantTag;

        htmlStr += `
      <li class="swiper-slide essay" data-aos="zoom-in">
        <img src="${item.image}" alt="${item.title}">
        <time datetime="${item.date}">${item.date}</time>
        <div class="tags">${allTagsStr}</div>
        <h3>${item.title}</h3>
        <p class="content">${item.description}<br><a href="${item.link}">閱讀更多...</a></p>
        <a href="${item.link}" class="readMore_css readMore_JS">閱讀內文</a>
      </li>`;
      });

      container.innerHTML = htmlStr;
    }
    renderEssaysList(combinedEssays, '.essayContainerIndexJS');
    renderEssaysList(combinedEssays, '.essayContainerBlogJS');


    el_essays = document.querySelectorAll(".essayContainerBlogJS > .essay");

    // 輪播
    if (essayContainerIndexJS) {
      const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        navigation: {
          prevEl: ".leftArrow_JS",
          nextEl: ".rightArrow_JS",
        },

        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },

        mousewheel: true,

        breakpoints: {
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
      });
    }

    // blog.html的section，固定放最新文章
    document.querySelector(".blog-newest-article").innerHTML = `
        <img src="../image/blog/About Section.png" alt="Section" data-aos="fade-right">
        <div class="essay" data-aos="fade-left">
            <time datetime="${essays.newest[0].date}">${essays.newest[0].date}</time>
            <div class="tags">
                <a href="${essays.newest[0].link}" class="tag">${essays.newest[0].tags[0]}</a>
                <a href="${essays.newest[0].link}" class="tag">${essays.newest[0].tags[1]}</a>
                <a href="${essays.newest[0].link}" class="tag tag_important">最新文章</a>
            </div>
            <h3>${essays.newest[0].title}</h3>
            <p class="content">${essays.newest[0].description}</p>
            <a href="start-from-scratch.html" class="readMore_css">閱讀更多</a>
         </div>`;
  }

  // 搜尋框
  function searchCards() {

    if (!el_essays || el_essays.length === 0) {
      console.warn("文章尚未載入");
      return;
    }

    const keywords = searchInput.value
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    let matchCount = 0;

    el_essays.forEach(essay => {
      const cardText = essay.textContent.toLowerCase();
      const isMatch = keywords.every(kw => cardText.includes(kw));
      if (isMatch) {
        essay.style.display = "";
        matchCount++;
      } else {
        essay.style.display = "none";
      }
    });

    noResult.style.display = matchCount === 0 ? "block" : "none";

  }

  const searchInput = document.querySelector(".searchInput");
  const searchIcon = document.querySelector(".searchIcon");
  const noResult = document.querySelector(".noResult");

  if (searchInput) {
    searchInput.addEventListener("input", searchCards);
    searchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        searchCards();
      }
    });
  }

  if (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault();
      searchCards();
    });
  }

  // up 錨點移到最上面消失
  const ups = document.querySelectorAll(".up");

  function toggleUpVisibility() {
    ups.forEach(item => {
      if (window.scrollY < 95) {
        item.classList.remove("show");
      } else {
        item.classList.add("show");
      }
    });
  }
  document.addEventListener("DOMContentLoaded", toggleUpVisibility);
  window.addEventListener("scroll", toggleUpVisibility);

  // 載入JSON
  axios.get("../data/essays.json")
    .then(res => {
      const essays = res.data;
      console.log(essays);
      renderEssays(essays);
    })
    .catch(err => {
      console.error("資料載入失敗", err);
    });
});

// card 收合
$(document).ready(function () {
  $(document).on('click', '.readMore_JS', function (e) {
    e.preventDefault();
    $(this).parent().find('.content').toggleClass('readMore');

    if ($(this).parent().find('.content').hasClass('readMore')) {
      $(this).text('收合內文');
    } else {
      $(this).text('閱讀內文');
    }
  });
});