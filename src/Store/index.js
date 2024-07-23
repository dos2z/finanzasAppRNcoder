import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from '../features/accountsSlice'
import categoriesReducer from "../features/categoriesSlice";

export default configureStore({
    reducer: { accountsReducer, categoriesReducer }

})