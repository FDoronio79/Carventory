import React, {useState} from 'react';
import axios from 'axios'

export default function SalesPersonForm({getSP}) {
    const [name, setName] = useState('');
    const [employeeNumber, setEmpNum] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
    }
    const handleEmployeeNumberChange = (e) => {
        const value = e.target.value;
        setEmpNum(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.name = name;
        data.employeeNumber = employeeNumber;
        const customerUrl = 'http://localhost:8090/api/salespersons/';
        axios.post(customerUrl, data)
        .then ((response) => {
            getSP();
            setName('');
            setEmpNum('');
        })
    }
    return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Sales Person</h1>
                <form onSubmit={handleSubmit} id="create-sales-person-form">
                <div className="form-floating mb-3">
                    <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleEmployeeNumberChange} value={employeeNumber} placeholder="employeeNumber" required type="text" name="employeeNumber" id="employeeNumber" className="form-control"/>
                    <label htmlFor="employeeNumber">Employee Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>

            </div>
        </div>
    </div>
    );
}