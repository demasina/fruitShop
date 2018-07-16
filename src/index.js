import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducer/reducers';
import createSagaMiddleware from 'redux-saga';
import root from './saga/saga'
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware({  })
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(root)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root'));
registerServiceWorker();