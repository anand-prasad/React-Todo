import {
    GET_TASKS,
    GET_TASKS_SUCCEEDED,
    GET_TASKS_FAILURE,
    
 } from '../saga/constants';

export const getCategoryData = () => {
    debugger;
    return {
        type : "GET_CATEGORY",
    }
};
 export const addTodo = (data) => {
     debugger;
    return {
        type : 'ADD_TODO',
        data
    }
};
export const getCategoryDataSucceeded = (data) => {
        debugger;
    return {
        type : 'GET_CATEGORY_SUCCEEDED',
        data
    }
};

export const getCategoryDataFailed = (errorMsg) => {
    return {
        type : 'GET_CATEGORY_FAILURE',
        errorMsg
    }
};

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