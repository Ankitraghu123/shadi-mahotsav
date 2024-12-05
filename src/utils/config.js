export const isLoggedIn = () => {
    const token = localStorage.getItem('userToken');  
    const user = localStorage.getItem('userData');  
  
    return !!token || !!user;
  };

  export const isFranchise = () => {
    const token = localStorage.getItem('franchiseToken');  
    const franchise = localStorage.getItem('franchiseData');  
  
    return !!token || !!franchise;
  };
  
  