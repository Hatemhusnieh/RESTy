import React from 'react';
import './History.scss';

function History(props) {
  return (
    <div>
      <h3>History:</h3>
      {props.history.map((elm) => {
        return (
          <ul>
            <span className={[elm.method]}>{elm.method.toUpperCase()} </span> {elm.url}
          </ul>
        );
      })}
    </div>
  );
}

export default History;
