import React from 'react';
import { NavLink } from 'dva/router';
import './index.scss';

class Index extends React.PureComponent {
  render() {
    return (<div className="banklist">
      <div className="neticon">
        <img src={require('../../assets/discover.png')} alt="" />
      </div>
      <div className="chunk">
        <NavLink to="/login"><button>手机号登录</button></NavLink>
        <button>注册</button>
        <p>游客试用</p>
      </div>
      <div className="tite">其他登录方式</div>
      <div className="method">
        <dl>
          <dt><img src={require('../../assets/my.png')} alt="" /></dt>
          <dd>微信</dd>
        </dl>
        <dl>
          <dt><img src={require('../../assets/my.png')} alt="" /></dt>
          <dd>QQ</dd>
        </dl>
        <dl>
          <dt><img src={require('../../assets/my.png')} alt="" /></dt>
          <dd>微博</dd>
        </dl>
        <dl>
          <dt><img src={require('../../assets/my.png')} alt="" /></dt>
          <dd>网易邮箱</dd>
        </dl>
      </div>
    </div>)
  }
}

export default Index;