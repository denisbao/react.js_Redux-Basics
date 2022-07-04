import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterInitialState = {
  value: 0,
  showCounter: true,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    increase(state, action) {
      state.value += action.payload
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

const authInitialState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
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

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store
