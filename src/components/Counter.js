import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css'

const Counter = () => {
  // useSelector automaticly make a subscription to the redux store
  // and will keep this component updated when the state eventualy changes
  const counter = useSelector(state => state.counter)

  // useDispatch will dispatch an Action to the Redux store
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }
  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
