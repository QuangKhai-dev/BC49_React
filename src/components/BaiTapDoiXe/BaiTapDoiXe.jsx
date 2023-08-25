import React, { Component } from 'react';
import hinhXeDen from './../../assests/black-car.jpg';
export default class BaiTapDoiXe extends Component {
  state = {
    imgCar: './CarBasic/products/black-car.jpg',
  };

  listButton = [
    {
      title: 'Black',
      subTitle: 'Pearl',
      img: './CarBasic/icons/icon-black.jpg',
      imgCar: './CarBasic/products/black-car.jpg',
    },
    {
      title: 'Red',
      subTitle: 'Pearl',
      img: './CarBasic/icons/icon-red.jpg',
      imgCar: './CarBasic/products/red-car.jpg',
    },
    {
      title: 'Silver',
      subTitle: 'Pearl',
      img: './CarBasic/icons/icon-silver.jpg',
      imgCar: './CarBasic/products/silver-car.jpg',
    },
    {
      title: 'Steel',
      subTitle: 'Pearl',
      img: './CarBasic/icons/icon-steel.jpg',
      imgCar: './CarBasic/products/steel-car.jpg',
    },
  ];

  renderButton() {
    let newListButton = [];
    newListButton = this.listButton.map((item, index) => {
      return (
        <button
          key={index}
          // red-car
          className="btn d-flex"
          onClick={() => {
            // console.log('object');
            this.setState({
              imgCar: item.imgCar,
            });
          }}
        >
          <img className="w-25" src={item.img} alt="" />
          <div className="ms-3">
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        </button>
      );
    });
    console.log(newListButton);
    return newListButton;
  }

  render() {
    return (
      <div className="container">
        {/* gắn đường dẫn tương đối vào thẻ img  */}
        {/* <img src="./CarBasic/products/black-car.jpg" alt="" /> */}
        {/* <img src={hinhXeDen} alt="" /> */}
        <div className="row">
          <div className="col-8">
            {/* xác định được rằng đường dẫn img là dữ liệu thay đổi khi người dùng bấm nút  */}
            <img className="w-100" src={this.state.imgCar} alt="" />
          </div>
          <div className="col-4">
            {/* Hàm map  */}
            {this.renderButton()}
          </div>
        </div>
      </div>
    );
  }
}
