// Show and hide share section when share button is clicked
function toggleShare() {

    var shareSection = document.getElementById("share");
    var profileSection = document.getElementById("profile");
    var articleContent = document.getElementById("article-content");

    if(shareSection.style.display === "none") {
        shareSection.style.display = "flex";
        if(window.screen.width < 800) {
            profileSection.style.display = "none";
            articleContent.style.paddingBottom = "0";
        }
    } else {
        shareSection.style.display = "none";
        profileSection.style.display = "flex";
        articleContent.style.paddingBottom = "30px";
    }
}

// Adjustments for when share section is active and screen size changes.
function toggleProfile() {

    var shareSection = document.getElementById("share");
    var profileSection = document.getElementById("profile");
    var articleContent = document.getElementById("article-content");

    if(window.screen.width >= 800) {
        profileSection.style.display = "flex";
        articleContent.style.paddingBottom = "30px";
    } else {
        if(shareSection.style.display === "flex") {
            profileSection.style.display = "none";
            articleContent.style.paddingBottom = "0";
        }
    }
}
