import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addVcard,
} from '../../api/DataSvg';

const initialState = {
    vCardSvg: "",
};

export const CreateSvgSlice = createSlice ({
    name: "createVcardSvg",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addVcardSvg.fulfilled, (state, action) => {
                state.vCardSvg = action?.payload?.data
            })
    }
})

export const addVcardSvg = createAsyncThunk (
    'add/addVcardSvg',
    async (payload) => {
        return await addVcard(payload);
    }
)

export const vCardSvg = (state) => state.createVcardSvg.vCardSvg;

export default CreateSvgSlice.reducer;