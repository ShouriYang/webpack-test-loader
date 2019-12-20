import React, { Component } from 'react';
import { Provider } from 'mobx-react'
import store from '../store/store.jsx.js'
import Home from './Home.jsx.js'

class App extends Component {
  state = {}
  render() {
    return (<div>
      <Provider store={store}>
        <Home></Home>
      </Provider>
    </div>);
  }
}

export default App;