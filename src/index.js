import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers';
import App from './components/App';
// import serviceWorker from './registerServiceWorker';

const store = createStore(reducer)

// storeをどのコンポーネントでも使用できるようにプロバイダーで囲む
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// serviceWorker.unregister();
