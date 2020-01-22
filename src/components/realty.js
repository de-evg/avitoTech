const createRealtyCard = (realty) => {
  return (
    `<li class="realtyCard" id="${realty.id}">
       <h2 class="realtyCard__title disableStyle"><a class="realtyCard__LinkAboutRealty" href="card.html" ">${realty.title}</a></h2>
       <p class="realtyCard__price disableStyle">Цена: ${realty.price}</p>
       <p class="realtyCard__address disableStyle">Адрес: ${realty.address}</p>
       <a class="realtyCard__LinkAboutRealty" href="card.html">
         <img class="realtyCard__preview realtyCard__preview--bgc realtyCard__LinkAboutRealty" src="${realty.previewImage}" alt="" width="236" height="181">
       </a>
    </li>`
  );
};

export {createRealtyCard};
