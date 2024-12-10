import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete, MdEdit } from 'react-icons/md';
import { OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import { allLeads, deleteLead, editLead } from '../Features/Lead/LeadSlice';

const AllLeads = () => {
  const dispatch = useDispatch();
  const leadsData = useSelector(state => state.Lead?.allLeads?.leads);
  const {editedLead,deletedLead} = useSelector(state => state.Lead);


  useEffect(() => {
    dispatch(allLeads());
  }, [dispatch, editedLead,deleteLead]);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editLeadData, setEditLeadData] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState(null);

  // Filtered leadsData based on the search query
  const filteredEnquiries = leadsData?.filter(lead =>
    lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.mobileNumber?.toString().includes(searchQuery) ||
    lead.message?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredEnquiries?.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleEntriesChange = (e) => setEntriesPerPage(Number(e.target.value));
  const totalPages = Math.ceil(filteredEnquiries?.length / entriesPerPage);

  const deleteHandler = (id) => {
    setLeadToDelete(id);
    setShowDeleteModal(true);
  }

  const confirmDeleteHandler = () => {
    dispatch(deleteLead(leadToDelete));
    setShowDeleteModal(false);
  }

  const handleEdit = (lead) => {
    setEditLeadData(lead);
    setShowEditModal(true);
  }

  const handleSaveEdit = () => {
    // You can dispatch your edit action here
    dispatch(editLead(editLeadData))
    setShowEditModal(false);
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
              <th className="text-nowrap">Country</th>
              <th className="text-nowrap">State</th>
              <th className="text-nowrap">City</th>
              <th className="text-nowrap">Gender</th>
              <th className="text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries?.length > 0 ? (
              currentEntries.map((lead) => (
                <tr key={lead.user_id}>
                  <td className="text-nowrap">{lead?.name}</td>
                  <td className="text-nowrap">{lead?.email}</td>
                  <td className="text-nowrap">{lead?.mobileNumber}</td>
                  <td className="text-nowrap">{lead?.country}</td>
                  <td className="text-nowrap">{lead?.state}</td>
                  <td className="text-nowrap">{lead?.city}</td>
                  <td className="text-nowrap">{lead?.gender}</td>
                  <td className="text-nowrap d-flex">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="edit-tooltip">Edit Lead</Tooltip>}
                    >
                      <div onClick={() => handleEdit(lead)}style={{ cursor: 'pointer' }}>
                        <MdEdit id="icon-size" />
                      </div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="delete-tooltip">Delete Lead</Tooltip>}
                    >
                      <div onClick={() => deleteHandler(lead?._id)} style={{ cursor: 'pointer' }}>
                        <MdDelete id="icon-size" />
                      </div>
                    </OverlayTrigger>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">
                  No leads found.
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

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={editLeadData?.name || ''}
                onChange={(e) => setEditLeadData({ ...editLeadData, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={editLeadData?.email || ''}
                onChange={(e) => setEditLeadData({ ...editLeadData, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                value={editLeadData?.mobileNumber || ''}
                onChange={(e) => setEditLeadData({ ...editLeadData, mobileNumber: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                value={editLeadData?.country || ''}
                onChange={(e) => setEditLeadData({ ...editLeadData, country: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                value={editLeadData?.state || ''}
                onChange={(e) => setEditLeadData({ ...editLeadData, state: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                value={editLeadData?.city || ''}
                onChange={(e) => setEditLeadData({ ...editLeadData, city: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <input
                type="text"
                className="form-control"
                value={editLeadData?.gender || ''}
                onChange={(e) => setEditLeadData({ ...editLeadData, gender: e.target.value })}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this lead?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllLeads;
