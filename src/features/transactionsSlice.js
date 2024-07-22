import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        value: {
            expensesTransactions: [],
            incomesTransactions: [],
        }
    },
    reducers: {
        addExpense: (state, { payload }) => {

        },
        addIncome: (state, { payload }) => {

        }
    }
})

export const { addExpense, addIncome} = transactionsSlice.actions

export default transactionsSlice.reducer