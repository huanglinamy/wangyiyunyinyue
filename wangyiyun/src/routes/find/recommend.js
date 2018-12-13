import React from 'react'; //推荐
import { Carousel } from 'antd';
import './recommend.scss';
import 'antd/dist/antd.css';
import { connect } from 'dva';

@connect(({ discover }) => {
  return discover
}, dispatch => {
  return {
    getRecommendResource: () => {
      dispatch({
        type: 'discover/getRecommendResource'
      })
    }
  }
}
)

class Recommend extends React.PureComponent {
  componentDidMount() {
    this.props.getRecommendResource();
    this.props.updateBanner();
    this.props.updateSongs();
  }
  render() {
    let { banner,songs } = this.props;
    // console.log(songs)
    console.log(this.props);
    return (<div className="recommendlist">
      <div className="banner1">
        <Carousel autoplay>
          {
            banner.map((v, i) => {
              return <div className="slide" key={i}><img src={v.imageUrl} alt="" /></div>
            })
          }
        </Carousel>
      </div>
      <div className="play_all">
        <li><img src={require('../../assets/my.png')} alt="" /><span>播放全部</span></li>
        <li><img src={require('../../assets/my.png')} alt="" /><span>多选</span></li>
      </div>
      <div className="songs_all">
        <div className="away">
          <dl className="songs_left">
            <dt><img src={require('../../assets/p3.jpg')} alt="" /></dt>
            <dd>
              <h3>我的心好冷</h3>
              <p>周传熊-我的心太乱</p>
            </dd>
          </dl>
          <dl className="songs_right">
            <dt><img src={require('../../assets/my.png')} alt="" /></dt>
            <dd><img src={require('../../assets/my.png')} alt="" /></dd>
          </dl>
        </div>
        <div className="away">
          <dl className="songs_left">
            <dt><img src={require('../../assets/p3.jpg')} alt="" /></dt>
            <dd>
              <h3>我的心好冷</h3>
              <p>周传熊-我的心太乱</p>
            </dd>
          </dl>
          <dl className="songs_right">
            <dt><img src={require('../../assets/my.png')} alt="" /></dt>
            <dd><img src={require('../../assets/my.png')} alt="" /></dd>
          </dl>
        </div>
        <div className="away">
          <dl className="songs_left">
            <dt><img src={require('../../assets/p3.jpg')} alt="" /></dt>
            <dd>
              <h3>我的心好冷</h3>
              <p>周传熊-我的心太乱</p>
            </dd>
          </dl>
          <dl className="songs_right">
            <dt><img src={require('../../assets/my.png')} alt="" /></dt>
            <dd><img src={require('../../assets/my.png')} alt="" /></dd>
          </dl>
        </div>
      </div>
    </div>)
  }
}

const mapState = state => { 
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
    updateSongs: type => {
      dispatch({
        type: 'index/getSongs',
        payload: type
      })
    }
  }
}

export default connect(mapState, mapDispatch)(Recommend);


