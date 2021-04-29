import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  currentSong:[],
  
  playlist:[],  //播放列表
  currentSongIndex:0,

  currentLyric:[],
  currentComments:[],
  currentSimiPlayLists:[],
  currentSimiSongs:[],

  isPlaying:false,
  progress:0,
  currentTime:0,
  sequence:0, // 播放方式：0顺序 1随机 2单曲循环
})

function reducer (preState = defaultState,action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONGS_DETAIL:
      return preState.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_SONG_LYRIC:
      return preState.set("currentLyric", action.currentLyric)
    case actionTypes.CHANGE_SONG_COMMENTS:
      return preState.set("currentComments", action.currentComments)
    case actionTypes.CHANGE_SIMI_PLAYLISTS:
      return preState.set("currentSimiPlayLists", action.currentSimiPlayLists)
    case actionTypes.CHANGE_SIMI_SONGS:
      return preState.set("currentSimiSongs", action.currentSimiSongs)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return preState.set("currentSongIndex", action.currentSongIndex)
    case actionTypes.CHANGE_PLAY_LIST:
      return preState.set("playlist", action.playlist)
    case actionTypes.CHANGE_IS_PLAYING:
      return preState.set("isPlaying",action.isPlaying)
    case actionTypes.CHANGE_PROGRESS:
      return preState.set("progress",action.progress)
    case actionTypes.CHANGE_CURRENT_TIME:
      return preState.set("currentTime",action.currentTime)
    case actionTypes.CHANGE_SEQUENCE:
      return preState.set("sequence",action.sequence)
    default:
      return preState
  }
}

export default reducer