const SUCCESS_CODE = 200;
const TIMEOUT = 10000;

let xhrRequest = function (settings) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = `json`;
  xhr.addEventListener(`load`, function () {
    if (xhr.status === SUCCESS_CODE) {
      settings.success(xhr.response);
      console.log(xhr.response);
    } else {
      console.log(xhr.status);
    }
  });
  xhr.addEventListener(`error`, function () {
    console.log(xhr.status);
  });

  xhr.addEventListener(`timeout`, function () {
    console.log(xhr.status);
  });

  xhr.timeout = TIMEOUT;
  xhr.open(settings.METHOD, settings.URL);
  xhr.send();
};

/**
 * Генерирует объект с настройками запроса.
 *
 * @param {Array} method - используемый метод и url сервера
 * @param {function} onSuccess - обработчик при успешном получении данных
 * @param {function} onError -  обработчик при ошибке
 * @param {Object} formData - данные формы отправляемые в теле запроса
 * @return {Object} Settings - объект с настройками запроса
 */
let getSettings = function (method, onSuccess) {
  let Settings = {
    METHOD: method[0],
    URL: method[1],
    success: onSuccess
  };
  return Settings;
};

let loadData = function (method, onSuccess) {
  let MethodSettings = getSettings(method, onSuccess);
  xhrRequest(MethodSettings);
};

export {loadData};
