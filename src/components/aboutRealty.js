const createRealtyInfo = (realty) => {
  const generateGalleryTemplates = (images) => {
    let galleryListItems = [];
    images.forEach((image) => {
      galleryListItems.push(`<li class="realty-gallery__item slide">
        <img class="realty-gallery__image realtyCard__preview--bgc" src="${image}" alt="">
       </li>`);
    });
    return galleryListItems.join(`\n`);
  };

  return (
    `<h2 class="realty__title disableStyle">${realty.title}</h2>
     <p class="realty__price disableStyle">Цена: ${realty.price}</p>
     <p class="realty__address disableStyle">Адрес: ${realty.address}</p>
     <p class="realty__description disableStyle">Описание: ${realty.description}</p>
     <p class="realty__seller disableStyle">Продавец: ${realty.sellerName}</p>
     <section class="realty-gallery slider">
       <button class="realty-gallery__prevBtn slider__prevBtn"></button>
       <button class="realty-gallery__nextBtn slider__nextBtn"></button>
       <ul class="realty-gallery__container disableStyle slider__container">
        ${generateGalleryTemplates(realty.images)}
       </ul>
     </section>`
  );
};

export {createRealtyInfo};
