import React from "react";

const Login = () => {
    return(
        <>
         <section>
        <h2 className="h1-responsive font-weight-bold text-center my-4 "style={{color:'#2bacc6'}}>Login</h2>
        <p className="text-center" style={{color:'#fff'}}>Please Login to your account</p> 
                <div className="register">
              <div className="col-1">
                <form id="form" className="flex flex-col">
                    <input type="text" placeholder="username"/> 
                    <input type="password" placeholder="password" />

                    <button className="btn"><a href="/destination">Log In</a></button>
                </form>
            </div>
            <div className="col-2">
               <img src="images/Destination3.png" alt="login image"/> 

            </div>
        </div>
        </section>
        </>
    )
}

export default Login ;