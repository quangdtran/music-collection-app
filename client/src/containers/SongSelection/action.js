import {
  SELECT_SONG,
} from './constants';

export const changeSongIsSelected = id => ({
  type: SELECT_SONG,
  payload: {
    idIsSelected: id,
  },
});
