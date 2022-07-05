import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './authSlice'
import { CounterSlice } from './counterSlice'

export const ReduxStore = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    auth: AuthSlice.reducer,
  },
})
