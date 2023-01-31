import React, {useState} from 'react';
import axios from 'axios'

export default function AppointmentForm({technicians, getApts}) {
    const [vin, setVin] = useState('');
    const [customer_name, setCustomerName] = useState('');
    const [date_time, setDateTime] = useState('');
    const [technician, setTechnician] = useState('');
    const [reason, setReason] = useState('');

    const handleChangeVin = (e) => {
        const value = e.target.value
        setVin(value);
    }
    const handleChangeCustomerName = (e) => {
        const value = e.target.value
        setCustomerName(value);
    }
    const handleChangeDateTime = (e) => {
        const value = e.target.value
        setDateTime(value);
    }
    const handleChangeReason = (e) => {
        const value = e.target.value
        setReason(value);
    }
    const handleChangeTechnician = (e) => {
        const value = e.target.value
        setTechnician(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.vin = vin;
        data.customer_name = customer_name;
        data.date_time = date_time;
        data.technician = technician;
        data.reason = reason;

        const appointmentUrl = `${process.env.REACT_APP_SERVICE_API}/api/appointments/`;
        axios.post(appointmentUrl, data)
        .then((resposnse) => {
            getApts();
            setVin('');
            setDateTime('');
            setCustomerName('');
            setTechnician('');
            setReason('');
        })
    }
    return (
        <div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h2 className="text-center">Create Appointment</h2>
                    <form onSubmit={handleSubmit} id="create-appointment-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeVin} value={vin} placeholder="Vin" required type="text" name="vin" id="vin" maxLength="17" className="form-control" />
                            <label htmlFor="vin">VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeCustomerName} value={customer_name} placeholder="Customer name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                            <label htmlFor="customer_name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeDateTime} value={date_time} placeholder="Date time" required type="datetime-local" step="900" name="date_time" id="date_time" className="form-control" />
                            <label htmlFor="date_time">Date-time</label>
                        </div>
    
    
                        <div className="form-floating mb-3">
                            <select onChange={handleChangeTechnician} value={technician} placeholder="Technician id" required name="technician" id="technician" className="form-select">
                                <option value="">Choose a technician</option>
                                {technicians.map(technician => {
                                    return (
                                        <option key={technician.id} value={technician.id}>{technician.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeReason} value={reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                            <label htmlFor="reason">Reason</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}