import React from "react";
import { Link } from "gatsby";
import Navigation from '../components/Navigation';
import LandingCard from '../components/LandingCard';
import SEO from "../components/seo";
import '../styles/app.css';

const InsightsPage = () => {

  return (
  <div className='container'>

  <SEO title="Insights" />
  <Navigation />

  </div>

  );
  
}

export default InsightsPage;