import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter} from 'react-router-dom'
// Provider为了让App所有的后代组件都能接收到store
import { Provider } from "react-redux";

import {routes} from './router'
import store from './store'
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'
import HYAppPlayBar from './pages/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* 路由相关 */}
        <HYAppHeader/>
        {renderRoutes(routes)}
        <HYAppFooter/>
        <HYAppPlayBar/>
      </BrowserRouter>
    </Provider>
  )
})
