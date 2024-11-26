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

  const calculateAge = (birthDate) => {
    const currentDate = new Date();  
    const birthDateObj = new Date(birthDate);  
    
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();  
    const monthDiff = currentDate.getMonth() - birthDateObj.getMonth();  
  
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDateObj.getDate())) {
      age--;
    }
  
    return age;
  }

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
    const ageRange = filters.age ? filters.age.split(' ') : [];
    const minAge = ageRange[0] ? parseInt(ageRange[0], 10) : null;
    const maxAge = ageRange[2] ? parseInt(ageRange[2], 10) : null;
    console.log(minAge)
    console.log(maxAge)
    const isValidAgeRange = minAge && maxAge && minAge <= maxAge;

    const filteredProfiles = allProfiles?.filter((profile) => {
      const profileAge = calculateAge(profile.dob);
  
      const matchesLookingFor = filters.lookingFor
        ? profile.gender === filters.lookingFor
        : true;
  
        const matchesAge =
        isValidAgeRange
          ? profileAge >= minAge && profileAge <= maxAge
          : true;
  
      const matchesReligion = filters.religion
        ? profile.religion === filters.religion
        : true;
  
      const matchesJobType = filters.jobType
        ? profile.jobType === filters.jobType
        : true;
  
      const isNotCurrentUser = profileDetails?._id !== profile._id;
  
      return (
        matchesLookingFor &&
        matchesAge &&
        matchesReligion &&
        matchesJobType &&
        isNotCurrentUser
      );
    });

    setResults(filteredProfiles);
  }, [location.search, allProfiles]);

 

  return (
    <div className="all-weddpro all-jobs all-serexp chosenini">
                <div className="container" style={{marginTop:"50px"}}>

      <div className="all-list-sh">
      <ul >
        {results.length > 0 ? (
          results.map((user) => (
            <Link key={user._id} to={`/profile-detail/${user._id}`}>
                                            <div className="all-pro-box user-avil-onli" data-useravil="avilyes" data-aviltxt="Available online">
                                                <div className="pro-img">
                                                    <a href="profile-details.html">
                                                        <img src={user.profilePicture} alt={user.name} />
                                                    </a>
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
          <p style={{width:'100%', display:'flex', justifyContent:'center',alignItems:'center',height:'100px',marginBottom:'-100px',fontSize:'20px'}}>No results found for the selected filters...</p>
        )}
      </ul>
      </div>
    </div>

    </div>
  );
};

export default SearchResultsPage;
