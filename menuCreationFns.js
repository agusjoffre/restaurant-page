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
