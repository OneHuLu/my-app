import { Route, useRoutes } from "react-router-dom";
import { IRoute } from "./type";

// 登录相关路由
import LoginRouter from "./other-router/login-router";
// 主页路由
import HomeRouter from "./other-router/home-router";
import { Suspense } from "react";
// 路由集合
const routers: IRoute[] = [...LoginRouter, ...HomeRouter];
// 路由集合处理
function Routers() {
  return routers.map((item, index) => {
    return (
      <Route
        key={index}
        path={item.path}
        element={
          <Suspense fallback={<div>路由懒加载。。。</div>}>
            {item.element}
          </Suspense>
        }
      />
    );
  });
}

export default Routers;
