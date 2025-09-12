//1. Import area
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../helper/helper';

function BusinessListingPagination() {
    //2.1 Hooks Area
    const [businessList, setBusinessList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    //Call the api after the page reload
    useEffect(() => {
        getBusiness(currentPage);
    }, [currentPage]);

    //2.2 Function definition
    let getBusiness = (page) => {
        try {
            axios.get(`${BASE_URL}/api/businesses?pagination[page]=${page}&pagination[pageSize]=10`)
                .then(function (response) {
                    setCurrentPage(response?.data?.meta?.pagination?.page);
                    setLastPage(response?.data?.meta?.pagination?.pageCount);
                    setBusinessList(response?.data?.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    // Generate page numbers (4 buttons around current page)
    // Generate page numbers (10 buttons around current page)
    const getPageNumbers = () => {
        let start = Math.max(currentPage - 5, 1);  // shift 5 before current
        let end = Math.min(start + 9, lastPage);   // total 10 pages

        // adjust start again if we are near the end
        start = Math.max(end - 9, 1);

        let pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    //2.3 Return Statement
    return (
        <div>
            <h1>BusinessListingPagination</h1>
            <ul className="list-group">
                {businessList.length > 0 &&
                    businessList.map((cv, idx) => (
                        <li key={idx} className="list-group-item">{cv.name}</li>
                    ))
                }
            </ul>

            <nav className="mt-4 mb-3 d-flex justify-content-center" aria-label="Page navigation example">
                <ul className="pagination">

                    {/* First button */}
                    {currentPage > 1 && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(1)}>
                                First
                            </button>
                        </li>
                    )}

                    {/* Previous button */}
                    {currentPage > 1 && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                                Previous
                            </button>
                        </li>
                    )}

                    {/* Dynamic page numbers */}
                    {getPageNumbers().map((pageNum) => (
                        <li key={pageNum} className={`page-item ${pageNum === currentPage ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(pageNum)}>
                                {pageNum}
                            </button>
                        </li>
                    ))}

                    {/* Next button */}
                    {currentPage < lastPage && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                                Next
                            </button>
                        </li>
                    )}

                    {/* Last button */}
                    {currentPage < lastPage && (
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(lastPage)}>
                                Last
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}

//3. Export area
export default BusinessListingPagination;
