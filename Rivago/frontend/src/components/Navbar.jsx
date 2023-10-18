import React from "react";

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className="col-10 mx-auto">
              
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="images/rlogo.jpg" alt="rivago"/></a>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link my-link" style={{color:'#2bacc6'}} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-link"style={{color:'#2bacc6'}} href="/destination">Packages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-link"style={{color:'#2bacc6'}} href="/services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-link"style={{color:'#2bacc6'}} href="/contact">Contactus</a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-link"style={{color:'#2bacc6'}} href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link my-link"style={{color:'#2bacc6'}} href="/signup">Sign Up</a>
        </li>
        
      </ul>

    </div>
  </div>
</nav> 
       
            </div>
          </div>
        </div>

        </>
    )
}

export default Navbar;