import React from 'react';
import { Carousel } from 'antd';
import './hot.scss';
import 'antd/dist/antd.css';
import { connect } from 'dva';
import { NavLink } from 'dva/router';

class Hot extends React.PureComponent {
  componentDidMount() {
    this.props.updateBanner()
    this.props.updateAbreast()
  }
  click(){
    console.log('_htm',window._hmt);
    window._hmt.push(['_trackEvent','网易云音乐','按钮点击','搜索按钮']);
  }
  render() {
    let { banner, abreast } = this.props
    return (
      <div className="hotmovie">

        <div className="banner1">
          <Carousel autoplay>
            {
              banner.map((v, i) => {
                return <div className="slide" key={i}><img src={v.imageUrl} alt="" /></div>
              })
            }
          </Carousel>
        </div>

        <div className="across1">
          <dl>
            <dt><img src={require('../../assets/p1.jpg')} alt="" /></dt>
            <dd onClick={()=>this.click}>私人FM</dd>
          </dl>
          <dl>
            <dt><img src={require('../../assets/p2.jpg')} alt="" /></dt>
            <dd>
              <NavLink to={{
                pathname: '/main/recommend',
                state: { a: 1 }
              }} replace>每日推荐</NavLink>
            </dd>
          </dl>

          <dl>
            <dt><img src={require('../../assets/p3.jpg')} alt="" /></dt>
            <dd>
              <NavLink to={{
                pathname: '/main/search',
              }} replace>歌单</NavLink>
            </dd>
          </dl>

          <dl>
            <dt><img src={require('../../assets/p1.jpg')} alt="" /></dt>
            <dd>排行榜</dd>
          </dl>
        </div>

        <div className="title1">
          <h3>每日推荐></h3>
        </div>

        <div className="abreast1">
          {
            abreast.map((v, i) => {
              return <dl key={i}>
                <dt><img src={v.picUrl} alt="" /></dt>
                <dd>{v.name}</dd>
              </dl>
            })
          }
        </div>
      </div>
    )
  }
}


const mapState = state => {
  // console.log('state...', state);
  return state.index
}

const mapDispatch = dispatch => {
  return {
    updateBanner: type => {
      dispatch({
        type: 'index/getBanner',
        payload: type
      })
    },
    updateAbreast: type => {
      dispatch({
        type: 'index/getAbreast',
        payload: type
      })
    }
  }
}

export default connect(mapState, mapDispatch)(Hot);