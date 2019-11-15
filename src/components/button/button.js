import React from 'react';
import './button.css'


const Button = (props) => {
  return (
    <div className="Button">
    <div className={`column-${props.cols}`}>
      <button onClick={() => props.action(props.symbol)}>{props.symbol}</button>
    </div>
    </div>
  );
};

export default Button;
