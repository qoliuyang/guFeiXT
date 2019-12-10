import {put, call, takeEvery} from 'redux-saga/effects';
import {TEAM_LIST} from './actions';
//import { getTeamList } from '../../../requests/createTeamRequest';
// export const getTeamListRequest = async body => {
//   return getTeamList(body).then(json => {
//     return json;
//   });
// };
export function* TeamList(action) {
  const {body, cb} = action;
  yield put({type: TEAM_LIST.SUCCESS, payload: '123456'});
  //   try {
  //     const response = yield call(getTeamListRequest, body);
  //     if (response.result_code === '1000' || response.result_code === 1000) {
  //       yield put({ type: TEAM_LIST.SUCCESS, payload: response.data });
  //       cb();
  //     } else {
  //       yield put({ type: TEAM_LIST.FAILURE, payload: response.message });
  //       cb();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     yield put({ type: TEAM_LIST.FAILURE, payload: error });
  //   }
}

export function* watchTeamList() {
  yield takeEvery(TEAM_LIST.REQUEST, TeamList);
}
