import {
  WORK_DATA, WORK_DATA_MORE, INCREASE_SNUM,
} from './action';


import {
  FeedWorkAction, FeedWorkState,
} from './types';


const initialState: FeedWorkState = {
  data: [],
  skippedNum: 0,
};


function feed(state:FeedWorkState = initialState, action:FeedWorkAction) {
  switch (action.type) {
    case WORK_DATA:
      return {
        ...state,
      };
    case WORK_DATA_MORE:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        skippedNum: state.data.length + action.payload.length,
      };
    default:
      return state;
  }
}

export default feed;
