import {checkTypo} from '../utils.js';

const createRealtyCard = (realty) => {
  checkTypo(realty);
  return (
    `<li class="realtyCard" id="${realty.id}">
       <h2 class="realtyCard__title disableStyle">
         <a class="realtyCard__linkAboutRealty" href="card.html" ">${realty.title}</a>
       </h2>
       <a class="realtyCard__ImgLink" href="card.html">
         <img class="realtyCard__preview realtyCard__preview--bgc realtyCard__linkAboutRealty" src="${realty.previewImage}" alt="" width="200" height="160">
       </a>
       <p class="realtyCard__price disableStyle">${realty.price}</p>
       <p class="realtyCard__address disableStyle">${realty.address}</p>
       <span class="realtyCard__more">
         <a class="realtyCard__btn realtyCard__linkAboutRealty" href="card.html">Подробнее</a>
       </span>
       <span class="realtyCard__getOffer">
         <a class="realtyCard__link" href="#.html">Оформить</a>
       </span>
    </li>`
  );
};

export {createRealtyCard};
