import {createStore, combineReducers, applyMiddleware} from 'redux';
// import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import ListReducer from '../reducers/List';
import {rootSaga} from '../sagas';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({user: ListReducer});

const configureStore = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

export const store = configureStore;
export const persistor = persistStore(store);
