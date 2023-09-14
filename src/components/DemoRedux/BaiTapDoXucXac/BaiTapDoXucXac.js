import React, { Component } from 'react';
import './baiTapDoXucXac.scss';
import XucXac from './XucXac';
import KetQua from './KetQua';

export default class BaiTapDoXucXac extends Component {
  render() {
    // ctrl + shift + P
    // command + shift + P
    return (
      <div
        id="gameXucXac"
        style={{
          backgroundImage: 'url(./gameXucXac/bgGame.png)',
          height: '100vh',
        }}
      >
        <h1 className="text-center text-uppercase">Game đổ xúc xắc</h1>
        <XucXac />
        <KetQua />
      </div>
    );
  }
}
