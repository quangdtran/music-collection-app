import {
  CHANGE_IS_PLAY_STATE,
} from './constants';

const initialState = {
  isPlay: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_IS_PLAY_STATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
