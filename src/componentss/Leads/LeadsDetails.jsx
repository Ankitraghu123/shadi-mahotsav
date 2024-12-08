import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LeadsDetails = () => {
  const [activeTab, setActiveTab] = useState("presentation");

  // Data for tables (you can replace this with dynamic data)
  const presentationData = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", date: "2024-11-25" },
  ];
  const leadsTrackerData = [
    { id: 1, name: "Jane Smith", email: "jane@example.com", phone: "9876543210", date: "2024-11-22" },
  ];
  const leadsCaptureData = [
    { id: 1, name: "Mark Lee", email: "mark@example.com", phone: "1231231234", joiningDate: "2024-11-20" },
  ];

  return (
    <div id="margin-top" className=" mt-5">
      <div className="card">
        <div className="card-header p-0">
          <img src="https://skillsikhar.com/user/img/leadsdetail.jpg" className="img-fluid w-100" alt="Leads Detail" />
        </div>
        <div className="card-body">
          {/* Tabs */}
          <ul className="nav nav-pills d-flex nav_pills_color mb-3" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "presentation" ? "active" : ""}`}
                onClick={() => setActiveTab("presentation")}
              >
                Presentation Video Tracker
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "leadsTracker" ? "active" : ""}`}
                onClick={() => setActiveTab("leadsTracker")}
              >
                Leads Tracker
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "leadsCapture" ? "active" : ""}`}
                onClick={() => setActiveTab("leadsCapture")}
              >
                Leads Capture
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Presentation Video Tracker */}
            {activeTab === "presentation" && (
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {presentationData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Leads Tracker */}
            {activeTab === "leadsTracker" && (
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadsTrackerData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Leads Capture */}
            {activeTab === "leadsCapture" && (
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Joining Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadsCaptureData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.joiningDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsDetails;
