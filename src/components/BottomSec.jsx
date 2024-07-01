import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from '../assets/img2.png'
import image from '../assets/image.png'

import { FaFacebook, FaGoogle, FaTwitter, FaInstagram, FaPinterest, FaTelegram, FaYoutube } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { FaRegCirclePlay } from "react-icons/fa6";

const BottomSec = () => {
  return (
    <>
      <div className='container-fluid' style={{ backgroundColor: "#F7FDFF" }}>
        <div className=' d-flex flex-row justify-content-center p-4'>
          <div className=' text-start rounded border border-dark p-3 w-75 bg-white gap-4 d-flex flex-column'>
            <div className=' d-flex align-items-center mb-2'>
              <FaPlusCircle className='me-2' style={{color:"#2980B9", fontSize:"30px"}} />
              <h5 className='mb-0'>Add your own</h5>
            </div>
            <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page</p>
            <button className='btn btn-outline-dark' style={{width:"140px"}}>Add new</button>
          </div>
        </div>
      </div>

      <div className="container bg-light p-4 rounded">
      <div className="row">
        <div className="col-12">
          <h2 className="text-start mb-4 d-flex align-items-center gap-4">
            <span className="display-6 text-primary pb-2"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_4729)">
<circle cx="10" cy="10" r="30" transform="rotate(-180 10 10)" fill="white"/>
<path d="M20 40.0005C31.0277 40.0005 40 31.0282 40 20.0005C40 16.7252 39.1373 13.6637 37.7383 10.9341L36 7.99854L33 4.99854L29.0566 2.2583C26.3293 0.862223 23.2723 0.000490634 20 0.000490347C8.9723 0.000489383 2.71253e-06 8.97278 1.74846e-06 20.0005C7.84383e-07 31.0282 8.97229 40.0005 20 40.0005ZM26 26.9985C23.791 26.9985 22 25.2075 22 22.9985C22 22.9125 22.0204 22.8316 22.0254 22.7466C22.0114 22.6656 22 22.5826 22 22.4966C22 22.2216 22.0526 15.7084 26.5996 12.2974C26.8696 12.0954 27.185 11.9966 27.498 11.9966C27.954 11.9966 28.4042 12.2051 28.6992 12.5981C29.1962 13.2611 29.0624 14.2008 28.4004 14.6978C26.8924 15.8288 26.0568 17.5196 25.5898 19.0396C25.7268 19.0256 25.859 18.9985 26 18.9985C28.209 18.9985 30 20.7895 30 22.9985C30 25.2075 28.209 26.9985 26 26.9985ZM14 26.9985C11.791 26.9985 10 25.2075 10 22.9985C10 22.9125 10.0204 22.8316 10.0254 22.7466C10.0114 22.6656 10 22.5826 10 22.4966C10 22.2216 10.0526 15.7084 14.5996 12.2974C14.8696 12.0954 15.185 11.9966 15.498 11.9966C15.954 11.9966 16.4042 12.2051 16.6992 12.5981C17.1962 13.2611 17.0624 14.2008 16.4004 14.6978C14.8924 15.8288 14.0568 17.5195 13.5898 19.0396C13.7268 19.0256 13.859 18.9985 14 18.9985C16.209 18.9985 18 20.7895 18 22.9985C18 25.2075 16.209 26.9985 14 26.9985Z" fill="#8064A2"/>
</g>
<defs>
<clipPath id="clip0_1_4729">
<rect width="40" height="40" fill="white" transform="translate(40 40) rotate(-180)"/>
</clipPath>
</defs>
</svg>
</span>
            Testimonials
          </h2>
          <p className="text-muted">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
          </p>
        </div>
      </div>
      <div className="row mt-3 align-items-center">
        <div className="col-12 col-md-8">
          <div className="d-flex align-items-center gap-3 p-2 border rounded" style={{backgroundColor:"#b9a0d8"}}>
            <button className="btn btn-link text-primary">
              <FaRegCirclePlay style={{color:'white', fontSize:'30px'}}/>
            </button>
            <div className="progress flex-grow-1 mx-2" style={{height: '4px'}}>
              <div className="progress-bar" role="progressbar" style={{width: '0%'}}></div>
            </div>
            <small className="text-muted">0:00</small>
            <div className='img'>
            <img src={img2} alt="Profile" className="rounded-circle me-2" style={{width: '40px', height: '40px'}} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
          <div className="d-flex align-items-center justify-content-md-end">
            <img src={img2} alt="Profile" className="rounded-circle me-2" style={{width: '40px', height: '40px'}} />
            <div>
              <h6 className="mb-0">Shubha Nagarajan</h6>
              <small className="text-muted">Classical Dancer</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="container-fluid">
      <div className='bg_color' style={{backgroundColor:"#F7FDFF"}}>
      <div className="row mt-5">
        <div className="col-12 p-5 px-">
          <i>
          <h1 className="display-4" style={{fontWeight:"400"}}>
            Your <span className="text-secondary">Hobby</span>, Your <span className="text-info">Community</span>...
          </h1>
          </i>
          <button className="btn btn-secondary mt-3" style={{backgroundColor:"#b9a0d8"}}>Get started</button>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="row justify-content-center">
          <img src={image} alt="logo" className='w-75' />
        </div>
      </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-3">
          <h5>hobbycue</h5>
          <ul className="d-flex flex-column p-0">
            <a href='#'>About Us</a>
            <a href='#'>Our Services</a>
            <a href='#'>Work with Us</a>
            <a href='#'>FAQ</a>
            <a href='#'>Contact Us</a>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>How Do I</h5>
          <ul className="d-flex flex-column p-0">
            <a href='#'>Sign Up</a>
            <a href='#'>Add a Listing</a>
            <a href='#'>Claim Listing</a>
            <a href='#'>Post a Query</a>
            <a href='#'>Add a Blog Post</a>
            <a href='#'>Other Queries</a>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Quick Links</h5>
          <ul className="d-flex flex-column p-0">
            <a href='#'>Listings</a>
            <a href='#'>Blog Posts</a>
            <a href='#'>Shop / Store</a>
            <a href='#'>Community</a>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Social Media</h5>
          <div className="d-flex gap-3">
            <FaFacebook/>
            <FaGoogle/>
            <FaInstagram/>
            <FaPinterest/>
            <FaTelegram/>
            <FaYoutube/>
            <IoMail/>
          </div>
          <h5 className="mt-4">Invite Friends</h5>
          <div className="input-group">
            <input type="email" className="form-control" placeholder="Email ID" />
            <button className="btn btn-secondary" type="button">Invite</button>
          </div>
        </div>
      </div>
      
      <div className="row mt-5 border rounded justify-content-center" style={{backgroundColor:"#F7F5F9"}}>
        <div className="col-12 text-center justify-content-center">
          <p className='my-3'>© Purple Cues Private Limited</p>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default BottomSec;
