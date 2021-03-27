import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import {BrowserRouter} from 'react-router-dom'

import {routes} from './router'
import HYAppHeader from '@/components/AppHeader'
import HYAppFooter from '@/components/AppFooter'

export default memo(function App() {
  return (
    <BrowserRouter>
      <HYAppHeader/>
      {renderRoutes(routes)}
      <HYAppFooter/>
    </BrowserRouter>
  )
})
