import React, { Component } from 'react';
import './baiTapDoXucXac.scss';

export default class BaiTapDoXucXac extends Component {
  render() {
    return (
      <div
        id="gameXucXac"
        style={{
          backgroundImage: 'url(./gameXucXac/bgGame.png)',
          height: '100vh',
        }}
      >
        <h1 className="text-center text-uppercase">Game đổ xúc xắc</h1>
      </div>
    );
  }
}
