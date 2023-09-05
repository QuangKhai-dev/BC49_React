import React, { Component } from 'react';

export default class ProductDetail extends Component {
  render() {
    const { product } = this.props;
    // product : { name : "" , price: "" , ram :"" , rom:""}
    return (
      <>
        {product ? (
          <>
            <div className="mt-5">
              <h3>ProductDetail</h3>
              <div className="row">
                <div className="col-4">
                  <img
                    src={product?.img}
                    style={{ width: '100%', height: 500, objectFit: 'cover' }}
                    alt="iphone"
                  />
                </div>
                <div className="col-8">
                  <p>Tên sản phẩm : {product?.name}</p>
                  <p>Giá sản phẩm: {product?.price}</p>
                  <p>Camera: {product?.camera}</p>
                  <p>RAM: {product?.ram}</p>
                  <p>ROM: {product?.rom}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          'Chưa chọn sản phẩm'
        )}
      </>
    );
  }
}
