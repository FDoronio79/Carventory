import  React, {useState}  from 'react';

export default function AppointmentsList({appointments, getApt}) {
    const [status, setStatus] = useState(false);
    console.log(appointments)
    const handleFinished = async (e) => {
        const id = e.event.target.value
        const data = {}
        data.status = true
        const url = `${process.env.REACT_APP_SERVICE_API}/api/appointments/${id}/`
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(url, fetchConfig)
        .then(() => {
            return getApt()
        }).catch(console.log)
    }

    const handleCancel = async (id) => {
        fetch(`${process.env.REACT_APP_SERVICE_API}/api/appointments/${id}/`, 
        { method: "DELETE" })
        .then(() => {
            return getApt()
        }).catch(console.log)
    }

    let timeSettings = { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };

    if(appointments === undefined){
        return null;
    }  

    return (
        <>
            <div className="my-3 containerw">
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
                            <th>Status</th>
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
                                        <button onClick={handleFinished} type="button" value={appointment.id} className="btn btn-success">Finished</button>

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
// class AppointmentsList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             status: "",
//             appointments: [],
//         }
//         this.handleCancel = this.handleCancel.bind(this);
//         this.handleFinished = this.handleFinished.bind(this);

//     }

//     // Loads everything into a list on the page
//     async componentDidMount() {
//         const url = `${process.env.REACT_APP_SERVICE_API}/api/appointments/`;
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             this.setState({ appointments: data.appointments });
//         }
//     }

//     async handleCancel(event) {
//         const id = event.target.value;
//         const response = await fetch(`${process.env.REACT_APP_SERVICE_API}/api/appointments/${id}/`, { method: "DELETE" })
//         console.log(response);
//         window.location.reload(false);
//     }

//     async handleFinished(event) {
//         const id = event.target.value
//         const data = { ...this.state };
//         data.status = true
//         const url = `${process.env.REACT_APP_SERVICE_API}/api/appointments/${id}/`
//         const fetchConfig = {
//             method: "PUT",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         }
//         const response = await fetch(url, fetchConfig);
//         if (response.ok) {
//             const finishedStatus = await response.json();
//             console.log('status', finishedStatus)
//         }
//         window.location.reload(false);
//     }


//     render() {
//         let timeSettings = { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };

//         return (
//             <>
//                 <div className="my-3 containerw">
//                     <div className="input-group">
//                     </div>
//                 </div>
//                 <div>
//                     <h1>Service Appointments</h1>
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>VIP</th>
//                                 <th>VIN</th>
//                                 <th>Customer name</th>
//                                 <th>Date and time</th>
//                                 <th>Technician</th>
//                                 <th>Reason</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>

//                         {this.state.appointments.filter(appointments => appointments.status === false).map(appointment => {
//                                 return (
//                                     <tr key={appointment.id}>
//                                         <td className="text-warning">{(appointment.vip_status ? "✅" : null)}</td>
//                                         <td>{appointment.vin}</td>
//                                         <td>{appointment.customer_name}</td>
//                                         <td>{new Date(appointment.date_time).toLocaleTimeString([], timeSettings)}</td>
//                                         <td>{appointment.name}</td>
//                                         <td>{appointment.reason}</td>
//                                         <td>
//                                             <button onClick={this.handleCancel} type="submit" value={appointment.id} className="mx-1 btn btn-danger">Cancel</button>
//                                             <button onClick={this.handleFinished} type="button" value={appointment.id} className="btn btn-success">Finished</button>

//                                         </td>
//                                     </tr>
//                                 );
//                             })
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </>
//         )
//     }
// }

// export default AppointmentsList;
