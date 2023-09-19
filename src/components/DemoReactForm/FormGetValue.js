import React, { Component } from 'react';

export default class FormGetValue extends Component {
  render() {
    // destrucuring
    const {
      handleOnChange,
      value,
      handleSubmit,
      errorValue,
      activeButton,
      handleUpdate,
    } = this.props;
    return (
      <div class="card text-start">
        <div className="card-header bg-dark p-4 text-warning">Product info</div>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div class="mb-3">
                  <label for="" class="form-label">
                    Id
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="text"
                    class="form-control"
                    name="id"
                    placeholder="product Id"
                    value={value.id}
                    data-check="kyTu"
                  />
                  <p className="text-danger mt-1" id="id-noti">
                    {errorValue.id}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="" class="form-label">
                    Image
                  </label>
                  <input
                    onChange={handleOnChange}
                    type="text"
                    class="form-control"
                    name="image"
                    placeholder="image"
                    value={value.image}
                  />
                  <p className="text-danger mt-1" id="image-noti">
                    {' '}
                    {errorValue.image}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="product name"
                    value={value.name}
                    onChange={handleOnChange}
                  />
                  <p className="text-danger mt-1" id="name-noti">
                    {errorValue.name}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="" class="form-label">
                    Product type
                  </label>
                  <select
                    class="form-select form-select-lg"
                    name="type"
                    value={value.type}
                    onChange={handleOnChange}
                  >
                    <option value="">Chọn</option>
                    <option value="mobile">Mobile</option>
                    <option value="desktop">Desktop</option>
                  </select>
                  <p className="text-danger mt-1" id="type-noti">
                    {errorValue.type}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="" class="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="price"
                    placeholder="product price"
                    value={value.price}
                    onChange={handleOnChange}
                    // set một data-attribute giúp kiểm tra xem input này có cần validation là số hay không
                    // cách tạo data attribute ta gọi từ khoá data-(tên)
                    data-check="number"
                  />
                  <p className="text-danger mt-1" id="price-noti">
                    {' '}
                    {errorValue.price}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="description"
                    placeholder="product description"
                    value={value.description}
                    onChange={handleOnChange}
                  />
                  <p className="text-danger mt-1" id="desc-noti">
                    {errorValue.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="text-warning btn btn-dark px-4"
                type="submit"
                // disabled={activeButton}
              >
                Tạo
              </button>
              <button
                type="button"
                className="btn btn-warning text-dark px-4 ms-3"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
