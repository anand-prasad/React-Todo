import {
    GET_TASKS,
    GET_TASKS_SUCCEEDED,
    GET_TASKS_FAILURE,
    
 } from '../saga/constants';
 

export const getTasksData = () => {
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
export const deleteTodo = (data) => {
    return {
        type : "DELETE_TODO",
        data
    }
};

export const deleteTodoSucceeded = (data) => {
    return {
        type :'DELETE_TODO_SUCCEEDED',
        data
    }
};

export const deleteTodoFailed  = (errorMsg) => {
    return {
        type : 'DELETE_TODO_FAILURE',
        errorMsg
    }
};