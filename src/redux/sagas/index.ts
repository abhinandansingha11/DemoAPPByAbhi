import {all, fork} from 'redux-saga/effects';

import todoSaga from './List';

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}
