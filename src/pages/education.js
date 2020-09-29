import React from "react";
import Layout from '../components/layout'
import SEO from "../components/seo";
import '../styles/app.css';
import '../styles/education.css';

const EducationPage = () => {

  return (
  <Layout>
    <SEO title="Education" />
    <div className='layout__header'>Education</div>
    <div className='education__jumbo'></div>

  </Layout>

  );
  
}

export default EducationPage;