import {createRealtyCard} from './components/realty.js';
import {loadData} from './data/backend.js';

const Method = {
  GET: [`GET`, `http://134.209.138.34/items`]
};

const mainElement = document.querySelector(`.page-main`);
const realtyList = mainElement.querySelector(`.realtyList`);

const renderCards = (data) => {
  data.forEach((realty) => {
    realtyList.insertAdjacentHTML(`beforeEnd`, createRealtyCard(realty));
  });
};

loadData(Method, renderCards);
