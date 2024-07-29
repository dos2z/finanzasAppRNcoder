import { createSlice } from "@reduxjs/toolkit";



export const accountsSlice = createSlice({

    name: 'accounts',
    initialState: {
        value: {
            accounts: [],
            total: {
                name: 'Total',
                amount: null,
                icon: 'account-cash',
                color: 'gold',
                id: `total-account-cash-gold`
            }
        }
    },
    reducers: {
        getAccountsFromDB: (state, {payload}) =>{
            state.value.accounts = payload
        },

        addAccount: (state, { payload }) => {
            state.value.accounts.push(payload)

            const totalAmount = state.value.accounts.reduce((total, account) => (
                total += account.amount
            ), 0)
            state.value.total = {
                ...state.value.total,
                amount: totalAmount
            }
        },

        removeAccount: (state, {payload}) => {
            const updatedAccounts = state.value.accounts.filter(account => account.id !== payload.id)
            state.value.accounts = updatedAccounts
            const totalAmount = updatedAccounts.reduce((total, account) => (
                total += account.amount
            ), 0)
            state.value.total = {
                ...state.value.total,
                amount: totalAmount
            }
        },

        modifyAccount: (state, {payload}) => {
            const updatedAccounts = state.value.accounts.filter(account => account.id !== payload.id)
            updatedAccounts.push(payload)
            state.value.accounts = updatedAccounts
            const totalAmount = updatedAccounts.reduce((total, account) => (
                total += account.amount
            ), 0)
            state.value.total = {
                ...state.value.total,
                amount: totalAmount
            }
        }


    }
})

export const { addAccount, removeAccount, modifyAccount, getAccountsFromDB } = accountsSlice.actions


export default accountsSlice.reducer