import {
  CHANGE_IS_PLAY_STATE,
} from './constants';

export const changeIsPlayState = isPlay => ({
  type: CHANGE_IS_PLAY_STATE,
  payload: { isPlay },
});
