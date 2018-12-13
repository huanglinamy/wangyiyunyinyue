import cookie from 'js-cookie'; //登录

export function getToken(){
  return cookie.get('auth_token');
}

export function setToken(val){
  cookie.set('auth_token', val);
}