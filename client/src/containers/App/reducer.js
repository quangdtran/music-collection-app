import { UPDATE_MARK_AND_CONDUCT_MARK } from './constants';

const initialState = {
  mark: null,
  conductMark: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_MARK_AND_CONDUCT_MARK:
      return { ...state, ...payload };

    default:
      return state;
  }
};
