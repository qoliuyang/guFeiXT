import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import sagas from './root-saga';
// import createAxiosMiddleware from '../utils/saga-middleware';

// eslint-disable-next-line no-underscore-dangle
// eslint-disable-next-line no-undef

// export default function initializeStore() {
//   const sagaMiddleware = createSagaMiddleware();

//   // eslint-disable-next-line no-undef
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     debugger
//   // const middlewares = [sagaMiddleware, createAxiosMiddleware()];
//   const enhancer = composeEnhancers(
//     // applyMiddleware(logger, sagaMiddleware),
//     applyMiddleware(sagaMiddleware),
//     // other store enhancers if any
//   );

//   const store = createStore(rootReducer, enhancer);

//   sagaMiddleware.run(sagas);

//   return store;
// }

export default function configureStore(preloadedState) {
  // 创建saga中间件
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  // 创建存储容器
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  sagaMiddleware.run(sagas);

  return store;
}
