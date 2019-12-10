import {TEAM_LIST} from './actions';

const initialState = {
  loading: false,
};
const home = (state = initialState, action) => {
  const reducerMap = {
    [TEAM_LIST.REQUEST]: (state, payload) => {
      return {
        ...state,
        loading: true,
        teamListSuccess: false,
        info: payload,
      };
    },
    [TEAM_LIST.SUCCESS]: (state, payload) => {
      return {
        ...state,
        loading: false,
        teamListSuccess: true,
        teamList: payload,
      };
    },
    [TEAM_LIST.FAILURE]: (state, payload) => {
      return {
        ...state,
        loading: false,
        teamListSuccess: false,
        info: payload,
      };
    },
  };
  const reduceCheck = reducerMap[action.type];
  return reduceCheck ? reduceCheck(state, action.payload) : state;
};
export default home;
