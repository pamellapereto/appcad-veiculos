import React from "react";

const PaginationSelector = ({ vehiclesPerPage, setVehiclesPerPage }) => {
    return (
        <div>
            <p style={{ fontSize: 19, marginTop: -30, marginBottom: 30}}>Veículos por página:
                <select style={{margin:10}} value={vehiclesPerPage} onChange={(e) => setVehiclesPerPage(Number(e.target.value))}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select></p>
        </div>
    )
}

export default PaginationSelector;