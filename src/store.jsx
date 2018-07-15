import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducer/reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './saga/sagas';


export default (initialState) => {

    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    const enchancers = composeEnhancers(applyMiddleware(sagaMiddleware))

    const store = createStore(
        reducers,
        initialState,
        enchancers
    )
    sagas.map(sagaMiddleware.run)
    return store;
}