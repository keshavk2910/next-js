export const addProductToCart = product => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: product
});

export const removeProductFromCart = product => ({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: product
});