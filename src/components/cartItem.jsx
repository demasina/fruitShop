import React, { Component } from 'react'
import Product from './product'
import PropTypes from 'prop-types'
import styled from 'styled-components';

export default class CartItem extends Component {
  render() {
    const { price, quantity, title, onRemove } = this.props

    return (
        <CartProd>
                <Product  price={price} quantity={quantity} title={title} action={<Rem onClick={onRemove}>{' X '}</Rem>} />
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
  display: inline-block;
  margin: 20px 0;

`
const Rem = styled.button`
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