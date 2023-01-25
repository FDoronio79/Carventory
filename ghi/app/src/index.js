import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// async function loadAppointments(){
//   const response = await fetch(`${process.env.REACT_APP_SERVICE_API}/api/appointments/`);
//   if (response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App appointments = {data.appointments} />
//       </React.StrictMode>
//     );
//   } else { 
//     console.error(response);
//   }
// }
  
// loadAppointments();




























async function loadSalesRecords() {
  const response = await fetch ('http://localhost:8090/api/salesrecords/')

  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App salesRecords={data.salesRecords} />
      </React.StrictMode>
    );
  } else {
    console.error(response)
  }
}
loadSalesRecords();



async function loadAutomobiles() {
  const response = await fetch ('http://localhost:8100/api/automobiles/')

  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App automobiles={data.autos} />
      </React.StrictMode>
    );
  } else {
    console.error(response)
  }
}
loadAutomobiles();