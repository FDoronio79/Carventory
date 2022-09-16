import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';







import SalesPersonForm from './sales/SalesPersonForm' 
import CustomerForm from './sales/CustomerForm' 
import SalesRecordForm from './sales/SalesRecordForm'
import SalesRecordsList from './sales/SalesRecordsList'
import VehicleForm from './Inventory/VehicleForm'
import AutomobileForm from './Inventory/AutomobileForm'
import AutomobileList from './Inventory/AutomobileList'
import SalesPersonRecord from './sales/SalesPersonRecord'

function App(props) {
  return (
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






          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
