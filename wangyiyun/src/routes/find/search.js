import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import './search.scss';
// 引入context
import DataContext from '../../context/index';

@connect(({discover})=>{
  let {songs, songCount} = discover;
  return {
    songs,
    songCount
  }
}, dispatch=>{
  return {
    search: payload=>{
      dispatch({
        type: 'discover/search',
        payload
      })
    },
    playAll: payload=>{
      dispatch({
        type: 'play/getUrls',
        payload
      })
    },
    distinguishSong: payload=>{
      dispatch({
        type: 'play/distinguishSong',
        payload
      })
    }
  }
})
class Search extends React.PureComponent{
  componentDidMount(){
    // this.props.getRecommendResource();
  }

  // 搜索功能
  search(){
    let search = this.refs.search.value;
    if (search){
      this.props.search(search);
    }
  }

  goPlay(id){
    this.props.history.push('/play', id);
  }

  // 播放全部
  playAll(){
    this.props.playAll(this.props.songs.map(item=>item.id));
    this.props.history.push(`/play/${this.props.songs[0].id}`);
  }

  // 听歌识曲
  distinguishSong(){
    console.log('distin...', this.props);
    this.props.distinguishSong(this.props.songs.map(item=>item.id));
  }

  render() {
    console.log(this.props);
    let { songs } = this.props;
    return <div className="searchlist">
      <div className="search">
        <input placeholder="搜索歌曲" ref="search"></input>
        <button onClick={this.search.bind(this)}>搜索</button>
        <button onClick={this.playAll.bind(this)}>播放全部</button>
        <button onClick={this.distinguishSong.bind(this)}>听歌识曲</button>
      </div>
      <ul>{
        songs.map((item, index)=>{
          return <Link to={`/play/${item.id}`} key={index}>
            <li>
              <p>{item.name}</p>
              <p>{`${item.artists[0].name}-${item.album.name}`}</p>
            </li>
          </Link>
        })
      }</ul>
      <DataContext.Consumer>{
          // ({data, changeData})=><div>
          //   <button onClick={()=>changeData('歌曲面板触发了事件')}>触发事件</button>
          //   <p>{data.name}</p>
          //   <p>{data.num}</p>
          // </div>
          context=><div>{JSON.stringify(context)}</div>
        }</DataContext.Consumer>
    </div>
  }
}

export default Search;