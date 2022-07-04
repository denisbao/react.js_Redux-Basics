import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  function incrementHandler() {
    dispatch({ type: 'increment' })
  }
  function decrementHandler() {
    dispatch({ type: 'decrement' })
  }
  function increaseHandler() {
    dispatch({
      type: 'increase',
      amount: 5,
    })
  }
  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
