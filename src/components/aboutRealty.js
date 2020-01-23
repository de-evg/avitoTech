import {checkTypo} from '../utils.js';

const createRealtyInfo = (realty) => {
  const generateGalleryTemplates = (realtyData) => {
    let galleryListItems = [];
    realtyData.images.forEach((image) => {
      galleryListItems.push(`<li class="realty-gallery__item slide">
        <img class="realty-gallery__image realtyCard__preview--bgc" src="${image}" alt="Фото ${realtyData.title}">
       </li>`);
    });
    return galleryListItems.join(`\n`);
  };
  checkTypo(realty);
  return (
    `<h2 class="realty__title disableStyle">${realty.title}</h2>
     <p class="realty__price disableStyle"><span>Цена:</span> ${realty.price}</p>
     <p class="realty__address disableStyle"><span>Адрес:</span> ${realty.address}</p>
     <p class="realty__description disableStyle"><span>Описание:</span> ${realty.description}</p>
     <p class="realty__seller disableStyle"><span>Продавец:</span> ${realty.sellerName}</p>
     <section class="realty-gallery slider">
       <button class="realty-gallery__prevBtn slider__prevBtn"></button>
       <button class="realty-gallery__nextBtn slider__nextBtn"></button>
       <ul class="realty-gallery__container disableStyle slider__container">
        ${generateGalleryTemplates(realty)}
       </ul>
     </section>`
  );
};

export {createRealtyInfo};
