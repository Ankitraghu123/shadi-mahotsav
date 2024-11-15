import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAllProfiles } from "../../Features/User/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const truncateText = (text, wordLimit = 30) => {
    const words = text?.split(' ');
    if (words?.length <= wordLimit) return text;
    return words?.slice(0, wordLimit).join(' ') + '...';
};

const SearchResultsPage = () => {
    const profileDetails = JSON.parse(localStorage.getItem('userData'));
  const location = useLocation();
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);
  const allProfiles = useSelector((state) => state.User?.allProfiles || []);

  useEffect(() => {
    // Fetch all profiles when component loads
    dispatch(getAllProfiles());
  }, [dispatch]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filters = {
      lookingFor: searchParams.get("lookingFor"),
      age: searchParams.get("age"),
      religion: searchParams.get("religion"),
      jobType: searchParams.get("jobType"),
    };

    // Filter profiles based on the selected parameters
    const filteredProfiles = allProfiles?.filter((profile) => {
      const matchesLookingFor = filters.lookingFor
        ? profile.gender === filters.lookingFor
        : true;
      const matchesAge = filters.age
        ? filters.age.includes(calculateAge(profile.dob)) // Adjust if age is a range or single value
        : true;
      const matchesReligion = filters.religion
        ? profile.religion === filters.religion
        : true;
      const matchesJobType = filters.jobType
        ? profile.jobType === filters.jobType
        : true;
        const isNotCurrentUser = profileDetails?._id !== profile._id;

      return matchesLookingFor && matchesAge && matchesReligion && matchesJobType &&  isNotCurrentUser;
    });

    setResults(filteredProfiles);
  }, [location.search, allProfiles]);

  const calculateAge = (birthDate) => {
    const currentDate = new Date();  // Get the current date
    const birthDateObj = new Date(birthDate);  // Convert the birthdate string to a Date object
    
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();  // Calculate the difference in years
    const monthDiff = currentDate.getMonth() - birthDateObj.getMonth();  // Calculate the month difference
  
    // If the current month is before the birth month or it's the same month but the current day is before the birth day, subtract 1 from age
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())) {
      age--;
    }
  
    return age;
  }

  return (
    <div>
      <h2>Search Results</h2>
      <div className="all-list-sh">
      <ul>
        {results.length > 0 ? (
          results.map((user) => (
            <Link key={user._id} to={`/profile-detail/${user._id}`}>
                                            <div className="all-pro-box user-avil-onli" data-useravil="avilyes" data-aviltxt="Available online">
                                                <div className="pro-img">
                                                    <a href="profile-details.html">
                                                        <img src={user.profilePicture} alt={user.name} />
                                                    </a>
                                                    <div className="pro-ave" title="User currently available">
                                                        <span className="pro-ave-yes"></span>
                                                    </div>
                                                </div>
                                                <div className="pro-detail">
                                                    <h4><a href="profile-details.html">{user.name}</a></h4>
                                                    <div className="pro-bio">
                                                        <span>{user.education}</span>
                                                        <span>{user.jobType}</span>
                                                        <span>{calculateAge(user.dob)}</span>
                                                        <span>{user.height}cm</span>
                                                    </div>
                                                    <div className="pro-bio">
                                                    {user?.about ? truncateText(user?.about, 30) : ''}
                                                    </div>   
                                                </div>
                                            </div>
                                        </Link>
          ))
        ) : (
          <p className="text-align-center">No results found for the selected filters.</p>
        )}
      </ul>
      </div>
    </div>
  );
};

export default SearchResultsPage;
