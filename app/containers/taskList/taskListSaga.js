import { call, put } from 'redux-saga/effects';
import { getTasksDataSucceeded, getTasksDataFailed} from './taskListAction';
//import url from './testApi.js';
  const url = 'http://localhost:3004/todos';
 //const url = './testApi.js'
function fetchTaskDataFromServer(url) {
    return fetch(url).then(response => response.json());
}

export function* fetchTaskData(){
  try{
    const data = yield call(fetchTaskDataFromServer,url);
    yield put(getTasksDataSucceeded(data)); 
    debugger;
  } catch(e){
    yield put(getTasksDataFailed(e.message));
  }
}
