import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
  selectCount
} from '../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(5);

  return (
    <div className="counter-container">
      <div className="counter-display">
        <h2>Counter Value</h2>
        <div className="counter-value">{count}</div>
      </div>

      <div className="counter-controls">
        <h3>Basic Controls</h3>
        <div className="button-group">
          <button
            className="btn btn-decrement"
            onClick={() => dispatch(decrement())}
          >
            - Decrement
          </button>
          <button
            className="btn btn-reset"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button
            className="btn btn-increment"
            onClick={() => dispatch(increment())}
          >
            + Increment
          </button>
        </div>
      </div>

      <div className="counter-controls">
        <h3>Advanced Controls</h3>
        <div className="amount-control">
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            className="amount-input"
          />
          <div className="button-group">
            <button
              className="btn btn-secondary"
              onClick={() => dispatch(decrementByAmount(incrementAmount))}
            >
              - Subtract Amount
            </button>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(incrementByAmount(incrementAmount))}
            >
              + Add Amount
            </button>
          </div>
        </div>
      </div>

      <div className="counter-info">
        <div className="info-item">
          <span className="info-label">Current State:</span>
          <span className="info-value">{count}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Status:</span>
          <span className="info-value">
            {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Zero'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
