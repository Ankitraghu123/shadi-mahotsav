import React, { useState } from 'react';
import { Table, Container, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getReportByDate } from '../../Features/Franchise/FranchiseSlice';
import * as XLSX from 'xlsx';

const DailyReport = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const dispatch = useDispatch();
  const data = useSelector(state => state.Franchise?.report);

  const summaryData = [
    { label: "TOTAL CFC TILL DATE", value: data?.totalCfc },
    { label: "TOTAL CFC INCOME", value: data?.totalCfcIncome },
    { label: "PER CFC INCOME", value: data?.perCfcIncome },
    { label: "TOTAL CMC TILL DATE", value: data?.totalCmc },
    { label: "TOTAL CMC INCOME", value: data?.totalCmcIncome },
    { label: "PER CMC INCOME", value: data?.perCmcIncome },
  ];

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch(getReportByDate(newDate));
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(data?.franchises?.length / itemsPerPage)) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const validateDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return selectedDate && selectedDate <= today;
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheetData = [
      // Franchise Table Header
      ["SN", "DATE", "FRANCHISE ID", "RANK"],
      // Franchise Table Data
      ...data?.franchises?.map((row, idx) => [
        idx + 1,
        formatDate(data?.date),
        row.code,
        row.package,
      ]),
      // Empty row for spacing
      [],
      // Totals Section
      ["", "","", "",  "TOTAL CFC TILL DATE", summaryData[0]?.value],
      ["", "","", "",  "TOTAL CFC INCOME", summaryData[1]?.value],
      ["", "","", "",  "PER CFC INCOME", summaryData[2]?.value],
      [],
      ["", "","", "",  "TOTAL CMC TILL DATE", summaryData[3]?.value],
      ["", "","", "",  "TOTAL CMC INCOME", summaryData[4]?.value],
      ["", "","", "",  "PER CMC INCOME", summaryData[5]?.value],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Merging cells for headers and total sections
    worksheet["!merges"] = [
      { s: { r: 14, c: 2 }, e: { r: 14, c: 3 } }, // Merging "TOTAL CFC TILL DATE"
      { s: { r: 15, c: 2 }, e: { r: 15, c: 3 } }, // Merging "TOTAL CFC INCOME"
      { s: { r: 16, c: 2 }, e: { r: 16, c: 3 } }, // Merging "PER CFC INCOME"
      { s: { r: 18, c: 2 }, e: { r: 18, c: 3 } }, // Merging "TOTAL CMC TILL DATE"
      { s: { r: 19, c: 2 }, e: { r: 19, c: 3 } }, // Merging "TOTAL CMC INCOME"
      { s: { r: 20, c: 2 }, e: { r: 20, c: 3 } }, // Merging "PER CMC INCOME"
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Franchise Report");

    XLSX.writeFile(workbook, `Daily_Report_${selectedDate}.xlsx`);
  };

  return (
    <Container className="mt-5">
      <Form.Group controlId="datePicker">
        <Form.Label>Select Date</Form.Label>
        <Form.Control
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          max={new Date().toISOString().split('T')[0]}
        />
        {!validateDate() && selectedDate && (
          <div style={{ color: 'red' }}>Date must be before today</div>
        )}
      </Form.Group>

      <Button className="mb-3" onClick={exportToExcel}>
        Export to Excel
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SN</th>
            <th>DATE</th>
            <th>FRANCHISE Code</th>
            <th>RANK</th>
          </tr>
        </thead>
        <tbody>
          {data?.franchises
            ?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((row, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{formatDate(data?.date)}</td>
                <td>{row.code}</td>
                <td>{row.package}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <div>
          <Button onClick={handlePrev} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(data?.franchises?.length / itemsPerPage)}
          >
            Next
          </Button>
        </div>
        <div>
          <Form.Control
            as="select"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            style={{ width: '100px' }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </Form.Control>
        </div>
      </div>

      <Table bordered className="mt-4">
        <tbody>
          {summaryData.map((item, index) => (
            <tr key={index}>
              <td colSpan="2" style={{ fontWeight: 'bold' }}>
                {item.label}
              </td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DailyReport;
