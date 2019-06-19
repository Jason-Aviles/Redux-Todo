import { SELECT,DELETE,ADDMORE } from "../action";

const Todos = {
  todos:  [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ],

  };
  


export default (state = Todos, action) => {
  switch (action.type) {
    case ADDMORE:
      //new todo item were making
      const newTodo = {
        id: Date.now(),
        task: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case SELECT:
      return {
        ...state,
        todos: state.todos.map(todoItem =>
          todoItem.id === action.payload
            ? { ...todoItem, completed: !todoItem.completed }
            : todoItem
        )
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter(todoItem => todoItem.id !== action.payload)
      };
    default:
      return state;
  }
};
