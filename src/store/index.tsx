import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';
import { createLogger } from 'redux-logger'

const logger = createLogger({
    collapsed: true,
})

// purgeStoredState -> esse broder aqui que irei usar pra fazer purge
const sagaMiddleware = createSagaMiddleware();

var store;
if (__DEV__){
    store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware, logger) //logger
        ));
}else{
    store = createStore(
        rootReducer,
        compose(applyMiddleware(sagaMiddleware)
    ));
}


let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
