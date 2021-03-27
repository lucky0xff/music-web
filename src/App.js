import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter} from 'react-router-dom'
// Provider为了让App所有的后代组件都能接收到store
import { Provider } from "react-redux";

import {routes} from './router'
import store from './store'
import HYAppHeader from '@/components/AppHeader'
import HYAppFooter from '@/components/AppFooter'

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HYAppHeader/>
        {renderRoutes(routes)}
        <HYAppFooter/>
      </BrowserRouter>
    </Provider>
  )
})
