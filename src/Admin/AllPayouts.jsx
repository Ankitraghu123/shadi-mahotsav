import React, { useEffect, useState } from "react";
import { Card, Table, Form, Pagination, Image, Button, Modal,Tooltip, OverlayTrigger } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allPayouts, updatePayoutStatus } from "../Features/Franchise/FranchiseSlice";
import { FaCheck, FaTimes } from "react-icons/fa";


const AllPayouts = () => {
  const dispatch = useDispatch();
  const { updatedPayoutStatus } = useSelector((state) => state.Franchise);

  useEffect(() => {
    dispatch(allPayouts());
  }, [updatedPayoutStatus]);

  const data = useSelector((state) => state.Franchise.allPayouts?.payout);

  const approvePayoutStatus = (id) => {
    dispatch(updatePayoutStatus({ id: id, status: "Approved" }));
  };

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Modal state for rejecting payout
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [selectedPayoutId, setSelectedPayoutId] = useState(null);

  const handleRejectPayout = (id) => {
    setSelectedPayoutId(id);
    setShowRejectModal(true);
  };

  const submitRejectReason = () => {
    if (rejectReason.trim()) {
      dispatch(updatePayoutStatus({ id: selectedPayoutId, status: "Rejected", reason: rejectReason }));
      setRejectReason("");
      setShowRejectModal(false);
    }
  };

  const filteredData = data?.filter(
    (item) =>
      item.amount.toString().includes(search) ||
      item.date.includes(search) ||
      item.status.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="margin-top" className=" mx-auto my-4">
      <div className="back_area">
        <div className="front_area">
          <Card className="shadow-lg">
            <Card.Header className="p-0">
              <Image
                src="https://skillsikhar.com/user/img/payout_details.jpg"
                className="img-fluid"
                alt="Payout Details"
              />
            </Card.Header>
            <Card.Body>
              <div className="table-responsive referrals-table">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Group controlId="entriesSelect">
                    <Form.Label>Show</Form.Label>
                    <Form.Select
                      aria-label="Select number of entries to show"
                      className="d-inline-block w-auto ms-2"
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="searchInput">
                    <Form.Label>Search:</Form.Label>
                    <Form.Control
                      type="search"
                      placeholder="Search..."
                      className="ms-2 d-inline-block w-auto"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Request Amount</th>
                      <th>Tds %</th>
                      <th>Amount</th>
                      <th>Automate Request Date</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Package</th>
                      <th>Kyc</th>
                      <th>Created At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData?.length > 0 ? (
                      currentData?.map((item, index) => (
                        <tr key={index}>
                          <td>{1}</td>
                          <td>{item.reqAmount}</td>
                          <td>{item.panCardApproved ? "2%" : "20%"}</td>
                          <td>{item.amount}</td>
                          <td>{item.createdAt}</td>
                          <td>{item?.franchiseId?.name}</td>
                          <td>{item?.franchiseId?.email}</td>
                          <td>{item?.franchiseId?.package}</td>
                          <td>{item?.franchiseId?.kycId?.approved ? "Approved" : "Pending"}</td>
                          <td>{item.createdAt}</td>
                          <td className="d-flex gap-0">
                          <OverlayTrigger
  placement="top"
  overlay={
    <Tooltip id="tooltip-approve">Approve Payout</Tooltip>
  }
>
  <FaCheck
    style={{ cursor: "pointer", color: "green", fontSize: "40px" }}
    onClick={() => approvePayoutStatus(item._id)}
  />
</OverlayTrigger>

<OverlayTrigger
  placement="top"
  overlay={
    <Tooltip id="tooltip-reject">Reject Payout</Tooltip>
  }
>
  <FaTimes
    style={{ cursor: "pointer", color: "red", fontSize: "40px" }}
    onClick={() => handleRejectPayout(item._id)}
  />
</OverlayTrigger>
</td>

                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No matching records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p>
                    Showing {indexOfFirstItem + 1} to{" "}
                    {Math.min(indexOfLastItem, filteredData?.length)} of{" "}
                    {filteredData?.length} entries
                  </p>
                  <Pagination>
                    <Pagination.Prev
                      onClick={() =>
                        currentPage > 1 && handlePageChange(currentPage - 1)
                      }
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Pagination.Prev>
                    <Pagination.Next
                      onClick={() =>
                        currentPage < totalPages &&
                        handlePageChange(currentPage + 1)
                      }
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Pagination.Next>
                  </Pagination>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Reject Payout Modal */}
      <Modal show={showRejectModal} onHide={() => setShowRejectModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reject Payout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="rejectReason">
            <Form.Label>Reason for Rejection</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Enter the reason for rejecting this payout"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRejectModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={submitRejectReason}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllPayouts;
