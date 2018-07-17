import { combineReducers } from 'redux'
import { ADD_TO_CART } from '../action/actions'
import { default as cart, getQuantity, getAddedIds } from './reducerCart'
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

let b = 0;
let count = 0;
let d = [];
let f = 0;
export function getTotal(state) {
  let a = getAddedIds(state.cart).reduce(function(total, id) {
    if((state.cart.quantityById[4] % 3) === 0 && state.cart.quantityById[4] > b) {
      b = state.cart.quantityById[4];
      count++;
      total = total + getProduct(state.products, id).price * getQuantity(state.cart, id) - getProduct(state.products, id).discount * count;

        if(d.length == 0) {
          d.push(b);
        } else {
          if(b !== d[d.length - 1]) {
            d.push(b);
          } 
        }
    } else {
      for(var i = 0; i < d.length; i++) {
        if(state.cart.quantityById[4] == d[i] - 1 && state.cart.quantityById[4] < f) {
          count--;
          d.pop();
          if(count == 0) {
            b = 0;
            d.splice(0,d.length);
          }

        }
      }
      total = total + getProduct(state.products, id).price * getQuantity(state.cart, id) - getProduct(state.products, id).discount * count;
    }
    return total;
  }, 0).toFixed(2);

  f = state.cart.quantityById[4];
  return a;
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
