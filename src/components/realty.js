const createRealtyCard = (realty) => {
  return (
    `<li class="realtyCard">
       <h2 class="realtyCard__title disableStyle"><a class="realtyCard__LinkAboutRealty" href="" id="${realty.id}">${realty.title}</a></h2>
       <p class="realtyCard__price disableStyle">Цена: ${realty.price}</p>
       <p class="realtyCard__address disableStyle">Адрес: ${realty.address}</p>
       <a class="realtyCard__LinkAboutRealty" href="">
         <img class="realtyCard__preview realtyCard__preview--bgc" src="${realty.previewImage}" alt="" width="236" height="181">
       </a>
    </li>`
  );
};

export {createRealtyCard};
