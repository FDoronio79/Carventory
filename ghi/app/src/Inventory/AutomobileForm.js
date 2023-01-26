import React, {useState} from 'react';

export default function AutomobileForm({models}) {
    const [color, setColor] =useState('');
    const [year, setYear] =useState('');
    const [vin, setVin] =useState('');
    const [modelId, setModelID] =useState('');

    const handleColorChange = (event) => {
        const value = event.target.value;
        setColor(value);
    }

    const handleYearChange = (event) => {
        const value = event.target.value;
        setYear(value);
    }

    const handleVinChange = (event) => {
        const value = event.target.value;
        setVin(value);
    }

    const handleModelChange = (event) => {
        const value = event.target.value;
        setModelID(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {}; 
        data.color = color;
        data.year = year;
        data.vin = vin;
        data.model_id = modelId;

        const automobileUrl = 'http://localhost:8100/api/automobiles/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const response = await fetch(automobileUrl, fetchConfig);
        console.log("this is the response", response)
        if (response.ok) {
            const newAutomobile = await response.json();
            console.log(newAutomobile);
            setColor('');
            setYear('');
            setVin('');
            setModelID('');
        }
    }
    return (
        <div className="row">
        <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
            <h1>Create a new automobile</h1>
            <form onSubmit={handleSubmit} id="create-sales-person-form">


            <div className="form-floating mb-3">
                <input onChange={handleColorChange} value={color} placeholder="color" required type="text" name="color" id="color" className="form-control"/>
                <label htmlFor="color">Color</label>
            </div>


            <div className="form-floating mb-3">
                <input onChange={handleYearChange} value={year} placeholder="year" required type="text" name="year" id="year" className="form-control"/>
                <label htmlFor="year">Year</label>
            </div>

            <div className="form-floating mb-3">
                <input onChange={handleVinChange} value={vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control"/>
                <label htmlFor="vin">Vin</label>
            </div>

            <div className="mb-3">
                <select required onChange={handleModelChange} name="model" id="model" className="form-select" value={modelId} >
                    <option value="">Choose a model</option>
                    {models.map(model => {
                        return (
                            <option key={model.id} value={model.id}>
                                {model.name}
                            </option>
                        );
                    })}
                </select>
            </div>


            <button className="btn btn-primary">Create</button>
            </form>
        
                </div>
            </div>
        </div>
    );
}
// class AutomobileForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             color: '',
//             year: '',
//             vin: '',
//             model_id: '',
//             models: []
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleColorChange = this.handleColorChange.bind(this);
//         this.handleYearChange = this.handleYearChange.bind(this);
//         this.handleVinChange = this.handleVinChange.bind(this);
//         this.handleModelChange = this.handleModelChange.bind(this);
//     }

//     handleColorChange(event) {
//         const value = event.target.value;
//         this.setState({color: value})
//     }

//     handleYearChange(event) {
//         const value = event.target.value;
//         this.setState({year: value})
//     }

//     handleVinChange(event) {
//         const value = event.target.value;
//         this.setState({vin: value})
//     }

//     handleModelChange(event) {
//         const value = event.target.value;
//         this.setState({model_id: value})
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = {...this.state};  
//         delete data.models;
//         console.log(data);  

//         const automobileUrl = 'http://localhost:8100/api/automobiles/';
//         const fetchConfig = {
//             method: "post",
//             body: JSON.stringify(data),
//             headers: {
//             'Content-Type': 'application/json',
//             },
//         };
//         const response = await fetch(automobileUrl, fetchConfig);
//         console.log("this is the response", response)
//         if (response.ok) {
//             const newAutomobile = await response.json();
//             console.log(newAutomobile);
//             const cleared = {
//                 color: '',
//                 year: '',
//                 vin: '',
//                 model: ''
//             };
//             this.setState(cleared);  
//             }
//         }

//         async componentDidMount() {
//             const url = 'http://localhost:8100/api/models/';
//             const response = await fetch(url);

//             if (response.ok) {
//                 let data = await response.json();
//                 this.setState({models: data.models});
//             }
//         }

//         render() {
//             return (
//                 <div className="row">
//                 <div className="offset-3 col-6">
//                 <div className="shadow p-4 mt-4">
//                     <h1>Create a new automobile</h1>
//                     <form onSubmit={this.handleSubmit} id="create-sales-person-form">


//                     <div className="form-floating mb-3">
//                         <input onChange={this.handleColorChange} value={this.state.color} placeholder="color" required type="text" name="color" id="color" className="form-control"/>
//                         <label htmlFor="color">Color</label>
//                     </div>


//                     <div className="form-floating mb-3">
//                         <input onChange={this.handleYearChange} value={this.state.year} placeholder="year" required type="text" name="year" id="year" className="form-control"/>
//                         <label htmlFor="year">Year</label>
//                     </div>

//                     <div className="form-floating mb-3">
//                         <input onChange={this.handleVinChange} value={this.state.vin} placeholder="vin" required type="text" name="vin" id="vin" className="form-control"/>
//                         <label htmlFor="vin">Vin</label>
//                     </div>

//                     <div className="mb-3">
//                         <select required onChange={this.handleModelChange} name="model" id="model" className="form-select" value={this.state.model} >
//                             <option value="">Choose a model</option>
//                             {this.state.models.map(model => {
//                                 return (
//                                     <option key={model.id} value={model.id}>
//                                         {model.name}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </div>


//                     <button className="btn btn-primary">Create</button>
//                     </form>
        
//                 </div>
//             </div>
//         </div>
//         );
//     }
// }

// export default AutomobileForm;