import portfolioContent from "../data/content.json" with { type: "json" };

const body = document.querySelector("body");
const themeBtn = document.querySelector(".theme-btn");
const aboutMeText = document.querySelector(".about-me-text");

// 1. Define the handler first so it is initialized in memory
const toggleTheme = (e) => {
    console.log("Theme button clicked");
    e.preventDefault();

    // Fix: Match your CSS class names ("-mode" instead of "-theme")
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        themeBtn.style.color = "var(--dark-theme-color)";
        themeBtn.innerText = "Dark"; // Change button text to moon icon
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        themeBtn.style.color = "var(--light-theme-color)";
        themeBtn.innerText = "Light"; // Change button text to sun icon
        body.classList.add("light-mode");
    }
};

// 2. Set up the event listeners once the DOM is ready
const setup = () => {
    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
        themeBtn.innerText = "Light";
    }
    if (aboutMeText) {
        aboutMeText.innerText = portfolioContent.content[0].description;
    } else {
        aboutMeText.innerText = "About me text not found.";
    }
};

// 3. Kick off the application
const init = () => {
    setup();
};

init();
