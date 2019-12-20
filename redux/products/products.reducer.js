const initstate = {
    currentProducts:[],
}

const productsReducer = (state = initstate, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART' :
            return {
                currentProducts: [
                    ...state.currentProducts,
                {
                    id:action.payload
                }
            ]
            }
        default: 
            return state;
    }
}
export default productsReducer;