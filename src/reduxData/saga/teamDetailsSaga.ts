import { call, put, takeLeading } from 'redux-saga/effects';
import { loadTeamDetailsAPI } from 'api';
import {MatchResponse, TeamDetails} from 'pages/TeamsDetailsPage'
import {
    TEAM_FETCH_REQUESTED, TEAM_MATCHES_FETCH_REQUESTED
} from 'constants/actions';
import { 
    teamDetailsRequestSuccessfull,
    teamDetailsRequestFailed,
    teamDetailsRequest
 } from 'reduxData/actions';
import { teamMatchesRequest, teamMatchesRequestFailed, teamMatchesRequestSuccessfull } from 'reduxData/actions/teamDetailsActions';
import { loadTeamMatchesAPI } from 'api/loadTeamMatchesAPI';

function* fetchTeams(action: ReturnType<typeof teamDetailsRequest>) {
    try {
        const teamDetailsResponse:TeamDetails = yield call(loadTeamDetailsAPI, action.payload); 
        yield put(teamDetailsRequestSuccessfull(teamDetailsResponse));
    } catch (_) {
       yield put(teamDetailsRequestFailed());
    }
}

function* fetchMatches(action: ReturnType<typeof teamMatchesRequest>) {
    try {
        const teamMatchesResponse:MatchResponse = yield call(loadTeamMatchesAPI, action.payload);
        yield put(teamMatchesRequestSuccessfull(teamMatchesResponse.matches));
    } catch (_) {
       yield put(teamMatchesRequestFailed());
    }
}

export function* teamDetailsRequested() {
    yield takeLeading(TEAM_FETCH_REQUESTED, fetchTeams);
    yield takeLeading(TEAM_MATCHES_FETCH_REQUESTED, fetchMatches);
}
