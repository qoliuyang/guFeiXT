import {combineReducers} from 'redux';

import home from './modules/home/reducer';

const appReducer = combineReducers({
  home,
});

const rootReducer = (state, action) => {
  const newState = state;
  //   if (action.type === LOGOUT.REQUEST) {
  // for all keys defined in your persistConfig(s)
  // storage.removeItem('persist:LIFTED_REDUX_STORE');
  // // storage.removeItem('persist:otherKey')
  // newState = undefined;
  //   }
  return appReducer(newState, action);
};

export default rootReducer;
