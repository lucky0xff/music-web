import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  currentSong:[],
  
  playlist:[
    {
      "name": "我不需要",
      "id": 1836438977,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 12258420,
              "name": "AY楊佬叁",
              "tns": [],
              "alias": []
          },
          {
              "id": 12258027,
              "name": "VintaGe",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 125858652,
          "name": "我不需要",
          "picUrl": "https://p2.music.126.net/V5XVaIO54dqSkwRnqLNOzw==/109951165880237706.jpg",
          "tns": [],
          "pic_str": "109951165880237706",
          "pic": 109951165880237710
      },
      "dt": 175227,
      "h": {
          "br": 320000,
          "fid": 0,
          "size": 7011309,
          "vd": -51064
      },
      "m": {
          "br": 192000,
          "fid": 0,
          "size": 4206803,
          "vd": -48500
      },
      "l": {
          "br": 128000,
          "fid": 0,
          "size": 2804550,
          "vd": -46858
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "rtype": 0,
      "publishTime": 0
    },
    {
      "name": "海底（Live）",
      "id": 1840192925,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 11564,
              "name": "凤凰传奇",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 2,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 126409089,
          "name": "为歌而赞 第7期",
          "picUrl": "https://p2.music.126.net/6foZcR0P2Pdw0HRIdV1aiQ==/109951165914949830.jpg",
          "tns": [],
          "pic_str": "109951165914949830",
          "pic": 109951165914949820
      },
      "dt": 256550,
      "h": {
          "br": 320000,
          "fid": 0,
          "size": 10264365,
          "vd": -44112
      },
      "m": {
          "br": 192000,
          "fid": 0,
          "size": 6158637,
          "vd": -41553
      },
      "l": {
          "br": 128000,
          "fid": 0,
          "size": 4105773,
          "vd": -40131
      },
      "a": null,
      "cd": "01",
      "no": 5,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 2707435,
      "mv": 0,
      "publishTime": 0
    },
    {
      "name": "还是会想你",
      "id": 1827600686,
      "pst": 0,
      "t": 0,
      "ar": [
          {
              "id": 15199791,
              "name": "林达浪",
              "tns": [],
              "alias": []
          },
          {
              "id": 12631485,
              "name": "h3R3",
              "tns": [],
              "alias": []
          }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
          "id": 124309279,
          "name": "还是会想你",
          "picUrl": "https://p1.music.126.net/9FhSEQtMhP-JP3_U84YfWQ==/109951165798773745.jpg",
          "tns": [],
          "pic_str": "109951165798773745",
          "pic": 109951165798773740
      },
      "dt": 190063,
      "h": {
          "br": 320002,
          "fid": 0,
          "size": 7605165,
          "vd": -65927
      },
      "m": {
          "br": 192002,
          "fid": 0,
          "size": 4563117,
          "vd": -63374
      },
      "l": {
          "br": 128002,
          "fid": 0,
          "size": 3042093,
          "vd": -61772
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "mst": 9,
      "cp": 0,
      "rtype": 0,
      "rurl": null,
      "publishTime": 0
    }
  ],

  currentSongIndex:0,

  currentLyric:[],
  currentLyricIndex:0,
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
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return preState.set("currentLyricIndex",action.currentLyricIndex)
    default:
      return preState
  }
}

export default reducer