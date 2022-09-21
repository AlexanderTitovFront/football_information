import { combineReducers } from 'redux';

import {teamsReducer} from 'reduxData/reducers/teamsReducer';
import {teamDetailsReducer} from 'reduxData/reducers/teamDetailsReducer';

export const rootReducer = combineReducers({
    teamsReducer,
    teamDetailsReducer

})

  export type RootState = ReturnType<typeof rootReducer>