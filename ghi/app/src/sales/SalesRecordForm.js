import React, {useState} from 'react';
import axios from 'axios'

export default function SalesRecordForm({salesPersons, customers, vins, getSR}) {
    const [salesPerson, setSP] = useState('');
    const [customer, setCustomer] = useState('');
    const [vin, setVin] = useState('');
    const [price, setPrice] = useState('');

    const handleSalesPersonChange = e => {
        const val = e.target.value
        setSP(val)
    }
    const handleCustomerChange = e => {
        const val = e.target.value
        setCustomer(val)
    }
    const handleVinChange = e => {
        const val = e.target.value
        setVin(val)
    }
    const handlePriceChange = e => {
        const val = e.target.value
        setPrice(val)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {};
        data.salesPerson = salesPerson;
        data.customer = customer;
        data.vin = vin;
        data.price = price;

        const salesRecordUrl = 'http://localhost:8090/api/salesrecords/';
        axios.post(salesRecordUrl, data)
        .then((response) => {
            getSR();
            setSP('');
            setCustomer('');
            setVin('');
            setPrice('');
        })
    }
    return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new Sales Record</h1>
                <form onSubmit={handleSubmit} id="create-sales-record-form">
                <div className="mb-3">
                    <select required onChange={handleSalesPersonChange} name="salesPerson" id="salesPerson" className="form-select" value={salesPerson} >
                        <option value="">Choose a Sales Person</option>
                        {salesPersons.map(salesPerson => {
                            return (
                                <option key={salesPerson.employeeNumber} value={salesPerson.employeeNumber}>
                                    {salesPerson.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <select required onChange={handleCustomerChange} name="customer" id="customer" className="form-select" value={customer} >
                        <option value="">Choose a Customer</option>
                        {customers.map(customer => {
                            return (
                                <option key={customer.name} value={customer.name}>
                                    {customer.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-3">
                    <select required onChange={handleVinChange} name="vin" id="vin" className="form-select" value={vin} >
                        <option value="">Choose an Automobile</option>
                        {vins.map(vin => {
                            return (
                                <option key={vin.vin} value={vin.vin}>
                                    {vin.vin}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handlePriceChange} value={price} placeholder="price" required type="text" name="price" id="price" className="form-control"/>
                    <label htmlFor="price">Price</label>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
    );
}