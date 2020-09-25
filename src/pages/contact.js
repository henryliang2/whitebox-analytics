import React from "react";
import Navigation from '../components/Navigation';
import SEO from "../components/seo";
import '../styles/app.css';

const ContactPage = () => {

  return (
  <div className='container'>

  <SEO title="Contact" />
  <Navigation />

  <div className='contact__form'>

    <h2>Contact</h2>
    <form>
    
    </form>
  </div>

  </div>

  );
  
}

export default ContactPage;