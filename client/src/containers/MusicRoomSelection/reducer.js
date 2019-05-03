import {
  CHANGE_CURRENT_MUSIC_ROOM_SELECTION,
} from './constants';

const initialState = {
  idMusicRoomCurrent: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CURRENT_MUSIC_ROOM_SELECTION:
      return { ...state, ...payload };

    default:
      return state;
  }
};
