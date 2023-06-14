import React, { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';
import { LINKS } from '../../assets/constants';

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    if(screenSize < 900) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }, [screenSize]);

  const renderLinks = LINKS?.map((link, idx) => {
    return (
      <NavLink
        key={idx}
        className='mp__sidebar-link'
        to={link.to}
        onClick={() => setActiveMenu(false)}
      >
        {<link.icon />}
        {link.name}
      </NavLink>
    );
  });

  return (
    <>
      {mobileMenu ?
        <div className={`mp__sidebar-mobile ${activeMenu ? 'h-full' : ''}`}>
          {!activeMenu ?
            <HiOutlineMenu onClick={() => setActiveMenu(!activeMenu)} />
          :
            <>
              <RiCloseFill onClick={() => setActiveMenu(!activeMenu)} />
              <div className="mp__sidebar-links slider">
                {renderLinks}
              </div>
            </>
          }
        </div> 
      :
        <div className='mp__sidebar'>
          <div className="mp__sidebar-logo">
            <FaSpotify />
            <span>Spotify Charts</span>
          </div>
          <div className="mp__sidebar-links">
            {renderLinks}
          </div>
        </div>
      }
    </>
  );
};

export default Sidebar;