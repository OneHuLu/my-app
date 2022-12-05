import { lazy } from "react";
import { IRoute } from "../type";
import Home from "../../home";
const HomeRouter: IRoute[] = [
  {
    path: "/",
    // TODO 问题一:使用这样的写法会报错，导致页面空白
    // element:lazy(() => import('../../home'))
    element: <Home />,
  },
];
export default HomeRouter;

// TODO 问题一
// load script:41  GET http://localhost:7001/static/js/src_login_index_tsx.chunk.js net::ERR_ABORTED 404 (Not Found)
// Refused to execute script from 'http://localhost:7001/static/js/src_login_index_tsx.chunk.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
// jsonp chunk loading:27  Uncaught ChunkLoadError: Loading chunk src_login_index_tsx failed.
// 解决办法
// https://blog.csdn.net/jason_renyu/article/details/104640965

// TODO 问题二
// 前端可以采用的是package.json 中添加代理   "proxy":"http://127.0.0.1:3000",
