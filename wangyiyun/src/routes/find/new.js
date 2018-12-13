import React from 'react';
import { Carousel } from 'antd';
import './new.scss';
import 'antd/dist/antd.css';
import { connect } from 'dva';

class New extends React.PureComponent {
  componentDidMount() {
    this.props.updateBanner()
    this.props.updateAbreast()
  }
  render() {
    let { banner, abreast } = this.props
    return (<div className="newmovie">
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
          <dd>私人FM</dd>
        </dl>
        <dl>
          <dt><img src={require('../../assets/p2.jpg')} alt="" /></dt>
          <dd>每日推荐</dd>
        </dl>
        <dl>
          <dt><img src={require('../../assets/p3.jpg')} alt="" /></dt>
          <dd>歌单</dd>
        </dl>
        <dl>
          <dt><img src={require('../../assets/p1.jpg')} alt="" /></dt>
          <dd>排行榜</dd>
        </dl>
      </div>
      <div className="title1">
        <h3>每日推荐></h3>
      </div>
      <div className="endways">
        {
          abreast.map((v, i) => {
            return <dl key={i}>
              <dt><img src={v.picUrl} alt="" /></dt>
              <dd>{v.name}</dd>
            </dl>
          })
        }
      </div>

      {/* <div className="program">
        <dl>
          <dt><img src={require('../../assets/p1.jpg')} alt="" /></dt>
          <dd>
            <p>节目：37</p>
            <p>人帅声撩的小姐姐弹唱给你听</p>
          </dd>
        </dl>
      </div>
      <div className="boutique">
        <div className="top">
          <h3>精品推荐</h3>
          <p>你值得拥有的优质内容</p>
        </div>
        <div className="cen">
          <dl>
            <dt><img src={require('../../assets/p1.jpg')} alt="" /></dt>
            <dd>是是的是方式发顺丰</dd>
          </dl>
          <dl>
            <dt><img src={require('../../assets/p1.jpg')} alt="" /></dt>
            <dd>是是的是方式发顺丰</dd>
          </dl>
          <dl>
            <dt><img src={require('../../assets/p1.jpg')} alt="" /></dt>
            <dd>是是的是方式发顺丰</dd>
          </dl>
        </div>
        <div className="bot">
          <h3>全部精品电台</h3>
        </div>
      </div> */}
    </div>)
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

export default connect(mapState, mapDispatch)(New);
