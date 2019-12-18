import {
  WORK_DATA_MORE, WALLPAPER_DATA_MORE, MUSIC_DATA_MORE,
} from './action';


import {
  FeedAction, FeedState,
} from './types';


const initialState: FeedState = {
  workData: [],
  workSkippedNum: 0,
  wallpaperData: [],
  wallpaperSkippedNum: 0,
  musicData: [],
  musicSkippedNum: 0,
};


function feed(state:FeedState = initialState, action:FeedAction) {
  switch (action.type) {
    case WORK_DATA_MORE:
      return {
        ...state,
        workData: [...state.workData, ...action.payload],
        workSkippedNum: state.workData.length + action.payload.length,
      };
    case WALLPAPER_DATA_MORE:
      return {
        ...state,
        wallpaperData: [...state.wallpaperData, ...action.payload],
        wallpaperSkippedNum: state.wallpaperData.length + action.payload.length,
      };
    case MUSIC_DATA_MORE:
      return {
        ...state,
        musicData: [...state.musicData, ...action.payload],
        musicSkippedNum: state.musicData.length + action.payload.length,
      };
    default:
      return state;
  }
}

export default feed;
