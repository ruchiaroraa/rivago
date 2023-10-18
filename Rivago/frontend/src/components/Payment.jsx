import React from "react";

const Payment = () => {
    return(
        <>
         <section>
        <h2 className="h1-responsive font-weight-bold text-center my-4 "style={{color:'#2bacc6'}}>Payment Details</h2>
        <p className="text-center" style={{color:'#fff'}}>Happy Journey </p> 
                <div className="register">
              <div className="col-1">
                <form id="form" className="flex flex-col">
                    <input type="text" placeholder=" Card Holder's Name"/> 
                    <input type="password" placeholder="Card Number" />
                    <input type="password" placeholder="Cvv" />
                    <input type="date" placeholder="Expiry Date" />

                    <button className="btn">Pay Now</button>
                </form>
            </div>
           
        </div>
        </section>
        </>
    )
}

export default Payment ;