import React from 'react'
import DotHouzlogo from '../assets/DotHouz_logo.png'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={DotHouzlogo} alt="logo" />
        </div>
        <div className="navlink">
            <div className="navlink-list">
                <a href="">About</a>
                <a href="">Vision</a>
                <a href="">Mision</a>
                <a href="">Join Us</a>
                <a href="">Rewards</a>
                <a href="">Subscrible</a>
            </div>
            <button className="discover-btn">
                Discover
            </button>
        </div>
    </div>
  )
}
