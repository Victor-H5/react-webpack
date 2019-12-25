import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './redux/reducers/index';
import sagas from './redux/sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancers);

sagaMiddleware.run(sagas);

export default store;
