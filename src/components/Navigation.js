import React from 'react';
import { Link } from "gatsby";
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <Link to="/"><img alt='logo' src='/logo.png'/></Link>
      <div>
        <Link to='/portfolio'>Portfolio</Link>
        <Link to='/insights'>Insights</Link>
        <Link to='/about'>About</Link>
        <Link to='/education'>Education</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;