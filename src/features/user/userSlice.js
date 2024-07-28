import { createSlice } from "@reduxjs/toolkit";



export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            user: null,
            token: null,
            localId: 'santino',
            imageProfile: null,
        }
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.value.user = payload.email
            state.value.token = payload.idToken
            state.value.localId = payload.localId
        },
        clearUser: (state) => {
            state.value.user = null
            state.value.token = null
            state.value.localId = null
            state.value.imageProfile = null
        },
        setProfileImage: (state, { payload }) => {
            state.value.imageProfile = payload
        }
    }
})

export const { setUser, clearUser, setProfileImage } = authSlice.actions
export default authSlice.reducer