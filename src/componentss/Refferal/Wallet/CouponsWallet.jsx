import React, { useState } from "react";
import { Card, Table, Form, Pagination, Image } from "react-bootstrap";

const CouponsWallet = () => {
  // Sample data
  const initialData = [
    { sno: 21, amount: 1000, date: "10-02-2024", status: "Approved" },
    { sno: 20, amount: 2000, date: "17-02-2024", status: "Approved" },
    { sno: 19, amount: 1000, date: "09-03-2024", status: "Approved" },
    { sno: 18, amount: 1000, date: "13-04-2024", status: "Approved" },
    { sno: 17, amount: 1000, date: "11-05-2024", status: "Approved" },
    { sno: 16, amount: 2000, date: "25-05-2024", status: "Approved" },
    { sno: 15, amount: 3500, date: "08-06-2024", status: "Approved" },
    { sno: 14, amount: 2500, date: "15-06-2024", status: "Approved" },
    { sno: 13, amount: 3000, date: "13-07-2024", status: "Approved" },
    { sno: 12, amount: 3000, date: "27-07-2024", status: "Approved" },
  ];

  // States for data, search filter, and pagination
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filtered data based on search
  const filteredData = data.filter(
    (item) =>
      item.sno.toString().includes(search) ||
      item.amount.toString().includes(search) ||
      item.date.includes(search) ||
      item.status.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="margin-top" className=" mx-auto my-4">
      <div className="back_area">
        <div className="front_area">
          <Card className="shadow-lg">
            {/* <Card.Header className="p-0">
              <Image
                src="https://skillsikhar.com/user/img/payout_details.jpg"
                className="img-fluid"
                alt="Payout Details"
              />
            </Card.Header> */}
            <h3 className="text-center mt-4">Upgrade Wallet income</h3>
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
                      <th>Paid Amount</th>
                      <th>Automate Request Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.length > 0 ? (
                      currentData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.sno}</td>
                          <td>{item.amount}</td>
                          <td>{item.date}</td>
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
                    {Math.min(indexOfLastItem, filteredData.length)} of{" "}
                    {filteredData.length} entries
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
                    {[...Array(totalPages).keys()].map((page) => (
                      <Pagination.Item
                        key={page + 1}
                        active={page + 1 === currentPage}
                        onClick={() => handlePageChange(page + 1)}
                      >
                        {page + 1}
                      </Pagination.Item>
                    ))}
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

export default CouponsWallet;
