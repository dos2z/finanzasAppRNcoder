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
            state.value.expensesCategories.push(payload)
        },
        addIncomeCategory: (state, { payload }) => {
            state.value.incomesCategories.push(payload)
        },
       
        
    }
})

export const {addExpensesCategory, addIncomeCategory} = categoriesSlice.actions


export default categoriesSlice.reducer