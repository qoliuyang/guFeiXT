import {defineAction} from 'redux-define';
import {
  REQUEST,
  SUCCESS,
  FAILURE,
  APP_NAME_SPACE,
  AUTHORIZED,
} from '../../types';

export const TEAM = defineAction('TEAM', [AUTHORIZED], APP_NAME_SPACE); // parent
export const TEAM_LIST = TEAM.defineAction(
  'TEAM_LIST',
  [REQUEST, SUCCESS, FAILURE],
  TEAM,
);

export const requestTeamListAction = body => ({
  type: TEAM_LIST.REQUEST,
  body,
});
