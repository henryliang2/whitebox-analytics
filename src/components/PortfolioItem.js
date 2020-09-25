import React from 'react';
import '../styles/PortfolioItem.css';

const PortfolioItem = (props) => {

  return (
    <div className='section'>
      <div className='portfolio-item'>
        
        { !props.isEven && 
          <div className='portfolio-item__image'><img src={ props.portfolioImgUrl} /></div>
        }

        <div className='portfolio-item__text-container'>
          <div className='portfolio-item__brand'><img src={ props.brandImgUrl }/></div>
          <div className='portfolio-item__header'>{ props.company }</div>
          <div className='portfolio-item__text'> { props.text }</div>
        </div>

        { props.isEven && 
          <div className='portfolio-item__image'><img src={ props.portfolioImgUrl} /></div>
        }

      </div>
    </div>
  );
}

export default PortfolioItem;