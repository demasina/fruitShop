import {call, put, fork, takeLatest} from 'redux-saga/effects';
import { FETCH_PRODUCTS } from "../action/actionTypes";
import * as productApi from '../prod/api';
import {fetchProductsSuccess, fetchProductsFailure} from '../action/actions'

export function* fetchProducts(action) {
    try {
        const products = yield call(productApi.fetchAll);
        yield put(fetchProductsSuccess(products))
    } catch(error) {
        yield put(fetchProductsFailure(error))
    }

}

export function* watchFetchProducts() {
    yield takeLatest(FETCH_PRODUCTS, fetchProducts)
}

export default function* () {
    yield fork(watchFetchProducts);
}