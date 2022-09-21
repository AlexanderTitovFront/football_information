import {Match, TeamDetails} from 'pages/TeamsDetailsPage'
import {
    TEAM_FETCH_REQUESTED,
    TEAM_DETAILS_FETCH_SUCESSFULL,
    TEAM_DETAILS_FETCH_FAIL,
    TEAM_MATCHES_FETCH_REQUESTED,
    TEAM_MATCHES_FETCH_SUCESSFULL,
    TEAM_MATCHES_FETCH_FAIL
} from 'constants/actions';
import { createAction } from '@reduxjs/toolkit';

export const teamDetailsRequest = createAction<number>(TEAM_FETCH_REQUESTED);
export const teamDetailsRequestSuccessfull = createAction<TeamDetails>(TEAM_DETAILS_FETCH_SUCESSFULL);
export const teamDetailsRequestFailed = createAction(TEAM_DETAILS_FETCH_FAIL);

export const teamMatchesRequest = createAction<number>(TEAM_MATCHES_FETCH_REQUESTED);
export const teamMatchesRequestSuccessfull = createAction<Match[]>(TEAM_MATCHES_FETCH_SUCESSFULL);
export const teamMatchesRequestFailed = createAction(TEAM_MATCHES_FETCH_FAIL);