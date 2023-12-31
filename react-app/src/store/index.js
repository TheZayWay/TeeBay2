import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import teeshirtReducer from './teeshirt'
import cartReducer from './cart'
import reviewReducer from './review';
import searchReducer from './search';

const rootReducer = combineReducers({
  session,
  tees: teeshirtReducer,
  cart: cartReducer,
  review: reviewReducer,
  search: searchReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
