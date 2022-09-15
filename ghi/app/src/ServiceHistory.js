import React from 'react';

class ServiceHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "",
            appointments: [],
        }
    }
    async componentDidMount() {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ appointments: data.appointments });
        }
    }
    render() {
        let timeSettings = { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };

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

                        {this.state.appointments.filter(appointments => appointments.status === true).map(appointment => {
                                return (
                                    <tr key={appointment.id}>
                                        <td className="text-warning">{(appointment.vip_status ? "✅" : null)}</td>
                                        <td>{appointment.vin}</td>
                                        <td>{appointment.customer_name}</td>
                                        <td>{new Date(appointment.date_time).toLocaleTimeString([], timeSettings)}</td>
                                        <td>{appointment.name}</td>
                                        <td>{appointment.reason}</td>
                                        <td>
                                            <img className="center-block" width="100" src="https://c.tenor.com/yheo1GGu3FwAAAAC/rick-roll-rick-ashley.gif" />
                                        </td>
                                    </tr>
                                );
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <div className="visually-hidden">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </>
        )
    }
}

export default ServiceHistory;