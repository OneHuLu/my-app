import React from "react";
import "./App.css";

import { Routes } from "react-router-dom";
import Routers from "./router/router";

// 获取路由节点
const allRouter = Routers();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* 路由节点挂载 */}
          {allRouter.map((item) => item)}
        </Routes>
      </header>
    </div>
  );
}

export default App;
