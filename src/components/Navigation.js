import React from 'react';
import { Link } from "gatsby";
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <Link to="/"><img alt='logo' src='/logo.png'/></Link>
      <div>
        <a href='/insights'>Insights</a>
        <a href='/portfolio'>Portfolio</a>
        <a href='/education'>Education</a>
        <a href='/about'>About</a>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navigation;