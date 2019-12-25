import { createStore } from 'redux';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

export const makeStore = initialState => {
    let store;
    //const middlewares = [logger];
    const isClient = typeof window !== 'undefined';
    if (isClient) {
        const { persistReducer } = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;
        const persistConfig = {
          key: 'cart',
          storage,
          stateReconciler: hardSet,
        };
        store = createStore(
          persistReducer(persistConfig, rootReducer),
          initialState
        );
         store.__PERSISTOR = persistStore(store);
      } else {
        store  = createStore(rootReducer, initialState);
      }

    if (module.hot) {
        module.hot.accept('./root-reducer', () => {
            console.log('Replacing reducer');
            store.replaceReducer(require('./root-reducer').default);
        });
    }

    return store;
};