import {createRealtyCard} from './components/realty.js';

const NUMBER_OF_CARDS = 10;
const renderCards = (container, template, count) => {
  for (let i = 0; i < count; i++) {
    container.insertAdjacentHTML(`beforeEnd`, template);
  }
};

const mainElement = document.querySelector(`.page-main`);
const realtyList = mainElement.querySelector(`.realtyList`);


renderCards(realtyList, createRealtyCard(), NUMBER_OF_CARDS);
