import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from '../features/accountsSlice'
import categoriesReducer from "../features/categoriesSlice";
import transactionsReducer from "../features/transactionsSlice";
import { shopApi } from "../services/shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: { 
        accountsReducer, 
        categoriesReducer, 
        transactionsReducer,
    
    [shopApi.reducerPath]: shopApi.reducer,
    },

    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(shopApi.middleware)

});

setupListeners(store.dispatch)

export default store