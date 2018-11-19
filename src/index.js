function $(id) {
   return document.getElementById(id);
}
function hide(id) {
    $(id)style.display = "none";
}
function show(id) {
    $(id).style.display = "block";

}

function showSkillsPage() {
   hide("home-page");
   hide("languages-page");
   show("skills-page");
}

function showHomePage() {
   hide("skills-page");
   hide("languages-page");
   show("home-page");
}

function showLanguagesPage() {
   hide("home-page");
   hide("skills-page");
   show("languages-page");
}

document.getElementById("home-menu").onclick = showHomePage;
document.getElementById("skills-menu").onclick = showSkillsPage;
document.getElementById("languages-menu").onclick = showLanguagesPage;



