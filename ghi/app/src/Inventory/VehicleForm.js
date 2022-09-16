import React from 'react';

class VehicleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            picture_url: '',
            manufacturer_id: '',
            manufacturers: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handlePictureUrlChange(event) {
        const value = event.target.value;
        this.setState({picture_url: value})
    }

    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturer_id: value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};  
        delete data.manufacturers;
        console.log(data);    

        const vehicleModelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(vehicleModelUrl, fetchConfig);
        console.log("this is the response", response)
        if (response.ok) {
            const newVehicleModel = await response.json();
            console.log(newVehicleModel);
            const cleared = {
                name: '',
                picture_url: '',
                manufacturer: '',
            };
            this.setState(cleared);  
            }
        }

        async componentDidMount() {
            const url = 'http://localhost:8100/api/manufacturers/';
            const response = await fetch(url);

            if (response.ok) {
                let data = await response.json();
                this.setState({manufacturers: data.manufacturers});
            }
        }

        render() {
            return (
                <div className="row">
                <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a vehicle model</h1>
                    <form onSubmit={this.handleSubmit} id="create-sales-person-form">


                    <div className="form-floating mb-3">
                        <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                        <label htmlFor="name">Name</label>
                    </div>


                    <div className="form-floating mb-3">
                        <input onChange={this.handlePictureUrlChange} value={this.state.picture_url} placeholder="picture_url" required type="text" name="picture_url" id="picture_url" className="form-control"/>
                        <label htmlFor="picture_url">Picture URL</label>
                    </div>


                    <div className="mb-3">
                        <select required onChange={this.handleManufacturerChange} name="manufacturer" id="manufacturer" className="form-select" value={this.state.manufacturer} >
                            <option value="">Choose a manufacturer</option>
                            {this.state.manufacturers.map(manufacturer => {
                                return (
                                    <option key={manufacturer.id} value={manufacturer.id}>
                                        {manufacturer.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>


                    <button className="btn btn-primary">Create</button>
                    </form>
        
                </div>
            </div>
        </div>
        );
    }
}

export default VehicleForm;