import {useState} from 'react';
import axios from 'axios'

export default function VehicleForm({manufacturers, getModels}) {
    const [name, setName] = useState('');
    const [picture_url, setPic] = useState('');
    const [manufacturer_id, setManufacturers] = useState('');

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value)
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPic(value)
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturers(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};  
        data.name = name;
        data.picture_url = picture_url;
        data.manufacturer_id = manufacturer_id;
        console.log(data);    

        const vehicleModelUrl = 'http://localhost:8100/api/models/';
        axios.post(vehicleModelUrl, data)
        .then ((response) => {
            getModels();
            setName('');
            setPic('');
            setManufacturers('');
            console.log(response)
        })
        }
    return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a vehicle model</h1>
                <form onSubmit={handleSubmit} id="create-sales-person-form">


                <div className="form-floating mb-3">
                    <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>


                <div className="form-floating mb-3">
                    <input onChange={handlePictureUrlChange} value={picture_url} placeholder="picture_url" required type="text" name="picture_url" id="picture_url" className="form-control"/>
                    <label htmlFor="picture_url">Picture URL</label>
                </div>


                <div className="mb-3">
                    <select required onChange={handleManufacturerChange} name="manufacturer" id="manufacturer" className="form-select" value={manufacturer_id} >
                        <option value="">Choose a manufacturer</option>
                        {manufacturers.map(manufacturer => {
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