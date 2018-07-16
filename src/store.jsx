import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducer/reducers';
import createSagaMiddleware from 'redux-saga';
import root from './saga/saga'


export default (initialState) => {

    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    const enchancers = composeEnhancers(applyMiddleware(sagaMiddleware))

    const store = createStore(
        reducers,
        initialState,
        enchancers
    )
    root.map(sagaMiddleware.run)
    
    return store;
    
}