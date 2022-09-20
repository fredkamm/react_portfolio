import React from 'react';
// import '../styles/main.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class='navBar'>
      <h1 class='name'>Fred Kamm</h1>
      <div id='navLinks'>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>

        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>

        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>

        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>

      </div>
    </div>
  );
}

export default NavTabs;
