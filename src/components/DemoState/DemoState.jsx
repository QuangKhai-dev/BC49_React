import React, { Component } from 'react';

export default class DemoState extends Component {
  // giúp quản lí các dữ liệu thay đổi và cập nhật lên giao diện
  state = {
    number: 1,
  };

  hienThiHayKhong() {
    // điều kiện để xem hiển thị giao diện nào
    // state >5 thì hiển thị nội dung là số đã vượt quá 5 và còn lại hiển thị số chưa vượt
    if (this.state.number > 5) {
      return <p>Số đã vượt quá 5</p>;
    } else {
      return <p>Số chưa vượt qua 5</p>;
    }
  }

  render() {
    let number = 1;
    console.log('hehe');
    return (
      <div>
        <p>Number: {this.state.number}</p>
        {this.hienThiHayKhong()}
        <button
          className="btn btn-dark"
          onClick={() => {
            // phương thức giúp thay đổi dữ liệu của state, và nó sẽ chạy lại phương thức render giúp cập nhật dữ liệu mới lên
            // this.state.number += 1;
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          Cộng thêm 1
        </button>
      </div>
    );
  }
}
