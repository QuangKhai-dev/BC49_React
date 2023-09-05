import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const { data, onCloseModal, removeItem } = this.props;
    return (
      <div className="modal" style={{ display: 'block' }} tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Hành động</th>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              // ở đây đang chạy một hàm map (vòng lặp) qua từng sản phẩm có trong mảng giỏ hàng, nên item sẽ đại diện cho từng object sản phẩm có trong array giỏ hàng
                              removeItem(item.id);
                            }}
                          >
                            Xoá
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => onCloseModal()}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
