import React, { Component } from 'react';
import { connect } from 'react-redux';

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return <div>DemoRedux</div>;
  }
}

// kết nối component với store redux

const mapStateToProps = (state) => {
  // state đại diện cho reducer đang có trên store
  return {
    hoTen: state.hoTen,
  };
};

export default connect(mapStateToProps)(DemoRedux);
