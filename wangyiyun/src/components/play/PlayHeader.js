import React from 'react';
import styles from './PlayHeader.scss';
import DataContext from '../../context/index';

export default props => {
  return (<div className="PlayHeaderlist">
    <React.Fragment>
      <div className="play_title">
        <h2>{props.name}</h2>
      </div>

      <div className="play_banner">
        <img className={props.isPlay ? styles.picUrl : styles.disable} src={props.picUrl} alt="" />
      </div>
      <DataContext.Consumer>{
     
      context=><div>{JSON.stringify(context)}</div>
    }</DataContext.Consumer>
    </React.Fragment>
  </div>)
}
