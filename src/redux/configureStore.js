import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'
import { apiMiddleware } from './middlewares'

export default function configureStore(initialState){
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(apiMiddleware)))
};