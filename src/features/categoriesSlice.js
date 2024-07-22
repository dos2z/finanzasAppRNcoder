import { createSlice } from "@reduxjs/toolkit";



export const categoriesSlice = createSlice({

    name: 'categories',
    initialState: {
        value: {
            expensesCategories: [],  
            incomeCategories: [], 
        }
    },
    reducers: {
        addExpensesCategory: (state, { payload }) => {
            state.value.billCategories.push(payload)
        },
        addIncomeCategory: (state, { payload }) => {
            state.value.incomeCategories.push(payload)
        },
       
        
    }
})

export const {addExpensesCategory, addIncomeCategory} = categoriesSlice.actions


export default categoriesSlice.reducer