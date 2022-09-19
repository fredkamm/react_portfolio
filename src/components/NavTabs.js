import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class='navBar'>
      <h1>Fred Kamm</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            //  TODO: Add a comment explaining what this logic is doing

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            //  TODO: Add a comment explaining what this logic is doing

            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
