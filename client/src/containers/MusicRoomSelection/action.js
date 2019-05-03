import {
  CHANGE_CURRENT_MUSIC_ROOM_SELECTION,
} from './constants';

export const selectMusicRoom = (id) => {
  return {
    type: CHANGE_CURRENT_MUSIC_ROOM_SELECTION,
    payload: {
      idMusicRoomCurrent: id,
    },
  };
};
