import React from 'react';
import dynamic from 'dva/dynamic';

// 引入一级路由
import Login from '../routes/Login';
import Main from '../routes/Main';
import Play from '../routes/Play';
import Distinguish from '../routes/Distinguish'

// 引入二级路由
import BankPage from '../routes/bank/index';
import FindPage from '../routes/find/index';
import FriendPage from '../routes/friend/index';
import MyPage from '../routes/my/index';
import VideoPage from '../routes/video/index';
import RecommendPage from '../routes/find/recommend';
import SearchPage from '../routes/find/search';

export default {
  routes: [{
    path: '/login',
    component: Login
  }, {
    path: '/play/:id?',
    component: Play
  }, {
    path: '/distinguish/:id?',
    component: Distinguish
  }, {
    path: '/main',
    component: Main,
    children: [{
      path: '/main/bank',
      component: BankPage
    }, {
      path: '/main/find',
      component: FindPage
    }, {
      path: '/main/friend',
      component: FriendPage
    }, {
      path: '/main/my',
      component: MyPage
    }, {
      path: '/main/video',
      component: VideoPage
    }, {
      path: '/main/recommend',
      component: RecommendPage
    }, {
      path: '/main/search',
      component: SearchPage
    }
    ]
  }, {
    path: '/',
    redirect: '/main/find'
  }]
}