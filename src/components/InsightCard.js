import React from 'react';
import '../styles/InsightCard.css';
import '../styles/app.css';

const InsightCard = (props) => {

  const pubDate = new Date(props.pubDate);

  const day = pubDate.getDate();
  const month = pubDate.toLocaleString('default', { month: 'long' })
  const year = pubDate.getFullYear();
  

  return (
    <div className='insightcard'>
      <div className='insightcard__text'>
        <div className='insightcard__text-sub'>
          <div className='insightcard__title'>
            <a href={ props.link } target='_blank' rel='noopener noreferrer'>{ props.title }</a>
          </div>
          <div className='insightcard__date'>{ `${month} ${day}, ${year}` }</div>
          <div className='insightcard__author'>{ `by ${props.author}` }</div>
          <div className='insightcard__cta'>
            <a href={ props.link } target='_blank' rel='noopener noreferrer'>Read on Medium >></a>
          </div>
        </div>
      </div>
      <div className='insightcard__image' style={ {backgroundImage: `url(${props.thumbnail}`} }></div>
    </div>
  );

}

export default InsightCard;