import { combineReducers } from 'redux';
import appReducer from '@containers/App/reducer';
import testButtonReducer from '@containers/TestButton/reducer';

export default combineReducers({
  app: appReducer,
  testButton: testButtonReducer,
});
