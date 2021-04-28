import { getSongsDetail, getSongsLyric, getSongsComments,getSimiPlayLists,getSimiSongs } from '@/service/player'
import { parseLyric } from '@/utils/lyric-utils'

import * as actionTypes from './constants'

const changeSongsDetailAction = (response) => ({
  type: actionTypes.CHANGE_SONGS_DETAIL,
  currentSong: response.songs[0]
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



export const getSongsDetailAction = (ids) => {
  return dispatch => {
    getSongsDetail(ids).then(response => {
      dispatch(changeSongsDetailAction(response))
    })
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