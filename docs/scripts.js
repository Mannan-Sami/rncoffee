document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("main-nav");

    hamburger.addEventListener("click", function() {
        console.log("Hamburger clicked");
        nav.classList.toggle("active");
        hamburger.classList.toggle("open");
    });
});
