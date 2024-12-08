import React, { useEffect } from 'react';
import ring from '../../images/icon/rings.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../Features/User/UserSlice';

const PlanDetails = () => {
  const profileDetails = JSON.parse(localStorage.getItem('userData'));
  const dispatch = useDispatch()

  const currentUser = useSelector(state => state.User.currentUser)

  useEffect(() => {
    dispatch(getCurrentUser(profileDetails?._id))
  },[])

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  }


  return (
    <>
    <section>
      <div className="db">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                {/* Plan Details Section */}
                <div className="col-md-4 db-sec-com">
                  <h2 className="db-tit">Plan details</h2>
                  <div className="db-pro-stat">
                    <h6 className="tit-top-curv">Current plan</h6>
                    <div className="db-plan-card">
                      <img src={ring} alt="Plan" />
                    </div>
                    <div className="db-plan-detil">
                      <ul>
                        <li>Plan name: <strong>{currentUser?.plans[0].plan.name}</strong></li>
                        <li>Purchased On: <strong>{formatDate(currentUser?.plans[0].purchaseDate)}</strong></li>
                        <li>Valid till <strong>{formatDate(currentUser?.plans[0].expiryDate)}</strong></li>
                        {/* <li><a href="#" className="cta-3">Upgrade now</a></li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Invoice Table Section */}
                <div id="radio" className="col-md-8 db-sec-com">
                  <h2 className="db-tit">All invoice</h2>
                  <div className="db-invoice">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Plan type</th>
                          <th>Duration</th>
                          <th>Cost</th>
                          <th>Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Platinum</td>
                          <td>12 Months(May 2023 - June 2024)</td>
                          <td>$500</td>
                          <td><a href="#" className="cta-dark cta-sml" download><span>Download</span></a></td>
                        </tr>
                        <tr>
                          <td>Standard</td>
                          <td>6 Months(Aug 2021 - Jan 2022)</td>
                          <td>$250</td>
                          <td><a href="#" className="cta-dark cta-sml" download><span>Download</span></a></td>
                        </tr>
                        <tr>
                          <td>Standard</td>
                          <td>6 Months(Jan 2021 - July 2021)</td>
                          <td>$250</td>
                          <td><a href="#" className="cta-dark cta-sml" download><span>Download</span></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Plan Cancellation Section */}
                <div className="col-md-12 db-sec-com">
                  <div className="alert alert-warning db-plan-canc">
                    <p><strong>Plan cancellation:</strong> <a href="#" data-bs-toggle="modal" data-bs-target="#plancancel">Click here</a> to cancel the current plan.</p>
                  </div>
                </div>

                {/* Plan Cancellation Approval Section */}
                <div className="col-md-12 db-sec-com">
                  <div className="alert alert-warning db-plan-canc db-plan-canc-app">
                    <p>Your plan cancellation request has been successfully received by the admin. Once the admin approves your cancellation, the cost will be sent to you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default PlanDetails;
