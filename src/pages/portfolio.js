import React from "react";
import Layout from '../components/layout';
import Jumbo from '../components/Jumbo';
import PortfolioItem from '../components/PortfolioItem';
import SEO from "../components/seo";
import '../styles/app.css';

const PortfolioPage = () => {

  const items = [
    {
      'company': 'Lululemon Athletica',
      'text': 'We were brought into Lululemon’s R&D lab to apply advanced data science techniques to the research of human motion. Our primary focus was to develop novel methods to analyze the biometric data of runners. A collaborative effort led to some key discoveries in body movement and apparel comfort. These discoveries have defined critical metrics for the construction of apparel within the company.',
      'brandImgUrl': './../lululemon.png',
      'portfolioImgUrl': './../lululemon-portfolio.jpg'
    },
    {
      'company': 'Translink',
      'text': 'WhiteBox was asked to help understand ridership using transportation and social media data. We have been collaborating over the past 4 years in building the future of public transportation. Translink won the APTA 2019 Outstanding Public Transportation System Achievement Award. This award represents the largest transportation systems in North America: providing 20 million or more annual passenger trips.',
      'brandImgUrl': './../translink.png',
      'portfolioImgUrl': './../translink-portfolio.jpg'
    },
    {
      'company': 'Best Buy',
      'text': 'Best Buy wanted a deep dive of their brand sentiment on social media platforms. Their priority was an analysis of brand sentiment using machine learning and the optimization of social media posts. We built a sentiment predictor that outperformed any publicly available models and recommended tweet composition strategies to increase tweet exposure. Our tweet composition strategies had predicted cost savings of over $150k+ in comparison to paid ads.',
      'brandImgUrl': './../bestbuy.svg',
      'portfolioImgUrl': './../bestbuy-portfolio.jpg'
    },
    {
      'company': 'Save-On-Foods',
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'brandImgUrl': './../save-on-foods.svg',
      'portfolioImgUrl': './../save-on-foods-portfolio.jpg'
    },

  ]

  return (
  <Layout>

    <SEO title="Portfolio" />

    <Jumbo 
      header = "We're Proud of Our Work."
      text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
      imgsrc = './../portfolio-jumbo.jpg'  
    />

    <div className='layout__container'>

      <div className='layout__header'>Success Stories</div>

      {
        items.map((item, i) => 
        
          <PortfolioItem 
            key={i}
            company = { item.company }
            text = { item.text }
            brandImgUrl = { item.brandImgUrl }
            portfolioImgUrl = { item.portfolioImgUrl }
            isEven = { i % 2 === 0 }
          />)
      }

    </div>

  </Layout>

  );
  
}

export default PortfolioPage;