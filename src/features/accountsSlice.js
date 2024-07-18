import { createSlice } from "@reduxjs/toolkit";

const [first, setfirst] = useState(second)



export const accountsSlice = createSlice({

    name: 'accounts',
    initialState: {
        value: {
            accounts: [],
            
        }
    },
    reducers: {
        addAccount: (state, { payload }) => {
            state.value.accounts.push(payload)
        },
        
    }
})