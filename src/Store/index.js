import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from '../features/accountsSlice'
import categoriesReducer from "../features/categoriesSlice";
import transactionsReducer from "../features/transactionsSlice";

export default configureStore({
    reducer: { accountsReducer, categoriesReducer, transactionsReducer }

})