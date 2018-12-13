import React from 'react';
import { Router } from 'dva/router';

// 引入路由配置项
import config from './router/index';
// 引入封装的路由组件
import RouterView from './router/routerview';
// 引入context
import DataContext from './context/index';
function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <React.Fragment>
        <DataContext.Provider value={{changeData: res=>{console.log('changeData...', res)}}}>
          <RouterView routes={config.routes}></RouterView>
        </DataContext.Provider>
      </React.Fragment>
    </Router>
  );
}

export default RouterConfig;

