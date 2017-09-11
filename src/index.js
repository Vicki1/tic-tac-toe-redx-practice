import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import boardReducer from './reducers/board_reducer.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={createStore(boardReducer)}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
