import React, { useEffect, useState } from "react";
import { Card, Table, Form, Pagination, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPayOutByFranchise, requestPayout } from "../../Features/Franchise/FranchiseSlice";

const PayoutDetails = () => {
  const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise)

  // const {payoutRequested} =useSelector(state => state.Franchise)

  const dispatch = useDispatch()

  useEffect(() => {
    if(currentFranchise?._id){
      dispatch(getPayOutByFranchise(currentFranchise?._id))
    }
  },[currentFranchise])

  const requestPayoutHandler = () => {
    dispatch(requestPayout({amount:currentFranchise?.retailWallet,franchiseId:currentFranchise?._id}))
  }

  const data = useSelector(state => state.Franchise.paoutsByFranchise?.payouts)
  // Sample data
  // const initialData = [
  //   { sno: 21, amount: 1000, date: "10-02-2024", status: "Approved" },
  // ];

  // // States for data, search filter, and pagination
  // const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filtered data based on search
  const filteredData = data?.filter(
    (item) =>
      // item.sno.toString().includes(search) ||
      item.amount.toString().includes(search) ||
      item.date.includes(search) ||
      item.status.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  // Handle page change
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
      <h2 className="text-black">₹ {currentFranchise?.retailWallet || 0}</h2>
      <button className="bg-success text-white" onClick={requestPayoutHandler}>Request Payout</button>

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
                      <th>Paid Amount</th>
                      <th>Automate Request Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData?.length > 0 ? (
                      currentData?.map((item, index) => (
                        <tr key={index}>
                          <td>{1}</td>
                          <td>{item.amount}</td>
                          <td>{item.createdAt}</td>
                          <td>{item.status ? "Approved" : "Pending"}</td>
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
                    {/* {[...Array(totalPages).keys()].map((page) => (
                      <Pagination.Item
                        key={page + 1}
                        active={page + 1 === currentPage}
                        onClick={() => handlePageChange(page + 1)}
                      >
                        {page + 1}
                      </Pagination.Item>
                    ))} */}
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
    </div>
  );
};

export default PayoutDetails;
