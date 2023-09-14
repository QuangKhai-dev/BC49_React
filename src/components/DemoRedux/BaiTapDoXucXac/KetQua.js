import React, { Component } from 'react';
import { connect } from 'react-redux';

class KetQua extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="text-center fs-1 mt-4">
        <div className="banChon">
          <p>
            Bạn chọn:
            <span className="text-danger">{this.props.nguoiDungChon}</span>
          </p>
        </div>
        <div className="soBanThang">
          <p>
            Số bàn thắng:{' '}
            <span className="text-success">{this.props.soBanThang}</span>
          </p>
        </div>
        <div className="tongSoBan">
          <p>
            Tổng số bàn chơi: <span className="text-primary">0</span>
          </p>
        </div>
        <button className="btn btn-success" onClick={this.props.lacXiNgau}>
          Play game
        </button>
      </div>
    );
  }
}

// mapDispatchToProps
const mapDisPatchToProps = (dispatch) => {
  return {
    // phương thức giúp gọi dispatch tới store và xử lí dữ liệu
    lacXiNgau: () => {
      // dispatch giúp bắn sự kiện lên store redux,
      // bên trong object được bắn lên sẽ có 2 thuộc tính
      // type giúp xác định sự kiện được bắn lên là sự kiện nào
      // payload nhận vào giá trị mới được bắn lên
      const xucXac1 = Math.floor(Math.random() * 6) + 1;
      const xucXac2 = Math.floor(Math.random() * 6) + 1;
      const xucXac3 = Math.floor(Math.random() * 6) + 1;
      dispatch({
        type: 'LAC_XI_NGAU',
        payload: {
          xucXac1,
          xucXac2,
          xucXac3,
        },
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    nguoiDungChon: state.xucXacReducer.nguoiDungChon,
    soBanThang: state.xucXacReducer.soBanThang,
  };
};
// mapstatetoprops
// mapdispatchtoprops
export default connect(mapStateToProps, mapDisPatchToProps)(KetQua);
