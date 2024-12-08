import React from "react";
import { Table, Card, Container, Row, Col } from "react-bootstrap";
import "./Earnings.css";
import achieve from '../../achievement.jpg'
const EarningsPage = () => {
  return (
    <>



<Row  id="margin-top" className="mb-4 background pt-5 pb-5 p-3">
<div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>Today's Earning</span>
            <p>₹ 54850/-</p>
          </div>
        </div>

        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>Last 7 Days Earnings</span>
            <p>₹ 54850/-</p>
          </div>
        </div>


        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>Last 30 Days Earnings</span>
            <p>₹ 54850/-</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>Last 30 Days Earnings</span>
            <p>₹ 54850/-</p>
          </div>
        </div>
        {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>	RETAIL WALLET</span>
            <p>₹ 54850/-</p>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>	COUPANS WALLET–</span>
            <p>₹ 54850/-</p>
          </div>
        </div> */}
      </Row>

      {/* <div id="margin-top" className="achivementimage mb_30 position-relative">
      <div className="row">
        <div className="col-12">
          <img src={achieve} className="img-fluid w-100" alt="Achievement" />
        </div>
      </div>
    </div> */}
    <Container fluid className="earnings-page p-4 mt-5 responsive-table">
      {/* Page Title */}
      <Row className="mb-4">
        <Col>
          {/* <h2 className="text-center earnings-title">Earnings Dashboard</h2> */}
        </Col>
      </Row>


      {/* Recent Referrals Table */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white text-center">
              Your Recent Referrals
            </Card.Header>
            <Card.Body>
              <Table responsive hover className="text-center">
                <thead className="table-light">
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Date of Joining</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, name: "Kaleem Ansari", date: "16-11-2024" },
                    { id: 2, name: "Sachin Rajbhar", date: "03-11-2024" },
                    { id: 3, name: "Jay Kumar", date: "28-10-2024" },
                    { id: 4, name: "Neeraj Kumar Kushwaha", date: "24-10-2024" },
                    { id: 5, name: "Manish Singh", date: "22-10-2024" },
                    { id: 6, name: "Surendra Yadav", date: "19-10-2024" },
                    { id: 7, name: "Surya Pratap Singh", date: "19-09-2024" },
                    { id: 8, name: "Satyam Singh Shakya", date: "10-09-2024" },
                    { id: 9, name: "Bushra Tasneem", date: "09-09-2024" },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* State-Wise Referrals */}
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Header className="bg-secondary text-white text-center">
              State Wise Referrals
            </Card.Header>
            <Card.Body>
              <Table responsive hover className="text-center">
                <thead className="table-light">
                  <tr>
                    <th>State Name</th>
                    <th>Total Referrals</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { state: "Uttar Pradesh", referrals: 25 },
                    { state: "Madhya Pradesh", referrals: 18 },
                    { state: "Delhi", referrals: 12 },
                    { state: "Maharashtra", referrals: 10 },
                    { state: "Bihar", referrals: 8 },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td>{row.state}</td>
                      <td>{row.referrals}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>

  );
};

export default EarningsPage;