import {
  SELECT_SONG,
} from './constants';

export const changeSongIsSelected = song => ({
  type: SELECT_SONG,
  payload: {
    songIsSelected: song,
  },
});
