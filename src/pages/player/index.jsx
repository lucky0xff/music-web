import React from 'react'
import HYPlayerInfo from './c-cnps/player-info'
import HYPlayerComment from './c-cnps/player-comment'
import HYPlayerSongs from './c-cnps/player-songs'
import HYPlayerRelevant from './c-cnps/player-relevent'

import { PlayerWrapper,PlayerLeft,PlayerRight} from './style'

export default function HYPlayer() {
  return (
    <PlayerWrapper className="wrap-v2">
        <PlayerLeft>
          <HYPlayerInfo/>
          <HYPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <HYPlayerSongs/>
          <HYPlayerRelevant/>
        </PlayerRight>
    </PlayerWrapper>
  )
}
