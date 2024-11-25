import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEnquiry, getAllEnquiry } from '../Features/Admin/AdminSlice';
import { MdDelete } from 'react-icons/md';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const AllEnquiries = () => {
    const dispatch = useDispatch();
    const enquiries = useSelector(state => state.Admin.allEnquiries?.data);
    const {deletedEnquiry} = useSelector(state => state.Admin)
    useEffect(() => {
        dispatch(getAllEnquiry());
    }, [deletedEnquiry]);

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');

    // Filtered enquiries based on the search query
    const filteredEnquiries = enquiries?.filter(enquiry =>
        enquiry.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enquiry.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        enquiry.mobileNumber?.toString().includes(searchQuery) ||
        enquiry.message?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredEnquiries?.slice(indexOfFirstEntry, indexOfLastEntry);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleEntriesChange = (e) => setEntriesPerPage(Number(e.target.value));
    const totalPages = Math.ceil(filteredEnquiries?.length / entriesPerPage);

    const deleteHandler = (id) => {
        dispatch(deleteEnquiry(id))
    }

    return (
        <div className="container mt-5">
            {/* Search Bar */}
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1); // Reset to first page on search
                    }}
                    className="form-control"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="entries-per-page" className="form-label">Entries per page: </label>
                <select
                    id="entries-per-page"
                    value={entriesPerPage}
                    onChange={handleEntriesChange}
                    className="form-select w-auto"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th className="text-nowrap">Name</th>
                            <th className="text-nowrap">Email</th>
                            <th className="text-nowrap">Mobile Number</th>
                            <th className="text-nowrap">Message</th>
                            <th className="text-nowrap">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {currentEntries?.length > 0 ? (
                            currentEntries.map((enquiry) => (
                                <tr key={enquiry.user_id}>
                                    <td className="text-nowrap">{enquiry?.name}</td>
                                    <td className="text-nowrap">{enquiry?.email}</td>
                                    <td className="text-nowrap">{enquiry?.mobileNumber}</td>
                                    <td className="text-nowrap">{enquiry?.message}</td>
                                    <td className="text-nowrap"  onClick={() => deleteHandler(enquiry?._id)}>
                                    <OverlayTrigger
        placement="top" // Tooltip placement
        overlay={<Tooltip id="delete-tooltip">Delete Enquiry</Tooltip>} // Tooltip text
      >
        <div onClick={() => deleteHandler(enquiry?._id)} style={{ cursor: 'pointer' }}>
          <MdDelete id="icon-size" />
        </div>
      </OverlayTrigger>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No enquiries found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-3">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => paginate(1)}
                                disabled={currentPage === 1}
                            >
                                First
                            </button>
                        </li>
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>
                        </li>
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </li>
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => paginate(totalPages)}
                                disabled={currentPage === totalPages}
                            >
                                Last
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AllEnquiries;
