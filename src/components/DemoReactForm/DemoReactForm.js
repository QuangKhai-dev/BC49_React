import React, { Component } from 'react';
import FormGetValue from './FormGetValue';
import TableShowValue from './TableShowValue';

export default class DemoReactForm extends Component {
  state = {
    value: {
      id: '',
      image: '',
      name: '',
      type: '',
      price: '',
      description: '',
    },
    // array lưu lại các sản phẩm được người dùng thêm vào
    arrProduct: [
      {
        id: '1',
        image: 'https://picsum.photos/50',
        name: 'Adidas',
        type: 'Mobile',
        price: '30000',
        description: 'lorem',
      },
    ],
    errorValue: {
      id: '',
      image: '',
      name: '',
      type: '',
      price: '',
      description: '',
    },
  };

  handleOnChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;
    const newValue = { ...this.state.value };
    // newValue =  {
    //   id: '',
    //   image: '',
    //   name: '',
    //   type: '',
    //   price: '',
    //   description: '',
    // }
    // newValue["id"] =value
    newValue[name] = value;
    this.setState({
      value: newValue,
    });
  };

  handleSubmit = (event) => {
    // ngăn reload trang
    event.preventDefault();
    console.log('Tôi đã submit');
    // ở đây đầu tiện tạo ra một array mới giống với array của state.arrProduct
    const newArr = [...this.state.arrProduct];
    // dùng hàm push để thêm một phần tử vào mảng
    newArr.push(this.state.value);
    // gọi phương thức setState để update lại dữ liệu của state.arrProduct
    this.setState({
      arrProduct: newArr,
      value: {
        id: '',
        image: '',
        name: '',
        type: '',
        price: '',
        description: '',
      },
    });
    // reset form bằng phương thức reset
    // event.target.reset();
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <h1>Bài tập về React Form</h1>
        <FormGetValue
          value={this.state.value}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
        />
        <TableShowValue listProduct={this.state.arrProduct} />
      </div>
    );
  }
}
