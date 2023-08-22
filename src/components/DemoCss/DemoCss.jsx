import React, { Component } from 'react';
// import './style.css';
import styles from './style2.module.css';
export default class DemoCss extends Component {
  render() {
    return (
      <div id={styles.demo_css}>
        <h1 className="demo">H1 ở component con</h1>
        <h2>Tôi là component con</h2>
      </div>
    );
  }
}
