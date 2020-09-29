import React from 'react';
import { Link } from 'gatsby';
import '../styles/app.css'
import '../styles/Footer.css'

const Footer = () => {


  return (
      <div className='footer'>
      
        <div className='layout__container'>
        
          <div className='footer__inner'>

            <img src='./logo-dark.png' alt='Footer Logo'/>

            <div className='footer__address'>
              123 Bautista Road, <br/>
              Vancouver, BC &nbsp;&nbsp;&nbsp; V1V 1V1 <br/><br/>
              example@gmail.com
            </div>


            <div className='footer__links'>
              <Link to='/portfolio'>Portfolio</Link>
              <Link to='/insights'>Insights</Link>
              <Link to='/about'>About</Link>
              <Link to='/education'>Education</Link>
              <Link to="/contact">Contact</Link>
            </div>

          </div>

        </div>
      
      </div>
  )
}

export default Footer;