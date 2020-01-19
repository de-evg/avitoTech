const createRealtyCard = () => {
  return (
    `<li class="realtyCard">
       <h2 class="realtyCard__title disableStyle"><a class="realtyCard__LinkAboutRealty" href="">Заголовок карточки</a></h2>
       <p class="realtyCard__price disableStyle">Цена: 10000 руб.</p>
       <p class="realtyCard__address disableStyle">Адрес: Москва, пр-кт Вернадского, д.10к2, кв.168</p>
       <img class="realtyCard__preview realtyCard__preview--bgc" src="#" alt="" width="236" height="181">
    </li>`
  );
};

export {createRealtyCard};
