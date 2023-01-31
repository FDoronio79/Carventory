export default function ManufactuererList({manufacturers}) {
    return (
        <>
            <h1>Manufacturers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map(manufacturer => {
                        return (
                            <tr key={ manufacturer.href }>
                                <td>{ manufacturer.name }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    )
}