import {TeamsStateType} from 'pages/TeamsPage'
import {
    TEAMS_FETCH_SUCESSFULL,
    TEAMS_FETCH_FAIL
} from 'constants/actions';
import { AnyAction } from 'redux';
import { TeamsLoadingStatus } from 'enums/teams';

const initialState: TeamsStateType = {
    teams: [],
    loadingStatus: TeamsLoadingStatus.Pending,
};

export const teamsReducer = (state = initialState, action: AnyAction)  : TeamsStateType => {
    switch(action.type) {
        case TEAMS_FETCH_SUCESSFULL:
            return {
                ...state,
                teams: action.payload ? action.payload : [],
                loadingStatus: TeamsLoadingStatus.Finished
            };
        case TEAMS_FETCH_FAIL:
            return {
                ...state,
                loadingStatus: TeamsLoadingStatus.Pending
            };
        default:
            return {...state};
    }
    
}