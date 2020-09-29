import React from 'react';
import { Link } from "gatsby";
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <Link to="/"><img alt='logo' src='/logo.png'/></Link>
      <div>
        <a href='/portfolio'>Portfolio</a>
        <a href='/insights'>Insights</a>
        <a href='/about'>About</a>
        <a href='/education'>Education</a>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;