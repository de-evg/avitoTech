const createRealtyCard = () => {
  return (
    `<li class="realtyCard realty">
       <h2 class="realty__title"></h2>
       <p class="realty__price"></p>
       <p class="realty__address"></p>
       <img class="realty__preview" src="#" alt="" width="640" height="480">
    </li>`
  );
};

export {createRealtyCard};
