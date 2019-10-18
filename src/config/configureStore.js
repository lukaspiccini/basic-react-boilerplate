import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { reducers } from '../reducers/index'

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware, logger]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(reducers, preloadedState, composedEnhancers)

  return store
}
