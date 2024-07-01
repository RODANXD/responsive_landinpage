import React, { useState } from 'react'
import { FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa'
import { FaUsers, FaMapMarkerAlt, FaShoppingBasket, FaCalendarAlt } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import "./Midle.css"
import Group27 from '../assets/Group27.png'



const Middle = () => {

  const cardData = [
    {
      icon: <FaUsers className="text-purple mb-3" id='icon1' size={30} />,
      title: "People",
      description: "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      buttonText: "Connect",
      buttonClass: "btn-outline-purple",
      cardClass: "card-people"
    },
    {
      icon: <FaMapMarkerAlt className="text-success mb-3" id='icon' size={30} />,
      title: "Place",
      description: "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      buttonText: "Meet up",
      buttonClass: "btn-outline-success",
      cardClass: "card-place"
    },
    {
      icon: <FaShoppingBasket className="text-danger mb-3 icon3" size={30} />,
      title: "Product",
      description: "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      buttonText: "Get it",
      buttonClass: "btn-outline-danger",
      cardClass: "card-product"
    },
    {
      icon: <FaCalendarAlt className="text-info mb-3 icon4" size={30} />,
      title: "Program",
      description: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      buttonText: "Attend",
      buttonClass: "btn-outline-info",
      cardClass: "card-program"
    }
  ];
  const [showPassword, setShowPassword] = useState(false)
      
  return (
    
    <>
    <div className='container mt-5'>
      {/* Mobile version (similar to Image 1) */}
      <div className="d-block d-md-none">
        <h1 className="fw-bold mb-4">
          Explore your <span className="text-info">hobby</span> or <span className="text-purple">passion</span>
        </h1>
        <p className="mb-4">
          Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
          suppliers, classes, workshops, and places to practice, participate or perform.
        </p>
        <div className="login-form">
        <div className="d-flex justify-content-start mb-4">
          <button className="btn btn-link text-purple me-3 fs-4 fw-bolder" style={{color: "#825dae"}}>Sign In</button>
          <button className="btn btn-link fs-4 fw-bolder" style={{color: "grey", textDecoration: "none"}}>Join In</button>
        </div>
          <form>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3 position-relative">
              <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" />
              {showPassword ? 
                <FaEyeSlash className="password-toggle " onClick={() => setShowPassword(!showPassword)} /> :
                <FaEye className="password-toggle position-absolute top-50 end-0 translate-middle-y me-3" onClick={() => setShowPassword(!showPassword)} />
              }
            </div>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#" className="text-secondary">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-purple w-100">Continue</button>
          </form>
          <div className="text-center text-muted my-3">Or connect with</div>
          <button className="btn btn-outline-dark w-100 mb-3">
            <FcGoogle className="me-2" /> Continue with Google
          </button>
          <button className="btn btn-outline-dark w-100 mb-3">
            <FaFacebook className="me-2 " /> Continue with Facebook
          </button>
        </div>
        <img src={Group27} alt="Hobby illustrations" className="img-fluid mt-4" />
      </div>



      {/* Desktop version (similar to Image 2) */}
      <div className="d-none d-md-flex justify-content-between">
        <div className="left-section col-md-6">
          <h1 className="display-4 fw-bold mb-4">
            Explore your <span className="text-info">hobby</span> or <span className="text-purple">passion</span>
          </h1>
          <p className="mb-4">
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
            suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be
            about visual or performing arts, sports, games, gardening, model making, cooking, indoor or
            outdoor activities...
          </p>
          <p className="mb-4">
            If you are an expert or a seller, you can Add your Listing and promote yourself, your students,
            products, services or events. Hop on your hobbyhorse and enjoy the ride.
          </p>
          <img src={Group27} alt="Hobby illustrations" className="img-fluid mt-4" />
        </div>
        <div className="right-section col-md-5">
        <div className="d-flex justify-content-start mb-4">
          <button className="btn btn-link text-purple me-3 fs-4 fw-bolder" style={{color: "#825dae"}}>Sign In</button>
          <button className="btn btn-link fs-4 fw-bolder" style={{color: "grey", textDecoration: "none"}}>Join In</button>
        </div>

          <div className="login-form">
          <button className="btn btn-outline-dark w-100 mb-3">
            <FcGoogle className="me-2" /> Continue with Google
          </button>
          <button className="btn btn-outline-dark w-100 mb-3">
            <FaFacebook className="me-2 " /> Continue with Facebook
          </button>
            <div className="text-center text-muted my-3">Or connect with</div>
            <form>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3 d-flex align-items-center">
                <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" />
                {showPassword ? 
                  <FaEyeSlash className="password-toggle position-absolute top-50 end-0 translate-middle-y me-3" onClick={() => setShowPassword(!showPassword)} /> :
                  <FaEye className="password-toggle position-absolute top-50 end-0 translate-middle-y me-3" onClick={() => setShowPassword(!showPassword)} />
                }
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMeDesktop" />
                <label className="form-check-label" htmlFor="rememberMeDesktop">Remember me</label>
                <a href="#" className="float-end">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-purple w-100">Continue</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className={`card h-100 shadow-sm ${card.cardClass}`}>
              <div className="card-body d-flex flex-column">
                {card.icon}
                <h5 className="card-title font-weight-bold">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <button className={`btn ${card.buttonClass} mt-auto align-self-start`}>
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    </>
    
  )
}

export default Middle