import { createSlice } from '@reduxjs/toolkit'

const authInitialState = {
  isAuthenticated: false,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
  },
})

export const authActions = AuthSlice.actions
