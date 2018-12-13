import React from 'react';

//创建Context组件
export default React.createContext({
  data: {
    name: '1605A',
    num: 23
  },
  changeData: ()=>{}
});
