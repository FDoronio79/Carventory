import React from 'react';

class TechnicianForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            employee_number:"",
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmployeeNum = this.handleChangeEmployeeNum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleChangeEmployeeNum(event) {
        const value = event.target.value;
        this.setState({employee_number: value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data);

        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();
            console.log("new technician:", newTechnician);
            this.setState({
                name: "",
                employee_number: "",
            });
        }

    }

    render() {
        return (
            <><div className="my-5 container">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h2 className="text-center">Create Technician</h2>
                        <form onSubmit={this.handleSubmit} id="create-technician-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeEmployeeNum} value={this.state.employee_number} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
                                <label htmlFor="name">Employee number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
            </div></>
        )
    }
}

export default TechnicianForm;
