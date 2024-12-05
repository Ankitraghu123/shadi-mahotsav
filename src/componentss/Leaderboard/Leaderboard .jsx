import React from "react";
import './Leaderboard.css'; // Optional: Create a custom CSS file to add styles if needed

const Leaderboard = () => {
  return (
    <div id="margin-top" className="col-xl-12 col-lg-12 col-sm-12">
      <div className="back_area test">
        <div className="front_area">
          <div className="card">
            <div className="card-header our_courses_bg p-0">
              <img
                src="https://idigitalpreneur.com/assets/useradmin/dashboard/leaderboard.gif"
                className="img-fluid"
                alt="Leaderboard"
              />
            </div>

            <div className="card-body pb-5">
              <div className="traninng_navtabs">
                <div className="tab-content bg-transparent p-3" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="row w-100">
                      {/* Weekly Tab */}
                      <div className="card-new col-12 col-md-6 col-lg-4 justify-content-around">
                        <ul className="list-group d-grid">
                          <h5 className="header text-center mt-4">
                            <b>Weekly</b>
                          </h5>
                          <span className="text-center fs-6">(25th June to 30th June)</span>
                        </ul>
                        <div id="left-lead"
                          className="table-responsive mytbsty pop"
                          style={{ width: "100%", background: "#385170 !important" }}
                        >
                          <table className="table lead_table" id="myTableWeek">
                            <thead>
                              <tr>
                                <th className="th_pro">Name</th>
                                <th className="mysty_th">Earning</th>
                              </tr>
                            </thead>
                            <tbody style={{ verticalAlign: "baseline" }} className="week">
                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹60,000</td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹60,000</td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹60,000</td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹60,000</td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/58936415a606c87109020230318172238.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Insha</p>
                                </td>
                                <td>₹58,000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="btn_view_more text-center mob-show mobile_view_more_week">
                          <button type="button" className="btn">
                            View More
                          </button>
                        </div>
                      </div>

                      {/* Monthly Tab */}
                      <div className="card-new col-12 col-md-6 col-lg-4 justify-content-around">
                        <ul className="list-group d-grid">
                          <h5 className="header text-center mt-4">
                            <b>Monthly</b>
                          </h5>
                          <span className="text-center fs-6">(June)</span>
                        </ul>
                        <div id="center-lead" className="table-responsive  pop" style={{ background: "#155263 !important" }}>
                          <table className="table lead_table" id="myTableMonth">
                            <thead>
                              <tr>
                                <th className="th_pro">Name</th>
                                <th className="mysty_th">Earning</th>
                              </tr>
                            </thead>
                            <tbody style={{ verticalAlign: "baseline" }} className="month">
                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹5,38,000</td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹5,38,000</td>
                              </tr>


                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹5,38,000</td>
                              </tr>


                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹5,38,000</td>
                              </tr>


                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/584666560db76a7033620240528223039.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Paul Rufus Katta</p>
                                </td>
                                <td>₹5,38,000</td>
                              </tr>




                            </tbody>
                          </table>
                        </div>
                        <div className="btn_view_more text-center mob-show mobile_view_more_month">
                          <button type="button" className="btn">
                            View More
                          </button>
                        </div>
                      </div>

                      {/* All Time Earnings Tab */}
                      <div  className="card-new col-12 col-md-6 col-lg-4 justify-content-around">
                        <ul className="list-group d-grid">
                          <h5 className="header text-center mt-4">
                            <b>All Time Earning</b>
                          </h5>
                          <span className="text-center fs-6">
                            <br />
                          </span>
                        </ul>
                        <div id="right-lead" className="table-responsive  pop" style={{ background: "#005792 !important" }}>
                          <table className="table lead_table" id="myTableAllTime">
                            <thead>
                              <tr>
                                <th className="th_pro">Name</th>
                                <th className="mysty_th">Earning</th>
                              </tr>
                            </thead>
                            <tbody style={{ verticalAlign: "baseline" }} className="all_time">
                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/4372644f7f613f4f02920230501142913.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Simi Walia</p>
                                </td>
                                <td>₹48,53,750</td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/4372644f7f613f4f02920230501142913.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Simi Walia</p>
                                </td>
                                <td>₹48,53,750</td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/4372644f7f613f4f02920230501142913.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Simi Walia</p>
                                </td>
                                <td>₹48,53,750</td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/4372644f7f613f4f02920230501142913.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Simi Walia</p>
                                </td>
                                <td>₹48,53,750</td>
                              </tr>

                              <tr>
                                <td>
                                  <img
                                    style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                                    src="https://idpdefault.s3.ap-south-1.amazonaws.com/4372644f7f613f4f02920230501142913.jpg"
                                    className="lead_image"
                                    alt=""
                                  />
                                  <p>Simi Walia</p>
                                </td>
                                <td>₹48,53,750</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="btn_view_more text-center mob-show mobile_view_more_all_time">
                          <button type="button" className="btn">
                            View More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="btn_view_more text-center mob-block desktop_view_more_button">
                      <button type="button" className="btn">
                        View More
                      </button>
                    </div>
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

export default Leaderboard;
