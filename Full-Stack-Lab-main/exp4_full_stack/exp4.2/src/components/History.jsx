import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectHistory, clearHistory } from '../features/counter/counterSlice';

const History = () => {
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();

  return (
    <div className="history-container">
      <div className="history-header">
        <h3>Action History</h3>
        {history.length > 0 && (
          <button
            className="btn btn-small btn-danger"
            onClick={() => dispatch(clearHistory())}
          >
            Clear History
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="history-empty">No actions performed yet</p>
      ) : (
        <div className="history-list">
          {history.slice().reverse().map((item, index) => (
            <div key={index} className="history-item">
              <span className="history-action">{item.action}</span>
              <span className="history-value">Value: {item.value}</span>
              <span className="history-time">
                {new Date(item.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      )}

      {history.length > 0 && (
        <div className="history-stats">
          <p>Total Actions: <strong>{history.length}</strong></p>
        </div>
      )}
    </div>
  );
};

export default History;
