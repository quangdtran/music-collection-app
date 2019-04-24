import {
  ADD_NUMBER,
} from './constants';

const initialState = {
  number: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NUMBER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
