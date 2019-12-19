import { ADD_TODO } from './action-types'
export const addTodo = (obj) => {
  return {
    type: ADD_TODO,
    obj: obj
  }
}