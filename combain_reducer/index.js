import { combineReducers, createStore } from "redux";

//! product constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const initialProduct = {
    products: ["Salt", "Sugar"],
    numberOfProducts: 2
};

const getProducts = () => {
    return {
        type: GET_PRODUCTS
    };
};

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

//! productReducer:
const productReducer = (state = initialProduct, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };

        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };

        default:
            return state;
    }
};

//! cart constant
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

//! cart initial
const initialCart = {
    cart: ["Shampoo"],
    numberOfProducts: 1
};

const getCart = () => {
    return {
        type: GET_CART_ITEMS
    };
};

const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product
    };
};

//! cartReducer:
const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            };

        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };

        default:
            return state;
    }
};

//! combined reducer:
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});

//! createStore:
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

//! dispatch:
store.dispatch(getProducts());
store.dispatch(addProduct("soup"));

//! dispatch:
store.dispatch(getCart());
store.dispatch(addCart("oil"));
