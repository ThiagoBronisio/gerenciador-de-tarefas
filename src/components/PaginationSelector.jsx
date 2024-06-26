import React from "react"

const PaginationSelector = ({itensPerPage, setItensPerPage}) => {
    return (
        <div className="">
                <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
    )
}

export default PaginationSelector;