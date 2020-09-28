import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/app.css';

const Layout = ({ children }) => {

  return (
    <React.Fragment>
        <div className='layout__container'>
          <Navigation />
          { children }
        </div>
      <Footer />
    </React.Fragment>
  );

}

export default Layout;
