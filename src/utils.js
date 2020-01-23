const checkTypo = (data) => {
  const keys = Object.keys(data);
  keys.forEach((key) => {
    let newString = data[key];
    if (typeof newString === `string`) {
      const regExp = [/,,/, /руб./gi, /ж,/, /,[A-Za-zА-Яа-я0-9_]/];
      newString = newString.replace(regExp[0], `,`);
      newString = newString.replace(regExp[1], `&#8381`);
      newString = newString.replace(regExp[2], `ж`);
      newString = newString.split(`,`).join(`, `);
      newString = newString.slice(0, 1).toUpperCase() + newString.slice(1);
    }
    data[key] = newString;
  });
};

export {checkTypo};
