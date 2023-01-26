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

function App() {
  const [appointments, setApts] = useState([]);
  const [technicians, setTechs] = useState([]);
  const [salesPersons, setSP] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [vins, setVins] = useState([]);
  const [salesRecords, setSR] = useState([]);
  const [models, setModels] = useState([]);

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
  const getSP = async () => {
    const url = 'http://localhost:8090/api/salespersons/';
    const response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        setSP(data.salesPersons);
    }
  }
  const getCustomers = async () => {
    const url = 'http://localhost:8090/api/customers/';
    const response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        setCustomers(data.customers);
    }
  }
  const getVins = async () => {
    const url = 'http://localhost:8090/api/availablevins/';
    const response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        setVins(data.availbleVins);
    }
  }
  const getSR = async () => {
    const url = 'http://localhost:8090/api/salesrecords/';
    const response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        setSR(data.salesRecords);
    }
  }
  const getModels = async () => {
    const url = 'http://localhost:8100/api/models/';
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        setModels(data.models);
  }
}

console.log(models)
  useEffect(() => {
    getApts(); getTechs(); getSP(); getCustomers(); getVins(); getSR(); getModels();
  }, [])

  return (
    <>
    
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="sales/salespersonrecord/" element={<SalesPersonRecord salesPersons={salesPersons}/>} />
          <Route path="inventory/automobiles/" element={<AutomobileList />} />
          <Route path="inventory/newautomobile/" element={<AutomobileForm models={models}/>} />
          <Route path="inventory/newvehiclemodel/" element={<VehicleForm />} />
          <Route path="sales/salesrecords/" element={<SalesRecordsList salesRecords={salesRecords} />} />
          <Route path="sales/newsalesrecord/" element={<SalesRecordForm salesPersons={salesPersons} customers={customers} vins={vins} />} />
          <Route path="sales/newcustomer/" element={<CustomerForm />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/appointments" element={<AppointmentsList appointments={appointments}/>} />
          <Route path="/appointments/new" element={<AppointmentForm technicians={technicians}/>} />
          <Route path="/appointments/history" element={<AppointmentHistory appointments={appointments}/>} />
          <Route path="/technicians" element={<TechniciansList technicians={technicians} />} />
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
