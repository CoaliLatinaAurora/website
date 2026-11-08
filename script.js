document.addEventListener("DOMContentLoaded", function () {

    // SELECT NAVIGATION ELEMENTS
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".navlinks");
    const submenuToggles = document.querySelectorAll(".submenu-toggle");

    // ==============================
    // MOBILE HAMBURGER MENU
    // ==============================

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            // Open or close navigation
            const isOpen = navLinks.classList.toggle("active");

            // Update accessibility attributes
            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            // Change hamburger icon to X when open
            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

    }

    // ==============================
    // MOBILE DROPDOWN MENUS
    // ==============================

    submenuToggles.forEach(function (button) {

        button.addEventListener("click", function () {

            const dropdown = button.closest(".values-dropdown");

            if (dropdown) {

                // Open or close submenu
                const isOpen = dropdown.classList.toggle("submenu-open");

                // Update accessibility attribute
                button.setAttribute("aria-expanded", isOpen);

            }

        });

    });

    // ==============================
    // CLOSE MENU WHEN LINK IS CLICKED
    // ==============================

    if (navLinks && menuToggle) {

        const links = navLinks.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                if (window.innerWidth <= 768) {

                    navLinks.classList.remove("active");

                    menuToggle.textContent = "☰";

                    menuToggle.setAttribute("aria-expanded", "false");
                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );

                }

            });

        });

    }

});