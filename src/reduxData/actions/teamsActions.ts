import {Team} from 'pages/TeamsPage/types';
import {
    TEAMS_FETCH_REQUESTED,
    TEAMS_FETCH_FAIL,
    TEAMS_FETCH_SUCESSFULL
} from 'constants/actions';
import { createAction } from '@reduxjs/toolkit';

export const teamsRequest = createAction(TEAMS_FETCH_REQUESTED);
export const teamsRequestSuccessfull = createAction<Team[]>(TEAMS_FETCH_SUCESSFULL);
export const teamsRequestFailed = createAction(TEAMS_FETCH_FAIL);