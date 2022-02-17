export const getFavorFromLocalStorage = () => {
  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem('favorites'));
};

export const addFavorToLocalStorage = (character) => {
  let arrFavor = JSON.parse(localStorage.getItem('favorites'));
  arrFavor.push(`${character.id}`);
  localStorage.setItem('favorites', JSON.stringify(arrFavor));
  localStorage.setItem(`${character.id}`, JSON.stringify(character));
};

export const delFavorFromLocalStorage = (character) => {
  let arrFavor = JSON.parse(localStorage.getItem('favorites'));
  arrFavor = arrFavor.filter((id) => id !== `${character.id}`);
  localStorage.setItem('favorites', JSON.stringify(arrFavor));
  localStorage.removeItem(`${character.id}`);
};
