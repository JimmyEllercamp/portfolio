import portfolioContent from "../data/content.json" with { type: "json" };

// Global DOM Selectors
const body = document.querySelector("body");
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTitle = document.querySelector("#about-me h2");
const genreBtn = document.querySelector(".genre-btn");

// Genre Configuration Matrix
const genres = ["Sci-Fi", "Action", "Romance", "Horror", "Comedy"];
let currentGenreIndex = 0;

// Central Rendering Machine (Handles Text + Visual Layout)
const applyGenreState = (genre) => {
    // TODO: Add logic in this function to set preference in local storage, so it persists until cache is cleared

    if (!aboutMeText) {
        return;
    }
    // A. Clear out existing bio copy paragraphs cleanly
    aboutMeText.innerHTML = "";

    // B. Dynamically update text nodes
    if (aboutMeTitle) {
        aboutMeTitle.textContent = `About Me (${genre})`;
    }
    if (genreBtn) {
        genreBtn.textContent = `Genre: ${genre}`;
    }

    // C. Inject paragraph blocks from your updated JSON file
    const paragraphs = portfolioContent.content[0].genres[genre];
    paragraphs.forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        p.classList.add("bio-paragraph");
        aboutMeText.appendChild(p);
    });

    // D. Clean up previous CSS style classes and apply the new one
    genres.forEach((g) => {
        const classHook = `genre-${g.toLowerCase()}`;
        body.classList.remove(classHook);
    });

    body.classList.add(`genre-${genre.toLowerCase()}`);
};

// Event Handler to step smoothly through your array matrix
const cycleGenre = (e) => {
    console.log("Genre shifted!");
    e.preventDefault();

    currentGenreIndex = (currentGenreIndex + 1) % genres.length;
    const activeGenre = genres[currentGenreIndex];

    applyGenreState(activeGenre);
};

// Initialization Setup Hook
const setup = () => {
    // Set your starting engine state to default (Sci-Fi / Index 0)
    applyGenreState(genres[currentGenreIndex]);

    if (genreBtn) {
        genreBtn.addEventListener("click", cycleGenre);
    } else {
        console.warn(
            "Genre trigger button selector target missing from DOM layout.",
        );
    }
};

const init = () => {
    setup();
};

init();
