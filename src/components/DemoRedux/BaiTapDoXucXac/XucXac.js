import React, { Component } from 'react';
import { connect } from 'react-redux';

class XucXac extends Component {
  render() {
    const { xucXac1, xucXac2, xucXac3 } = this.props.xucXac;
    console.log(this.props);
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="btnTai">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.handleNguoiDungChon('Tài');
              }}
            >
              Tài
            </button>
          </div>
          <div className="listXucXac bg-light p-1">
            <img src={`./gameXucXac/${xucXac1}.png`} alt="" width={100} />
            <img src={`./gameXucXac/${xucXac2}.png`} alt="" width={100} />
            <img src={`./gameXucXac/${xucXac3}.png`} alt="" width={100} />
          </div>
          <div className="btnXiu">
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.handleNguoiDungChon('Xỉu');
              }}
            >
              Xỉu
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// gọi dữ liệu từ reducer
const mapStateToProps = (state) => {
  return {
    xucXac: state.xucXacReducer,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    // phương thức handle người dùng chọn sẽ được sử dụng cho cả 2 nút tài và xỉu nên mình cho phương nhận vào tham số chọn có 2 giá trị một là tài 2 là xỉu
    handleNguoiDungChon: (chon) => {
      dispatch({
        type: 'HANDLE_NGUOI_DUNG_CHON',
        payload: chon,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(XucXac);
