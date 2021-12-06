import React, { Component } from "react";
// import Mimadenglu from "./pages/mimadegnlu";
// import Phoneyzm from "./pages/phoneyzm";
import { Modal, Button, Carousel, Menu, Dropdown } from "antd";
import { WechatOutlined, DownOutlined } from "@ant-design/icons";
// import mp4 from '../images/666.mp4';
import { Link } from "react-router-dom";
import "./css/log.scss";
import "antd/dist/antd.css";
import Rotation from "./pages/Rotation";
import RotationNo1 from "./pages/Rotation-no1";
import RotationNo2 from "./pages/Rotation-no2";
import Home from './Home.js';

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "200px",
  textAlign: "center"
  // background: '#364d79',
};

const menus = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        // href="https://www.antgroup.com"
      >
        在线演示
      </a>
    </Menu.Item>
    <Menu.Item danger>联系我们</Menu.Item>
  </Menu>
);

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      colorIndex: 1,
      classIndex: 2,
      type: "login",
      mimatype: "user",
      dialongshow: false,
      tiaozhuan:false
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}

  registry = () => {
    this.setState({
      type: "zhuce"
    });
  };
  loginbtn = () => {
    this.setState({
      type: "login"
    });
  };
  Mengceng = () => {};
  showModal = () => {
    this.setState({
      dialongshow: true
    });
  };

  handleOk = () => {
    this.setState({
      dialongshow: false,
      type: "login"
    });
  };

  handleCancel = () => {
    this.setState({
      dialongshow: false,
      type: "login"
    });
  };
  homess = () => {
      this.setState({
        tiaozhuan:true
      })
      this.props.history.push('/home')
  }
  render() {
    return (
      <div className="loginter">
        <div className="top1">
          <div className="log-header">
            <div className="log-eva2">
              <div className="log-evaImg"></div>
              <div>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item
                        onClick={this.homess}
                      >
                        功能概况
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <a
                    className="ant-dropdown-link"
                    onClick={e => e.preventDefault()}
                  >
                    功能概况
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div>
                <Dropdown overlay={menus}>
                  <a
                    className="ant-dropdown-link"
                    onClick={e => e.preventDefault()}
                  >
                    帮助中心
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <Button
                type="primary"
                onClick={this.showModal}
                className="loginButton"
              >
                登录
              </Button>
              <Modal
                destroyOnClose
                title="天维"
                visible={this.state.dialongshow}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
              >
                <div className="anniu">
                  <div></div>
                  {/* {this.state.type == "login" ? (
                    <Mimadenglu {...this.props} />
                  ) : (
                    <Phoneyzm {...this.props} />
                  )}
                  {this.state.type == "login" ? (
                    <div className="buttonInten">
                      <button onClick={this.registry}>注册</button>
                    </div>
                  ) : (
                    <div className="buttonInten">
                      <button onClick={this.loginbtn}>登录</button>
                    </div>
                  )} */}
                </div>
                <div className="kong">
                  <div></div>
                </div>
                <div className="weixin">
                  <WechatOutlined />
                </div>
              </Modal>
            </div>
          </div>

          <div className="log-body">
            <div className="header">
              <div className="logs-header">
                <div>三维演示，就是这么简单</div>
                <p>简单、易懂的在线演示制作平台</p>
                <Button
                  type="primary"
                  onClick={this.showModal}
                  className="loginButton"
                >
                  立即注册
                </Button>
              </div>
              <div className="logs-headers">
                <video
                  id="media"
                  src={require("./images/abcd.mp4").default}
                  width="442"
                  height="242"
                  controls="controls"
                ></video>
              </div>
            </div>
            <div className="evas">
              <div className="evas-header">
                <div>释放你的创造力，快速完成你的产品演示</div>
              </div>
              <div className="evas-body">
                <div className="evas-body-lis">
                  <div className="evas-body-img"></div>
                  <div className="evas-body-title">简单</div>
                  <div className="evas-body-text">轻松上手，创作自如</div>
                </div>
                <div className="evas-body-lis">
                  <div className="evas-body-img1"></div>
                  <div className="evas-body-title">AR制作</div>
                  <div className="evas-body-text">快速制作AR内容</div>
                </div>
                <div className="evas-body-lis">
                  <div className="evas-body-img2"></div>
                  <div className="evas-body-title">实时分享</div>
                  <div className="evas-body-text">轻松分享，放飞创作</div>
                </div>
                <div className="evas-body-lis">
                  <div className="evas-body-img3"></div>
                  <div className="evas-body-title">海外模型素材</div>
                  <div className="evas-body-text">随时复用，效率翻倍</div>
                </div>
                <div className="evas-body-lis">
                  <div className="evas-body-img4"></div>
                  <div className="evas-body-title">云端编辑</div>
                  <div className="evas-body-text">随时随地，开启创作</div>
                </div>
                <div className="evas-body-lis">
                  <div className="evas-body-img5"></div>
                  <div className="evas-body-title">实时分享</div>
                  <div className="evas-body-text">支持集成，赋能大屏</div>
                </div>
              </div>
            </div>
            <div className="carousel">
              <Carousel autoplay>
                <div className="carousel1">
                  <Rotation style={contentStyle} />
                </div>
                <div className="carousel2">
                  <RotationNo1 style={contentStyle} />
                </div>
                <div className="carousel3">
                  <RotationNo2 style={contentStyle} />
                </div>
              </Carousel>
            </div>
            <div className="option">
              <div className="option-top">
                <div>见元适合所有人</div>
                <p>
                  ---从教育到企业、再到3D爱好者，无缝协作和共享3D演示文稿是游戏规则的改变者
                </p>
              </div>
              <div className="option-btn">
                <div className="option-btn1">
                  <div className="option-img1"></div>
                  <div className="option-div">
                    <p> 销售与市场营销</p>
                    <span> 通过令人惊叹的增强现实展示复杂的产品。</span>
                    <div> 了解更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img2"></div>
                  <div className="option-div">
                    <p> 设计与原型</p>
                    <span> 通过实时编辑和3D呈现加速决策。</span>
                    <div> 了解更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img3"></div>
                  <div className="option-div">
                    <p> 训练</p>
                    <span> 通过引人入胜的技术内容改善远程学习成果。</span>
                    <div> 了解更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img4"></div>
                  <div className="option-div">
                    <p> 其他</p>
                    <span> 它不一定有用，但它总是很有趣！</span>
                    <div> 了解更多> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fouter">
              <div className="fouter-top">
                <h1>现在就使用见元，开始无忧创作</h1>
                <div>
                  <Button
                    type="primary"
                    onClick={this.showModal}
                    className="loginButtons"
                  >
                    立即注册
                  </Button>
                </div>
              </div>
              <div className="fouter-btn">
                <div className="fouter-text">
                  <div className="fouter-img"></div>
                  <div className="fouter-list">版权所有2022@见元。版权所有</div>
                </div>
                <div className="fouter-text">
                  <div className="fouter-lists">公司</div>
                  <div>关于我们</div>
                  <div>职业</div>
                  <div>联系我们</div>
                </div>
                <div className="fouter-text">
                  <div className="fouter-lists">产品</div>
                  <div>下载</div>
                  <div>帮助中心</div>
                  <div>新闻资料袋</div>
                  <div>经销商计划</div>
                </div>
                <div className="fouter-text">
                  <div className="fouter-lists">其他</div>
                  <div>条款加条件</div>
                  <div>隐私政策</div>
                  <div>披露</div>
                </div>
                <div className="fouter-texts">
                  <div className="fouter-lists">联系我们</div>
                  <div>使用咨询：在线客服</div>
                  <div>客服热线：134-6500-0023</div>
                  <div>给我们留言：✉</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
