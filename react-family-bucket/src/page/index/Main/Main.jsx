import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
class Main extends Component {
  state = {};
  onClick = () => {
    let text = this.text;
    this.props.dispatch(
      addTodo({
        text: text.value
      })
    );
  };
  render() {
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.text = input;
          }}
        />
        <button onClick={this.onClick}>增加</button>
        <ul>
          {this.props.todoList.map((item, index) => {
            return <li key={index}>{item.text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  todoList: state.todoList
}))(Main);
