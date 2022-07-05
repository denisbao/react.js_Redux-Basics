import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counterSlice'

import classes from './Counter.module.css'

const Counter = () => {
  const counterValue = useSelector(state => state.counter.value)
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  function toggleCounterHandler() {
    dispatch(counterActions.toogleCounter())
  }
  function restartHandler() {
    dispatch(counterActions.restart())
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
  function decreaseHandler() {
    dispatch(counterActions.decrease(10)) // { type: UNIQUE_IDENTIFIER, payload: 10 }
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show ? counterValue : '--'}</div>
      <div>
        <button onClick={decrementHandler}>- 1</button>
        <button onClick={incrementHandler}>+ 1</button>
        <button onClick={decreaseHandler}>- 10</button>
        <button onClick={increaseHandler}>+ 10</button>
      </div>
      <div className={classes.config}>
        <button onClick={toggleCounterHandler}>{show ? 'Hide' : 'Show'}</button>
        <button onClick={restartHandler}>Restart</button>
      </div>
    </main>
  )
}

export default Counter
