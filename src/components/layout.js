import React from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import '../styles/app.css';

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <Navigation />
          { children }
      <Footer />
    </React.Fragment>
  );

}

export default Layout;
