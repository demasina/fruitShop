import React, { Component } from 'react'
import styled from 'styled-components';

import PropTypes from 'prop-types'

export default class Product extends Component {
  render() {
    const { price, quantity, title, action, picture } = this.props
    return (
            <FruitWrapper>
                <FruitImage><img src={picture} alt=""/></FruitImage>
                <FruitName>
                    <p>{title}</p>     
                    <p>{price}</p>    
                    {quantity ? `x ${quantity}` : null} 
                {action}
                </FruitName>
            </FruitWrapper>
    )
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
}


const FruitImage = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    
    img {
        width: 200px;
        height: auto
    }

`
const FruitWrapper = styled.div`

    text-align: center;
    height: 300px;
    border: 1px solid #eee;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    :hover {
        box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.5);
        transform: scale(1.02);
        transition: 0.2s;
    }
`
const FruitName = styled.div`
    color: #666;
`

