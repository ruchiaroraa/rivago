import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import AddMovie from './components/AddPackage'
import Show from './components/Show'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Service from './components/Services';
import Aboutus from './components/Aboutus';
import Destination from './components/Destination';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Contactus from './components/Contactus';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddPackage from './components/AddPackage'
import Purchase from './components/Purchase'
import Checkout from './components/Checkout'
import Editpurchase from './components/Editpurchase'
import Payment from './components/Payment';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
        <Switch>
        <Route exact path="/all" component={Show}/>
        <Route exact  path="/" component={Home} />
      <Route exact  path="/destination" component={Destination} />
      <Route exact  path="/services" component={Service} />
      <Route exact path="/contact" component={Contactus}/>
      <Route exact  path="/about" component={Aboutus} />
      <Route exact  path="/login" component={Login} />
      <Route exact  path="/signup" component={Signup} />
      <Route exact  path="/Navbar" component={Navbar} />
      <Route exact  path="/addpackage" component={AddPackage} />
      <Route exact  path="/purchase" component={Purchase} />
      <Route exact  path="/checkout" component={Checkout} />
      <Route exact  path="/edit/:id" component={Editpurchase} />
      <Route exact path="/payment" component={Payment}/>
        </Switch>
        <Footer/>
    
      </BrowserRouter>
    </>
   
  );
}

export default App;
