import React, { Component } from 'react'
import CartItem from './cartItem';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../action/actions'
import { getTotal, getCartProducts, getCheckoutError, isCheckoutPending } from '../reducer/reducers';

import styled from 'styled-components';

class Cart extends Component {
  render() {
    const { products, total, error, checkoutPending, checkout, removeFromCart } = this.props

    const hasProducts = products.length > 0
    const checkoutAllowed = hasProducts && !checkoutPending

    const nodes = !hasProducts ? (
      <em>Please add some products to cart.</em>
    ) : (
      products.map(product => (
        <CartItem
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product.id}
          onRemove={() => removeFromCart(product.id)}
        />
      ))
    )

    return (
      <CartWrapper>
        <h3>Your Cart</h3>
        <div>{nodes}</div>
        <p>Total: &#36;{total}</p>
        <Check onClick={checkout} disabled={checkoutAllowed ? '' : 'disabled'}>
          Checkout
        </Check>
        <div style={{ color: 'red' }}>{error}</div>
      </CartWrapper>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  error: PropTypes.string,
  checkoutPending: PropTypes.bool,

  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

const Check = styled.button`
  cursor: pointer;
  background: none;
  border: 1px solid #DC143C;
  border-radius: 6px;
  padding: 5px;
  color: #DC143C;
  :hover {
      background: #DC143C;
      color: white
  }

`
const CartWrapper = styled.div`
  width: auto;
  border: 1px solid #DC143C;
  border-radius: 6px;
  padding: 5px;
  color: #DC143C;
`

export default connect(
  state => ({
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state),
  }),
  { checkout, removeFromCart },
)(Cart)
