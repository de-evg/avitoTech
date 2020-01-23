const checkTypo = (data) => {
  const keys = Object.keys(data);
  keys.forEach((key) => {
    let newString = data[key];
    if (typeof newString === `string`) {
      const regExp = [/,,/, /руб/gi];
      newString = newString.replace(regExp[0], `,`);
      newString = newString.replace(regExp[1], `&#8381`);
    }
    data[key] = newString;
  });
};

export {checkTypo};
