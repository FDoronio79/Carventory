import {useState} from "react";
import axios from 'axios'

export default function ManufacturerForm({getManufacturers}) {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.name = name

        const manufacturerUrl = "http://localhost:8100/api/manufacturers/";
        axios.post(manufacturerUrl, data)
        .then ((response) => {
            setName('');
            getManufacturers();
            console.log(response)
        })
    }  
    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a manufacturer</h1>
                    <form onSubmit={handleSubmit} id="create-manu-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
