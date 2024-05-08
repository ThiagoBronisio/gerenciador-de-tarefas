import React from "react"

const Pagination = ({pages, setCurrentPage, currentPage}) => {
    return (
        <div className="">
                {Array.from(Array(pages), (item, index) => {
                    return <button key={index} className={currentPage === index ? "active" : ""} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
                })}
        </div>
    )
}

export default Pagination;