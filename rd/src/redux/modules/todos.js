
const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
    return { type: ADD_TODO, payload, };
};

const initialState = {
    todos: [
    { id: 1, title: "react", },
    { id: 2, title: "redux", },
    ],
};

const todos = (state=initialState,action) => { 
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, action.payload],
            };
        default:
            return state;
    }
};

export default todos;