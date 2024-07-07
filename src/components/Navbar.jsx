import React from 'react';

const Navbar = () => {
    function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }
    function hideSidebar() {
      const sidebar = document.querySelector('.sidebar');
      sidebar.style.display = 'none';
    }
  return (
    <>
      <div
        className='container nav_bar'
        data-aos='fade-down'
        data-aos-duration='1000'
      >
        <div className='left'>Portfolio</div>
        <div className=' sidebar'>
          <li onClick={hideSidebar}>
            <a href='#'>
              <img src='./images/close.png' alt='' />
            </a>
          </li>
          <a href='#home' className='nav_items'>
            Home
          </a>
          <a href='#experience' className='nav_items'>
            Experience
          </a>
          <a href='#projects' className='nav_items'>
            {' '}
            Projects
          </a>
          <a href='#skills' className='nav_items'>
            Skils
          </a>
          <a href='#contact' className='nav_items'>
            Contact
          </a>
        </div>

        <div className='phone'>
          <div className="hide">
            
          <a href='#home' className='nav_items'>
            Home
          </a>
          <a href='#experience' className='nav_items'>
            Experience
          </a>
          <a href='#projects' className='nav_items'>
            {' '}
            Projects
          </a>
          <a href='#skills' className='nav_items'>
            Skils
          </a>
          <a href='#contact' className='nav_items'>
            Contact
          </a>
          </div>
          <li className='men-button' onClick={showSidebar}>
            {' '}
            <a href='#'>
              {' '}
              <img src='./images/manu.png' alt='' />
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
