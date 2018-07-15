import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import './prod/cart'

const store = configureStore({})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();
