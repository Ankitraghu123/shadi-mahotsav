import React from 'react';
import './AchievementSection.css';
import achieve from '../../achievement.jpg';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import unlock from '../../assets/unlock.png'

const AchievementSection = () => {
  const currentFranchise = useSelector(state => state.Franchise?.currentFranchise?.franchise)

  const achievements = [
    { range: "0-25K", min: 0, max: 25000 },
    { range: "25-50K", min: 25001, max: 50000 },
    { range: "50K-1L", min: 50001, max: 100000 },
    { range: "1L-2L", min: 100001, max: 200000 },
    { range: "2L-3L", min: 200001, max: 300000 },
    { range: "3L-5L", min: 300001, max: 500000 },
    { range: "5L-7L", min: 500001, max: 700000 },
    { range: "7L-10L", min: 700001, max: 1000000 },
    { range: "10L-12L", min: 1000001, max: 1200000 },
    { range: "12L-15L", min: 1200001, max: 1500000 },
    { range: "15L-17L", min: 1500001, max: 1700000 },
    { range: "17L-20L", min: 1700001, max: 2000000 },

  ];

  return (
    <>
      <div id="margin-top" className="achivementimage mb_30 position-relative">
        <div className="row">
          <div className="col-12">
            <img src={achieve} className="img-fluid w-100" alt="Achievement" />
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-lg-12 col-sm-12">
        <div className="back_area">
          <div className="front_area">
            <div className="con_area mt_15">
              <div className="achivement_page mt-3">
                <div className="achivementimage mb_30 position-relative">
                  <div className="row">
                    <div className="col-12">
                      <img
                        src="img/achievement.png"
                        className="img-fluid w-100"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <Row className="g-3">
                {achievements.map((item, index) => {
                    // Determine if the current franchise's total earning falls within the range
                    const isUnlocked =
                      currentFranchise?.totalEarning >= item.min &&
                      currentFranchise?.totalEarning <= item.max;

                    return (
                      <Col
                        key={index}
                        xs={6} // Two items per row on extra small screens
                        sm={6} // Two items per row on small screens
                        md={4} // Three items per row on medium screens
                        xl={3} // Four items per row on large and extra-large screens
                        className="objects-wrapper"
                      >
                      <div className="objects position-relative d-flex justify-content-center align-items-center mb-3">
                        {/* <img
                          className="objects-icon objects_icon1"
                          alt=""
                          src="https://idigitalpreneur.com/assets/useradmin/img/achivement_img/OBJECTS.png"
                        />
                        <img
                          className="objects-icon objects-icon2"
                          alt=""
                          src="https://idigitalpreneur.com/assets/useradmin/img/achivement_img/OBJECTS-TWO.png"
                        /> */}
                         <div className="text-image text-center">
                            <img
                              className="component-icon cursor-pointer"
                              alt=""
                              src={
                                isUnlocked
                                  ? unlock// Unlocked component
                                  :  "https://idigitalpreneur.com/assets/useradmin/img/achivement_img/Component.png"// Locked component
                              }
                            />
                            <div className={`lakhs ${isUnlocked ? "unlocked" : "locked"}`}>
                              {item.range}
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementSection;
