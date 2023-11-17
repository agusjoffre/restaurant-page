const contentDiv = document.querySelector(".content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const pricesButton = document.querySelector("#prices-btn");
const abouUsButton = document.querySelector("#abouUs-btn");
const pageTitle = document.querySelector(".title");

const createMainContent = (containerTitle) => {
  pageTitle.innerText = containerTitle;
  let infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  contentDiv.appendChild(infoContainer);
};

const createMenuContent = (title, price, description) => {
  let cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = title;
  let cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.innerText = price;
  let cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  cardDescription.innerText = description;
  infoContainer.appendChild(cardPrice, cardTitle, cardDescription);
};

const createPriceContent = (title, price) => {
  let cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = title;
  let cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.innerText = price;
  infoContainer.appendChild(cardPrice, cardTitle);
};

const menu = [];

function Card(title, price, description) {
  return {
    title,
    price,
    description,
  };
}

function addMenuObject(title, price, description) {
  const newMenu = new Card(title, price, description);
  menu.push(newMenu);
  console.log(menu);
}

