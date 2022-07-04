import {commonService} from '../../services/commonService';
import {all, call, put, takeLatest} from 'redux-saga/effects';

import {fetchTodoFailure, fetchTodoSuccess} from '../actions/List';
import ActionTypes from '../ActionTypes';

// export const getTodos = () =>
//   axios.get<ITodo[]>('https://reqres.in/api/users?delay=1');

export function* fetchTodoSaga(): Generator<any, any, any> {
  console.log('@@@commonservice', commonService.getTodos);
  try {
    const response = yield commonService.getTodos();
    yield put(
      fetchTodoSuccess({
        todos: response.data,
      }),
    );
    console.log('@@@data', response.data);
  } catch (e: any) {
    yield put(
      fetchTodoFailure({
        error: e.message,
      }),
    );
  }
}

export function* todoSaga() {
  yield all([takeLatest(ActionTypes.FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
