//1. Import area
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../helper/helper';


function BusinessListingPagination() {
    //2.1 Hooks Area
    const [businessList, setBusinessList] = useState([]);
    const [currentPage, setCurrentPage] = useState('');
    const [lastPage, setLastPage] = useState('');
    //Call the api after the page reload

    useEffect(() => {
        //2. Calling
        getBusiness();
    }, []);

    //2.2 Function defiatnion
    //1 Define
    let getBusiness = () => {
        try {
            axios.get(`${BASE_URL}/api/businesses?pagination[page]=1000&pagination[pageSize]=10`)
                .then(function (response) {
                    // handle success
                    console.log(response?.data?.data);
                    console.log(response?.data?.meta?.pagination);
                    setCurrentPage(response?.data?.meta?.pagination?.page);
                    setLastPage(response?.data?.meta?.pagination?.pageCount);
                    setBusinessList(response?.data?.data);

                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });


        } catch (error) {
            console.log(error);
        }
    }

    //2.3 Return Statment
    return (
        <div>
            <h1>BusinessListingPagination</h1>
            <ul className="list-group">
                {
                    businessList.length > 0 &&
                    businessList.map((cv, idx, arr) => {
                        return <li key={idx} className="list-group-item">{cv.name}</li>
                    })

                }
            </ul>
            <nav className="mt-4 mb-3 d-flex justify-content-center" aria-label="Page navigation example ">
                <ul className="pagination">
                    {
                        currentPage != 1 &&
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    }

                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>

                    {
                        currentPage != lastPage &&
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    }


                </ul>
            </nav>
        </div>
    )
}


//3. Export area

export default BusinessListingPagination;