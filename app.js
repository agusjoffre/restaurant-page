const contentDiv = document.querySelector(".content");
const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const pricesButton = document.querySelector(".prices-btn");
const abouUsButton = document.querySelector(".abouUs-btn");


const createContent = () => {
    let title = document.createElement('h1')
    title.classList.add('title')
    let infoContainer = document.createElement('div')
    infoContainer.classList.add('info-container')
    contentDiv.appendChild(title, infoContainer)
}


