import React, { Component } from "react";
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
                <div>随时随地，开启创作</div>
                <div className='text'>云端编辑</div>
                <div>
                  无论在公司还是远程，只需要打开浏览器，随时可以让工作无缝衔接；无须反复下载和上传文件，即时同步项目信息，交流流程更加高效。
                </div>
                <div> 🔸多设备协同工作</div>
                <div> 🔸支持多人同时编辑</div>
                <div> 🔸项目交接流畅</div>
              </div>
            </div>
            <div className="rotation-right">
              <div></div>
            </div>
          </div>
          <div className="rotation-btn">
            <div className="btn-left">
              <div></div>
            </div>
            <div className="btn-right">
              <div className='btn-text'>
                <div>步调一致，井井有条</div>
                <div className='text'>开放</div>
                <div>
                  不只是产品经理，任何角色都可以在见元找到一席之地，企业级项目上下游协作、交接管理。，让团队中每个人都和你一样高效。
                </div>
                {/* <div> 多设备协同工作</div>
                <div> 支持多人同时编辑</div>
                <div> 项目交接流畅</div> */}
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  }
}
