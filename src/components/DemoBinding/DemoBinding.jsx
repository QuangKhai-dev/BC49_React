import React, { Component } from 'react';
import ContentComponent from '../ContentComponent';
import FooterComponent from '../FooterComponent';

export default class DemoBinding extends Component {
  renderGiaoDien() {
    return (
      <div className="bg-success text-white p-3">
        Tôi là function dc binding
      </div>
    );
  }

  render() {
    // những thẻ được sử dụng trong component của react thực chất chính là jsx và nó là một object
    // console.log(<div></div>);
    const hoTen = 'Minh Nhựa';
    let number = 8;
    let active = true;
    // nếu như mình muốn gán giá trị của biến hoTen lên giao diện vào div có id demo thì sẽ làm như thế nào
    // Lưu ý ở đây không thể dùng dom trước khi giao diện được tạo ra
    // document.getElementById('demo').innerHTML = hoTen;

    // lưu ý khi binding dữ liệu: chỉ cho phép trả về các dữ liệu như array, string,number, jsx
    return (
      <div
        className={`text-white ${active ? 'bg-dark' : 'bg-danger'}`}
        id="demo"
      >
        {number < 5 ? hoTen : ''}
        {this.renderGiaoDien()}
        {[5, 8, 9, 11]}
        {/* {[{ hoTen: 'Cường' }]} */}
        {<p>aaa</p>}
        {/* {{  }} */}
        DemoBinding
        <div className="mb-3">
          <label htmlFor className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name
            id
            aria-describedby="helpId"
            placeholder
          />
          <small id="helpId" className="form-text text-muted">
            Help text
          </small>
        </div>
        {/* <ContentComponent />
        <FooterComponent /> */}
      </div>
    );
  }
}
