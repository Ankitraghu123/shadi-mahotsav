import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage1 from "../../images/ban-bg.jpg"; // Import your images
import bannerImage2 from "../../images/banner.jpg"; // Import your images

const BannerAndSearch = () => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = {
      lookingFor: formData.get("lookingFor"),
      age: formData.get("age"),
      religion: formData.get("religion"),
      jobType: formData.get("jobType"),
    };

    const queryParams = new URLSearchParams(filters).toString();
    navigate(`/search-results?${queryParams}`);
  };

  return (
    <section>
      <div className="str">
        <div className="hom-head">
          <div className="container">
            <div className="row">
              <div className="hom-ban">
                <div className="ban-tit">
                  <span><i className="no1">#1</i> Matrimony</span>
                  <h1>Find your<br /><b>Right Match</b> here</h1>
                  <p>Most trusted Matrimony Brand in the World.</p>
                </div>
                <div className="ban-search chosenini">
                  <form onSubmit={handleSearch}>
                    <ul>
                      <li className="sr-look">
                        <div className="form-group">
                          <label>I'm looking for</label>
                          <select name="lookingFor" className="chosen-select">
                            <option value="">I'm looking for</option>
                            <option value="male">Men</option>
                            <option value="female">Women</option>
                          </select>
                        </div>
                      </li>
                      <li className="sr-age">
                        <div className="form-group">
                          <label>Age</label>
                          <select name="age" className="chosen-select">
                            <option value="">Age</option>
                            <option>18 to 30</option>
                            <option>31 to 40</option>
                            <option>41 to 50</option>
                            <option>51 to 60</option>
                            <option>61 to 70</option>
                          </select>
                        </div>
                      </li>
                      <li className="sr-reli">
                        <div className="form-group">
                          <label>Religion</label>
                          <select name="religion" className="chosen-select">
                            <option value="">Religion</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Islam">Islam</option>
                            <option value="Sikh">Sikh</option>
                            <option value="Christianity">Christianity</option>
                          </select>
                        </div>
                      </li>
                      <li className="sr-cit">
                        <div className="form-group">
                          <label>Job Type</label>
                          <select name="jobType" className="chosen-select">
                            <option value="">Select Job Type</option>
                            <option>Business</option>
                            <option>Employee</option>
                            <option>Government</option>
                          </select>
                        </div>
                      </li>
                      <li className="sr-btn">
                        <input type="submit" value="Search" />
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BannerSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <section>
      <div className="hom-ban-sli">
        <Slider {...sliderSettings}>
          <div className="image">
            <img src={bannerImage1} alt="Banner 1" loading="lazy" /> {/* Use imported images */}
          </div>
          <div className="image">
            <img src={bannerImage2} alt="Banner 2" loading="lazy" /> {/* Use imported images */}
          </div>
        </Slider>
      </div>
    </section>
  );
};

const BannerAndSearchSlider = () => {
  return (
    <>
      <BannerAndSearch />
      <BannerSlider />
    </>
  );
};

export default BannerAndSearchSlider;
