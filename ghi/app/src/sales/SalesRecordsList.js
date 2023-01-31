import React from "react";

export default function SalesRecordList({salesRecords}) {
    return (
        <>
            <h1>Sales Records List</h1>
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