
import './css/animate.min.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';
// import './css/style-mob.html';
import './css/style.css';
import './App.css'
import './index.css'
import MainLayout from './MainLayout';
import { Route, Routes } from 'react-router';
// import Home from './components/Home';
// import AdminDashboard from './Admin/AdminDashboard';
import FranchisLayout from './FranchisLayout';
import ProtectedRoute from './ProtectedRoute';
// import Header from './components/layouts/Nav';






function App() {

  return (

    <>
      <Routes>
        <Route path="/*"element={<MainLayout></MainLayout> }/>
        <Route path="/frachise/*"element={<ProtectedRoute><FranchisLayout/></ProtectedRoute> }/>
        {/* <Route path="/admin-dashboard/*" element={<AdminDashboard/>}  /> */}
      </Routes>
      {/* <MainLayout/> */}
    </>
  )
}

export default App

