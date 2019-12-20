import ReactDOM from 'react-dom'
import React from 'react';
import Container from './Main/Container.jsx.js'
import store from './store/store.jsx.js'
import { Provider } from 'mobx-react'
import './styles.css'
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>
  , document.getElementById('root'));

