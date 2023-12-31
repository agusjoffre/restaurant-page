const rightMain = document.querySelector(".right-main");
const contentDiv = document.querySelector(".content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const pricesButton = document.querySelector("#prices-btn");
const abouUsButton = document.querySelector("#abouUs-btn");
const pageTitle = document.querySelector(".title");

const createMainContent = (containerTitle) => {
  pageTitle.innerText = containerTitle;

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  contentDiv.appendChild(infoContainer);
  return infoContainer;
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

  let cardHTML = document.createElement("div");
  cardHTML.classList.add("card");

  cardHTML.appendChild(cardTitle);
  cardHTML.appendChild(cardPrice);
  cardHTML.appendChild(cardDescription);

  return cardHTML;
};

const createPriceContent = (title, price) => {
  let cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = title;

  let cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");
  cardPrice.innerText = price;

  let cardHTML = document.createElement("div");
  cardHTML.classList.add("card");

  cardHTML.appendChild(cardTitle);
  cardHTML.appendChild(cardPrice);

  return cardHTML;
};

// MENU CREATION FUNCTIONS

const menu = [];

function card(title, price, description) {
  return {
    title,
    price,
    description,
  };
}

function addMenuObject(name, price, description) {
  const newMenu = new card(name, price, description);
  menu.push(newMenu);
}

// DECLARATIONS
let margarita = addMenuObject(
  "Margarita",
  "$2500",
  "Typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil."
);

let fugazzetta = addMenuObject(
  "Fugazzetta",
  "$3200",
  "It is a variety of Argentine pizza, originated in Buenos Aires, which consists of placing cheese between two pizza doughs, as a filling, on top of which onion is added."
);

let jamon = addMenuObject(
  "Ham and bell pepper",
  "$2300",
  "Another typical Argentinian pizza, with lots of cheese"
);

let muzzarella = addMenuObject(
  "Mozzarella",
  "$2700",
  "Mozzarella Pizza, made with tomato sauce, mozzarella, olives, and oregano."
);

// AboutUs Content
function createAboutUsContent() {
  const aboutUsContainer = document.createElement("div");
  aboutUsContainer.classList.add("about-us-container");

  const aboutUsText = document.createElement("p");
  aboutUsText.classList.add("about-us-text");
  aboutUsText.innerText =
    "Welcome to San Pedro Pizzeria, where passion for authentic Argentine flavors meets the artistry of crafting mouthwatering pizzas. At San Pedro, we take pride in bringing the heart of Argentina to your table through our delectable pizza creations.";
  aboutUsContainer.appendChild(aboutUsText);

  return aboutUsContainer;
}

// LISTENERS

function listeners() {
  menuButton.addEventListener("click", () => {
    console.log("aaa");
    contentDiv.removeChild(contentDiv.lastChild);
    const mainContent = createMainContent("Menu");
    rightMain.classList.replace("right-main", "right-main-info");
    menu.forEach((obj) => {
      const content = createMenuContent(obj.title, obj.price, obj.description);
      mainContent.appendChild(content);
    });
  });

  pricesButton.addEventListener("click", () => {
    contentDiv.removeChild(contentDiv.lastChild);
    const mainContent = createMainContent("Prices");
    rightMain.classList.replace("right-main", "right-main-info");
    menu.forEach((obj) => {
      const content = createPriceContent(obj.title, obj.price);
      mainContent.appendChild(content);
    });
  });

  homeButton.addEventListener("click", () => {
    rightMain.classList.replace("right-main-info", "right-main");
    
  });

  abouUsButton.addEventListener("click", () => {
    contentDiv.removeChild(contentDiv.lastChild);
    const mainContent = createMainContent("About Us");
    const aboutUsContainer = createAboutUsContent();
    mainContent.appendChild(aboutUsContainer);
  });
}

listeners();
