import React from "react";
import Layout from '../components/layout'
import SEO from "../components/seo";
import '../styles/app.css';
import '../styles/about.css';

const AboutPage = () => {

  const profiles = [
    {
      name: 'Dharu Ravi',
      imgsrc: './dharu.webp',
      credentials: 'BCom. Operations Research ',
      desc: 'Dharu brings extensive experience in managing large, complex, cross-functional software and data projects. Dharu is responsible for securing and managing the capstone projects as well as building the Vancouver data science community.'
    },
    {
      name: 'Dustin Johnson',
      imgsrc: './dustin.webp',
      credentials: 'MSc. Statistics',
      desc: 'Currently a full-time data scientist, Dustin brings a solid statistical background and an in-depth understanding of the latest tools and techniques to analyze data. He is the driving force behind AQM’s vision and long-term goals.'
    },
    {
      name: 'Haihan Lan',
      imgsrc: './haihan.webp',
      credentials: 'BASc. Electrical Engineering',
      desc: 'Currently a full-time data scientist with extensive experience developing systems software, Haihan brings a solid working understanding of programming in C++, C# and various other languages. He is also a published researcher in the field of Applied Mathematics.'
    },
  ]

  return (
  <Layout>
  <SEO title="About" />

    <div className='layout__header'>Our Team</div>
  
    <div className='profilecard__container'>

      {
        profiles.map(profile => 
          <div className='profilecard'>
            <div className='profilecard__image'><img src={ profile.imgsrc } /></div>
            <div className='profilecard__name'>{ profile.name }</div>
            <div className='profilecard__credentials'>{ profile.credentials }</div>
            <div className='profilecard__desc'>{ profile.desc }</div>
          </div>
        )
      }

    </div>

  </Layout>
  );
  
}

export default AboutPage;