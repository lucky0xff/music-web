import { getSongsDetail, getSongsLyric, getSongsComments,getSimiPlayLists,getSimiSongs } from '@/service/player'
import { parseLyric } from '@/utils/lyric-utils'

import * as actionTypes from './constants'

const changeSongsDetailAction = (response) => ({
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
