import React from "react";
import Layout from '../components/Layout';
import SEO from "../components/seo";
import '../styles/app.css';
import '../styles/contact.css';
import { TextField } from '@material-ui/core';
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

          <TextField 
            label="Organization" 
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField 
            label="Email" 
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField 
            label="Message" 
            multiline
            rows={4}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
  
    </Layout>

  );
  
}

export default ContactPage;