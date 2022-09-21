import { call, put, takeLeading } from 'redux-saga/effects';
import { loadTeamsAPI } from 'api';

import {
    TEAMS_FETCH_REQUESTED
} from 'constants/actions';
import { 
    teamsRequestSuccessfull,
    teamsRequestFailed
 } from 'reduxData/actions';
import { TeamsResponse } from 'pages/TeamsPage';

function* fetchTeams() {
    try {
        const teamResponse:TeamsResponse = yield call(loadTeamsAPI);
        yield put(teamsRequestSuccessfull(teamResponse.teams));
    } catch (_) {
       yield put(teamsRequestFailed());
    }
}

export function* teamsRequested() {
    yield takeLeading(TEAMS_FETCH_REQUESTED, fetchTeams);
}
