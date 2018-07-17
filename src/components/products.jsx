import React, {Component} from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import { getVisibleProducts } from '../reducer/reducer'
import ProductItem from './productItem'
import { connect } from 'react-redux'
import { addToCart } from '../action/actions'

class Products extends Component {
    render() {
      const { products, addToCart } = this.props
  
      return (
        <div>
          <Fruits>
          {products.map(product => (
            <ProductItem key={product.id} product={product} onAddToCartClicked={() => addToCart(product.id, product.discount)} />
          ))}
          </Fruits>
        </div>
      )
    }
  }
  
  Products.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
      }),
    ).isRequired,
    addToCart: PropTypes.func.isRequired,
  }

  const Fruits = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;

`

export default connect(state => ({ products: getVisibleProducts(state.products) }), { addToCart }) (Products);