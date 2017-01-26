import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer  from './Reducers/reducer'

const store = createStore(reducer);

store.subscribe( () => {
    console.log(JSON.stringify(store.getState(), null, "  "));
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
