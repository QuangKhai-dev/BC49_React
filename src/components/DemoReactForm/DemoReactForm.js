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
        type: 'mobile',
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
    activeButton: true,
  };

  // viết phương thức giúp check dữ liệu nhận vô input price phải là số
  kiemTraSo(value) {
    const regexNumber = /^\d+$/;
    const isValid = regexNumber.test(value);
    if (!isValid) {
      // Sai
      return 'Vui lòng nhập số';
    } else {
      // Đúng
      return '';
    }
  }
  // viết phương thức giúp check id phải có từ 6 ký tự trở lên
  kiemTraDoDaiKyTu(value, min, max) {
    if (value.length < min || value.length > max) {
      //sai
      return `Vui lòng nhập từ ${min} đến ${max}`;
    } else {
      return '';
    }
  }

  // kiểm tra trùng id
  kiemTraTrungId = (arr, id, nameError, objectError) => {
    // chạy vòng lặp kiểm tra
    debugger;
    for (let item of arr) {
      // kiểm tra thuộc tính id của item có trùng id tham số không
      if (item.id == id) {
        objectError[nameError] = 'Đã trùng id';
        this.setState({
          errorValue: objectError,
        });
        return false;
      }
    }
    objectError[nameError] = '';
    return true;
  };

  handleOnChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    // gọi data-attibute
    const check = event.target.getAttribute('data-check');
    const newValue = { ...this.state.value };
    newValue[name] = value;

    // validation khi người dùng không nhập dữ liệu
    const newErrorValue = { ...this.state.errorValue };
    if (value == '') {
      // gọi tới thuộc tính có tên trùng với name của input và fill lỗi vào
      newErrorValue[name] = 'Vui lòng không để trống';
    } else {
      newErrorValue[name] = '';
      // validation khi người dùng nhập chữ vào price
      // data-check giá trị number check số

      if (check == 'number') {
        newErrorValue[name] = this.kiemTraSo(value);
      }
      // validation khi người dùng nhập chưa đủ ký tự vào id
      if (check == 'kyTu') {
        newErrorValue[name] = this.kiemTraDoDaiKyTu(value, 6, 10);
      }
    }

    // kiểm tra xem tất cả input đã có dữ liệu và có còn lỗi hay không, nếu thoả điều kiện sẽ cho nút button tạo được hoạt động
    // let isValid = false;
    // for (let key in newValue) {
    //   if (newValue[key] == '') {
    //     isValid = true;
    //   }
    // }
    // for (let key in newErrorValue) {
    //   if (newErrorValue[key] != '') {
    //     isValid = true;
    //   }
    // }

    // setState lại cho dữ liệu và lỗi cảnh báo
    this.setState({
      value: newValue,
      errorValue: newErrorValue,
      // activeButton: isValid,
    });
  };

  handleSubmit = (event) => {
    // ngăn reload trang
    event.preventDefault();
    // console.log('Tôi đã submit');

    // kiểm tra xem người dùng đã hết lỗi hay chưa
    let isValid = true;
    for (let key in this.state.errorValue) {
      // console.log(key);
      // kiểm tra nếu thuộc tính trong errorValue còn chuỗi tức người dùng vẫn còn lỗi
      if (this.state.errorValue[key] != '') {
        isValid = false;
      }
    }
    isValid = this.kiemTraTrungId(
      this.state.arrProduct,
      this.state.value.id,
      'id',
      this.state.errorValue
    );
    // kiểm tra khi submit có dữ liệu chưa
    for (let key in this.state.value) {
      if (this.state.value[key] == '') {
        isValid = false;
        // console.log('oke');
        alert('vui lòng nhập dữ liệu và kiểm tra lại');
        return;
      }
    }

    console.log(isValid);
    if (isValid) {
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
    }
  };

  handleDelete = (id) => {
    console.log(id);
    // dùng id để tìm vị trí index của sản phẩm
    const index = this.state.arrProduct.findIndex((item) => item.id == id);
    if (index != -1) {
      const newArrProduct = [...this.state.arrProduct];
      newArrProduct.splice(index, 1);
      this.setState({
        arrProduct: newArrProduct,
      });
    }
  };

  handleGetValue = (id) => {
    console.log(id);
    // tìm phần tử trong mảng
    const item = this.state.arrProduct.find((item) => item.id == id);
    if (item) {
      // chặn người dùng sửa id
      document.querySelector("input[name='id'").readOnly = true;
      this.setState({
        value: item,
      });
    }
  };

  handleUpdate = () => {
    let isValid = true;

    // kiểm tra xem input có lỗi và có dữ liệu không
    for (let key in this.state.errorValue) {
      if (this.state.errorValue[key] != '') {
        isValid = false;
      }
    }
    for (let key in this.state.value) {
      if (this.state.value[key] == '') {
        isValid = false;
      }
    }
    if (isValid) {
      // tìm kiếm lại phần tử mà đang chỉnh sửa trong mảng
      const newArrProduct = [...this.state.arrProduct];
      const index = newArrProduct.findIndex(
        (item) => item.id == this.state.value.id
      );
      if (index != -1) {
        newArrProduct[index] = this.state.value;
        // mở input id ra
        document.querySelector("input[name='id']").readOnly = false;
        this.setState({
          arrProduct: newArrProduct,
          value: {
            id: '',
            image: '',
            name: '',
            type: '',
            price: '',
            description: '',
          },
        });
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Bài tập về React Form</h1>
        <FormGetValue
          value={this.state.value}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
          // truyền object chứa các thuộc tính mang giá trị là cảnh báo cho người dùng xuống form
          errorValue={this.state.errorValue}
          activeButton={this.state.activeButton}
          handleUpdate={this.handleUpdate}
        />
        <TableShowValue
          handleDelete={this.handleDelete}
          listProduct={this.state.arrProduct}
          handleGetValue={this.handleGetValue}
        />
      </div>
    );
  }
}
