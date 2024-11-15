export const isLoggedIn = () => {
    const token = localStorage.getItem('userToken');  
    const user = localStorage.getItem('userData');  
  
    return !!token || !!user;
  };
  