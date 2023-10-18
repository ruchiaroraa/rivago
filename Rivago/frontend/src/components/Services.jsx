import React from "react";

const Services = () => {
    return(
        <>
        <h2 style= {{textAlign : 'center', color:'#2bacc6'}}> What we Offer? </h2>
        <h1 style= {{textAlign : 'center', color:'#fff'}} className="mb-4"> Our Services </h1>
        

        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className="col-10 mx-auto">
        
        <div className="container flex">
      <div className="row">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
          <img src="images/service1.png" alt="Service"/>
        <h5 className="card-title"style={{color:'#fff'}}>Amazing tours</h5>
        <p className="card-text"style={{color:'#fff'}}>For your Memorable memories for life..</p>
      
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <img src="images/service2.png" alt="Service"/>
        <h5 className="card-title"style={{color:'#fff'}}>Covid Safe</h5>
        <p className="card-text"style={{color:'#fff'}}>For your Safety . You have to use face masks</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <br></br>
        <img src="images/service3.png" alt="Service"/>
        <br></br>
        <h5 className="card-title" style={{color:'#fff'}}>24/7 Services</h5>
        <p className="card-text " style={{color:'#fff'}}>You can contact us anytime now</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <br></br>
        <img src="images/service4.png" alt="Service"/>
        <br></br>
        <h5 className="card-title" style={{color:'#fff'}}>Safety</h5>
        <p className="card-text" style={{color:'#fff'}}>All the time </p>
       
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
<br></br>
<center><button className="text-center"> <a style={{textDecoration:'none' ,border:'1px solid white', padding:'0.9rem'}} className="text-white"href="/addpackage">Add Packages</a></button></center>

        </>
    )
}

export default Services;