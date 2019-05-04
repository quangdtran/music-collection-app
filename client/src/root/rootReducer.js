import { combineReducers } from 'redux';
import appReducer from '@containers/App/reducer';
import testButtonReducer from '@containers/TestButton/reducer';
import musicRoomSelectionReducer from '@containers/MusicRoomSelection/reducer';
import songSelectionReducer from '@containers/SongSelection/reducer';
import headerMusicPlayBoxReducer from '@containers/HeaderMusicPlayBox/reducer';

export default combineReducers({
  app: appReducer,
  testButton: testButtonReducer,
  musicRoomSelection: musicRoomSelectionReducer,
  songSelection: songSelectionReducer,
  headerMusicPlayBox: headerMusicPlayBoxReducer,
});
