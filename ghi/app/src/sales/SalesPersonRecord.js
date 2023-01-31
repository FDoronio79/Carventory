import React, {useState} from "react";


export default function SalesPersonRecord({salesPersons}) {
    const [salesRecords, setSR] = useState([]);
    const [salesPerson, ] = useState('');

    const handleSalesPersonChange = async (e) => {
        const value = e.target.value;
        let url = "http://localhost:8090/api/salesrecord/" + value + "/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setSR(data.salesRecords)
        }
    }
    return (
        <>
            <h1>Sales Record List for Sales Person</h1>
            <div className="mb-3">
                <select required onChange={handleSalesPersonChange} name="salesPerson" id="salesPerson" className="form-select" value={salesPerson} >
                    <option value="">Choose a sales person</option>
                    {salesPersons.map(salesPerson => {
                        return (
                            <option key={salesPerson.employeeNumber} value={salesPerson.employeeNumber}>
                                {salesPerson.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Sales Person</th>
                    <th>Employee Number</th>
                    <th>Purchaser</th>
                    <th>Auto Vin</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {salesRecords.map((salesRecord) => {
                    return (
                        <tr key={salesRecord.id}>
                            <td>{ salesRecord.salesPerson.name }</td>
                            <td>{ salesRecord.salesPerson.employeeNumber }</td>
                            <td>{ salesRecord.customer.name }</td>
                            <td>{ salesRecord.vin.vin }</td>
                            <td> { salesRecord.price }</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </>
    )
}