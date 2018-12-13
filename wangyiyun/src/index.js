import dva from 'dva';
// import { createHashHistory } from 'history';

// 引入路由模式
import createHistory from 'history/createHashHistory';

// 解决移动端300ms延迟和点击穿透问题
var FastClick = require('fastclick');
FastClick.attach(document.body);

// import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
  history: createHistory(),
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/index').default)
app.model(require('./models/discover').default);
app.model(require('./models/play').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
