import React from 'react';

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: "",
            customer_name: "",
            date_time: "",
            technician: "",
            technicians: [],
            reason: "",
        }

        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleChangeCustomerName = this.handleChangeCustomerName.bind(this);
        this.handleChangeDateTime = this.handleChangeDateTime.bind(this);
        this.handleChangeTechnician = this.handleChangeTechnician.bind(this);
        this.handleChangeReason = this.handleChangeReason.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeVin(event) {
        const value = event.target.value;
        this.setState({vin: value});
    }

    handleChangeCustomerName(event) {
        const value = event.target.value;
        this.setState({customer_name: value});
    }

    handleChangeDateTime(event) {
        const value = event.target.value;
        this.setState({date_time: value});
    }

    handleChangeTechnician(event) {
        const value = event.target.value;
        this.setState({technician: value});
    }

    handleChangeReason(event) {
        const value = event.target.value;
        this.setState({reason: value});
    }

    async componentDidMount() {
        const url = "http://localhost:8080/api/technicians/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ technicians: data.technicians});
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log("data:", data);
        delete data.technicians;

        const appointmentUrl = "http://localhost:8080/api/appointments/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        console.log("response console.log", response)
        if (response.ok) {
            const newAppointment = await response.json();
            console.log("new appointment:", newAppointment);
            this.setState({
                vin: "",
                customer_name: "",
                date_time: "",
                technician: "",
                reason: "",
            })
        }
    }

    render() {
        return (
            <div className="my-5 containerw">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h2 className="text-center">Create Appointment</h2>
                        <form onSubmit={this.handleSubmit} id="create-appointment-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeVin} value={this.state.vin} placeholder="Vin" required type="text" name="vin" id="vin" maxLength="17" className="form-control" />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeCustomerName} value={this.state.customer_name} placeholder="Customer name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                                <label htmlFor="customer_name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeDateTime} value={this.state.date_time} placeholder="Date time" required type="datetime-local" step="900" name="date_time" id="date_time" className="form-control" />
                                <label htmlFor="date_time">Date-time</label>
                            </div>


                            <div className="form-floating mb-3">
                                <select onChange={this.handleChangeTechnician} value={this.state.name} placeholder="Technician id" required name="technician" id="technician" className="form-select">
                                    <option value="">Choose a technician</option>
                                    {this.state.technicians.map(technician => {
                                        return (
                                            <option key={technician.id} value={technician.id}>{technician.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeReason} value={this.state.reason} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                                <label htmlFor="reason">Reason</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppointmentForm;
