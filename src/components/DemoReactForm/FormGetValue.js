import React, { Component } from 'react';

export default class FormGetValue extends Component {
  render() {
    console.log(this.props.value);
    // destrucuring
    const { handleOnChange, value, handleSubmit } = this.props;
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
                  />
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
                    <option selected value="mobile">
                      Mobile
                    </option>
                    <option value="desktop">Desktop</option>
                  </select>
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
                  />
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
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button className="text-warning btn btn-dark px-4" type="submit">
                Tạo
              </button>
              <button className="btn btn-warning text-dark px-4 ms-3">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
