import React, { useEffect, useState } from 'react'
import DotHouzlogo from '../assets/DotHouz_logo.png'
import './navbar.css'
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-scroll';
import { aboutNavList } from '../library/about-nav';

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
                            {aboutNavList.map((item, index) => (
                                <span key={index} className='navlink-item'>
                                    <Link className="nav-link" activeClass="active" smooth spy to={item.value}>{item.title}</Link>
                                </span>
                            ))}
                        </div>
                    ): null}
                </div>
            ):(
                <div className="navlink-list">
                    {aboutNavList.map((item, index) => (
                        <span key={index} className='navlink-item'>
                            <Link className="nav-link" activeClass="active" smooth spy to={item.value}>{item.title}</Link>
                        </span>
                    ))}
                </div>
            )}
            <button className="discover-btn">
                Discover
            </button>
        </div>
    </div>
  )
}
