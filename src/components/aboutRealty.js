const createGalley = (realty) => {

}

const createRealtyInfo = (realty) => {
  return (
    `<h2 class="realty__title disableStyle">${realty.title}</h2>
     <p class="realty__price disableStyle">Цена: ${realty.price}</p>
     <p class="realty__address disableStyle">Адрес: ${realty.address}</p>
     <p class="realty__description disableStyle">Описание ${realty.description}</p>
     <p class="realty__seller disableStyle">Описание ${realty.sellerName}</p>
     <section class="realty-gallery">
       <ul class="realty-gallery__container">
       </ul>
     </section>`
  );
};

export {createRealtyInfo};
