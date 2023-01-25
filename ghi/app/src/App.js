import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentsList from './Services/AppointmentList';
import AppointmentForm from './Services/AppointmentForm';
import TechnicianForm from './Services/TechnicianForm';
import AppointmentHistory from './Services/ServiceHistory';
import ManufacturersList from './Inventory/ManufactuererList';
import ManufacturerForm from './Inventory/ManufacturerForm';
import VehicleList from './Inventory/VehicleList'
import SalesPersonForm from './sales/SalesPersonForm' 
import CustomerForm from './sales/CustomerForm' 
import SalesRecordForm from './sales/SalesRecordForm'
import SalesRecordsList from './sales/SalesRecordsList'
import VehicleForm from './Inventory/VehicleForm'
import AutomobileForm from './Inventory/AutomobileForm'
import AutomobileList from './Inventory/AutomobileList'
import SalesPersonRecord from './sales/SalesPersonRecord'
import TechniciansList from './Services/TechnicianList';
import {useState, useEffect} from 'react'

function App(props) {
  const [appointments, setApts] = useState([]);
  const [technicians, setTechs] = useState([]);

  const getApts = async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/appointments/`;
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setApts(data.appointments);
    }
  }
  const getTechs = async () => {
    const url = `${process.env.REACT_APP_SERVICE_API}/api/technicians/`;
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setTechs(data.technicians);
    }
  }
  console.log('techs', technicians)


  useEffect(() => {
    getApts(); getTechs();
  }, [])

  return (
    <>
    
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="sales/salespersonrecord/" element={<SalesPersonRecord />} />
          <Route path="inventory/automobiles/" element={<AutomobileList />} />
          <Route path="inventory/newautomobile/" element={<AutomobileForm />} />
          <Route path="inventory/newvehiclemodel/" element={<VehicleForm />} />
          <Route path="sales/salesrecords/" element={<SalesRecordsList />} />
          <Route path="sales/newsalesrecord/" element={<SalesRecordForm />} />
          <Route path="sales/newsalesperson/" element={<SalesPersonForm />} />
          <Route path="sales/newcustomer/" element={<CustomerForm />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/appointments" element={<AppointmentsList appointments={appointments}/>} />
          <Route path="/appointments/new" element={<AppointmentForm technicians={technicians}/>} />
          <Route path="/appointments/history" element={<AppointmentHistory appointments={appointments}/>} />
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/new" element={<TechnicianForm />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/vehicles" element={<VehicleList />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
