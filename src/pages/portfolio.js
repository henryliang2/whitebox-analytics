import React from "react";
import { Link } from "gatsby";
import Navigation from '../components/Navigation';
import LandingCard from '../components/LandingCard';
import SEO from "../components/seo";
import '../styles/app.css';

const PortfolioPage = () => {

  return (
  <div className='container'>

  <SEO title="Portfolio" />
  <Navigation />

  </div>

  );
  
}

export default PortfolioPage;