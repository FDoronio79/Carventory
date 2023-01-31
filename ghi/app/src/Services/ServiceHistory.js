import React, {useState} from "react";
import axios from 'axios'

export default function ServiceHistory({appointments, getApts}) {
    const [search, setSearch] = useState('');
    const [apts, setAppointments] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = `${process.env.REACT_APP_SERVICE_API}/api/appointments/`;
        
        axios.get(url)
        .then(async (response) => {
            const data = response.data
            const test = data.appointments.filter((appointment) => {
                return appointment.vin === search
            })
            setAppointments(test)
        })
    }


    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    let timeSettings = { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };
    if (search === '') {
        return (
            <>
                <div>
                    <form id="search-by-vin-form">
                        <div className="input-group mb-3 mt-5">
                            <input value={search} onChange={handleChange}
                                type="text" className="form-control"
                                placeholder="Enter VIN to search" id="search" name="search" />
                            <button onClick={handleSubmit} className="input-group-text">Search by VIN</button>
                        </div>
                    </form>

                    <h1>Service Appointments</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIP</th>
                                <th>VIN</th>
                                <th>Customer Name</th>
                                <th>Schedule</th>
                                <th>Technician</th>
                                <th>Reason</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map(appointment => {
                                return (
                                    <tr key={appointment.id}>
                                        <td className="text-warning">{(appointment.vip_status ? "✅" : null)}</td>
                                        <td>{appointment.vin}</td>
                                        <td>{appointment.customer_name}</td>
                                        <td>{new Date(appointment.date_time).toLocaleTimeString([], timeSettings)}</td>
                                        <td>{appointment.name}</td>
                                        <td>{appointment.reason}</td>
                                        <td>
                                            ✅
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    {/* <div className="invisible">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> */}
                </div>
            </>
        )
    } else {
    return (
        <>
            <div>
                <form id="search-by-vin-form">
                    <div className="input-group mb-3 mt-5">
                        <input value={search} onChange={handleChange}
                            type="text" className="form-control"
                            placeholder="Enter VIN to search" id="search" name="search" />
                        <button onClick={handleSubmit} className="input-group-text">Search by VIN</button>
                    </div>
                </form>

                <h1>Service Appointments</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIP</th>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Schedule</th>
                            <th>Technician</th>
                            <th>Reason</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apts.map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td className="text-warning">{(appointment.vip_status ? "✅" : null)}</td>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.customer_name}</td>
                                    <td>{new Date(appointment.date_time).toLocaleTimeString([], timeSettings)}</td>
                                    <td>{appointment.name}</td>
                                    <td>{appointment.reason}</td>
                                    <td>
                                        ✅
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="container">
                {/* <div className="invisible">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div> */}
            </div>
        </>
    )
}
}