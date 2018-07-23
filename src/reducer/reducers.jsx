import { combineReducers } from 'redux'
import { ADD_TO_CART } from '../action/actions'
import { default as cart, getQuantity, getAddedIds, getDiscount } from './reducerCart'
import { default as products, getProduct } from './reducer'

export function getCart(state) {
  return state.cart
}

export function getCheckoutError(state) {
  return state.cart.checkoutStatus.error
}

export function isCheckoutPending(state) {
  return state.cart.checkoutStatus.checkoutPending
}

//getTotal function counts the total amount getting values from reducerCart

export function getTotal(state) {
  return getAddedIds(state.cart)
    .reduce((total, id) => total + getDiscount(getProduct(state.products, id).discount, getQuantity(state.cart, id), getProduct(state.products, id).price  ), 0)
}

export function getCartProducts(state) {
  return getAddedIds(state.cart).map(id => ({
    ...getProduct(state.products, id),
    quantity: getQuantity(state.cart, id),
  }))
}

const shoppingCart = combineReducers({
  cart,
  products,
})

export default function root(state, action) {
  if (action.type === ADD_TO_CART && state.products.byId[action.productId].inventory <= 0) return state

  return shoppingCart(state, action)
}
