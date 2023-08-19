// cách tạo class component trên react
// import { Component } from 'react';

// class DemoComponents extends Component {
//   // vì DemoComponents kế thừa từ Component của react nên nó sẽ có một phương thức tên render
//   render() {
//     return <div>hello BC49 Một lần nữa</div>;
//   }
// }

// export default DemoComponents;

// câu lệnh để tạo ra một class component nhanh chóng tiện lợi
// câu lệnh rcc
import React, { Component } from 'react';

export default class DemoComponents extends Component {
  // ở đây phương thức render sẽ trả về một layout lên giao diện cho người dùng
  render() {
    return <div class="text-danger">DemoComponents</div>;
  }
}
