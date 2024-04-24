document.addEventListener("DOMContentLoaded", function() {
    const siteTitle = document.getElementById("siteTitle");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function() {
        if (siteTitle.style.display === "none") {
            siteTitle.style.display = "block";
        } else {
            siteTitle.style.display = "none";
        }
    });
});