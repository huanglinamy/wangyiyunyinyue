import React from 'react';
import './index.scss';

class Index extends React.PureComponent {
  render() {
    return (<div className="mylist">
      <div className="my_header">
        <p><img src={require('../../assets/my.png')} alt="" /></p>
        <p>我的音乐</p>
        <p><img src={require('../../assets/my.png')} alt="" /></p>
      </div>
      <div className="my_list">
        <li>
          <div className="left">
            <p><img src={require('../../assets/icon.png')} alt="" /></p>
            <span>本地音乐</span>
          </div>
          <div className="right">
            <span>1</span>
            <p>></p>
          </div>
        </li>
        <li>
          <div className="left">
            <p><img src={require('../../assets/icon.png')} alt="" /></p>
            <span>本地音乐</span>
          </div>
          <div className="right">
            <span>1</span>
            <p>></p>
          </div>
        </li>
        <li>
          <div className="left">
            <p><img src={require('../../assets/icon.png')} alt="" /></p>
            <span>本地音乐</span>
          </div>
          <div className="right">
            <span>100</span>
            <p>></p>
          </div>
        </li>
        <li>
          <div className="left">
            <p><img src={require('../../assets/icon.png')} alt="" /></p>
            <span>本地音乐</span>
          </div>
          <div className="right">
            <span>10</span>
            <p>></p>
          </div>
        </li>
        <li>
          <div className="left">
            <p><img src={require('../../assets/icon.png')} alt="" /></p>
            <span>本地音乐</span>
          </div>
          <div className="right">
            <span>100</span>
            <p>></p>
          </div>
        </li>
        <li>
          <div className="left">
            <p><img src={require('../../assets/icon.png')} alt="" /></p>
            <span>本地音乐</span>
          </div>
          <div className="right">
            <span>10</span>
            <p>></p>
          </div>
        </li>
      </div>
      <div className="throw">
          <h4>我创建的歌单(1)</h4>
          <dl>
            <dt><img src={require('../../assets/pic1.jpg')} alt="" /></dt>
            <dd>
               <h3>其他登录方式</h3>
               <p>620首,已下载一首</p>
            </dd>
        </dl>
        <h4>我创建的歌单(1)</h4>
          <dl>
            <dt><img src={require('../../assets/pic2.jpg')} alt="" /></dt>
            <dd>
               <h3>其他登录方式</h3>
               <p>620首,已下载一首</p>
            </dd>
        </dl>
        <h4>我创建的歌单(1)</h4>
          <dl>
            <dt><img src={require('../../assets/pic1.jpg')} alt="" /></dt>
            <dd>
               <h3>其他登录方式</h3>
               <p>620首,已下载一首</p>
            </dd>
        </dl>
      </div>
    </div>)
  }
}

export default Index;