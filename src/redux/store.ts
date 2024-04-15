import {configureStore} from '@reduxjs/toolkit';
import reelDataReducer from './slices/reel-data-slice';

export const store = configureStore({
  reducer: {
    reelsData: reelDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
