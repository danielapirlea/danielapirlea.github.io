function $(id) {
    return document.getElementById(id);
}
function hide(id) {
    $(id).style.display = "none";
}
function show(id) {
    $(id).style.display = "block";
}
 // function showSkillsPage() {
//     hide("home-page");
//     hide("education-page");
//     hide("languages-page");
//     show("skills-page");
// }
 // function showEducationPage() {
//     hide("home-page");
//     hide("skills-page");
//     hide("languages-page");
//     show("education-page");
// }

// function showHomePage() {
//     hide("skills-page");
//     hide("education-page");
//     hide("languages-page");
//     show("home-page");
// }
// function showLanguagesPage() {
//     hide("education-page");
//     hide("home-page");
//     hide("skills-page");
//     show("languages-page");
// }

// $("home-menu").onclick = showHomePage;
// $("skills-menu").onclick = showSkillsPage;
// $("education-menu").onclick = showEducationPage;
// $("languages-menu").onclick = showLanguagesPage;

function hideAllPages() {
    var pages = document.querySelectorAll(".page-block");
    pages.forEach(function(page) {
        // console.info("hide : " + page.id);
        page.style.display = "none";
    })
//     for(var i=0; i < pages.length; i++) {
//         pages[i].style.display = "none";
//     }
}
var links = document.querySelectorAll("#top-menu-bar a");
for (var i = 0; i < links.length; i++) {
    // console.log(links[i].getAttribute("data-page"), links[i]);
    links[i].onclick = function() {
        console.warn("hide all pages");
        hideAllPages();
        var page = this.getAttribute("data-page")
        // console.info("show page", page)
        show(page + "-page");
    };
}

show("home-page");

