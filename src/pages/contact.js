import React from "react";
import Layout from '../components/Layout';
import SEO from "../components/seo";
import '../styles/app.css';
import '../styles/contact.css';
import LogoSquare from './../../public/logo-square.png';

const ContactPage = () => {

  return (
  <Layout>

    <SEO title="Contact" />

      <div className='contact'>
        <div className='contact__brand-container'>
          <div className='contact__brand'>
            <img src={ LogoSquare } alt='logo' />
          </div>
        </div>
        <div className='contact__form'>

          <div className='layout__header'>Get in touch with us</div>

          <div className='contact__inputfield'>
            <label for='org' className='contact__label'>Organization</label>
            <input name='org' className='contact__inputbox' type='text' />
          </div>

          <div className='contact__inputfield'>
            <label for='email' className='contact__label'>Email</label>
            <input name='email' className='contact__inputbox' type='email' />
          </div>

          <div className='contact__inputfield'>
            <label for='message' className='contact__label'>Message</label>
            <textarea name='message' className='contact__inputbox' type='text' />
          </div>
          
        </div>
      </div>
  
    </Layout>

  );
  
}

export default ContactPage;