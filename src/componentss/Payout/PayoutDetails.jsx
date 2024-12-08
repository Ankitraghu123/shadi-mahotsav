import React, { useEffect, useState } from "react";
import { Card, Table, Form, Pagination, Image, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPayOutByFranchise, requestPayout } from "../../Features/Franchise/FranchiseSlice";

const PayoutDetails = () => {
  const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise);
  const dispatch = useDispatch();
  const data = useSelector(state => state.Franchise.paoutsByFranchise?.payouts);

  // Popup state
  const [showWarning, setShowWarning] = useState(false);
  const [isPayoutRequested, setIsPayoutRequested] = useState(false);

  useEffect(() => {
    if (currentFranchise?._id) {
      dispatch(getPayOutByFranchise(currentFranchise?._id));
    }
  }, [currentFranchise, dispatch]);

  const handleRequestPayout = () => {
    if (currentFranchise?.kycId?.pancardApproved != "Approved") {
      setShowWarning(true); // Show warning popup if KYC is not approved
    } else {
      // Proceed with payout request if KYC is approved
      dispatch(requestPayout({
        amount: currentFranchise?.retailWallet,
        franchiseId: currentFranchise?._id
      }));
    }
  };

  const handleWarningClose = (isConfirmed) => {
    setShowWarning(false);
    if (isConfirmed) {
      // Proceed with the payout request if confirmed
      dispatch(requestPayout({
        amount: currentFranchise?.retailWallet,
        franchiseId: currentFranchise?._id
      }));
      setIsPayoutRequested(true);
    }
  };

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
    <div id="margin-top" className="mx-auto my-4">
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
              <h2 className="text-black">₹ {currentFranchise?.retailWallet || 0}</h2>
              {currentFranchise?.kycId?.approved == "Approved" ? (
                <button className="bg-success text-white" onClick={handleRequestPayout}>Request Payout</button>
              ) : (
                <p className="text-danger">You cannot request payout until you complete KYC.</p>
              )}

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
                      <th>Requested Amount</th>
                      <th>Tds(%)</th>
                      <th>Paid Amount</th>
                      <th>Automated Request Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData?.length > 0 ? (
                      currentData?.map((item, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.reqAmount}</td>
                          <td>{item.pancardApproved ? "2%" : "20%"}</td>
                          <td>{item.amount}</td>
                          <td>{item.createdAt}</td>
                          <td>{item.status}</td>
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

      {/* Warning Modal */}
      <Modal className="custom-warning-modal" show={showWarning} onHide={() => setShowWarning(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your PAN card is not approved yet. A 20% TDS will be deducted from your payout.
            Do you still want to proceed?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowWarning(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleWarningClose(true)}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PayoutDetails;
