// Team.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import profile6 from '../../images/profiles/6.jpg';
import profile7 from '../../images/profiles/7.jpg';
import profile8 from '../../images/profiles/8.jpg';
import profile9 from '../../images/profiles/9.jpg';

const Team = () => {
  const teamMembers = [
    {
      imgSrc: profile6,
      name: 'Ashley Jen',
      position: 'Marketing Manager',
      socialLinks: [
        { platform: 'facebook', icon: faFacebook, link: '#!' },
        { platform: 'twitter', icon: faTwitter, link: '#!' },
        { platform: 'whatsapp', icon: faWhatsapp, link: '#!' },
        { platform: 'linkedin', icon: faLinkedin, link: '#!' },
        { platform: 'instagram', icon: faInstagram, link: '#!' },
      ],
    },
    {
      imgSrc: profile7,
      name: 'Ashley Jen',
      position: 'Marketing Manager',
      socialLinks: [
        { platform: 'facebook', icon: faFacebook, link: '#!' },
        { platform: 'twitter', icon: faTwitter, link: '#!' },
        { platform: 'whatsapp', icon: faWhatsapp, link: '#!' },
        { platform: 'linkedin', icon: faLinkedin, link: '#!' },
        { platform: 'instagram', icon: faInstagram, link: '#!' },
      ],
    },
    {
      imgSrc: profile8,
      name: 'Emily Arrov',
      position: 'Creative Manager',
      socialLinks: [
        { platform: 'facebook', icon: faFacebook, link: '#!' },
        { platform: 'twitter', icon: faTwitter, link: '#!' },
        { platform: 'whatsapp', icon: faWhatsapp, link: '#!' },
        { platform: 'linkedin', icon: faLinkedin, link: '#!' },
        { platform: 'instagram', icon: faInstagram, link: '#!' },
      ],
    },
    {
      imgSrc: profile9,
      name: 'Julia Sear',
      position: 'Client Coordinator',
      socialLinks: [
        { platform: 'facebook', icon: faFacebook, link: '#!' },
        { platform: 'twitter', icon: faTwitter, link: '#!' },
        { platform: 'whatsapp', icon: faWhatsapp, link: '#!' },
        { platform: 'linkedin', icon: faLinkedin, link: '#!' },
        { platform: 'instagram', icon: faInstagram, link: '#!' },
      ],
    },
  ];

  return (
    <section>
      <div className="ab-team">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <p>OUR PROFESSIONALS</p>
              <h2>
                <span>Meet Our Team</span>
              </h2>
              <span className="leaf1"></span>
            </div>
            <ul>
              {teamMembers.map((member, index) => (
                <li key={index}>
                  <div>
                    <img src={member.imgSrc} alt="" loading="lazy" />
                    <h4>{member.name}</h4>
                    <p>{member.position}</p>
                    <ul className="social-light">
                      {member.socialLinks.map((social, idx) => (
                        <li key={idx}>
                          <a href={social.link} aria-label={social.platform}>
                            <FontAwesomeIcon icon={social.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
