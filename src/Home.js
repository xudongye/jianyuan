import React, { Component } from "react";
import { Modal, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
// import "./css/log.scss";
import "./css/Home.scss";
import "antd/dist/antd.css";
// WechatOutlined
const menus = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer">
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
      dialongshow: false
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
    this.props.history.push('/')
    
}
  render() {
    return (
      <div className="loginters">
        <div className="top2">
          <div className="log-header">
            <div className="log-eva2">
              <div className="log-evaImg"></div>
              <div className="log-texts">
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item onClick={this.homess}>首页</Menu.Item>
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
                {/* <div className="weixin"><WechatOutlined /></div> */}
              </Modal>
            </div>
          </div>
          <div className="headers">
            <div className="headers-left">
              <h4>了解如何使用见元</h4>
              <div>在见元研讨会中创建演示文稿的教程和资源</div>
              <Button
                type="primary"
                onClick={this.showModal}
                className="loginButton"
              >
                立即注册
              </Button>
            </div>
            <div className="headers-right">
              <div></div>
            </div>
          </div>
          <div className="bodySory">
            <div className="bodySory-top">
              <h3>基础功能</h3>
              <div>
                这些教程将帮助您立即开始创作，立即开始使用3D将复杂的想法转化为令人愉悦的演示文稿
              </div>
            </div>
            <div className="bodySory-body">
              <div className="option-btn">
                <div className="option-btn1">
                  <div className="option-img1"></div>
                  <div className="option-div">
                    <p> 移动工具</p>
                    <span>
                      使用移动工具在3D空间中制作动画，让您的模型栩栩如生。
                    </span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img2"></div>
                  <div className="option-div">
                    <p> 旋转工具</p>
                    <span>
                      学习旋转工具和定位模型，使用旋转向夹具添加更多动画。
                    </span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img3"></div>
                  <div className="option-div">
                    <p> 缩放工具</p>
                    <span> 使用比例工具编辑3D模型的比例</span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img4"></div>
                  <div className="option-div">
                    <p> 颜色工具</p>
                    <span> 使用动态颜色工具使模型栩栩如生。</span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img5"></div>
                  <div className="option-div">
                    <p> 标签工具</p>
                    <span>
                      通过为您的模型标记许多单独的组件，为您的夹具添加细节。
                    </span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img6"></div>
                  <div className="option-div">
                    <p> 复制工具</p>
                    <span> 使用复制工具创建对象的精确副本</span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bodySory-btn">
              <Button
                type="primary"
                onClick={this.showModal}
                className="loginButton"
              >
                加载更多教程
              </Button>
            </div>
          </div>

          <div className="bodyMasse">
            <div className="bodyMasse-top">
              <h3>新功能</h3>
              <div>随时了解最新的功能版本并了解如何使用新工具</div>
            </div>
            <div className="bodyMasse-body">
              <div className="option-btn">
                <div className="option-btn1">
                  <div className="option-img1"></div>
                  <div className="option-div">
                    <p> 将视频添加到夹具</p>
                    <span>使用视频为您的夹具添加更多信息和效果。</span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img2"></div>
                  <div className="option-div">
                    <p> 自定义背景颜色</p>
                    <span>添加对比背景以更清晰地查看3D模型。</span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
                <div className="option-btn1">
                  <div className="option-img3"></div>
                  <div className="option-div">
                    <p> 将音频添加到夹具</p>
                    <span>将音频、音乐或音效文件导入您的夹具。</span>
                    <div> 阅读更多> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bodyMasse-btn">
              <Button
                type="primary"
                onClick={this.showModal}
                className="loginButton"
              >
                加载更多教程
              </Button>
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
    );
  }
}
