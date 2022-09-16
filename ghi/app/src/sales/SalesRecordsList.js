import React from "react";

class SalesRecordsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {salesRecords: []}
    }

    async componentDidMount() {
        const url = "http://localhost:8090/api/salesrecords/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({salesRecords : data.salesRecords})
        }
    }

    render() {
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
                        {this.state.salesRecords.map((salesRecord) => {
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
}


export default SalesRecordsList;
