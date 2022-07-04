import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch()

  function toggleCounterHandler() {
    dispatch({ type: 'toogle' })
  }
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

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show ? counter : '--'}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>
        {show ? 'Hide Counter' : 'Show Counter'}
      </button>
    </main>
  )
}

export default Counter
