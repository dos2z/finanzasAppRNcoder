import { createSlice } from "@reduxjs/toolkit";

//ordena las trasnacciones -ReViSaR el ORDEN
const sortTransactions = (transactions) => {
    const transactionsToSort = [...transactions]
    transactionsToSort.sort((a, b) => a.index - b.index)
    return transactionsToSort
}


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
            if (payload.type === 'expenses') {
                state.value.expensesTransactions.push(payload)

                const totalAmount = state.value.expensesTransactions.reduce((total, transaction) => (
                    total += Number(transaction.amount)
                ), 0)
                state.value = {
                    ...state.value,
                    totalExpenses: totalAmount,
                }
            }


        },
        addIncome: (state, { payload }) => {
            if (payload.type === 'incomes') {
                state.value.incomesTransactions.push(payload)
                const totalAmount = state.value.incomesTransactions.reduce((total, transaction) => (
                    total += Number(transaction.amount)
                ), 0)
                state.value.totalIncomes = totalAmount
            }


        },
        deleteTransaction: (state, { payload }) => {
            if (payload.type === 'expenses') {
                
                const updatedTransactions = state.value.expensesTransactions.filter((transaction) => {
                    return transaction.id !== payload.id
                })
                const totalAmount = Number(state.value.totalExpenses) + Number(payload.amount)
                state.value = {
                    ...state.value,
                    expensesTransactions: [...updatedTransactions],
                    totalExpenses: totalAmount
                }
            } else {
                const updatedTransactions = state.value.incomesTransactions.filter((transaction) => {
                    return transaction.id !== payload.id
                })
                const totalAmount = Number(state.value.totalIncomes) - Number(payload.amount)
                state.value = {
                    ...state.value,
                    incomesTransactions: [...updatedTransactions],
                    totalIncomes: totalAmount
                }
            }
        }

    }
})

export const { addExpense, addIncome, deleteTransaction } = transactionsSlice.actions

export default transactionsSlice.reducer