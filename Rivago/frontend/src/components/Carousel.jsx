import React from "react";
import firstvideo from '../myvideos/vid-1.mp4'
import secondvideo from '../myvideos/about-vid-2.mp4'
import thirdvideo from '../myvideos/vid-5.mp4'

const Carousel = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
        <div className='row'>
        <div className="col-10 mx-auto">

        
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <video className="d-block w-100" autoPlay loop muted>
      <source src={firstvideo} type="video/mp4" />
    </video>
      
    </div>
    <div class="carousel-item">
    <video className="d-block w-100" autoPlay loop muted>
      <source src={secondvideo} type="video/mp4" />
    </video>
    </div>
    <div class="carousel-item">
    <video className="d-block w-100" autoPlay loop muted>
      <source src={thirdvideo} type="video/mp4" />
    </video>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</div>
        </>
    )
}

export default Carousel;