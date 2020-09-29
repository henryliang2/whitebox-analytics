import React from "react";
import Layout from '../components/layout'
import Jumbo from '../components/Jumbo'
import SEO from "../components/seo";
import '../styles/app.css';
import '../styles/education.css';

const EducationPage = () => {

  return (
  <Layout>
    <SEO title="Education" />

    <Jumbo 
      header = "Today's Students. Tomorrow's Data Scientists."
      text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      imgsrc = './../education-jumbo.jpg'  
    />

    <div className='layout__container'></div>

  </Layout>

  );
  
}

export default EducationPage;