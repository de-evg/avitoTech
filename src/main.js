import {createRealtyCard} from './components/realty.js';

const renderCard = (container, template) => {
  container.insertAdjacentHTML(`beforeEnd`, template);
};

const mainElement = document.querySelector(`.page-main`);
const realtyList = mainElement.querySelector(`.realtyList`);

renderCard(realtyList, createRealtyCard());
