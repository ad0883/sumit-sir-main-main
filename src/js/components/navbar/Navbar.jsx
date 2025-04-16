import React, { useState, useEffect } from 'react';
import logo_file from '../../assets/logonew.png';
import { RiMenu2Line } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import '../../../css/components/navbar/navbar.css';

export const navData = [
  { id: 1, name: "Courses", link: "/#courses" },
  { id: 2, name: "Community", link: "https://chat.whatsapp.com/CUaHJArukwsEZM3Ez6hQtn" },
  { id: 3, name: "Mentors", link: "/#mentors" },
];

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 1000;

  useEffect(() => {
    const updateDimensions = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const toggleMenu = () => setMobileNav(!mobileNav);

  return (
    <div className="navbar-container">
      <div className="nav-content">
        {/* Logo */}
        <div className="nav-logo">
          <a href="/#"><img src={logo_file} alt="SprintCode Logo" /></a>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <div className="nav-links">
              <ul>
                {navData.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-actions">
              <a href="/join-us" className="join-us-button">JOIN US</a>
            </div>
          </>
        )}
        

        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="nav-menu-btn" onClick={toggleMenu}>
            <RiMenu2Line />
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileNav ? 'active' : ''}`}>
        <div className="mobile-nav-header">
          <img src={logo_file} alt="Logo" />
          <span className="close-btn" onClick={toggleMenu}><MdClose /></span>
        </div>
        <ul>
          {navData.map((item) => (
            <li key={item.id}>
              <a href={item.link} onClick={toggleMenu}>{item.name}</a>
            </li>
          ))}
          <li><a href="/login" onClick={toggleMenu}>Login</a></li>
          <li><a href="/join-us" className="join-us-button-mobile" onClick={toggleMenu}>JOIN US</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
