import {createRealtyCard} from './components/realty.js';
import {createRealtyInfo} from './components/aboutRealty.js';
import {loadData} from './data/backend.js';

let storage = localStorage;

const Method = {
  GET_ITEMS: [`GET`, `http://134.209.138.34/items`],
  GET_FULL_ITEM: [`GET`, `http://134.209.138.34/item/`]
};

const updateMethod = (itemID) => {
  return Method.GET_FULL_ITEM[1] = Method.GET_FULL_ITEM[1] + itemID;
};

const mainElement = document.querySelector(`.page-main`);

if (mainElement.querySelector(`.realtyList`)) {
  const realtyList = mainElement.querySelector(`.realtyList`);

  const renderCards = (data) => {
    data.forEach((realty) => {
      realtyList.insertAdjacentHTML(`beforeEnd`, createRealtyCard(realty));
    });
  };

  loadData(Method.GET_ITEMS, renderCards);

  realtyList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains(`realtyCard__LinkAboutRealty`)) {
      const realtyID = evt.target.parentElement.parentElement.id;
      storage.setItem('idRealty', realtyID);
    }
  });
}

if (document.querySelector(`.realty`)) {

  const renderRealty = (loadedRealty) => {
    const realtyContainer = mainElement.querySelector(`.realty`);
    realtyContainer.insertAdjacentHTML(`beforeEnd`, createRealtyInfo(loadedRealty[0]));
  };

  const currentRealtyID = storage.getItem('idRealty');
  updateMethod(currentRealtyID);
  loadData(Method.GET_FULL_ITEM, renderRealty);
}
