// 頁碼
// const pagination = document.querySelector(".pagination");
// const leftArrow = `<a href="#" class="arrow prev"><i class="bi bi-chevron-left"></i></a>`;
// const rightArrow = `<a href="#" class="arrow next"><i class="bi bi-chevron-right"></i></a>`;
// const dots = `<a href="#" class="dots">...</a>`;

// const totalPages = 5;
// let currentPage = 1;

// function pageNumber() {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//         let active = "";
//         if (i === currentPage) {
//             active = "active";
//         }
//         pages.push(`<a href="#" class="page ${active}">${i}</a>`);
//     }
//     pagination.innerHTML = `${leftArrow}${pages.join("")}${dots}${rightArrow}`;
// }
// pageNumber();

// pagination.addEventListener("click", function (e) {
//     e.preventDefault();
//     const page = e.target.closest(".page");
//     const prev = e.target.closest(".prev");
//     const next = e.target.closest(".next");
//     if (page) {
//         currentPage = parseInt(page.textContent);
//         pageNumber();
//     }
//     if (prev && currentPage > 1) {
//         currentPage--;
//         pageNumber();
//     }
//     if (next && currentPage < totalPages) {
//         currentPage++;
//         pageNumber();
//     }
// });

