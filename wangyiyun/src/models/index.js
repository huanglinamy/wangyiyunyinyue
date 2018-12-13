import { routerRedux } from 'dva/router'; //登录
import {getToken, setToken} from '../utils/user';
import {login} from '../services/index';

export default {
    namespace: 'index',
    state: {
        banner: [],
        abreast: [],
        songs:[]

    },


    subscriptions: { //登录
        setup({ dispatch, history }) {  // eslint-disable-line
          return history.listen(({ pathname }) => {
            // console.log('pathname...', pathname);
            if (pathname !== '/login') {
              if (!getToken()){
                dispatch(routerRedux.replace({
                  pathname: '/login',
                }))
              }
            }
          });
        },
      },


    effects: {
        * getBanner({ payload }, { call, put }) {
            let res = yield call(() => {  //call方法里面是个异步操作 需要yield来修饰一下
                return fetch('http://123.206.55.50:14000/banner') //这行代码会阻塞
                    .then(res => res.json())
                    .then(body => body)
            })
            // console.log('res...', res);
            yield put({  //put是个对象
                type: 'updateBanner',
                payload: res.banners
            })
        },
        * getAbreast({ payload }, { call, put }) {
            let res = yield call(() => {  //call方法里面是个异步操作 需要yield来修饰一下
                return fetch('http://123.206.55.50:14000/personalized') //这行代码会阻塞
                    .then(res => res.json())
                    .then(body => body)
            })
            // console.log('res...', res);
            yield put({  //put是个对象
                type: 'updateAbreast',
                payload: res.result
            })
        },
        *login({ payload }, { call, put }) { //登录
            // console.log('login payload...', payload);
            let response = yield call(login, payload);
            // console.log('response...', response);
            // 设置token
            setToken(response.data.account.id);
            yield put({
                type: 'updateState',
                payload: response.data
            });
            yield put(routerRedux.replace({
                pathname: '/',
            }))
        },
         *getSongs({ payload }, { call, put }) {
            let res = yield call(() => {  //call方法里面是个异步操作 需要yield来修饰一下
                return fetch('http://123.206.55.50:14000/recommend/resource') //这行代码会阻塞
                    .then(res => res.json())
                    .then(body => body)
            })
            console.log('res...', res);
            yield put({  //put是个对象
                type: 'updateSongs',
                payload: res.recommend
            })
        },

    },

    reducers: {
        updateBanner(state, { payload }) { //轮播图
            return { ...state, banner: payload }
        },
        updateAbreast(state, { payload }) {  //首页并排
            return { ...state, abreast: payload }
        },
        updateState(state, action) { //登录
            // console.log('action...', action);
            return { ...state, ...action.payload }
        },
        updateSongs(state, { payload }) {  //recommend歌曲
            return { ...state, songs: payload }
        },
    }
}