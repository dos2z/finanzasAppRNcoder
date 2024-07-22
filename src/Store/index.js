import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from '../features/accountsSlice'

export default configureStore({
    reducer: { accountsReducer }

})