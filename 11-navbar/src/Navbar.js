import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [menu, setMenu] = useState(links);
  const [icons, setIcons] = useState(social);
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null); // <div className='links-container'>
  const linksRef = useRef(null); // <ul className='links'>

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

      {/* <div
        className={`${
          showMenu ? 'links-container show-container' : 'links-container'
        }`}
      > */}
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          {menu.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className='social-icons'>
        {icons.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
