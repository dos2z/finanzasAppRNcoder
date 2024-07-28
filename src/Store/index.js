import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from '../features/financialAccounts/accountsSlice'
import categoriesReducer from "../features/categories/categoriesSlice";
import transactionsReducer from "../features/transactions/transactionsSlice";
import { shopApi } from "../services/shopServices";
import { authApi } from "../services/authServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/user/userSlice"

const store = configureStore({
    reducer: {
        accountsReducer,
        categoriesReducer,
        transactionsReducer,
        authReducer,

        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(shopApi.middleware)
            .concat(authApi.middleware)

});

setupListeners(store.dispatch)

export default store