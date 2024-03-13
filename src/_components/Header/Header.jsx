/* eslint-disable no-unused-vars */
import './Header.css';
import { useState, useEffect } from 'react';
import SiteBrand from '../../_Components/SiteBrand/SiteBrand';
import MobileNav from '../../_Components/Navigation/MobileNavigation/MobileNav';
import MobileMenu from '../../_Components/Navigation/MobileNavigation/MobileMenu';
import DesktopNav from '../../_Components/Navigation/DesktopNavigation/DesktopNav';

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const breakpoint = 769;
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);
  return width < breakpoint ? (
    <header
      className='header-container'
      style={{
        borderBottomLeftRadius: isMobileMenuActive ? '0' : '0.4rem',
        borderBottomRightRadius: isMobileMenuActive ? '0' : '0.4rem',
      }}
    >
      <div className='header-content'>
        <SiteBrand />
        <MobileNav />
      </div>
      <MobileMenu />
    </header>
  ) : (
    <header className='header-container'>
      <div className='header-content'>
        <SiteBrand />
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
