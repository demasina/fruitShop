import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS
} from './actionTypes';

export const fetchProducts = () => ({
    type: FETCH_PRODUCTS    
});
export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    products
});
export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    error
});