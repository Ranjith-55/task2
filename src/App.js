import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import navimg from "./tt.png"
import { FiAperture } from "react-icons/fi";


import React from 'react';

 
const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Skydash
          </a>
   
          <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-bars me-2 fs-5"></i>
                            <i className="fa-solid fa-magnifying-glass me-2 fs-5"></i>
                            <input
                                type="text"
                                className="form-control border-0 w-100"
                                placeholder="Search here"
                                
                            />
                            </div>
                            </li>
                            </ul>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Alerts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Main Dashboard */}
      <div className="container mt-4">
        <div className="row">
          {/* Sidebar */}
          

          
          <div className="sideBar w-25 " style={{marginLeft:"-90px"}}>

  
  <ul className="list-group Side-list">
    <li className="list-group-item py-3 px-4 border-0 mt-2 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-house mx-2"></i>
     Dashboard
   </li>
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-cogs mx-2"></i>
     Settings
   </li>
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-chart-line mx-2"></i>
     Analytics
   </li>
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-user mx-2"></i>
     Profile
   </li>
  
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-sign-out-alt mx-2"></i>
     Logout
   </li>
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-bell mx-2"></i>
     Notifications
   </li>
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-comment mx-2"></i>
     Messages
   </li>
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-paper-plane mx-2"></i>
     Send Feedback
   </li>
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-calendar-check mx-2"></i>
     Calendar
   </li>
   <li className="list-group-item py-3 px-4 border-0 fs-7 fw-bold d-flex align-items-center">
     <i className="fa-solid fa-question-circle mx-2"></i>
     Help
     </li>
</ul>

</div>
          {/* Main Content */}
          <div className="col-lg-9 col-md-8" style={{marginLeft:"80px"}}>
          <div className='d-flex '>

            <h4>Welcome Aamir</h4>
            <input type='date' style={{marginLeft:"500px",height:"30px",padding:"5px",borderRadius:"30px"}}/>
            </div>
          
            <p>All systems are running smoothly! You have <span className="text-primary mt-5">3 unread alert!</span>
            </p>
           
           



            {/* Weather and Summary */}
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">31°C Bangalore, India</h5>
                    <div >
                    <img
                      src={navimg}
                      alt="weather"
                      className="img-fluid"
                      
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            
              <div className="col-3 text-center">
              <div className="bg-primary mb-4 mx-4  w-100 text-white rounded-4 p-3">
              <div className="card-body">
             <h5 className="card-title ">Today's Bookings</h5>
              <p className="card-text"><h4>4006</h4></p>
              <small>10.00% (30 days)</small>
               </div>
              </div>

              <div className="bg-success mb-4 mx-4  w-100 text-white rounded-4 p-3">
              <div className="card-body ">
                  <h5 className="card-title">Total Bookings</h5>
                    <p className="card-text"><h4>61344</h4></p>
                  <small>22.00% (30 days)</small>
                  </div>
              </div>

            </div>
              <div className="col-3 text-center">
                
              <div className="bg-warning mb-4 mx-4  w-100 text-white rounded-4 p-3">
                <h6>Todays beginnning</h6>
                <h4>6000</h4>
                <h6>30% of today</h6>
              </div>

              <div className="bg-danger mb-4 mx-4  w-100 text-white rounded-4 p-3">
                <h6>Todays beginnning</h6>
                <h4>6000</h4>
                <h6>30% of today</h6>
              </div>

              </div>

              </div>
          </div>
        </div>
      </div>
  </div>

  );
};

export default Dashboard;





{/* <div className="row">
<div className="col-md-4">
  <div className="card bg-primary text-white shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Today's Bookings</h5>
      <p className="card-text">4006</p>
      <small>10.00% (30 days)</small>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div className="card bg-secondary text-white shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Total Bookings</h5>
      <p className="card-text">61344</p>
      <small>22.00% (30 days)</small>
    </div>
  </div>
</div>
<div className="col-md-4">
  <div className="card bg-danger text-white shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Number of Clients</h5>
      <p className="card-text">47033</p>
      <small>0.22% (30 days)</small>
    </div>
  </div>
</div>
</div> */}