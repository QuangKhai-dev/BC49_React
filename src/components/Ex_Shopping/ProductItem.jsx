import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, onAddToCart } = this.props;
    const { img, id, name, price, rom, ram } = product;

    // let users = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C"];
    // const [, , user3] = users;
    // console.log("User 3", user3);

    return (
      <div className="col-4" key={id}>
        <div className="card">
          <img
            src={img}
            style={{ width: "100%", height: 300, objectFit: "cover" }}
            alt="iphone"
          />
          <div className="card-body">
            <h4> {product.name}</h4>
            <p>Price: {product.price}</p>
            <p> ROM :{product.rom}</p>
            <p> RAM :{product.ram}</p>
            <button
              onClick={() => this.props.onGetProductDetail(product)}
              className="btn btn-primary"
            >
              View Detail
            </button>
            <button
              onClick={() => {
                // console.log("onAddToCart Item");
                onAddToCart(product);
              }}
              className="btn btn-success ms-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
