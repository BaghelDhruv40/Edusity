import React, { useEffect, useState } from 'react'
import {Link} from "react-scroll";
import './Navbar.css'
import logo from'../../assets/logo.png'
import menu_icon from'../../assets/menu-icon.png'
export default function Navbar() {
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
window.scrollY>560?setSticky(true):setSticky(false);
    })
  },[])
  const [mobileMenu,setMobileMenu]=useState(false);
  function toggleMenu() {
    mobileMenu?setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky?'dark-nav':""}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?"":"hide-mobile-menu"}>
          
        <li><Link to="hero"smooth={true} offset={0}>Home</Link></li>
        
        <li><Link to="program" smooth={true} offset={-300}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-200}>About</Link></li>
        <li><Link to="campus" smooth={true} offset={-200}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-220}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-200} className='btn'>Contact us</Link></li>
        </ul>
        <img onClick={toggleMenu} className='menu-icon' src={menu_icon} alt="" />
    </nav>
  )
}
