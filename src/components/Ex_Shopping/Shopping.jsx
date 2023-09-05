import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

export default class Shopping extends Component {
  state = {
    listProducts: [
      {
        id: 1,
        name: 'Iphone 13 Promax',
        display: '6.7 inch',
        os: 'IOS 15',
        price: 1500,
        camera: '12MP',
        ram: '8GB',
        rom: '128GB',
        img: 'https://tejarra-media.s3.amazonaws.com/70585/medialibraryGRBT2z',
      },
      {
        id: 2,
        name: 'Samsung S22 Ultra',
        display: '6.7 inch',
        os: 'Android 12',
        price: 1200,
        camera: '20MP',
        ram: '16GB',
        rom: '256GB',
        img: 'https://www.switchrentals.co.uk/app/uploads/sites/2/samsung-s22-ultra-phantom-black.png',
      },
      {
        id: 3,
        name: 'Oppo Find X5',
        display: '6.5 inch',
        os: 'Android 12',
        price: 1000,
        camera: '40MP',
        ram: '16GB',
        rom: '256GB',
        img: 'https://m.media-amazon.com/images/I/71NAtIVDCKL._AC_SX679_.jpg',
      },
    ],
    productDetail: null,
    isShowModal: false,
    listProductsCart: [],
  };

  // chức năng xoá sản phẩm trong giỏ hàng
  removeProductCart = (id) => {
    // console.log('tôi là xoá');
    // alert('tôi đã chạy');
    // hàm xoá (spilce(vị trí index cần xoá, số lượng cần xoá =1))
    // console.log(id);
    const index = this.state.listProductsCart.findIndex(
      (item) => item.id == id
    );
    // findIndex có 2TH xảy ra
    if (index != -1) {
      console.log(index);
      const newArrProductCart = [...this.state.listProductsCart];
      newArrProductCart.splice(index, 1);
      // console.log(newArrProductCart);
      this.setState({
        listProductsCart: newArrProductCart,
      });
    }
  };

  getProductDetail = (product) => {
    console.log('product shopping', product);
    this.setState({ productDetail: product });
  };

  handleAddToCart = (product) => {
    // console.log("handleAddToCart Shopping", product);
    const newProduct = { ...product, quantity: 1 };
    this.setState({
      listProductsCart: [...this.state.listProductsCart, newProduct],
    });
    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const found = this.state.listProductsCart.find(
      (item) => item.id === product.id
    );
    if (found) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      const newCarts = this.state.listProductsCart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      this.setState({
        listProductsCart: newCarts,
      });
    } else {
      // Sản phẩm chưa tồn tại trong giỏ hàng
      const productWithQuantity = { ...product, quantity: 1 };
      this.setState({
        listProductsCart: [...this.state.listProductsCart, productWithQuantity],
      });
    }
  };

  handleCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    console.log('cart', this.state.listProductsCart);
    return (
      <div className="container mt-5">
        <button
          className="btn btn-success"
          onClick={() => this.setState({ isShowModal: true })}
        >
          Giỏ hàng
        </button>
        <ProductList
          data={this.state.listProducts}
          onGetProductDetail={this.getProductDetail}
          onAddToCart={this.handleAddToCart}
        />
        <ProductDetail product={this.state.productDetail} />
        {this.state.isShowModal && (
          <Cart
            removeItem={this.removeProductCart}
            onCloseModal={this.handleCloseModal}
            data={this.state.listProductsCart}
          />
        )}
      </div>
    );
  }
}
