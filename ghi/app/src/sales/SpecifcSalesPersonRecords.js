import React from "react";

function SpecificSalesPersonRecords(props) {
    return (
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
            {props.salesRecords.map((salesRecord) => {
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
    );
}

export default SpecificSalesPersonRecords;
