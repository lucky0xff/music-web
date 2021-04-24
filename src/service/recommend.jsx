import request from './request'

export function getTopBanners() {
  return request({
    url:"/banner"
  })
}

export function getHotRecommends(limit) {
  return request({
    url:"/personalized",
    params:{
      limit
    }
  })
}

export function getNewAlbums(limit) {
  return request({
    url:"/album/list",
    params:{
      limit
    }
  })
}

export function getRankingList(id) {
  return request({
    url:"/playlist/detail",
    params:{
      id
    }
  })
}

// 接口没找到
export function getSettleSingers(limit,cat) {
  return request({
    url:"/artist/list",
    params: {
      limit,
      cat
    }
  })
}