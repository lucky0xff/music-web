import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  currentSong:[],
})

function reducer (preState = defaultState,action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONGS_DETAIL:
      return preState.set("currentSong",action.currentSong)
    default:
      return preState
  }
}

export default reducer