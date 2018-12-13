import React from 'react';
import RouterView from '../router/routerview';
import { NavLink } from 'dva/router';
import './Main.scss';

class Main extends React.PureComponent {
  render() {
    return (
      <div className="wraps">
        <React.Fragment>
          <section className="section">
            <RouterView routes={this.props.routes}></RouterView>
          </section>
          <footer className="footer">
            <NavLink to="/main/find">
              <p><img src={require('../assets/discover.png')} alt="" /></p>
              <span>发现</span>
            </NavLink>
            <NavLink to="/main/video">
              <p><img src={require('../assets/video.png')} alt="" /></p>
              <span>视频</span>
            </NavLink>
            <NavLink to="/main/my">
              <p><img src={require('../assets/my.png')} alt="" /></p>
              <span>我的</span>
            </NavLink>
            <NavLink to="/main/friend">
              <p><img src={require('../assets/friend.png')} alt="" /></p>
              <span>朋友</span>
            </NavLink>
            <NavLink to="/main/bank">
              <p><img src={require('../assets/account.png')} alt="" /></p>
              <span>账号</span>
            </NavLink>
          </footer>
        </React.Fragment>
      </div>
    )
  }
}

export default Main;