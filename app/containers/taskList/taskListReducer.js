import {
    GET_TASKS,
    GET_TASKS_SUCCEEDED,
    GET_TASKS_FAILURE,
    
 } from '../saga/constants';
export default (state ={}, action) => {
    switch (action.type) {
        case GET_TASKS:
            return Object.assign({},state,{taskListData:action.data});
        case GET_TASKS_SUCCEEDED:
        return Object.assign({},state,{taskListData:action.data});
        default:
        	return state;    
    }
};