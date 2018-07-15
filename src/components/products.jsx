import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Products = ({products}) => (
    <Fruits>
        {products.map(product => (
            <FruitWrapper key={product.id}>
                <FruitImage><img src={product.picture} alt=""/></FruitImage>
                <FruitName>
                    {product.name}
                </FruitName>
            </FruitWrapper>
        ))}
    </Fruits>
)

Products.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,

}

const Fruits = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

`
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
    width: 20%;
    text-align: center;
    height: 250px;
    border: 1px solid #eee;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    :hover {
        box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.5);
        transition: 0.3s;
    }
`
const FruitName = styled.div`
    color: #666;
`

export default Products;