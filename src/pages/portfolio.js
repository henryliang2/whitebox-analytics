import React from "react";
import Layout from '../components/layout';
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
      'company': 'Save-On-Foods',
      'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'brandImgUrl': './../save-on-foods.svg',
      'portfolioImgUrl': './../save-on-foods-portfolio.jpg'
    },

  ]

  return (
  <Layout>

    <SEO title="Portfolio" />

    <div className='layout__header'>We're Proud of Our Work</div>

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

  </Layout>

  );
  
}

export default PortfolioPage;