import React, { useEffect, useState } from 'react'
import DotHouzlogo from '../assets/DotHouz_logo.png'
import './navbar.css'
import { MenuIcon } from 'lucide-react';

export default function Navbar() {
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [ isOpenMenu, setIsOpenMenu ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMdScreen(window.innerWidth < 1025);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <div className="navbar">
        <div className="logo">
            <img src={DotHouzlogo} alt="logo" />
        </div>
        <div className="navlink">
            {isMdScreen ? ( 
                <div className="navlink-menu-btn">
                    <button className="nav-menu-btn" onClick={handleMenuToggle}><MenuIcon/></button>
                    {isOpenMenu ? (
                        <div className="navlink-menu">
                            <a href="">About</a>
                            <a href="">Vision</a>
                            <a href="">Mision</a>
                            <a href="">Join Us</a>
                            <a href="">Rewards</a>
                            <a href="">Subscrible</a>
                        </div>
                    ): null}
                </div>
            ):(
                <div className="navlink-list">
                    <a href="">About</a>
                    <a href="">Vision</a>
                    <a href="">Mision</a>
                    <a href="">Join Us</a>
                    <a href="">Rewards</a>
                    <a href="">Subscrible</a>
                </div>
            )}
            <button className="discover-btn">
                Discover
            </button>
        </div>
    </div>
  )
}
