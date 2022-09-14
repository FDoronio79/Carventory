import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentsList from './AppointmentList';
import AppointmentForm from './AppointmentForm';
import TechnicianForm from './TechnicianForm';
import AppointmentHistory from './ServiceHistory';
import ManufacturersList from './ManufactuererList';
import ManufacturerForm from './ManufacturerForm';
import VehicleList from './VehicleList';


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/appointments" element={<AppointmentsList appointments={props.appointments}/>} />
          <Route path="/appointments/new" element={<AppointmentForm />} />
          <Route path="/appointments/history" element={<AppointmentHistory appointments={props.appointments}/>} />
          <Route path="/technicians/new" element={<TechnicianForm />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/vehicles" element={<VehicleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
