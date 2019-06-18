export const SELECT = 'SELECT_TODO_TOGGLE'

export const ADDMORE = 'ADD_MORE'

export const DELETE = 'DELETE_TODO'

export const addMore = (todo) => {
    return {
        //the type
        type: ADDMORE,
        //the action
        payload: todo
    }
}



export const selectTodo = id => {
    return {
        type:SELECT,
        payload: id
    }
}



export const deleteTodo = id => {
    return {
        type:DELETE,
        payload: id
    }
}