import React from 'react'
import {
  Redirect
} from 'react-router-dom'
import HYDiscover from '@/pages/discover'
import HYMine from '@/pages/mine'
import HYFriend from '@/pages/friend'
import HYRecommend from '@/pages/discover/c-pages/recommend'
import HYToplist from '@/pages/discover/c-pages/toplist'
import HYPlaylist from '@/pages/discover/c-pages/playlist'
import HYDjradio from '@/pages/discover/c-pages/djradio'
import HYArtist from '@/pages/discover/c-pages/artist'
import HYAlbum from '@/pages/discover/c-pages/album'
import HYPlayer from '@/pages/player'

export const routes = [{
    path: '/',
    exact: true,
    render: () => < Redirect to = "/discover" / >
  },
  {
    path: '/discover',
    component: HYDiscover,
    routes: [{
        //重定向
        path: '/discover',
        exact: true,
        render: () => < Redirect to = "/discover/recommend" / > ,
      },
      {
        path: '/discover/recommend',
        component: HYRecommend
      },
      {
        path: '/discover/toplist',
        component: HYToplist
      },
      {
        path: '/discover/playlist',
        component: HYPlaylist
      },
      {
        path: '/discover/djradio',
        component: HYDjradio
      },
      {
        path: '/discover/artist',
        component: HYArtist
      },
      {
        path: '/discover/album',
        component: HYAlbum
      },
      {
        path: '/discover/player',
        component: HYPlayer
      },
    ],
  },
  {
    path: '/my',
    component: HYMine
  },
  {
    path: '/friend',
    component: HYFriend
  }

]
