// nav
$(document).ready(function () {
    const current = window.location.pathname.split("/").pop();
    $(".link_JS").each(function () {
        const href = $(this).attr("href");
        if (href === current || href === "") {
            $(this).addClass("active");
        }
    });
});


