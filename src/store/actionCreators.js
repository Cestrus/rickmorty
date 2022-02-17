import * as actions from './actions';

export const loading = () => {
  return {
    type: actions.LOADING,
  };
};

export const loadCharactersPage = (list) => {
  return {
    type: actions.LOAD_CHARACTERS_PAGE,
    payload: list,
  };
};

export const setCurrPage = (page) => {
  return {
    type: actions.SET_CURR_PAGE,
    payload: page,
  };
};

export const setPages = (pages) => {
  return {
    type: actions.SET_PAGES,
    payload: pages,
  };
};

export const setDetailsCharacter = (character) => {
  return {
    type: actions.SET_DETAILS_CHARACTER,
    payload: character,
  };
};

export const addFavorite = (id) => {
  return {
    type: actions.ADD_FAVORITE,
    payload: id,
  };
};

export const delFavorite = (id) => {
  return {
    type: actions.DEL_FAVORITE,
    payload: id,
  };
};
