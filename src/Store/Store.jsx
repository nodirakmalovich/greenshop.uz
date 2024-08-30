
import { configureStore } from '@reduxjs/toolkit';
import singleDataReducer from './SingleDataSlice';

export const store = configureStore({
    reducer: {
        singleData: singleDataReducer,
    },
});
