import { RootState } from 'reduxData/reducers';

export const squad = (state:RootState) => state.teamDetailsReducer.details.squad;
export const title = (state:RootState) => state.teamDetailsReducer.details.name;
export const logo = (state:RootState) => state.teamDetailsReducer.details.crestUrl;

export const teamLoaded = (state:RootState) => state.teamDetailsReducer.loadingStatus;
export const matchesLoaded = (state:RootState) => state.teamDetailsReducer.matchesLoadingStatus;

export const matches = (state:RootState) => state.teamDetailsReducer.matches.map(match => {

    const date = new Date(match.utcDate);
    const dateString = date.toLocaleDateString('ru');

    return {
        ...match,
        utcDate: dateString,
        opponentTitle: match.awayTeam.id === state.teamDetailsReducer.details.id ?
            match.homeTeam.name :
            match.awayTeam.name
    }
});