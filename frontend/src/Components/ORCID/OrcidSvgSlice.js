import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    addorcid,
} from '../../api/OrcidData';

const initialState = {
    orcidSvg: "",
};

export const OrcidSvgSlice = createSlice({
    name: "orcidSvgQrcode",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addOrcidDataSvg.fulfilled, (state, action) => {
                // console.log(action?.payload?.data, "addOrcidData")
                state.orcidSvg = action?.payload?.data
            })
    }
})

export const addOrcidDataSvg = createAsyncThunk(
    'add/addOrcidDataSvg',
    async (payload) => {
        return await addorcid(payload);
    }
)

export const orcidSvg = (state) => state.orcidSvgQrcode.orcidSvg;

export default OrcidSvgSlice.reducer;