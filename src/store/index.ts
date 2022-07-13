import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import allReducers from './reducers';

const rootReducer = combineReducers(allReducers);

const middlewares = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;