import { RootState } from 'reduxData/reducers';

export const allTeams = (state:RootState) => state.teamsReducer.teams;
export const teamsLoadingStatus = (state:RootState) => state.teamsReducer.loadingStatus;