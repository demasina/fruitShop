import React, { Component } from 'react'
import Products from './components/products'
import Cart from './components/cart'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Fruits Cart</h2>
        <hr/>
        <Products />
        <hr/>
        <Cart />
      </div>
    )
  }
}
