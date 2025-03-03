import FilledButton from '../buttons/FilledButton';
import OutlinedButton from '../buttons/OutlinedButton';
import './index.css';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  const handleScroll = () => {
    const appWrapper = document.getElementById('app-wrapper');
    isScrolledRef.current = appWrapper.scrollTop > 0;
    setIsScrolled(isScrolledRef.current);
  };

  useEffect(() => {
    const appWrapper = document.getElementById('app-wrapper');

    appWrapper.addEventListener('scroll', handleScroll);
    return () => appWrapper.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="nav-wrapper">
      <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>

        <div className="links"></div>
        <div className="btns">
          <OutlinedButton text={'Join Waitlist'} />
          <FilledButton text={'Contact Us'} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
