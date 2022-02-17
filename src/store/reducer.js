import apiClient from '../Api/api';
import * as utils from '../utils/utils';

const initState = {
  isLoading: false,
  charactersList: [],
  pages: null,
  currPage: null,
  detailsCharacter: null,
  api: new apiClient(),
  favorites: utils.getFavorFromLocalStorage(),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    // case 'LOGIN':
    //   return {
    //     ...state,
    //     isLogin: true,
    //   };
    // case 'LOGOUT':
    //   return {
    //     ...state,
    //     isLogin: false,
    //   };
    case 'LOADING':
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case 'LOAD_CHARACTERS_PAGE':
      return {
        ...state,
        charactersList: [...action.payload],
      };
    case 'SET_CURR_PAGE':
      return {
        ...state,
        currPage: action.payload,
      };
    case 'SET_PAGES':
      return {
        ...state,
        pages: action.payload,
      };
    case 'SET_DETAILS_CHARACTER':
      return {
        ...state,
        detailsCharacter: action.payload,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, ...action.payload],
      };
    case 'DEL_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
