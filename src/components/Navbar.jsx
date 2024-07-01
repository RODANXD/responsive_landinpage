import React from 'react'
import logo from '../assets/logo.png'
import '../components/Navbar.css'
import { IoIosSearch } from "react-icons/io";
import { FaCompass, FaBookmark } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch, FaBell, FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Hobbycue logo" style={{height:"70px", width:"320px"}}/>
      </a>
      <form className="d-flex flex-grow-1 mx-4">
        <div className="input-group">
          <input className="form-control w-sm-25" type="search" placeholder="Search here..." aria-label="Search"/>
          <button className="btn btn-purple border border-1" id='btn' type="submit"><IoIosSearch/></button>
        </div>
      </form>
      <div className="d-flex align-items-center d-lg-flex d-sm-none">
        <a href="#" className="nav-link text-purple mx-2"><FaCompass /> Explore</a>
        <a href="#" className="nav-link text-purple mx-2"><FaBookmark /> Hobbies</a>
        <a href="#" className="nav-link text-purple mx-2"><IoNotifications /></a>
        <a href="#" className="nav-link text-purple mx-2"><FaShoppingCart /></a>
        <button className="btn btn-outline-purple ms-2">Sign In</button>
      </div>
      <div className="d-flex d-lg-none">
            <button className="btn"><FaSearch /></button>
            <button className="btn"><FaBell /></button>
            <button className="btn"><FaBars /></button>
          </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar
