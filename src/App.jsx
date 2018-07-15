import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from './action/actions';
import styled from 'styled-components';
import Products from './components/products';

class App extends Component {

  componentWillMount() {
    this.props.fetchProducts();
  }
  render() {
    const {products, isProductsLoading} = this.props;

    if(isProductsLoading) {
      return (
        <LoadingMessage>
          <img src="https://ic.pics.livejournal.com/intensiv_center/33659828/235789/235789_600.jpg" alt=""/>
          <h1>Loading, please wait...</h1>
        </LoadingMessage>
    ) 
    }
    return (
      <div>
        <h2>Fruit Shop</h2>
        <Products products={products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isProductsLoading: state.product.isLoading,
  products: state.product.products,
});
const mapDispatchToProps = {
  fetchProducts
}

const LoadingMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  img {
    width: 250px;
    height: auto;
  }
`

export default connect(mapStateToProps, mapDispatchToProps) (App);
