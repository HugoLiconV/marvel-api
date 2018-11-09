import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {getApiParams} from './utils/utils';
import {Provider} from "react-redux";
import store from './store'

require('dotenv').config()

axios.defaults.baseURL = 'http://gateway.marvel.com/v1/public'
axios.defaults.params = {
  ...getApiParams()
}

ReactDOM.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
