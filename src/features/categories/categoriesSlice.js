import { createSlice } from "@reduxjs/toolkit";



export const categoriesSlice = createSlice({

    name: 'categories',
    initialState: {
        value: {
            expensesCategories: [],
            incomesCategories: [],
        }
    },
    reducers: {
        addExpensesCategory: (state, { payload }) => {
            if (payload.type === 'expenses') {
                state.value.expensesCategories.push(payload)
            }

        },
        addIncomesCategory: (state, { payload }) => {
            if (payload.type === 'incomes') {
                state.value.incomesCategories.push(payload)
            }
        },


    }
})

export const { addExpensesCategory, addIncomesCategory, getExpensesCategoriesFromBD, getIncomesCategoriesFromBD } = categoriesSlice.actions


export default categoriesSlice.reducer