import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Input, message, Spin } from "antd";
// import ApiSevice from "../middleware/ApiService.js";
import "../css/denglu.scss";

export default class phoneyzm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      colorIndex: 1,
      classIndex: 2,
      aaa: "user",
      user: "",
      pass: "",
      name: "",
      phoneUser: "",
      phoneCode: "",
      phoneName: "",
      timerCode: "发送验证码",
      codedisabled: false,
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
  passchange = val => {
    this.setState({
      pass: val.target.value
    });
  };

  userlogin = () => {
    // let params = {
    //   cellphone: this.state.phoneUser,
    //   password: this.state.phoneCode,
    //   nickName: this.state.phoneName,
    //   type: 1
    // };
    // if (this.state.phoneUser == "" || this.state.phoneCode == "" || this.state.phoneName == "") {
    //   message.warning("用户名密码不能为空");
    // } else {
    //   ApiSevice.RegisterIn(JSON.stringify(params)).then(res => {
    //     console.log(res);
    //     // this.props.history.push("/product/dashboard");
    //     // if() {
    //     // }
    //   });
    // }
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
  phoneNameChange = e => {
    this.setState({
      phoneName: e.target.value
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
  };

  phoneLogin = () => {
    let params = {
      cellphone: this.state.phoneUser,
      password: this.state.phoneCode,
      nickName: this.state.phoneName,
      type: 1
    };
    if (
      this.state.phoneUser == "" ||
      this.state.phoneCode == "" ||
      this.state.phoneName == ""
    ) {
      message.warning("用户名密码不能为空");
    } else {
      this.setState({
        loading: true
      });
      // ApiSevice.RegisterIn(JSON.stringify(params))
      //   .then(res => {
      //     console.log(res);
      //     // {
      //     //   code: 400;
      //     //   data: null;
      //     //   message: "手机号已注册！";
      //     // }
      //     if (res.code == 200) {
      //       message.success('注册成功请前往登录');
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
  //正则
  userBlur = () => {
    let myreg = /^1[34578]\d{9}$/;
    if (!myreg.test(this.state.phoneUser)) {
      message.warning("当前号码为非手机号");
    }
  };
  render() {
    //判断
    if (this.state.aaa == "user") {
      return (
        <div className="yangshi">
          <p onClick={this.shoujihao}>手机号注册</p>
          <Input
            onChange={e => this.userchange(e)}
            value={this.state.user}
            placeholder="邮箱号"
          />
          <Input
            onChange={e => this.passchange(e)}
            value={this.state.pass}
            placeholder="密码"
          />
          <Button onClick={this.userlogin.bind(this)} type="primary" block>
            注册
          </Button>
        </div>
      );
    } else if (this.state.aaa == "phone") {
      return (
        <div className="yangshi">
          {this.state.loading ? (
            <div className="zhezhao">
              <Spin size="large" />
            </div>
          ) : null}

          <p onClick={this.zhanghao}>邮箱注册</p>
          <Input
            placeholder="手机号"
            onBlur={this.userBlur}
            maxLength={11}
            value={this.state.phoneUser}
            onChange={e => this.phoneUserChange(e)}
          />
          <Input
            placeholder="密码"
            value={this.state.phoneCode}
            onChange={e => this.phoneCodeChange(e)}
          />
          <Input
            placeholder="昵称"
            value={this.state.phoneName}
            onChange={e => this.phoneNameChange(e)}
          />
          {/* <Input placeholder="性别" />
          <Input placeholder="头像" />
          <Input placeholder="所在省份" />
          <Input placeholder="是否关注" />
          <Input placeholder="注册类型" /> */}
          <Button
            type="primary"
            disabled={this.state.codedisabled}
            onClick={this.timer}
            block
          >
            {this.state.timerCode}
          </Button>

          <Button type="primary" onClick={this.phoneLogin} block>
            注册
          </Button>
        </div>
      );
    }
  }
}
