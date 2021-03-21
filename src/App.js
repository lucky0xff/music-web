import React, { memo } from 'react'
import HYAppHeader from '@/components/AppHeader'
import HYAppFooter from '@/components/AppFooter'

export default memo(function App() {
  return (
    <div>
      <HYAppHeader/>
      <h2>Content</h2>
      <HYAppFooter/>
    </div>
  )
})
