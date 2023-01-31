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
import axios from 'axios'

function App() {
  const [appointments, setApts] = useState([]);
  const [technicians, setTechs] = useState([]);
  const [salesPersons, setSP] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [vins, setVins] = useState([]);
  const [salesRecords, setSR] = useState([]);
  const [models, setModels] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [automobiles, setAuto] = useState([]);

  const getApts = async () => {
    // const url = `${process.env.REACT_APP_SERVICE_API}/api/appointments/`;
    // const response = await fetch(url);
    // if (response.ok) {
    //     const data = await response.json();
    //     setApts(data.appointments);
    // }
    axios.get(`${process.env.REACT_APP_SERVICE_API}/api/appointments/`)
    .then((response) => {setApts(response.data.appointments)})
  }

  const getTechs = async () => {
    // const url = `${process.env.REACT_APP_SERVICE_API}/api/technicians/`;
    // const response = await fetch(url);
    // if (response.ok) {
    //     const data = await response.json();
    //     setTechs(data.technicians);
    // }
    axios.get(`${process.env.REACT_APP_SERVICE_API}/api/technicians/`)
    .then((response) => {setTechs(response.data.technicians)})
  }
  const getSP = async () => {
    // const url = 'http://localhost:8090/api/salespersons/';
    // const response = await fetch(url);
    // if (response.ok) {
    //     let data = await response.json();
    //     setSP(data.salesPersons);
    // }
    axios.get('http://localhost:8090/api/salespersons/')
    .then((response) => {setSP(response.data.salesPersons)})
  }
  const getCustomers = async () => {
    // const url = 'http://localhost:8090/api/customers/';
    // const response = await fetch(url);
    // if (response.ok) {
    //     let data = await response.json();
    //     setCustomers(data.customers);
    // }
    axios.get('http://localhost:8090/api/customers/')
    .then((response) => {setCustomers(response.data.customers)})
  }
  const getVins = async () => {
    // const url = 'http://localhost:8090/api/availablevins/';
    // const response = await fetch(url);
    // if (response.ok) {
    //     let data = await response.json();
    //     setVins(data.availbleVins);
    // }
    axios.get('http://localhost:8090/api/availablevins/')
    .then((response) => {setVins(response.data.availbleVins)})
  }
  const getSR = async () => {
    // const url = 'http://localhost:8090/api/salesrecords/';
    // const response = await fetch(url);
    // if (response.ok) {
    //     let data = await response.json();
    //     setSR(data.salesRecords);
    // }
    axios.get('http://localhost:8090/api/salesrecords/')
    .then((response) => {setSR(response.data.salesRecords)})
  }
  const getModels = async () => {
  //   const url = 'http://localhost:8100/api/models/';
  //   const response = await fetch(url);
  //   if (response.ok) {
  //       const data = await response.json();
  //       setModels(data.models);
  // }
  axios.get('http://localhost:8100/api/models/')
  .then((response) => {setModels(response.data.models)})
}
  const getManufacturers = async () => {
    // const url = 'http://localhost:8100/api/manufacturers/';
    // const response = await fetch(url);
    // if (response.ok) {
    //     let data = await response.json();
    //     setManufacturers(data.manufacturers);
    // }
    axios.get('http://localhost:8100/api/manufacturers/')
    .then((response) => {setManufacturers(response.data.manufacturers)})
}
  const getAutos = async () => {
    // const url = "http://localhost:8100/api/automobiles/";
    // const response = await fetch(url);
    // if (response.ok) {
    //     const data = await response.json();
    //     setAuto(data.autos);
    // }
    axios.get('http://localhost:8100/api/automobiles/')
    .then((response) => {setAuto(response.data.autos)})
}

  useEffect(() => {
    getApts(); 
    getTechs(); 
    getSP(); 
    getCustomers(); 
    getVins(); 
    getSR(); 
    getModels();
    getManufacturers();
    getAutos();
  }, [])

  return (
    <>
    
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="sales/salespersonrecord/" element={<SalesPersonRecord salesPersons={salesPersons}/>} />
          <Route path="inventory/automobiles/" element={<AutomobileList automobiles={automobiles}/>} />
          <Route path="inventory/newautomobile/" element={<AutomobileForm models={models}/>} />
          <Route path="inventory/newvehiclemodel/" element={<VehicleForm manufacturers={manufacturers}/>} />
          <Route path="sales/salesrecords/" element={<SalesRecordsList salesRecords={salesRecords} />} />
          <Route path="sales/newsalesrecord/" element={<SalesRecordForm salesPersons={salesPersons} customers={customers} vins={vins} />} />
          <Route path="sales/newcustomer/" element={<CustomerForm />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/appointments" element={<AppointmentsList appointments={appointments}/>} />
          <Route path="/appointments/new" element={<AppointmentForm technicians={technicians}/>} />
          <Route path="/appointments/history" element={<AppointmentHistory appointments={appointments}/>} />
          <Route path="/technicians" element={<TechniciansList technicians={technicians} />} />
          <Route path="/technicians/new" element={<TechnicianForm />} />
          <Route path="/manufacturers" element={<ManufacturersList manufacturers={manufacturers}/>} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/vehicles" element={<VehicleList models={models}/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
