import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Appointments
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/appointments">Appointment</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/appointments/new">New Appointment</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sales Record
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/sales/salesrecords/">Sales Records</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/sales/newsalesrecord/">New Sales Record</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/sales/salespersonrecord/">Sales Record of Sales Person</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Manufacturers
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/manufacturers/new">New Manufacturers</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Automobiles
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/inventory/automobiles/">Automobiles</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/inventory/newautomobile/">New Automobile</NavLink></li>
                </ul>
              </li> 
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Vehicles
                </a>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/vehicles">Vehicle Models</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/inventory/newvehiclemodel/">New Vehicle Model</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/technicians/new">New Technician</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/sales/newsalesperson/">New Sales Person</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/sales/newcustomer/">New Customer</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;