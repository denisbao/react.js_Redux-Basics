import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true,
}

createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.amount
    },
    toogleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

function reducerFunction(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    }
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    }
  }
  if (action.type === 'toogle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    }
  }
  return state
}

const store = createStore(reducerFunction)

export default store
