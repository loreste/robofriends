import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import appState from './reducers';
import 'tachyons';

const store = createStore(appState)

ReactDOM.render(
  <Provider store= {store}>
    <App  />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
