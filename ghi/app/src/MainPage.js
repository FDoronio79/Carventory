import * as React from "react";
import { NavLink } from 'react-router-dom';
import "./index.css";
import inventory from './images/inventory.jpg'
import employee from './images/employees.jpeg'
import sales from './images/sales.jpg'
import service from './images/service.jpg'
import logo from './images/logo.png'
import broken_car from './images/broken_car.jpg'
import ReactCompareImage from 'react-compare-image'


function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">Carventory <img src={logo} height="100px" alt="This is a discription"/> </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
        </div>
      <ReactCompareImage leftImage={broken_car} rightImage={inventory} />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card mb-3 shadow eachCard">
                <img src={inventory} height="600px" className="card-img-top" alt="This is a discription"/>
                <div className="card-body mainpageBotton cardTitle1 cardTitle">
                  <h4 className="card-title">INVENTORY</h4>
                  <NavLink className="dropdown-item choice" to="/manufacturers">Manufacturers</NavLink>
                  <NavLink className="dropdown-item choice" to="/vehicles">Vehicle Models</NavLink>
                  <NavLink className="dropdown-item choice" to="/inventory/automobiles/">Automobiles</NavLink>
                </div>
              </div>
            </div>
            </div>

            <div className="col">
              <div className="card mb-3 shadow eachCard">
                <img src={sales} className="card-img-top mainPicture" height="600px" alt="This is a discription"/>
                <div className="card-body mainpageBotton cardTitle2 cardTitle">
                  <h4 className="card-title">SALES</h4>
                  <NavLink className="dropdown-item choice" to="/sales">Sales Record</NavLink>
                  <NavLink className="dropdown-item choice" to="/sales/salespersonrecord/">Sales History</NavLink>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-3 shadow eachCard">
                <img src={service} className="card-img-top mainPicture" height="600px" alt="This is a discription"/>
                <div className="card-body mainpageBotton cardTitle2 cardTitle">
                  <h4 className="card-title">SERVICES</h4>
                  <NavLink className="dropdown-item choice" to="/appointments">Appointments List</NavLink>
                  <NavLink className="dropdown-item choice" to="/appointments/history">Service History</NavLink>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-3 shadow eachCard">
                <img src={employee} className="card-img-top mainPicture" height="600px" alt="This is a discription"/>
                <div className="card-body mainpageBotton cardTitle2 cardTitle">
                  <h4 className="card-title">EMPLOYEES</h4>
                  <NavLink className="dropdown-item choice" to="/technicians">Technicians</NavLink>
                </div>
              </div>
            </div>
          </div>


      </div>


    
  );
}

export default MainPage;
