import { createSlice } from '@reduxjs/toolkit'

const counterInitialState = {
  value: 0,
  showCounter: true,
}

export const CounterSlice = createSlice({
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
    decrease(state, action) {
      state.value -= action.payload
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter
    },
    restart(state) {
      state.value = 0
    },
  },
})

export const counterActions = CounterSlice.actions
