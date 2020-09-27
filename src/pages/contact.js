import React from "react";
import Navigation from '../components/Navigation';
import SEO from "../components/seo";
import '../styles/app.css';
import '../styles/contact.css';
import LogoSquare from './../../public/logo-square.png';

const ContactPage = () => {

  return (
  <div className='layout__container'>

    <SEO title="Contact" />
    <Navigation />

      <div className='contact'>
        <div className='contact__brand-container'>
          <div className='contact__brand'>
            <img src={ LogoSquare } alt='logo' />
          </div>
        </div>
        <div className='contact__form'>

          <div className='layout__header'>Get in touch with us</div>

          <label>Organization</label>
          <input type='text'></input>

          <label>Email</label>
          <input type='text'></input>

          <label>Message</label>
          <textarea></textarea>
        </div>
      </div>
  
  </div>

  

  );
  
}

export default ContactPage;