import {createStore} from 'redux';
import productsReducer from './products/products.reducer';

export const makeStore = initialState => {
    const store = createStore(productsReducer, initialState);

    if (module.hot) {
        module.hot.accept('./products/products.reducer.js', () => {
            console.log('Replacing reducer');
            store.replaceReducer(require('./products/products.reducer.js').default);
        });
    }

    return store;
};