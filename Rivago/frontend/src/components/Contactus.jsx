import React from "react";

const Contactus = () => {
    return(
        <>
        <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4 "style={{color:'#2bacc6'}}>Contact us</h2>
        <p className="text-center" style={{color:'#fff'}}><span style={{color:'#2bacc6'}}>Contact No :</span> 9999-4321-21  <span style={{color:'#2bacc6'}}>Mail id:</span> rivago@xyz.com</p> 
        <p className="text-center w-responsive mx-auto " style={{color:'#fff'}}>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
        <div className="register">
    
        <div className="col-1">
        <form id="form" className="flex flex-col mt-0">
                    <input type="text" placeholder=" your name"/> 
                    <input type="email" placeholder="your email" />
                    <input type="tel" placeholder="your phone no" />
                    <input type="textarea" placeholder="your message" />


                    <button className="btn">Send</button>
                </form>
            </div>
</div>
        </section>
        </>
    )
}

export default Contactus ; 