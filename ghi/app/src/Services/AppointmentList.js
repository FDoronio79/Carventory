import  React, {useState}  from 'react';
import axios from 'axios'

export default function AppointmentsList({appointments, getApts}) {

    const handleFinished = async (e) => {
        const id = e.target.value
        const data = {}
        data.status = true
        const url = `${process.env.REACT_APP_SERVICE_API}/api/appointments/${id}/`
        axios.put(url, data)
        .then ((response) => {
            getApts();
        })
    }

    const handleCancel = async (e) => {
        const id = e.target.value
        axios.delete(`${process.env.REACT_APP_SERVICE_API}/api/appointments/${id}/`)
        .then(() => {
            getApts()
        }).catch(console.log)
    }

    let timeSettings = { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };

    if(appointments === undefined){
        return null;
    }  

    return (
        <>
            <div className="my-3 container">
                <div className="input-group">
                </div>
            </div>
            <div>
                <h1>Service Appointments</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIP</th>
                            <th>VIN</th>
                            <th>Customer name</th>
                            <th>Date and time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>Cancel</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>

                    {appointments.filter(appointments => appointments.status === false).map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td className="text-warning">{(appointment.vip_status ? "✅" : null)}</td>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.customer_name}</td>
                                    <td>{new Date(appointment.date_time).toLocaleTimeString([], timeSettings)}</td>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.reason}</td>
                                    <td>
                                        <button onClick={handleCancel} type="submit" value={appointment.id} className="mx-1 btn btn-danger">Cancel</button>
                                        
                                    </td>
                                    <td>
                                        <button onClick={handleFinished} type="submit" value={appointment.id} className="mx-1 btn btn-success">Finished</button>
                                    </td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}