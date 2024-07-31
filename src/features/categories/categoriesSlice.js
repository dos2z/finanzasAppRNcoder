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
        getExpensesCategoriesFromBD: (state, {payload}) =>{
            state.value.expensesCategories = [...payload]
        },
        getIncomesCategoriesFromBD: (state, {payload}) =>{
            state.value.incomesCategories = [...payload]
        },
        addExpensesCategory: (state, { payload }) => {
            state.value.expensesCategories.push(payload)
        },
        addIncomesCategory: (state, { payload }) => {
            state.value.incomesCategories.push(payload)
        },
       
        
    }
})

export const {addExpensesCategory, addIncomesCategory, getExpensesCategoriesFromBD, getIncomesCategoriesFromBD} = categoriesSlice.actions


export default categoriesSlice.reducer