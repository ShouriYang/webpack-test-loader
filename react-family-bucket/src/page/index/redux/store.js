import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk));
if (module.hot) {
  module.hot.accept('./reducers.js', () => {
    const nextRootReducer = require('./reducers.js').default;
    store.replaceReducer(nextRootReducer);
  });
}
export default store