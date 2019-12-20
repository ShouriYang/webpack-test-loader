import { observable, action, computed } from 'mobx';
class AppStore {
  @observable time = '今天';
  @observable todos = [];
  @computed get desc() {
    return `${this.time}还有${this.todos.length}条任务待完成`;
  }
  @action addTodo(todo) {
    this.todos.push(todo);
  }
  @action deleteTodo() {
    this.todos.pop();
  }
  @action resetTodo() {
    this.todos = [];
  }
}
const store = new AppStore();
export default store;
