import { createSlice } from '@reduxjs/toolkit'

const counterInitialState = {
  value: 0,
  showCounter: true,
}

export const counterSlice = createSlice({
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

export const counterActions = counterSlice.actions
export default counterSlice.reducer
