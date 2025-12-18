import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyRequest = () => {
    const [myRequests, setMyRequests] = useState([]);
    const [totalRequest, setTotalRequest] = useState(0);
    const [requestPerPage, setRequestPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/my-request?page=${currentPage}&size=${requestPerPage}`)
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
    console.log(pages);

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
                                    <th>{index + 1}</th>
                                    <td>{request.recipientName}</td>
                                    <td>{request.hospital}</td>
                                    <td>{request.bloodGroup}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            prev 1 2 3 4 next
        </div>
    );
};

export default MyRequest;