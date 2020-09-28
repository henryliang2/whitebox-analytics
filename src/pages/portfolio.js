import React from "react";
import Layout from '../components/layout';
import PortfolioItem from '../components/PortfolioItem';
import SEO from "../components/seo";
import '../styles/app.css';

const PortfolioPage = () => {

  const items = [
    {
      'company': 'Lululemon Athletica',
      'text': 'We were consulted by Lululemon Athletica to help improve their technical clothing line, applying machine learning techniques to model the anatomy and biomechanics of the human body.',
      'brandImgUrl': './../lululemon.png',
      'portfolioImgUrl': './../lululemon-portfolio.jpg'
    },
    {
      'company': 'Translink',
      'text': 'We worked with Translink, the municipal public transport authority for the Vancouver area, to help discover pain points and sources of congestion in Vancouver',
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