const siteTitle = 'ok:projects';
const body = document.querySelector('body');
const ball = body.querySelector('.switch');
const modeToggle = body.querySelector(".mode-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.toggle("dark");
    addDarkModeIcon();
} else {
    addLightModeIcon();
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
        addDarkModeIcon();
    } else {
        localStorage.setItem("mode", "light");
        addLightModeIcon();
    }
});

function addDarkModeIcon() {
    ball.classList.remove('fa-solid', 'fa-moon');
    ball.classList.add('fa-solid', 'fa-sun');
    ball.style.color = '#fff';
}

function addLightModeIcon() {
    ball.classList.remove('fa-solid', 'fa-sun');
    ball.classList.add('fa-solid', 'fa-moon');
    ball.style.color = '#111';
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

function updateSiteTitle(title) {
    document.title = title;
    const titleElement = document.querySelector('.title');
    if (titleElement) {
        titleElement.textContent = title;
    }
}

function getRandomImage(width, height) {
    const randomId = Math.random().toString(36).substring(7);
    return `https://source.unsplash.com/${width}x${height}/?sig=${randomId}`;
}

function updateHomepageBackground() {
    const homepage = document.getElementById('home');
    const randomImageUrl = getRandomImage(1920, 1280);
    homepage.style.background = `url(${randomImageUrl}) center 65%`;
}

function updatePortfolioImages() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const img = card.querySelector('img');
        img.src = getRandomImage(630, 420);
    });
}

function updateCopyrightText() {
    const copyright = document.querySelector('.copyright');
    const currentYear = new Date().getFullYear();
    if (copyright) {
        copyright.innerHTML = `&copy; ${currentYear} <a href="/" class="siteLink">${siteTitle}</a> - All Rights Reserved`;
    }
}

updateSiteTitle(siteTitle);
updateHomepageBackground();
updatePortfolioImages();
updateCopyrightText();

