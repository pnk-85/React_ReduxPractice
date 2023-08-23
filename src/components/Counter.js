import {useSelector, useDispatch} from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  const incrementHandeler = () => {
      dispatch({type : 'Increment'})
  };

  const decrementHandler = () => {
      dispatch({ type : 'Decrement'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandeler}>Increment</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
