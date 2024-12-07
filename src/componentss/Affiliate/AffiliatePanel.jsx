import React from "react";
import { Container, Row, Col, Table, Card, ProgressBar, Button } from "react-bootstrap";
import "./AffiliatePanel.css";
import { useSelector } from "react-redux";

const AffiliatePanel = () => {
    const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise)
  return (
    <>

      <Row id="margin-top" className="mb-4 background pt-5 pb-5 p-3">
      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>WALLET</span>
            <p>₹ {currentFranchise?.wallet || 0}/-</p>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>UPGRADE WALLET </span>
            <p>₹ {currentFranchise?.upgradeWallet || 0}/-</p>
          </div>
        </div>


        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>CFC  WALLET</span>
            <p>₹ 0/-</p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>CMC INCOME WALLET </span>
            <p>₹ 0/-</p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>	RETAIL WALLET</span>
            <p>₹ {currentFranchise?.retailWallet || 0}/-</p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>	COUPANS WALLET</span>
            <p>₹ {currentFranchise?.couponWallet || 0}/-</p>
          </div>
        </div>
        {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-4">
          <div className="das_prof">
            <span>All Time Earnings</span>
            <p>₹ 54850/-</p>
          </div>
        </div> */}
      </Row>


      <Container fluid className="affiliate-panel ">

        {/* <div className="background"></div> */}


        <Row>
          <Col md={8}>
            <Card className="graph-card mb-4">
              <Card.Body>
                <Card.Title>Earning Graph</Card.Title>

                <div className="no-data">{currentFranchise?.totalEarning}</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="referral-card mb-4">
              <Card.Body>
                <Card.Title>Total Referrals</Card.Title>
                <div className="no-data">No data available</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="recent-referrals mb-4">
              <Card.Body>
                <Card.Title>Your Recent Referrals</Card.Title>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Registered On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, name: "Kaleem Ansari", date: "16-11-2024" },
                      { id: 2, name: "Sachin Rajbhar", date: "03-11-2024" },
                      { id: 3, name: "Jay Kumar", date: "28-10-2024" },
                      { id: 4, name: "Neeraj kumar Kushwaha", date: "24-10-2024" },
                      { id: 5, name: "Manish Singh", date: "22-10-2024" },
                    ].map((referral) => (
                      <tr key={referral.id}>
                        <td>{referral.id}</td>
                        <td>{referral.name}</td>
                        <td>{referral.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="leaderboard mb-4">
              <Card.Body>
                <Card.Title>Leaderboard</Card.Title>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Amount Earned</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Rakesh Sen", amount: "₹ 92050/-" },
                      { name: "Amit Sahu", amount: "₹ 37800/-" },
                      { name: "Ankit Bathri", amount: "₹ 17300/-" },
                      { name: "Sudhir Kushwaha", amount: "₹ 17000/-" },
                    ].map((leader, index) => (
                      <tr key={index}>
                        <td><img src="default-profile.png" alt="profile" className="profile-img" /></td>
                        <td>{leader.name}</td>
                        <td>{leader.amount}</td>
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

export default AffiliatePanel;