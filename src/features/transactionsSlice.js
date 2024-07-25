import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        value: {
            expensesTransactions: [],
            incomesTransactions: [],
            totalExpenses: null,
            totalIncomes: null,
        }
    },
    reducers: {
        addExpense: (state, { payload }) => {
            state.value.expensesTransactions.push(payload)

            const totalAmount = state.value.expensesTransactions.reduce((total, transaction) => (
                total += Number(transaction.amount)
            ), 0)
            state.value = {
                ...state.value,
                totalExpenses: totalAmount,
            }

        }, 
        addIncome: (state, { payload }) => {
            state.value.incomesTransactions.push(payload)

            const totalAmount = state.value.incomesTransactions.reduce((total, transaction) => (
                total += Number(transaction.amount)
            ), 0)
            state.value.totalIncomes = totalAmount 

        },
        deleteTransaction: (state, {payload}) => {
            if(payload.type === 'expenses'){
               const updatedTransactions =  state.value.expensesTransactions.filter((transaction) => {
                return transaction.id !== payload.id
               })
               const totalAmount = state.value.totalExpenses + payload.amount
               state.value = {
                ...state.value,
                expensesTransactions: [...updatedTransactions],
                totalExpenses: totalAmount
               }
            }else{
                const updatedTransactions = state.value.incomesTransactions.filter((transaction)=>{
                    return transaction.id !== payload.id
                })
                const totalAmount = state.value.totalIncomes - payload.amount
                state.value = {
                    ...state.value,
                    incomesTransactions: [...updatedTransactions],
                    totalIncomes: totalAmount
                }
            }
        }

    }
})

export const { addExpense, addIncome, deleteTransaction} = transactionsSlice.actions

export default transactionsSlice.reducer