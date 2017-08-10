import { call, put } from 'redux-saga/effects';
import { getTasksDataSucceeded, getTasksDataFailed,deleteTodoSucceeded,deleteTodoFailed} from './taskListAction';
const url = 'http://localhost:3004/todos';
function fetchTaskDataFromServer(url) {
    return fetch(url).then(response => response.json());
}

export function* fetchTaskData(){
  try{
    const data = yield call(fetchTaskDataFromServer,url);
    yield put(getTasksDataSucceeded(data)); 
  } catch(e){
    yield put(getTasksDataFailed(e.message));
  }
}

export function* deleteTodo(arg) {
    try {
    const data = yield call(() => fetch('http://localhost:3004/todos/'+ arg.data, {method:'DELETE'}).then(response => response.json()));
    const dataVal = yield call(fetchTaskDataFromServer,url);
    yield put(getTasksDataSucceeded(dataVal)); 
    } catch (e) {
    yield put(getTasksDataFailed(e.message));
    }
}