import React from "react";
import { Accordion, Table, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise)
  const profilePic = currentFranchise?.profilePicture; // Replace with dynamic path
  const custName = currentFranchise?.name; // Replace with dynamic data
  const custEmail = currentFranchise?.email; // Replace with dynamic data
  const custMobile = currentFranchise?.mobileNumber; // Replace with dynamic data
  const custState = currentFranchise?.state; // Replace with dynamic data
  const custAddr1 = "123 Main Street"; // Replace with dynamic data
  const custAddr2 = "Apt 4B"; // Replace with dynamic data
  const custCity = currentFranchise?.city; // Replace with dynamic data
  const custPincode = currentFranchise?.pinCode; // Replace with dynamic data
  const custAadharNo = currentFranchise?.kycId?.aadharCardNumber; // Replace with dynamic data
  const custPanNo = currentFranchise?.kycId?.panCardNumber; // Replace with dynamic data
  const accHolder = currentFranchise?.kycId?.accountHolderName; // Replace with dynamic data
  const accType = currentFranchise?.kycId?.accountType; // Replace with dynamic data
  const bankName = currentFranchise?.kycId?.bankName; // Replace with dynamic data
  const accNo = currentFranchise?.kycId?.accountNumber; // Replace with dynamic data
  const ifscCode = currentFranchise?.kycId?.ifscCode; // Replace with dynamic data

  return (
    <div id="margin-top" className=" py-5">
      {/* Profile Header */}
      <div
        className="card mb-5"
        style={{
          backgroundImage:
            "url('https://www.idigitalpreneur.com/assets/useradmin/dashboard/my_earnings.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="card-header d-flex flex-column align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src={currentFranchise?.profilePicture}
              className="rounded-circle"
              alt="Profile"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          </div>
          <div className="text-center mt-3" id="profile-text">
            <p className="mb-0 fw-bold">{custName}</p>
            <span>{custEmail}</span>
            <p>ID : {currentFranchise?.code}</p>

          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="card">
        <div className="card-body">
          <h4 className="text-center fw-bold">Your Profile</h4>
          <Accordion defaultActiveKey="0" flush>
            {/* Personal Details */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>Personal Details</Accordion.Header>
              <Accordion.Body>
                <Table bordered responsive>
                  <tbody>
                    <tr>
                      <td>
                        <b>Name</b>
                      </td>
                      <td>{custName}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Email</b>
                      </td>
                      <td>{custEmail}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Phone</b>
                      </td>
                      <td>{custMobile}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>State</b>
                      </td>
                      <td>{custState}</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="0">
              <Accordion.Header>Coupon Details</Accordion.Header>
              <Accordion.Body>
                <Table bordered responsive>
                  <tbody>
                    <tr>
                      <td>
                        <b>1 Month Coupon</b>
                      </td>
                      <td>{currentFranchise?.couponOneMonth}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>2 Month Coupon</b>
                      </td>
                      <td>{currentFranchise?.couponThreeMonth}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>1 Year Coupon</b>
                      </td>
                      <td>{currentFranchise?.couponOneYear}</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>

            {/* Billing Address */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Billing Address</Accordion.Header>
              <Accordion.Body>
                <Table bordered responsive>
                  <tbody>
                    <tr>
                      <td>
                        <b>Full Name</b>
                      </td>
                      <td>{custName}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Address Line 1</b>
                      </td>
                      <td>{custAddr1}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Address Line 2</b>
                      </td>
                      <td>{custAddr2}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>City</b>
                      </td>
                      <td>{custCity}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>State</b>
                      </td>
                      <td>{custState}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Zip</b>
                      </td>
                      <td>{custPincode}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Aadhar No</b>
                      </td>
                      <td>{custAadharNo}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>PAN Details</b>
                      </td>
                      <td>{custPanNo}</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>

            {/* Account Details */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Account Details</Accordion.Header>
              <Accordion.Body>
                <Table bordered responsive>
                  <tbody>
                    <tr>
                      <td>
                        <b>Name</b>
                      </td>
                      <td>{accHolder}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Account Type</b>
                      </td>
                      <td>{accType}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Bank Name</b>
                      </td>
                      <td>{bankName}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Account Number</b>
                      </td>
                      <td>{accNo}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>IFSC Code</b>
                      </td>
                      <td>{ifscCode}</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>

            {/* Account Management */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Account Management</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter old password" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter new password" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat new password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      {/* Sponsor Details */}
      <div className="">
        <div className="abt-ern-b mt5">
          <div className="text-center">
            <p className="fs mt-5">
              <b>Your Sponsor Details - </b>
            </p>
          </div>
          <div className="row">
            <div className="  brd_rht">
              <div className="text-cen-b">
                <div className="imt_dv imt_sty">
                  <div className="imt_dv-b desk_hght">
                    <img
                      src={`user_pic/${profilePic}`}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="abt-info">
                <div className="abt-st">
                  <div className="table-responsive">
                    <Table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{custName}</td>
                          <td>{custEmail}</td>
                          <td>{custMobile}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
