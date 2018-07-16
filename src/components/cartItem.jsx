import React, { Component } from 'react'
import Product from './product'
import PropTypes from 'prop-types'
import styled from 'styled-components';

export default class CartItem extends Component {
  render() {
    const { price, quantity, title, onRemove } = this.props

    return (
        <CartProd>
                <Product  price={price} quantity={quantity} title={title} action={<button onClick={onRemove}>{' X '}</button>} />
        </CartProd>
      
    )
  }
}

CartItem.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
}
const CartProd = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin: 20px 0;

`