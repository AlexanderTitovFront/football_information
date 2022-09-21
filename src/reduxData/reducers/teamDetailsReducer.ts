import {
    TEAM_FETCH_REQUESTED,
    TEAM_DETAILS_FETCH_FAIL,
    TEAM_DETAILS_FETCH_SUCESSFULL,
    TEAM_MATCHES_FETCH_FAIL,
    TEAM_MATCHES_FETCH_REQUESTED,
    TEAM_MATCHES_FETCH_SUCESSFULL,
} from 'constants/actions';
import { AnyAction } from 'redux';
import { TeamsLoadingStatus } from 'enums/teams';
import { TeamDetailsState } from 'pages/TeamsDetailsPage';

const initialState: TeamDetailsState = {
    details: {
        id: 0,
        name: '',
    },
    loadingStatus: TeamsLoadingStatus.Pending,
    matches:[],
    matchesLoadingStatus: TeamsLoadingStatus.Pending,
};

export const teamDetailsReducer = (state = initialState, action: AnyAction)  : TeamDetailsState => {
    switch(action.type) {
        case TEAM_FETCH_REQUESTED:
            return {
                ...state,
                loadingStatus: TeamsLoadingStatus.Pending
            }
        case TEAM_DETAILS_FETCH_SUCESSFULL:
            return {
                ...state,
                details: action.payload ? action.payload : initialState.details,
                loadingStatus: TeamsLoadingStatus.Finished
            };
        case TEAM_DETAILS_FETCH_FAIL:
            return {
                ...state,
                loadingStatus: TeamsLoadingStatus.Failed
            };
        
        case TEAM_MATCHES_FETCH_REQUESTED:
            return {
                ...state,
                matchesLoadingStatus: TeamsLoadingStatus.Pending
            }
        case TEAM_MATCHES_FETCH_SUCESSFULL:
            return {
                ...state,
                matches: action.payload ? action.payload : [],
                matchesLoadingStatus: TeamsLoadingStatus.Finished
            };
        case TEAM_MATCHES_FETCH_FAIL:
            return {
                ...state,
                matchesLoadingStatus: TeamsLoadingStatus.Failed
            };
        default:
            return {...state};
    }
    
}