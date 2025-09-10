//1. Import area
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../helper/helper';

//2. Function definition area
function BusinessListing() {
    //2.1 Hooks Area
    const [businessList, setBusinessList] = useState([]);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    // ✅ API fetch function
    const fetchBusinesses = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await axios.get(
                `${BASE_URL}/api/businesses?pagination[page]=${pageNumber}&pagination[pageSize]=100`
            );
            const newData = response?.data?.data || [];

            // append to old list instead of replacing
            setBusinessList((prev) => [...prev, ...newData]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Initial load
    useEffect(() => {
        fetchBusinesses(page);
    }, [page]);

    // ✅ Scroll Event Listener
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;

            const scrolled = (scrollTop / (fullHeight - windowHeight)) * 100;
            const percent = Math.round(scrolled);
            setScrollPercent(percent);

            // 👇 If scrolled past 70%, load next page
            if (percent >= 70 && !loading) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);

    //2.3 Return Statement
    return (
        <div>
            <h5 className="a_scroll">Scroll Progress: {scrollPercent}%</h5>
            <ul className="list-group">
                {businessList.map((cv, idx) => (
                    <li key={idx} className="list-group-item">{cv.name}</li>
                ))}
            </ul>
            {loading && <p>Loading more...</p>}
        </div>
    )
}

//3. Export area
export default BusinessListing;
