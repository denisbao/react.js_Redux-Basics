import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterInitialState = {
  counter: 0,
  showCounter: true,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.payload
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

const store = configureStore({
  reducer: counterSlice.reducer,
})

export const counterActions = counterSlice.actions
export default store
