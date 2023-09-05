import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  handleGetDetailFromItem = (product) => {
    this.props.onGetProductDetail(product);
  };

  handleAddToCartFromItem = (product) => {
    // console.log("handleAddToCart List", product);
    this.props.onAddToCart(product);
  };
  render() {
    return (
      <div>
        <h2>Product List</h2>
        <div className="row">
          {this.props.data.map((item) => {
            return (
              <ProductItem
                product={item}
                onGetProductDetail={this.handleGetDetailFromItem}
                onAddToCart={this.handleAddToCartFromItem}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
