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

        },
        deleteTransaction: (state, {payload}) => {
            if(payload.type === 'expenses'){
               const updatedTransactions =  state.value.expensesTransactions.filter((transaction) => {
                return transaction.id !== payload.id
               })
               console.log(payload);
               state.value = {
                ...state.value,
                expensesTransactions: [...updatedTransactions]
               }
            }else{
                const updatedTransactions = state.value.incomesTransactions.filter((transaction)=>{
                    return transaction.id !== payload.id
                })
                state.value = {
                    ...state.value,
                    incomesTransactions: [...updatedTransactions]
                }
            }
        }

    }
})

export const { addExpense, addIncome, deleteTransaction} = transactionsSlice.actions

export default transactionsSlice.reducer