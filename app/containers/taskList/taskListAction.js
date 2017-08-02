import {
    GET_TASKS,
    GET_TASKS_SUCCEEDED,
    GET_TASKS_FAILURE,
    
 } from '../saga/constants';
 

export const getTasksData = () => {
    debugger;
    return {
        type : "GET_TASKS",
    }
};

export const getTasksDataSucceeded = (data) => {
        debugger;
    return {
        type : GET_TASKS_SUCCEEDED,
        data
    }
};

export const getTasksDataFailed = (errorMsg) => {
    return {
        type : GET_TASKS_FAILURE,
        errorMsg
    }
};