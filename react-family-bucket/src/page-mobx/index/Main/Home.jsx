import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Home extends Component {
  state = {};

  handleTodos = event => {
    const { store } = this.props;
    switch (event.target.getAttribute('do')) {
      case 'add':
        store.addTodo('一条新任务');
        break;
      case 'delete':
        store.deleteTodo();
        break;
      case 'reset':
        store.resetTodo();
        break;
      default:
    }
  };

  render() {
    const { store } = this.props;
    return (
      <div className="home">
        <h2>在react中使用mobx</h2>
        <div>{store.desc}</div>
        <button onClick={this.handleTodos} do="add">
          添加一条任务
        </button>
        <button onClick={this.handleTodos} do="delete">
          删除一条任务
        </button>
        <button onClick={this.handleTodos} do="reset">
          重置任务
        </button>
        <ul>
          {store.todos.map((ele, index) => {
            return <li key={index}>{ele}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
