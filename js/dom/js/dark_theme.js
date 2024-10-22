let d = document,
    ls = localStorage;

let moon = "🌙",
    sun = "☀️";

const lightMode = (btn, classDark) => {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");
    $selectors.forEach(el => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
}

const darkMode = (btn, classDark) => {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]");
    $selectors.forEach(el => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
}

export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn);

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            if ($themeBtn.textContent === moon) {
                darkMode(btn, classDark);
            } else {
                lightMode(btn, classDark);
            }
        }
    });
}

d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    (ls.getItem('theme') === "light") ? lightMode("[data-dark-btn]", "dark-mode-class") : darkMode("[data-dark-btn]", "dark-mode-class");
});