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
                <div>团队协作，沟通顺畅</div>
                <div className='text'>实时分享</div>
                <div>
                  新的团队共享功能允许 Jig Pro 用户打开或关闭 Jig 内容以供整个团队查看或不查看，您可查看自己的 Jigs，也可以查看您的团队成员创建的 Jigs。
                </div>
                <div> 🔸自由选择共享功能</div>
                <div> 🔸可查看成员的创建</div>
                <div> 🔸协作成员对项目打点评论</div>
              </div>
            </div>
            <div className="rotation-right1">
              <div></div>
            </div>
          </div>
          <div className="rotation-btn">
            <div className="btn-left1">
              <div></div>
            </div>
            <div className="btn-right">
              <div className='btn-text'>
                <div>随时复用，效率翻倍</div>
                <div className='text'>海量模型素材</div>
                <div>
                  不只是产品经理，任何角色都可以在见元找到一席之地，企业级项目上下游协作、交接管理。，让团队中每个人都和你一样高效。
                </div>
                <div> 🔸内置丰富的组件库和模板库</div>
                <div> 🔸双击置入画板</div>
                <div> 🔸支持添加标签，方便快速查找</div>
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  }
}
