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
        // const fetchConfig = {
        //     method: "post",
        //     body: JSON.stringify(data),
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        // };
        // const response = await fetch(salesRecordUrl, fetchConfig);
        // console.log("this is the response", response)
        // if (response.ok) {
        //     const newSalesRecord = await response.json();
        //     console.log(newSalesRecord);
        //     setSP('');
        //     setCustomer('');
        //     setVin('');
        //     setPrice('');
        // }
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
// class SalesRecordForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             salesPerson: '',
//             salesPersons: [],
//             customer: '',
//             customers: [],
//             vin: '',
//             vins: [],
//             price: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
//         this.handleCustomerChange = this.handleCustomerChange.bind(this);
//         this.handleVinChange = this.handleVinChange.bind(this);
//         this.handlePriceChange = this.handlePriceChange.bind(this);

//     }

//     handleSalesPersonChange(event) {
//         const value = event.target.value;
//         this.setState({salesPerson: value})
//     }

//     handleCustomerChange(event) {
//         const value = event.target.value;
//         this.setState({customer: value})
//     }

//     handleVinChange(event) {
//         const value = event.target.value;
//         this.setState({vin: value})
//     }

//     handlePriceChange(event) {
//         const value = event.target.value;
//         this.setState({price: value})
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = {...this.state};
//         delete data.salesPersons;
//         delete data.customers;
//         delete data.vins;
//         console.log(data);    
    
//         const salesRecordUrl = 'http://localhost:8090/api/salesrecords/';
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {
//             'Content-Type': 'application/json',
//             },
//         };
//         const response = await fetch(salesRecordUrl, fetchConfig);
//         console.log("this is the response", response)
//         if (response.ok) {
//             const newSalesRecord = await response.json();
//             console.log(newSalesRecord);
//             const cleared = {
//                 salesPerson: '',
//                 customer: '',
//                 vin: '',
//                 price: ''
//             };
//             this.setState(cleared);  
//             }
//         }

//         async componentDidMount() {
//             const url = 'http://localhost:8090/api/salespersons/';
//             const url1 = 'http://localhost:8090/api/customers/';
//             const url2 = 'http://localhost:8090/api/availablevins/';
//             const response = await fetch(url);
//             const response1 = await fetch(url1);
//             const response2 = await fetch(url2);

//             if (response.ok) {
//                 let data = await response.json();
//                 this.setState({salesPersons: data.salesPersons});
//             }

//             if (response1.ok) {
//                 let data1 = await response1.json();
//                 this.setState({customers: data1.customers});
//             }

//             if (response2.ok) {
//                 let data2 = await response2.json();
//                 this.setState({vins: data2.availbleVins});
//             }
//         }

//         render() {
//             return (
//                 <div className="row">
//                 <div className="offset-3 col-6">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Create a new Sales Record</h1>
//                     <form onSubmit={this.handleSubmit} id="create-sales-record-form">
//                     <div className="mb-3">
//                         <select required onChange={this.handleSalesPersonChange} name="salesPerson" id="salesPerson" className="form-select" value={this.state.salesPerson} >
//                             <option value="">Choose a Sales Person</option>
//                             {this.state.salesPersons.map(salesPerson => {
//                                 return (
//                                     <option key={salesPerson.employeeNumber} value={salesPerson.employeeNumber}>
//                                         {salesPerson.name}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </div>
//                     <div className="mb-3">
//                         <select required onChange={this.handleCustomerChange} name="customer" id="customer" className="form-select" value={this.state.customer} >
//                             <option value="">Choose a Customer</option>
//                             {this.state.customers.map(customer => {
//                                 return (
//                                     <option key={customer.name} value={customer.name}>
//                                         {customer.name}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </div>
//                     <div className="mb-3">
//                         <select required onChange={this.handleVinChange} name="vin" id="vin" className="form-select" value={this.state.vin} >
//                             <option value="">Choose an Automobile</option>
//                             {this.state.vins.map(vin => {
//                                 return (
//                                     <option key={vin.vin} value={vin.vin}>
//                                         {vin.vin}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input onChange={this.handlePriceChange} value={this.state.price} placeholder="price" required type="text" name="price" id="price" className="form-control"/>
//                         <label htmlFor="price">Price</label>
//                     </div>
//                     <button className="btn btn-primary">Create</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }

// export default SalesRecordForm;