import { ADD_TODO } from './action-types'
const initalState = {
  todoList: []
}
const addTodo = (state, action) => {
  return { ...state, todoList: state.todoList.concat(action.obj) }
}
const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    default:
      return state;
  }
};
export default todoReducer