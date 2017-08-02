import { call, put } from 'redux-saga/effects';
import { getCategoryDataSucceeded, getCategoryDataFailed,addTodo,getTaskDataSucceeded,getTasksDataFailed} from './ConfigureTaskAction';
const url = 'http://localhost:3004/Category';
function fetchCategoryDataFromServer(url) {
    return fetch(url).then(response => response.json());
}

export function* fetchCategoryData(){
  try{
    const data = yield call(fetchCategoryDataFromServer,url);
    yield put(getCategoryDataSucceeded(data)); 
  } catch(e){
    yield put(getCategoryDataFailed(e.message));
  }
}

export function* addTodoItem(arg1) {
    try {

        const addtodoresponse = yield call(() => fetch('http://localhost:3004/Todos', {method:'POST',
            headers : {
                'Accept'        : 'application/json',
                'Content-Type'  : 'application/json'
            },
            body    : JSON.stringify(arg1.data[0])}).then(response => response.json()));
    yield put(getTasksDataSucceeded(addtodoresponse)); 
    } catch (e) {
    yield put(getTasksDataFailed(e.message));
    }
}
