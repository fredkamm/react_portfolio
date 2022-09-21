import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h1 className='name'>Fred Kamm</h1>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <div className='navLinks'>
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
        </Col>
      </Row>
    </Container>
  );
}

export default NavTabs;
