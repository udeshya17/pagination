import React from 'react';
import './Pagination.css';

function Pagination({currentPage, setCurrentPage, nbPages, totalItems}){

    const totalPges = Math.ceil(totalItems/nbPages);
    const pageNumbers = [...Array(totalPges).keys()].map(num =>num + 1)

    const handlePrev = ()=>{
        setCurrentPage(currentPage - 1)
    }

    const handleNext = ()=>{
        setCurrentPage(currentPage + 1)
    }

    return (
        <div className='pagination'>
            <button  onClick={handlePrev} disabled={currentPage===1}>Previous</button>
            <p className='text'>{currentPage}</p>
            <button onClick={handleNext} disabled={currentPage===totalPges}>Next</button>
        </div>
    )
}

export default Pagination;