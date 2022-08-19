import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addVcard,
} from '../../api/DataSvg';

const initialState = {
    vCardSvg: "",
    vCardSvgChinese: "", // initialState 要比個false value
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
                state.vCardSvgChinese = {
                    firstname: action?.payload?.data?.firstname,
                    lastname: action?.payload?.data?.lastname,
                    department: action?.payload?.data?.lastname,
                    jobtitle: action?.payload?.data?.lastname,
                    email: action?.payload?.data?.lastname,
                    officephonenumber: action?.payload?.data?.lastname,
                    mobilephonenumber: action?.payload?.data?.lastname,
                    organization: action?.payload?.data?.lastname,
                    urladdress: action?.payload?.data?.lastname,
                    address: action?.payload?.data?.lastname,
                }
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
