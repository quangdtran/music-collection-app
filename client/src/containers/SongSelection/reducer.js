import {
  SELECT_SONG,
} from './constants';

const initialState = {
  idIsSelected: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_SONG:
      return { ...state, ...payload };

    default:
      return state;
  }
};
