import React, {useState} from 'react';

export default function SalesPersonForm() {
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
        const CustomerUrl = 'http://localhost:8090/api/salespersons/';
            const fetchConfig = {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                'Content-Type': 'application/json',
                },
            };
            const response = await fetch(CustomerUrl, fetchConfig);
            console.log("this is the response", response)
            if (response.ok) {
                const newCustomer = await response.json();
                console.log(newCustomer);
                setName('');
                setEmpNum('');
        }
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
// class SalesPersonForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             employeeNumber: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleEmployeeNumberChange = this.handleEmployeeNumberChange.bind(this);
//     }

//     handleNameChange(event) {
//         const value = event.target.value;
//         this.setState({name: value})
//     }

//     handleEmployeeNumberChange(event) {
//         const value = event.target.value;
//         this.setState({employeeNumber: value})
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = {...this.state};  
    
//         const salesPersonsUrl = 'http://localhost:8090/api/salespersons/';
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {
//             'Content-Type': 'application/json',
//             },
//         };
//         const response = await fetch(salesPersonsUrl, fetchConfig);
//         console.log("this is the response", response)
//         if (response.ok) {
//             const newSalesPerson = await response.json();
//             console.log(newSalesPerson);
//             const cleared = {
//                 name: '',
//                 employeeNumber: ''
//             };
//             this.setState(cleared);  
//             }
//         }

//         render() {
//             return (
//                 <div className="row">
//                 <div className="offset-3 col-6">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Create a new Sales Person</h1>
//                     <form onSubmit={this.handleSubmit} id="create-sales-person-form">
//                     <div className="form-floating mb-3">
//                         <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
//                         <label htmlFor="name">Name</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input onChange={this.handleEmployeeNumberChange} value={this.state.employeeNumber} placeholder="employeeNumber" required type="text" name="employeeNumber" id="employeeNumber" className="form-control"/>
//                         <label htmlFor="empoyeeNumber">Employee Number</label>
//                     </div>
//                     <button className="btn btn-primary">Create</button>
//                     </form>
        
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }

// export default SalesPersonForm;
//     ;