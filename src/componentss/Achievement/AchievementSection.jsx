import React from 'react';
import './AchievementSection.css';
import achieve from '../../achievement.jpg';
import { Row, Col } from 'react-bootstrap';

const AchievementSection = () => {
  const achievements = [
    "0-25K",
    "25-50K",
    "50K-1L",
    "1L-2L",
    "2L-3L",
    "3L-5L",
    "5L-7L",
    "7L-10L",
    "10L-12L",
    "12L-15L",
    "15L-17L",
    "17L-20L",
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
                  {achievements.map((range, index) => (
                    <Col
                      key={index}
                      xs={6} // Two items per row on extra small screens
                      sm={6} // Two items per row on small screens
                      md={4} // Three items per row on medium screens
                      xl={3} // Four items per row on large and extra-large screens
                      className="objects-wrapper"
                    >
                      <div className="objects position-relative d-flex justify-content-center align-items-center mb-3">
                        <img
                          className="objects-icon objects_icon1"
                          alt=""
                          src="https://idigitalpreneur.com/assets/useradmin/img/achivement_img/OBJECTS.png"
                        />
                        <img
                          className="objects-icon objects-icon2"
                          alt=""
                          src="https://idigitalpreneur.com/assets/useradmin/img/achivement_img/OBJECTS-TWO.png"
                        />
                        <div className="text-image text-center">
                          <img
                            className="component-icon cursor-pointer"
                            alt=""
                            src="https://idigitalpreneur.com/assets/useradmin/img/achivement_img/Component.png"
                          />
                          <div className="lakhs">{range}</div>
                        </div>
                      </div>
                    </Col>
                  ))}
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
