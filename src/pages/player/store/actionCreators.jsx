import { getSongsDetail } from '@/service/player'
import * as actionTypes from './constants'

const changeSongsDetailAction = (response) => ({
  type: actionTypes.CHANGE_SONGS_DETAIL,
  currentSong: response.songs[0]
})

export const getSongsDetailAction = (ids) => {
  return dispatch => {
    getSongsDetail(ids).then(response => {
      dispatch(changeSongsDetailAction(response))
    })
  }
}