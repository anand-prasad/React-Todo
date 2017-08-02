import { call, put, take, takeEvery,takeLatest } from 'redux-saga/effects';
import {
     GET_TASKS,

 } from './constants';

 import { fetchTaskData } from '../taskList/taskListSaga';
 import { fetchCategoryData } from '../ConfigureTask/configureTaskSaga';
 import { addTodoItem } from '../ConfigureTask/configureTaskSaga';

function* RootSaga() {
  yield takeLatest(GET_TASKS, fetchTaskData); 
  yield takeLatest('GET_CATEGORY', fetchCategoryData);
  yield takeLatest('ADD_TODO', addTodoItem);  
}

export default RootSaga;
