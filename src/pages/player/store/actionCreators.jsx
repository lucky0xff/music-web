import { getSongsDetail, getSongsLyric, getSongsComments,getSimiPlayLists,getSimiSongs } from '@/service/player'
import { parseLyric } from '@/utils/lyric-utils'

import * as actionTypes from './constants'

const changeSongsDetailAction = (response) => ({ // 也可以叫 changeCurrentSongAction 懒得改了
  type: actionTypes.CHANGE_SONGS_DETAIL,
  currentSong: response
})

const changeCurrentSongIndexAction = (response) => ({
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex:response
})

const changePlayListAction = (response) => ({
  type:actionTypes.CHANGE_PLAY_LIST,
  playlist:response
})

const changeSongsLyricAction = (response) => ({
  type: actionTypes.CHANGE_SONG_LYRIC,
  currentLyric:response
})

export const changeCurrentLyricIndexAction = (response) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex: response
})

const changeSongsCommentsAction = (response) => ({
  type: actionTypes.CHANGE_SONG_COMMENTS,
  currentComments:response
})

const changeSimiPlayListsAction = (response) => ({
  type: actionTypes.CHANGE_SIMI_PLAYLISTS,
  currentSimiPlayLists:response.playlists
})

const changeSimiSongsAction = (response) => ({
  type: actionTypes.CHANGE_SIMI_SONGS,
  currentSimiSongs:response.songs
})

export const changeSequenceAction = (response) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence: response
})

export const changeIsPlayingAction = (response) => ({
  type: actionTypes.CHANGE_IS_PLAYING,
  isPlaying: response
})

export const changeProgressAction = (response) => ({
  type: actionTypes.CHANGE_PROGRESS,
  progress: response
})

export const changeCurrentTimeAction = (response) => ({
  type: actionTypes.CHANGE_CURRENT_TIME,
  currentTime: response
})


// 重点
export const getSongsDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1.根据歌曲id查找playlist中是否存在该歌曲
    const playlist = getState().getIn(["player","playlist"])
    const songIndex = playlist.findIndex(song=>song.id===ids)

    // 2. 判断是否存在歌曲
    if (songIndex !== -1) { // playlist中存在歌曲
      dispatch(changeCurrentSongIndexAction(songIndex)) // 改变index是因为要从playlist中通过index找到歌
      const song = playlist[songIndex]
      dispatch(changeSongsDetailAction(song))
    } else { // playlist中不存在歌曲
      // 1.请求歌曲数据
      getSongsDetail(ids).then(response => {
        const song = response.songs && response.songs[0]
        if (!song) return ; //歌曲都没找到
        // 2.将请求到的歌曲添加到 playlist
        const newPlayList = [...playlist,song]
        // 3.更新redux
        dispatch(changePlayListAction(newPlayList))
        dispatch(changeCurrentSongIndexAction(newPlayList.length-1))
        dispatch(changeSongsDetailAction(song))
      })
    }

    // 3. 获取歌词
    dispatch(getSongLyricAction(ids))
  }
}

// 上下首歌 index 1下一首 -1上一首
export const changeCurrentSong = (index) => {
  return (dispatch,getState) => {
    let currentSongIndex = getState().getIn(["player","currentSongIndex"])
    const playlist = getState().getIn(["player","playlist"])
    const sequence = getState().getIn(["player","sequence"])

    switch (sequence) {
      case 1: // 随机
        let randomIndex = Math.floor(Math.random()*playlist.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = Math.floor(Math.random()*playlist.length)
        }
        currentSongIndex = randomIndex
        break;
      default:  // 顺序 单曲 因为是点击按钮的所以尽管是单曲也是会放下一首
        currentSongIndex += index
        if (currentSongIndex >= playlist.length) { // 最后一首
          currentSongIndex = 0
        } else if (currentSongIndex < 0) {  // 第一首
          currentSongIndex = playlist.length-1
        }
        break;
    }
    const currentSong = playlist[currentSongIndex]
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeSongsDetailAction(currentSong))
    dispatch(getSongLyricAction(currentSong.id))
  }
}

export const getSongLyricAction = (id) => {
  return dispatch => {
    getSongsLyric(id).then(response=> {
      const lrcString = response.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(changeSongsLyricAction(lyrics));
    })
  }
}

export const getSongCommentsAction = (id) => {
  return dispatch => {
    getSongsComments(id).then(response=> {
      dispatch(changeSongsCommentsAction(response))
    })
  }
}

export const getSimiPlayListsAction = (id) => {
  return dispatch => {
    getSimiPlayLists(id).then(response=> {
      dispatch(changeSimiPlayListsAction(response))
    })
  }
}

export const getSimiSongsAction = (id) => {
  return dispatch => {
    getSimiSongs(id).then(response=> {
      dispatch(changeSimiSongsAction(response))
    })
  }
}
