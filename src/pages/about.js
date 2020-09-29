import React from "react";
import Layout from '../components/layout'
import Jumbo from '../components/Jumbo'
import SEO from "../components/seo";
import '../styles/app.css';
import '../styles/about.css';

const AboutPage = () => {

  const profiles = [
    {
      name: 'Dharu Ravi',
      imgsrc: './../dharu.webp',
      credentials: 'BCom. Operations Research ',
      desc: 'Dharu brings extensive experience in managing large, complex, cross-functional software and data projects.'
    },
    {
      name: 'Dustin Johnson',
      imgsrc: './../dustin.webp',
      credentials: 'MSc. Statistics',
      desc: 'Currently a full-time data scientist, Dustin is the driving force behind WhiteBox Analytics’ vision and long-term goals.'
    },
    {
      name: 'Haihan Lan',
      imgsrc: './../haihan.webp',
      credentials: 'BASc. Electrical Engineering',
      desc: 'Currently a full-time data scientist with extensive experience developing systems software. He is also a published researcher in Applied Mathematics.'
    },
  ]

  return (
  <Layout>
  <SEO title="About" />

    <Jumbo 
      header = 'Committed to Innovation'
      text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      imgsrc = './../about-jumbo.jpg'
    />

    <div className='layout__container'>

    <div className='layout__header'>Meet Our Team</div>
  
      <div className='profilecard__container'>

        {
          profiles.map(profile => 
            <div className='profilecard'>
              <div className='profilecard__image'><img src={ profile.imgsrc } alt={`${profile.name}-profile`}/></div>
              <div className='profilecard__name'>{ profile.name }</div>
              <div className='profilecard__credentials'>{ profile.credentials }</div>
              <div className='profilecard__desc'>{ profile.desc }</div>
            </div>
          )
        }

      </div>

    </div>

  </Layout>
  );
  
}

export default AboutPage;