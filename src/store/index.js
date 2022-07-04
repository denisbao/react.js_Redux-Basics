import { createStore } from 'redux'

const initialState = {
  counter: 0,
  showCounter: true,
}

function reducerFunction(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: true,
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: true,
    }
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: true,
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
