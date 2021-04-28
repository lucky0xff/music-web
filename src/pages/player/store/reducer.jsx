import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  currentSong:[],
  currentLyric:[],
  currentComments:[],
  currentSimiPlayLists:[],
  currentSimiSongs:[],
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
    default:
      return preState
  }
}

export default reducer