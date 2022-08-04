import { configureStore } from "@reduxjs/toolkit";
import vCardReducer from './Slices/vCardSlice';
import HomePageReducer from '../Components/Home/HomeSlice';
import OrcidReducer from '../Components/ORCID/OrcidSlice';

const store = configureStore({
    reducer: { 
        vCardQrcodes: vCardReducer,
        HomePageRecord: HomePageReducer,
        orcidRecord: OrcidReducer,
    }
});

export default store;