import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import {rootReducer, RootState} from 'reduxData/reducers'
import { teamDetailsRequested, teamsRequested } from 'reduxData/saga'

const sagaMiddleware = createSagaMiddleware();

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
    return configureStore({
      reducer: rootReducer,
      preloadedState,
      middleware: [sagaMiddleware],
    })
}
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

const store = setupStore();
sagaMiddleware.run(teamsRequested);
sagaMiddleware.run(teamDetailsRequested);

export default store;