// LISTENERS 
const contentDiv = document.querySelector(".content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const pricesButton = document.querySelector("#prices-btn");
const abouUsButton = document.querySelector("#abouUs-btn");
const pageTitle = document.querySelector(".title");


function listeners() {
  menuButton.addEventListener("click", () => {
    createMainContent("Menu");
    menu.forEach((obj) => {
      createMenuContent(obj.title, obj.price, obj.description);
    });
  });

  pricesButton.addEventListener("click", () => {
    createMainContent("Prices");
    menu.forEach((obj) => {
      createPriceContent(obj.title, obj.price);
    });
  });

  homeButton.addEventListener("click", () => {
    createMainContent("");
  });
}

listeners();
