export default (state ={}, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return Object.assign({},state,{todoData:action.payload});
        case 'GET_CATEGORY':
            return Object.assign({},state,{formData:action.data});
        case 'GET_CATEGORY_SUCCEEDED':
        return Object.assign({},state,{formData:action.data});
        default:
        	return state;    
    }
};