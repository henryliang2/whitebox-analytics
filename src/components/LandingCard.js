import React from 'react';
import '../styles/LandingCard.css';
import '../styles/app.css'

const LandingCard = (props) => {

  return (

    <div className='landingcard'>

      <div className='landingcard__triangle'></div>

      <div className='landingcard__header'>{ props.cardData.header }</div>

      <div className='landingcard__image' style={{ backgroundImage: `url(${ props.cardData.imgsrc })`}}></div>

      <div className='landingcard__title'>{ props.cardData.title }</div>

      <div className='landingcard__text'>{ props.cardData.text }</div>

      <div className='landingcard__text'>{ props.cardData.text2 }</div>
    
    </div>

  )

}

export default LandingCard;