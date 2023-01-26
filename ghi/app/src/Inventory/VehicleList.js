import React from "react";

export default function VehicleList({models}) {
    return (
        <>
            <h1>Vehicle Models</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {models.map(model => {
                        return (
                            <tr key={ model.href }>
                                <td>{ model.name }</td>
                                <td>{ model.manufacturer.name }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
// class VehicleList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {models: []}
//     }

//     async componentDidMount() {
//         const url = "http://localhost:8100/api/models/";

//         const response = await fetch(url);

//         if (response.ok) {
//             const data = await response.json();
//             this.setState({models : data.models})
//         }
//     }

//     render() {
//         return (
//             <>
//                 <h1>Vehicle Models</h1>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                         <th>Name</th>
//                         <th>Manufacturer</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.models.map(model => {
//                             return (
//                                 <tr key={ model.href }>
//                                     <td>{ model.name }</td>
//                                     <td>{ model.manufacturer.name }</td>
//                                 </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>
//             </>
//         );
//     }
// }

// export default VehicleList;
