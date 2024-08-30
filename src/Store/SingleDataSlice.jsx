
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    singleData: null,
};

const singleDataSlice = createSlice({
    name: 'singleData',
    initialState,
    reducers: {
        setSingleData: (state, action) => {
            state.singleData = action.payload;
        },
    },
});

export const { setSingleData } = singleDataSlice.actions;
export default singleDataSlice.reducer;
