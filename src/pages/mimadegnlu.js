import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Input, message, Spin } from "antd";
// import ApiSevice from "../middleware/ApiService.js";

import "../css/denglu.scss";

export default class mimadenglu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      colorIndex: 1,
      classIndex: 2,
      aaa: "user",
      user: "",
      pass: "",
      phoneUser: "",
      phoneCode: "",
      timerCode: "发送验证码",
      codedisabled: false,
      isuserBlur: true,
      loading: false
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}

  shoujihao = () => {
    this.setState({
      aaa: "phone"
    });
  };
  zhanghao = () => {
    this.setState({
      aaa: "user"
    });
  };
  userchange = val => {
    this.setState({
      user: val.target.value
    });
  };
  userBlur = () => {
    // this.setState({
    //   isuserBlur: false
    // });
    let myreg = /^1[34578]\d{9}$/;
    let email = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!myreg.test(this.state.user) && !email.test(this.state.user)) {
      message.warning("请输入正确的手机号码或邮箱");
    }
  };
  passchange = val => {
    this.setState({
      pass: val.target.value
    });
  };

  userlogin = () => {
    let params = {
      loginLabel: this.state.user,
      loginType: 1,
      password: this.state.pass
    };

    if (this.state.user == "" || this.state.pass == "") {
      message.warning("用户名密码不能为空");
    } else {
      this.setState({
        loading: true
      });
      // ApiSevice.LoginIn(JSON.stringify(params))
      //   .then(res => {
      //     console.log(res, "123");
      //     if (res.code == 200) {
      //       this.props.history.push("/product/dashboard");
      //     } else {
      //       message.warning(res.message);
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
      //   .finally(() => {
      //     this.setState({
      //       loading: false
      //     });
      //   });
    }
  };

  phoneUserChange = e => {
    this.setState({
      phoneUser: e.target.value
    });
  };

  phoneCodeChange = e => {
    this.setState({
      phoneCode: e.target.value
    });
  };
  timer = () => {
    if (this.state.phoneUser == "") {
      message.warning("请输入手机号");
      return;
    }
    let newtimer = null;
    this.setState({
      codedisabled: true,
      timerCode: "60s后重新发送"
    });

    newtimer = setInterval(() => {
      let num = parseInt(this.state.timerCode);
      if (num > 1) {
        this.setState({
          timerCode: (num -= 1) + "s后重新发送"
        });
      } else {
        this.setState({
          timerCode: "发送验证码",
          codedisabled: false
        });
        clearInterval(newtimer);
      }
    }, 1000);
    message.warning("123456");
  };

  phoneLogin = () => {
    if (this.state.phoneUser == "" || this.state.phoneCode == "") {
      message.warning("手机号验证码不能为空");
    } else {
      this.props.history.push("/product/dashboard");
    }
  };
  render() {
    //判断
    if (this.state.aaa == "user") {
      return (
        <div className="yangshi">
          {this.state.loading ? (
            <div className="zhezhao" style={{}}>
              <Spin size="large" />
            </div>
          ) : null}

          <p onClick={this.shoujihao}>手机号验证码登录</p>
          <Input
            onChange={e => this.userchange(e)}
            value={this.state.user}
            placeholder="手机号/邮箱"
            onBlur={this.userBlur}
            // maxLength={11}
          />
          <Input.Password
            onChange={e => this.passchange(e)}
            value={this.state.pass}
            placeholder="密码"
          />
          <Button onClick={this.userlogin.bind(this)} type="primary" block>
            登录
          </Button>
        </div>
      );
    } else if (this.state.aaa == "phone") {
      return (
        <div className="yangshi">
          <p onClick={this.zhanghao}>账号密码登录</p>
          <Input
            placeholder="手机号"
            value={this.state.phoneUser}
            onChange={e => this.phoneUserChange(e)}
            onBlur={this.userBlur}
            maxLength={11}
          />
          <Input
            placeholder="验证码"
            value={this.state.phoneCode}
            onChange={e => this.phoneCodeChange(e)}
          />
          <Button
            type="primary"
            disabled={this.state.codedisabled}
            onClick={this.timer}
            block
          >
            {this.state.timerCode}
          </Button>
          <Button type="primary" onClick={this.phoneLogin} block>
            登录
          </Button>
        </div>
      );
    }
  }
}

// import React, { useState, useEffect } from "react";

// const Mimadegnlu = () => {
//   const [typelist, setTypelist] = useState("user");
//   const [user, setUser] = useState("");
//   const shoujihao = () => {
//     setTypelist("phone");
//   };
//   const zhanghao = () => {
//     setTypelist("user");
//   };
//   const userchange = e => {
//       console.log(e.target.value);

//     setUser(e.target.value);
//   };
//   if (typelist == "user") {
//     return (
//       <div>
//         <p onClick={shoujihao}>手机号验证码登录</p>
//         <Input
//           onChange={e => userchange(e)}
//           value={user}
//           placeholder="手机号/邮箱"
//         />
//         {/* <Input
//           onChange={e => this.passchange(e)}
//           value={this.state.pass}
//           placeholder="密码"
//         />
//         <Button onClick={this.userlogin} type="primary">
//           登录
//         </Button> */}
//       </div>
//     );
//   } else if (this.state.aaa == "phone") {
//     // return (
//     //   <div>
//     //     <p onClick={this.zhanghao}>账号密码登录</p>
//     //     <Input placeholder="手机号" />
//     //     <Input placeholder="验证码" />
//     //     <Button type="primary">发送验证码</Button>
//     //     <Button type="primary">登录</Button>
//     //   </div>
//     // );
//   }
// };

// export default Mimadegnlu;
