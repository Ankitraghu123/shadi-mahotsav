import React from 'react';
import rings from '../../images/icon/rings.png';
import wedding from '../../images/icon/wedding-2.png';
import loveBirds from '../../images/icon/love-birds.png';
import network from '../../images/icon/network.png';
import chat from '../../images/icon/chat.png';
import weddingCouple from '../../images/icon/wedding-couple.png';

const MomentsSection = () => {
  return (
    <section>
      <div className="wedd-tline">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p>Moments</p>
              <h2><span>How it works</span></h2>
              <span className="leaf1"></span>
              <span className="tit-ani-"></span>
            </div>
            <div className="inn">
              <ul>
                <li>
                  <div className="tline-inn">
                    <div className="tline-im animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <img src={rings} alt="" loading="lazy" />
                    </div>
                    <div className="tline-con animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <h5>Register</h5>
                      <span>Timing: 7:00 PM</span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn tline-inn-reve">
                    <div className="tline-con animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <h5>Find your Match</h5>
                      <span>Timing: 7:00 PM</span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                    <div className="tline-im animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <img src={wedding} alt="" loading="lazy" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn">
                    <div className="tline-im animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <img src={loveBirds} alt="" loading="lazy" />
                    </div>
                    <div className="tline-con animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <h5>Send Interest</h5>
                      <span>Timing: 7:00 PM</span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn tline-inn-reve">
                    <div className="tline-con animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <h5>Get Profile Information</h5>
                      <span>Timing: 7:00 PM</span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                    <div className="tline-im animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <img src={network} alt="" loading="lazy" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn">
                    <div className="tline-im animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <img src={chat} alt="" loading="lazy" />
                    </div>
                    <div className="tline-con animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <h5>Start Meetups</h5>
                      <span>Timing: 7:00 PM</span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tline-inn tline-inn-reve">
                    <div className="tline-con animate animate__animated animate__slower" data-ani="animate__fadeInUp">
                      <h5>Getting Marriage</h5>
                      <span>Timing: 7:00 PM</span>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                    <div className="tline-im animate animate__animated animate__slow" data-ani="animate__fadeInUp">
                      <img src={weddingCouple} alt="" loading="lazy" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
