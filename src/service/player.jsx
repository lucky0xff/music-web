import request from './request'

export function getSongsDetail(ids) {
  return request({
    url:"song/detail",
    params: {
      ids
    }
  })
}

export function getSongsLyric(id) {
  return request({
    url:"/lyric",
    params: {
      id
    }
  })
}

export function getSongsComments(id) {
  return request({
    url: "/comment/music",
    params: {
      id
    }
  })
}

export function getSimiPlayLists(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}

export function getSimiSongs(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}