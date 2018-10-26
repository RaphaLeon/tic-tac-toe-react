import React from 'react';

 export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick} onContextMenu={props.onContextMenu}>
        {props.value}
      </button>
    )
  }