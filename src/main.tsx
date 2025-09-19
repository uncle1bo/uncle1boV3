import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import 'antd/dist/reset.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />  {/* 用路由组件替代原来的 App */}
  </React.StrictMode>,
);