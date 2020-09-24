import React from "react";
import { Link } from "gatsby";
import Navigation from '../components/Navigation';
import LandingCard from '../components/LandingCard';
import SEO from "../components/seo"
import '../styles/app.css'

const IndexPage = () => {

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
      'imgsrc': 'NOAA.jpg',
      'title': 'Analyzing Climate Patterns with Self-Organizing Maps (SOMs)',
      'text': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
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
