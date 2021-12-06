import React, { Component } from "react";
import { Modal, Button, Input, Carousel } from "antd";
import { WechatOutlined } from "@ant-design/icons";
// import mp4 from '../images/666.mp4';
import "../css/Rotation.scss";

export default class Rotation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="rotation">
          <div className="rotation-top">
            <div className="rotation-left">
              <div className='rotation-text'>
                <div>轻松上手，创作自如</div>
                <div className='text'>简单</div>
                <div>
                  所见即所得，小白也能轻松掌握，简单拖拽、设定动画效果，顷刻间完成精美的三维演示动画。
                </div>
                <div> 🔸支持缩放、显隐、移动、旋转等十余种动画效果</div>
                <div> 🔸拖拽组件，快速构成界面</div>
                <div> 🔸完成在精美界面</div>
              </div>
            </div>
            <div className="rotation-right2">
              <div></div>
            </div>
          </div>
          <div className="rotation-btn">
            <div className="btn-left2">
              <div></div>
            </div>
            <div className="btn-right">
              <div className='btn-text'>
                <div>逻辑可见，只需一步</div>
                <div className='text'>AR支持</div>
                <div>
                  拖拽到界面，您可以使用跟踪图像、视频、音频、图像、按钮、网络链接等快速构建多场景AR体验。
                </div>
                <div> 🔸自由拖拽</div>
                <div> 🔸更改连接效果</div>
                <div> 🔸快速构建多场景</div>
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  }
}
