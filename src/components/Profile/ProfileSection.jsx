import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from "../../Features/User/UserSlice";
import { Link } from "react-router-dom";

const truncateText = (text, wordLimit = 15) => {
  const words = text?.split(" ");
  if (words?.length <= wordLimit) return text;
  return words?.slice(0, wordLimit).join(" ") + "...";
};

const ProfileSection = () => {
  const profileDetails = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const allProfiles = useSelector((state) => state.User?.allProfiles);

  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [religionFilter, setReligionFilter] = useState("");

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  useEffect(() => {
    if (allProfiles) {
      applyFilters();
    }
  }, [allProfiles, genderFilter, ageFilter, religionFilter]);

  const calculateAge = (birthDate) => {
    const currentDate = new Date(); // Get the current date
    const birthDateObj = new Date(birthDate); // Convert the birthdate string to a Date object

    let age = currentDate.getFullYear() - birthDateObj.getFullYear(); // Calculate the difference in years
    const monthDiff = currentDate.getMonth() - birthDateObj.getMonth(); // Calculate the month difference

    // If the current month is before the birth month or it's the same month but the current day is before the birth day, subtract 1 from age
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  };

  const applyFilters = () => {
    let filtered = allProfiles?.filter((user) => {
      if (profileDetails?._id === user._id) return false;
      if (genderFilter && user.gender !== genderFilter) return false;
      if (ageFilter) {
        const [minAge, maxAge] = ageFilter.split(" to ").map(Number);
        if (calculateAge(user.dob) < minAge || calculateAge(user.dob) > maxAge)
          return false;
      }
      if (religionFilter && user.religion !== religionFilter) return false;
      return true;
    });
    setFilteredProfiles(filtered);
  };

  return (
    <section>
      <div className="all-weddpro all-jobs all-serexp chosenini">
        <div className="container">
          <div className="row">
            <div className="col-md-3 fil-mob-view" id="fixed-height">
              <span className="filter-clo">+</span>

              {/* Gender Filter */}
              <div className="filt-com lhs-cate">
                <h4>
                  <i className="fa fa-search" aria-hidden="true"></i> I'm
                  looking for
                </h4>
                <div className="form-group">
                  <select
                    className="chosen-select"
                    value={genderFilter}
                    onChange={(e) => setGenderFilter(e.target.value)}
                  >
                    <option value="">I'm looking for</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                  </select>
                </div>
              </div>

              {/* Age Filter */}
              <div className="filt-com lhs-cate">
                <h4>
                  <i className="fa fa-clock-o" aria-hidden="true"></i> Age
                </h4>
                <div className="form-group">
                  <select
                    className="chosen-select"
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                  >
                    <option value="">Select age</option>
                    {[...Array(9)].map((_, i) => (
                      <option
                        key={i}
                        value={`${18 + i * 10} to ${27 + i * 10}`}
                      >
                        {18 + i * 10} to {27 + i * 10}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Religion Filter */}
              <div className="filt-com lhs-cate">
                <h4>
                  <i className="fa fa-bell-o" aria-hidden="true"></i> Select
                  Religion
                </h4>
                <div className="form-group">
                  <select
                    className="chosen-select"
                    value={religionFilter}
                    onChange={(e) => setReligionFilter(e.target.value)}
                  >
                    <option value="">Religion</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Islam">Islam</option>
                    <option value="Sikh">Sikh</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Nonreligious">Nonreligious</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="short-all">
                <div className="short-lhs">
                  Showing <b>{filteredProfiles?.length}</b> profiles
                </div>
              </div>

              <div className="all-list-sh" id="fixed-height2">
                <ul id="fixed-height3">
                  {filteredProfiles?.map((user) => (
                    <Link key={user._id} to={`/profile-detail/${user._id}`}>
                      <div
                        className="all-pro-box user-avil-onli"
                        data-useravil="avilyes"
                        data-aviltxt="Available online"
                      >
                        <div className="pro-img">
                          <a href="profile-details.html">
                            <img src={user.profilePicture} alt={user.name} />
                          </a>
                        </div>
                        <div className="pro-detail">
                          <h4>
                            <a href="profile-details.html">{user.name}</a>
                          </h4>
                          <div className="pro-bio">
                            <span>{user.education}</span>
                            <span>{user.jobType}</span>
                            <span>{user.age}</span>
                            <span>{user.height}cm</span>
                          </div>
                          <div className="pro-bio">
                            {user?.about ? truncateText(user?.about, 15) : ""}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
