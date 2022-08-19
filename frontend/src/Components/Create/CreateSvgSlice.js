import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addVcard,
} from '../../api/DataSvg';

const initialState = {
    vCardSvg: "",
    vCardSvgChinese: "",
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
            .addCase(addVcardSvgChinese.fulfilled, (state, action) => {
                console.log(action?.payload, "addVcardSvgChinese")
                state.vCardSvgChinese = action?.payload?.data?.firstname
            })
    }
})

export const addVcardSvg = createAsyncThunk (
    'add/addVcardSvg',
    async (payload) => {
        return await addVcard(payload);
    }
)

export const addVcardSvgChinese = createAsyncThunk (
    'add/addVcardSvgChinese',
    async (payload) => {
        return await addVcard(payload);
    }
)

export const vCardSvg = (state) => state.createVcardSvg.vCardSvg;

export const vCardSvgChinese = (state) => state.createVcardSvg.vCardSvgChinese;

export default CreateSvgSlice.reducer;
