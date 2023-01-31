import React, {useState} from 'react';
import axios from 'axios'

export default function AutomobileForm({models, getAuto}) {
    const [color, setColor] =useState('');
    const [year, setYear] =useState('');
    const [vin, setVin] =useState('');
    const [modelId, setModelID] =useState('');

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModelID(value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}; 
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = modelId;

        axios.post('http://localhost:8100/api/automobiles/', data)
        .then((response) => {
            setColor('');
            setYear('');
            setVin('');
            setModelID('');
            getAuto();
    })
}
    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a new automobile</h1>
            <form onSubmit={handleSubmit} id="create-sales-person-form">


            <div className="form-floating mb-3">
                <input onChange={handleColorChange} value={color} placeholder="color" required type="text" name="color" id="color" className="form-control"/>
                <label htmlFor="color">Color</label>
            </div>


            <div className="form-floating mb-3">
                <input onChange={handleYearChange} value={year} placeholder="year" required type="text" name="year" id="year" className="form-control"/>
                <label htmlFor="year">Year</label>
            </div>

            <div className="form-floating mb-3">
                <input onChange={handleVinChange} value={vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">Vin</label>
            </div>

            <div className="mb-3">
                <select required onChange={handleModelChange} name="model" id="model" className="form-select" value={modelId} >
                    <option value="">Choose a model</option>
                    {models.map(model => {
                        return (
                            <option key={model.id} value={model.id}>
                                {model.name}
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