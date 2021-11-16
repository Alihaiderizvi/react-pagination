import React from 'react'

const Pagination = ({postPerPage,totalPosts,paginate}) => {

    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(totalPosts/postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map( number =>(
                    <li className='page-item' key={number}>
                        <a onClick={()=> paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
