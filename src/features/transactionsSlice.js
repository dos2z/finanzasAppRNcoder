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
            state.value.expensesTransactions.push(payload)

        }, 
        addIncome: (state, { payload }) => {
            state.value.incomesTransactions.push(payload)

        }
    }
})

export const { addExpense, addIncome} = transactionsSlice.actions

export default transactionsSlice.reducer