import { useSelector } from 'react-redux'

import classes from './Counter.module.css'

const Counter = () => {
  // useSelector automaticly make a subscription to the redux store
  // and will keep this component updated when the state eventualy changes
  const counter = useSelector(state => state.counter)

  const toggleCounterHandler = () => {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
