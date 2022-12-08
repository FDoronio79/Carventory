import React from "react";

class ServiceHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            search: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault()
        const url = `${process.env.REACT_APP_SERVICE_API}/api/appointments/`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // this.setState(({appointments: data.appointments}))
            console.log(data.appointments)

            const test = data.appointments.filter((appointment) => {
                return appointment.vin === this.state.search
            })
            this.setState({ appointments: test })
        }
    }


    handleChange(event) {
        const value = event.target.value;
        this.setState({ search: value })
    }

    render() {
        let timeSettings = { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };
        return (
            <>
                <div>
                    <form id="search-by-vin-form">
                        <div className="input-group mb-3 mt-5">
                            <input value={this.state.search} onChange={this.handleChange}
                                type="text" className="form-control"
                                placeholder="Enter VIN to search" id="search" name="search" />
                            <button onClick={this.handleSubmit} className="input-group-text">Search by VIN</button>
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
                            {this.state.appointments.map(appointment => {


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

export default ServiceHistory;