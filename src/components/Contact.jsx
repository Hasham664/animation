import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { CiLinkedin } from 'react-icons/ci';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaGithubSquare } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';


const Contact = () => {
  return (
    <>
      <div className='container contact' id='contact'>
        <h1>Contact ME</h1>
        <div
          className='contact-icon'
          data-aos='zoom-in-up'
          data-aos-duration='1000'
        >
          <a href='https://www.instagram.com/its_hasham05/' className='items'>
            <FaInstagram className='icons' />
          </a>
          <a href='' className='items'>
            <CiFacebook className='icons' />
          </a>
          <a href='https://www.linkedin.com/feed/' className='items'>
            <CiLinkedin className='icons' />
          </a>
          <a href='' className='items'>
            <FaSquareXTwitter className='icons' />
          </a>
          <a href='https://github.com/' className='items'>
            <FaGithubSquare className='icons' />
          </a>
          <a href='https://mail.google.com/mail/u/0/#inbox' className='items'>
            <BiLogoGmail className='icons' />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact