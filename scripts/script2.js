import portfolioContent from "../data/content.json" with { type: "json" };

const body = document.querySelector("body");
const themeBtn = document.querySelector(".theme-btn");
const aboutMeText = document.querySelector(".about-me-text");

// 1. Updated Handler: Now actively saves the choice to local storage
const toggleTheme = (e) => {
    console.log("Theme button clicked");
    e.preventDefault();

    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeBtn.style.color = "var(--dark-theme-color)";
        themeBtn.innerText = "Dark";

        // Save choice to the browser string matrix
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeBtn.style.color = "var(--light-theme-color)";
        themeBtn.innerText = "Light";

        // Save choice to the browser string matrix
        localStorage.setItem("theme", "light");
    }
};

// 2. Updated Setup: Corrected native localStorage API syntax
const setup = () => {
    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);

        // Grab the saved theme string safely
        const savedTheme = localStorage.getItem("theme");

        // If a theme was previously saved, apply it immediately
        if (savedTheme === "dark") {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeBtn.style.color = "var(--dark-theme-color)";
            themeBtn.innerText = "Dark";
        } else {
            // Default baseline if empty or explicitly set to light
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            themeBtn.style.color = "var(--light-theme-color)";
            themeBtn.innerText = "Light";
        }
    }

    if (aboutMeText) {
        aboutMeText.innerText = portfolioContent.content[0].description;
    } else {
        aboutMeText.innerText = "About me text not found.";
    }
};

const init = () => {
    setup();
};

init();
