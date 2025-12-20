import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { RiDeleteBin6Line } from 'react-icons/ri';

const MyRequest = () => {
    const axiosSecure = useAxiosSecure();

    const [requests, setRequests] = useState([]);
    const [totalRequest, setTotalRequest] = useState(0);
    const [status, setStatus] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const requestPerPage = 10;

    // fetch data
    const fetchRequest = () => {
        axiosSecure
            .get(`/my-request?page=${currentPage - 1}&size=${requestPerPage}&status=${status}`)
            .then(res => {
                setRequests(res.data.request);
                setTotalRequest(res.data.totalRequest);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchRequest();
    }, [axiosSecure, currentPage, status]);

    const numberOfPages = Math.ceil(totalRequest / requestPerPage);
    const pages = [...Array(numberOfPages).keys()].map(i => i + 1);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // delete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete-request?id=${id}`)
                    .then(() => {
                        Swal.fire("Deleted!", "Your request has been deleted.", "success");
                        fetchRequest();
                    });
            }
        });
    };

    const hendleCencel = (id, status) => {
        axiosSecure.patch(`/cancel-request?id=${id}&status=${status}`)
            .then(() => {
                fetchRequest();
                toast.success("Request canceled successfully");
            });
    };

    const hendleDone = (id, status) => {
        axiosSecure.patch(`/done-request?id=${id}&status=${status}`)
            .then(() => {
                fetchRequest();
                toast.success("Request marked as done");
            });
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">My Donation Requests</h2>

                {/* filter */}

                <select
                    className="select select-bordered"
                    value={status}
                    onChange={e => {
                        setStatus(e.target.value);
                    }}
                >
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                    <option value="canceled">Canceled</option>
                </select>
            </div>


            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="table table-zebra">
                    <thead className="bg-base-200">
                        <tr>
                            <th>#</th>
                            <th>Recipient</th>
                            <th>Hospital</th>
                            <th>Blood</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {requests.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-10 text-gray-500">
                                    No donation requests found
                                </td>
                            </tr>
                        ) : (
                            requests.map((request, index) => (
                                <tr key={request._id}>
                                    <td>
                                        {(currentPage - 1) * requestPerPage + index + 1}
                                    </td>
                                    <td>{request.recipientName}</td>
                                    <td>{request.hospital}</td>
                                    <td>
                                        <span className="font-semibold">
                                            {request.bloodGroup}
                                        </span>
                                    </td>
                                    <td>{request.donationDate}</td>
                                    <td>{request.donationTime}</td>
                                    <td>
                                        <span
                                            className={`badge capitalize
      ${request.donationStatus === 'pending' && 'badge-warning'}
      ${request.donationStatus === 'inprogress' && 'badge-info'}
      ${request.donationStatus === 'done' && 'badge-success'}
      ${request.donationStatus === 'canceled' && 'badge-error'}
    `}
                                        >
                                            {request.donationStatus}
                                        </span>
                                    </td>
                                    <td className="space-x-1">
                                        {request.donationStatus === "inprogress" && (
                                            <>
                                                <button
                                                    onClick={() => hendleDone(request._id, "Done")}
                                                    className="btn btn-xs btn-outline"
                                                >
                                                    Done
                                                </button>
                                                <button
                                                    onClick={() => hendleCencel(request._id, "canceled")}
                                                    className="btn btn-xs btn-outline btn-error"
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        )}

                                        <Link to={`/dashboard/view-request/${request._id}`}>
                                            <button className="btn btn-xs btn-outline">View</button>
                                        </Link>

                                        {request.donationStatus === "pending" && (
                                            <>
                                                <button className="btn btn-xs btn-outline text-green-500">Edit</button>
                                                <button
                                                    onClick={() => handleDelete(request._id)}
                                                    className="btn btn-xs btn-outline"
                                                >
                                                    <RiDeleteBin6Line size={15} />
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {numberOfPages > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                    <button
                        className="btn btn-sm"
                        disabled={currentPage === 1}
                        onClick={handlePrev}
                    >
                        Prev
                    </button>

                    {pages.map(page => (
                        <button
                            key={page}
                            className={`btn btn-sm ${page === currentPage
                                ? 'bg-[#435585] text-white'
                                : ''
                                }`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        className="btn btn-sm"
                        disabled={currentPage === numberOfPages}
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyRequest;