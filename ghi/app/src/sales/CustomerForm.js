import React, {useState} from 'react';

export default function CustomerForm() {
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
        const CustomerUrl = 'http://localhost:8090/api/customers/';
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
                setAddress('');
                setPhoneNum('');
        }
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
// class CustomerForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             address: '',
//             phoneNumber: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleNameChange = this.handleNameChange.bind(this);
//         this.handleAddressChange = this.handleAddressChange.bind(this);
//         this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
//     }

//     handleNameChange(event) {
//         const value = event.target.value;
//         this.setState({name: value})
//     }

//     handleAddressChange(event) {
//         const value = event.target.value;
//         this.setState({address: value})
//     }

//     handlePhoneNumberChange(event) {
//         const value = event.target.value;
//         this.setState({phoneNumber: value})
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = {...this.state};  
    
//         const CustomerUrl = 'http://localhost:8090/api/customers/';
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {
//             'Content-Type': 'application/json',
//             },
//         };
//         const response = await fetch(CustomerUrl, fetchConfig);
//         console.log("this is the response", response)
//         if (response.ok) {
//             const newCustomer = await response.json();
//             console.log(newCustomer);
//             const cleared = {
//                 name: '',
//                 address: '',
//                 phoneNumber: ''
//             };
//             this.setState(cleared);  
//             }
//         }

//         render() {
//             return (
//                 <div className="row">
//                 <div className="offset-3 col-6">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Create a new Customer</h1>
//                     <form onSubmit={this.handleSubmit} id="create-sales-person-form">
//                     <div className="form-floating mb-3">
//                         <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
//                         <label htmlFor="name">Name</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input onChange={this.handleAddressChange} value={this.state.address} placeholder="address" required type="text" name="address" id="address" className="form-control"/>
//                         <label htmlFor="address">Address</label>
//                     </div>
//                     <div className="form-floating mb-3">
//                         <input onChange={this.handlePhoneNumberChange} value={this.state.phoneNumber} placeholder="phoneNumber" required type="text" name="phoneNumber" id="phoneNumber" className="form-control"/>
//                         <label htmlFor="phoneNumber">Phone Number</label>
//                     </div>
//                     <button className="btn btn-primary">Create</button>
//                     </form>
        
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }

// export default CustomerForm;
//     ;