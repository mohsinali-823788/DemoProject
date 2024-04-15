import {createSlice} from '@reduxjs/toolkit';
import {reels} from '../../data/reels';
import {ReelState} from '../states';
import _ from 'lodash';

const initialState: ReelState = {
  data: reels,
  isPaused: false,
};

const reelDataSlice = createSlice({
  name: 'reelsData',
  initialState: initialState,
  reducers: {
    setReelsDimensions: (state, action) => {
      let dataArr = state.data;
      const index = _.findIndex(dataArr, ['id', action?.payload?.id]);
      if (index != -1 && dataArr) {
        dataArr[index].isVertical = action.payload.isVertical;
      }
      state.data = dataArr;
    },
  },
});

export const {setReelsDimensions} = reelDataSlice.actions;
export default reelDataSlice.reducer;
