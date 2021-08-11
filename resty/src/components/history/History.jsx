import React from 'react';

function History(props) {
  return (
    <div>
      <h3>History:</h3>
      {props.history.map((elm) => {
        return (
          <span>
            {elm.method.toUpperCase()} {elm.url} <br />
          </span>
        );
      })}
    </div>
  );
}

export default History;
