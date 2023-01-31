import React, {useState} from 'react';
import axios from 'axios'

export default function TechnicianForm({getTechs}) {
    const [name, setName] = useState('');
    const [employee_number, setEmpNum] = useState('');

    const handleChangeName = (e) => {
        const value = e.target.value;
        setName(value);
    }
    const handleChangeEmployeeNum = (e) => {
        const value = e.target.value;
        setEmpNum(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const technicianUrl = `${process.env.REACT_APP_SERVICE_API}/api/technicians/`;
        const data = {};
        data.name = name;
        data.employee_number = employee_number;
        axios.post(technicianUrl, data)
        .then((response) => {
            getTechs();
            setName('');
            setEmpNum('');
        })
    }
    return (
        <><div className="my-5 container">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h2 className="text-center">Create Technician</h2>
                    <form onSubmit={handleSubmit} id="create-technician-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeName} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleChangeEmployeeNum} value={employee_number} placeholder="Employee Number" required type="text" name="employee_number" id="employee_number" className="form-control" />
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