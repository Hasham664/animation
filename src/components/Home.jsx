import React, { useRef } from 'react'
import { useEffect } from 'react';
import Typed from 'typed.js'
const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings:[
        'Welcom to my Profile',
        'My name is M.Hasham',
        "i'm Frontend developer"
      ],
      typeSpeed:50,
      backSpeed:50,
      loop:true,
    };

    const typed = new Typed(typedRef.current, options);
  
    return () => {
     typed.destroy();
    };
  }, [])
  
    return (
      <div className='home container' id='home'>
        <div className='left' data-aos='fade-up-right' data-aos-duration='1000'>
          <h1 ref={typedRef}></h1>
          <a href='' className='btn btn-outline-warning'>
            {' '}
            Download Resume
          </a>
        </div>
        <div className='right' data-aos='fade-up-left' data-aos-duration='1000'>
          <div className='img'>
            <img src='./images/hero.avif' alt='' />
          </div>
        </div>
      </div>
    );
}

export default Home