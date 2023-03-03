import React from "react";

const PaginationComponent = ({pages, setCurrentPage}) => {
    return (
        <div>
            {Array.from(Array(pages), (vehicle, index) => {
                return <button className="btn btn-info paginationButton" value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} type="button">{index +1}</button>
            })}

        </div>
    )
}

export default PaginationComponent;