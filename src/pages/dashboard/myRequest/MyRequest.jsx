import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyRequest = () => {
    const [myRequests, setMyRequests] = useState([]);
    const [totalRequest, setTotalRequest] = useState(0);
    const [requestPerPage, setRequestPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/my-request?page=${currentPage - 1}&size=${requestPerPage}`)
            .then(res => {
                setMyRequests(res.data.request);
                setTotalRequest(res.data.totalRequest)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axiosSecure, currentPage, requestPerPage])

    const numberOfPages = Math.ceil(totalRequest / requestPerPage)
    const pages = [...Array(numberOfPages).keys()].map(e => e + 1)

    // console.log(myRequests);
    // console.log(totalRequest);
    // console.log(numberOfPages);
    // console.log(pages);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Hospital Name</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myRequests.map((request, index) => (
                                <tr>
                                    <th>{(currentPage - 1) * requestPerPage + index + 1}</th>
                                    <td>{request.recipientName}</td>
                                    <td>{request.hospital}</td>
                                    <td>{request.bloodGroup}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mt-12 gap-4'>
                <button onClick={handlePrev} className="btn">Prev</button>
                {
                    pages.map(page =>
                        <button
                            className={`btn ${page === currentPage ? 'bg-[#435585] text-white' : ''}`}
                            onClick={() => setCurrentPage(page)}>{page}</button>
                    )
                }
                <button onClick={handleNext} className="btn">Next</button>
            </div>
        </div>
    );
};

export default MyRequest;