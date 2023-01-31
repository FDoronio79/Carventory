import React, {useState} from 'react';
import axios from 'axios'

export default function CustomerForm({getCustomers}) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNum] = useState('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
    }
    const handleAddressChange = (e) => {
        const value = e.target.value;
        setAddress(value);
    }
    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNum(value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {};
        data.name = name;
        data.address = address;
        data.phoneNumber = phoneNumber;
        const customerURL = 'http://localhost:8090/api/customers/';
        axios.post(customerURL, data)
        .then((response) => {
            getCustomers();
            setName('');
            setAddress('');
            setPhoneNum('');
        })
    }
    return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Customer</h1>
                <form onSubmit={handleSubmit} id="create-sales-person-form">
                <div className="form-floating mb-3">
                    <input onChange={handleNameChange} value={name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleAddressChange} value={address} placeholder="address" required type="text" name="address" id="address" className="form-control"/>
                    <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handlePhoneNumberChange} value={phoneNumber} placeholder="phoneNumber" required type="text" name="phoneNumber" id="phoneNumber" className="form-control"/>
                    <label htmlFor="phoneNumber">Phone Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>

            </div>
        </div>
    </div>
    );
}