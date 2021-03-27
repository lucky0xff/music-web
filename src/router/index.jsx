import React from 'react'
import {Redirect} from 'react-router-dom'
import HYDiscover from '@/pages/discover'
import HYMine from '@/pages/mine'
import HYFriend from '@/pages/friend'

export const routes = [
  { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
  {
    path: '/discover',
    component: HYDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
    ],
  },
  { path: '/my', component: HYMine },
  { path: '/friend', component: HYFriend }
]
