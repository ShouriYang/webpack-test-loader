import React, { Component } from 'react';
import Main from './App.jsx.js';
import { hot } from 'react-hot-loader';
class Container extends Component {
  state = {};
  render() {
    return <Main />;
  }
}

export default hot(module)(Container);
