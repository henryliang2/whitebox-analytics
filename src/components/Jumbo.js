import React from 'react';
import './../styles/Jumbo.css'

const Jumbo = (props) => {

  return (
    <div className='jumbo'>
      <div className='jumbo__background' style={{ backgroundImage: `url(${ props.imgsrc })`}}></div>
      <div>
        <div className='jumbo__header'>{ props.header }</div>
        <div className='jumbo__text'>{ props.text}</div>
      </div>
    </div>
  );
}

export default Jumbo;