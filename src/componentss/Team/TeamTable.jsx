import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFranchiseTeam, getRefFranchise } from "../../Features/Franchise/FranchiseSlice";
import { Link } from "react-router-dom";

const TeamTable = () => {
  const [customers, setCustomers] = useState([]);
  const [nonPurchasers, setNonPurchasers] = useState([]);
  const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise)
  const refFranchise = useSelector(state => state.Franchise.franchiseTeam?.team)

  const dispatch = useDispatch()

  

  useEffect(() => {
    dispatch(getFranchiseTeam(currentFranchise?.code))
  },[currentFranchise?._id])

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      // Replace this with actual API calls
      const customersData = [
        {
          id: 1,
          profile_pic: "user1.jpg",
          name: "John Doe",
          my_earning_per: 60,
          email: "john@example.com",
          cust_mobile: "1234567890",
          dor: "2023-10-15",
        },
        {
          id: 2,
          profile_pic: "user2.jpg",
          name: "Jane Smith",
          my_earning_per: 50,
          email: "jane@example.com",
          cust_mobile: "0987654321",
          dor: "2023-10-12",
        },
      ];

      const nonPurchasersData = [
        {
          id: 3,
          profile_pic: "user3.jpg",
          name: "Sam Wilson",
          my_earning_per: 0,
          email: "sam@example.com",
          cust_mobile: "1122334455",
          dor: "2023-10-05",
        },
      ];

      setCustomers(customersData);
      setNonPurchasers(nonPurchasersData);
    };

    fetchData();
  }, []);

  const getPackageType = (earningPer) => {
    switch (earningPer) {
      case 60:
        return "Prime";
      case 50:
        return "Dynamic";
      case 40:
        return "Basic";
      default:
        return "Not Purchased";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB");
  };

  return (
    <div id="margin-top" className="">
      <div className="back_area">
        <div className="front_area">
          <div className="card">
            <div className="card-header our_courses_bg p-0">
              <div className="achivementimage mb_30 position-relative">
                <div className="row">
                  <div className="col-12">
                    <img
                      src="https://skillsikhar.com/user/img/refferal.jpg"
                      className="img-fluid w-100"
                      alt="Referral"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table
                  id="example1"
                  className="table table-responsive display responsive nowrap"
                  width="90%"
                >
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Current Package</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Joining Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {refFranchise?.map((franchise, index) => (
                      <tr key={franchise._id}>
                        <td>{index + 1}</td>
                        <td>
                          <Link to={`/frachise/team-detail/${franchise?._id}`}><img
                            src={franchise.profilePicture}
                            alt={franchise.name}
                            width="100"
                          /></Link>
                        </td>
                        <td>{franchise.name}</td>
                        <td>{franchise.package}</td>
                        <td>{franchise.email}</td>
                        <td>{franchise.mobileNumber}</td>
                        <td>{formatDate(franchise.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTable;
