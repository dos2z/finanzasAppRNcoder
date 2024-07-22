import { createSlice } from "@reduxjs/toolkit";



export const accountsSlice = createSlice({

    name: 'accounts',
    initialState: {
        value: {
            accounts: [],  
            total: null, 
        }
    },
    reducers: {
        addAccount: (state, { payload }) => {
            state.value.accounts.push(payload)

           const total =  state.value.accounts.reduce((total, account)=>(
                total += account.amount
            ),0)
            state.value = {...state.value,  
                total}
        },
       
        
    }
})

export const {addAccount} = accountsSlice.actions


export default accountsSlice.reducer