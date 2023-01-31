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