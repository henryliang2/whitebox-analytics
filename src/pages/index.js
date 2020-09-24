import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Navigation from '../components/Navigation';
import LandingCard from '../components/LandingCard';
import SEO from "../components/seo"
import '../styles/app.css'

const IndexPage = () => {


  // Get latest of Haihan's articles from Medium
  const [landingInsight, setLandingInsight] = useState({});

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hhl60492')
    .then(results => results.json())
    .then(data => {
      const article = data.items[0].content;
      console.log(article);
      const doc = new DOMParser().parseFromString(article, 'text/html')
      return doc;
      
    })
    .then(doc => {
      const snippet = doc.getElementsByClassName('medium-feed-snippet')[0].textContent;
      const imgsrc = doc.getElementsByTagName('img')[0].src;
      setLandingInsight({
        snippet,
        imgsrc
      })
    })
  }, [])

  // https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hhl60492

  const landingCards = [
    {
      'header': 'Our Mission',
      'imgsrc': '',
      'title': '',
      'text': 'Whitebox Analytics was founded on the vision of empowering organizations with data driven decision making.',
      'text2' : 'The backgrounds of our team members are diverse - ranging from physics to finance - but we share the common interest of understanding data.'
    },
    {
      'header': 'Insights',
      'imgsrc': landingInsight.imgsrc,
      'title': landingInsight.snippet,
      'text': ''
    },
    {
      'header': 'Success Stories',
      'imgsrc': 'skytrain-2.jpg',
      'title': 'Translink - Building the Future of Public Transport',
      'text': 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.'
    }
  ]

  return (
  <div className='container'>

    <SEO title="Home" />
    <Navigation />

    <div className='landing'>
      <img className='landing__image' alt='landing' src='tensorflow_saddle.png' />
      <div className='landing__text-container'>
        <p className='landing__text landing__text--bold'>Quantitative clarity to navigate an improbable future.</p>
        <p className='landing__text'>WhiteBox Analytics is a data science consulting firm founded on the vision that data science should empower the entire organization to make data driven decisions with robust methods.</p>
      </div>
    </div>

    <div className='landingcard__container'>
      { 
        landingCards.map((card, i) => 
          <LandingCard key={i} cardData={ landingCards[i] } />
        ) 
      }
    </div>    


  </div>
)}

// <Link to="/page-2/">Go to page 2</Link> <br />
// <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

export default IndexPage
