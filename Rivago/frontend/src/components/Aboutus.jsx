import React from "react";
import video from '../myvideos/video-1.mp4';
const Aboutus = () => {
    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 className="brand-name">
                                    why choose us ?
                                </h1>
                                <h3 className="my-3">
                                    Nature's Majesty Awaits You </h3> 
                                    <h5 style={{color:'#fff'}}>
                                    Rivago has a profound understanding of Indian consumers travel needs and preferences. It offers a wide range of holiday packages. While the dynamic or customized tour and travel packages give consumers an option to create and design their own holiday.
                                    </h5>
                                
                                <div className="mt-3">
                                    <a href="/destination" className="btn-get-started">Get Started</a>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                {/* <img src="images/abt3.png" className="img-fluid animated" alt="image"/> */}
                                <video className="img-fluid animated" autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </video>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutus ; 