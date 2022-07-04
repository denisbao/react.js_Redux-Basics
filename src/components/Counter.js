import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/index'

import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector(state => state.counter.value)
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  function toggleCounterHandler() {
    dispatch(counterActions.toogleCounter())
  }
  function incrementHandler() {
    dispatch(counterActions.increment())
  }
  function decrementHandler() {
    dispatch(counterActions.decrement())
  }
  function increaseHandler() {
    dispatch(counterActions.increase(10)) // { type: UNIQUE_IDENTIFIER, payload: 10 }
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show ? counter : '--'}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {show ? 'Hide Counter' : 'Show Counter'}
      </button>
    </main>
  )
}

export default Counter
