import React, { Component } from 'react'
import Product from './product'
import styled from 'styled-components';
import PropTypes from 'prop-types'

export default class ProductItem extends Component {
  render() {
    const { product } = this.props
    const addToCartAction = (
      <ActionButton onClick={this.props.onAddToCartClicked} disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </ActionButton>
    )

    return (
      <div>
        <Product picture={product.picture} title={product.title} price={product.price} action={addToCartAction} />
      </div>
    )
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
}

const ActionButton = styled.button`
    background: none;
    border: 1px solid #00BFFF;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 15px;
    color: #00BFFF;
    :hover {
        background: #00BFFF;
        color: white
    }
`