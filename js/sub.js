(function () {
    "use strict";

    const openButton = document.querySelector(".hamburger_btn");
    const sitemap = document.getElementById("mobileSitemap");
    const closeButton = document.querySelector(".mobile_close_btn");
    const mobileLinks = document.querySelectorAll(".mobile_sitemap a");

    if (!openButton || !sitemap || !closeButton) return;

    function openMenu() {
        sitemap.classList.add("is-open");
        sitemap.setAttribute("aria-hidden", "false");

        openButton.setAttribute("aria-expanded", "true");
        openButton.setAttribute("aria-label", "전체 메뉴 닫기");

        document.body.classList.add("menu-open");
        closeButton.focus();
    }

    function closeMenu() {
        sitemap.classList.remove("is-open");
        sitemap.setAttribute("aria-hidden", "true");

        openButton.setAttribute("aria-expanded", "false");
        openButton.setAttribute("aria-label", "전체 메뉴 열기");

        document.body.classList.remove("menu-open");
    }

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            sitemap.classList.contains("is-open")
        ) {
            closeMenu();
            openButton.focus();
        }
    });

    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (this.getAttribute("href") !== "#") {
                closeMenu();
            }
        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });
})();


(function () {
    "use strict";

    const familySelect = document.querySelector(
        "#footer .family_site select"
    );

    if (!familySelect) return;

    familySelect.addEventListener("change", function () {
        if (!this.value) return;

        window.open(
            this.value,
            "_blank",
            "noopener,noreferrer"
        );

        this.selectedIndex = 0;
    });
})();
