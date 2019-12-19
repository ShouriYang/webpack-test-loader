import ReactDOM from 'react-dom'
import React from 'react';
// import Main from './Main/Main.jsx'
import Container from './Main/Container.jsx'
import store from './redux/store'
import { Provider } from 'react-redux'
import './styles.css'
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>
  , document.getElementById('root'));

