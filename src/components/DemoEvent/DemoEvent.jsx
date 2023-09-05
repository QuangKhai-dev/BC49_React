import React, { Component } from 'react';

export default class DemoEvent extends Component {
  canhBaoNguoiDung() {
    alert('Cảnh báo cảnh báo');
  }

  xinChao() {
    console.log('Hello');
  }

  handleValueInput(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <h1>Demo Sự kiện trong react</h1>
        <button
          className="btn btn-dark"
          // onClick={() => {
          //   // xử lí nhiều phương thức trong một lần bấm
          //   this.canhBaoNguoiDung();
          //   this.xinChao();
          // }}
          onClick={this.canhBaoNguoiDung}
        >
          Cảnh báo người dùng
        </button>
        <div className="mb-3">
          <label htmlFor className="form-label">
            Name
          </label>
          <input
            // onChange hoạt động dựa trên thay đổi của dữ liệu trong input
            onChange={this.handleValueInput}
            type="text"
            className="form-control"
            name
            id
            aria-describedby="helpId"
            placeholder
          />
        </div>
      </div>
    );
  }
}
