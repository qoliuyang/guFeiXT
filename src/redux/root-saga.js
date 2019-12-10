import {all} from 'redux-saga/effects';
import {watchTeamList} from './modules/home/saga';

/*
 * The entry point for all the sagas used in this application.
 */
export default function* rootSaga() {
  //yield all([watchTeamList()]);
}
