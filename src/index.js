function showSkillsPage() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("skills-page").style.display = "block";
    document.getElementById("languages-page").style.display = "none";
}

document.getElementById("skills-menu").onclick = showSkillsPage;

function showHomePage() {
    document.getElementById("home-page").style.display = "block";
    document.getElementById("skills-page").style.display = "none";
    document.getElementById("languages-page").style.display = "none";
}

document.getElementById("home-menu").onclick = showHomePage;

function showLanguagesPage() {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("skills-page").style.display = "none";
    document.getElementById("languages-page").style.display = "block";
}

document.getElementById("languages-menu").onclick = showLanguagesPage;



