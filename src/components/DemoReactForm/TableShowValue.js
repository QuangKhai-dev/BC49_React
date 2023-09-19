import React, { Component } from 'react';
import ItemTable from './ItemTable';

export default class TableShowValue extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="mt-4">
        <div class="table-responsive">
          <table
            class="table table-striped
        table-hover	
        table-borderless
        table-primary
        align-middle"
          >
            <thead class="table-light">
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {this.props.listProduct.map((item, index) => {
                return (
                  <ItemTable
                    handleDelete={this.props.handleDelete}
                    item={item}
                    handleGetValue={this.props.handleGetValue}
                  />
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    );
  }
}
