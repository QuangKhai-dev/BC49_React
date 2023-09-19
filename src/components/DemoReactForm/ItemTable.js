import React, { Component } from 'react';

export default class ItemTable extends Component {
  render() {
    console.log(this.props.item);
    const { id, image, name, type, price, description } = this.props.item;
    return (
      <tr class="table-warning">
        <td scope="row">{id}</td>
        <td>
          <img src={image} alt="" />
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{description}</td>
        <td>{type}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDelete(id);
            }}
          >
            Xoá
          </button>
          <button
            onClick={() => {
              this.props.handleGetValue(id);
            }}
            className="btn btn-primary ms-2"
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}
