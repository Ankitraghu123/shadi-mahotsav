
import './css/animate.min.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';
// import './css/style-mob.html';
import './css/style.css';
import './App.css'
import './index.css'
// import Header from './components/layouts/Nav';
import Home from './components/Home';
// import MainMenu from './components/layouts/Nav';
// import Footer from './components/layouts/Footer';
import { Route, Routes } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import EditProfile from './components/EditProfile';
import DashboardLayout from './components/Dashboard';
import Profile from './components/Profile';
import ProfileDetail from './components/Profile/ProfileDetail';
import PricingPlans from './components/PricingPlans';
import Gallery from './components/Gallery';
import Routing from './Routing';
import DashboardProfile from './components/User-dash/Profile';
import ProfileEdit from './components/ProfileEdit';
import MySwiperComponent from './components/Home/MySwiperComponent';
import ChatPage from './components/User-dash/ChatPage';
import NavScrollExample from './components/layouts/Nav1';
import Footer from './components/layouts/Footer';
import PrivateRoute from './PrivateRoute';
import SearchResultsPage from './components/Home/SearchResultPage';
import AdminDashboard from './Admin/AdminDashboard';
import AdminLogin from './Admin/AdminLogin';






function App() {

  return (

    <>
     <NavScrollExample/>
{/* <MainMenu /> */}
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path="/contact" element={<Contact/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/register" element={<Register/>}  />
      <Route path="/edit" element={<EditProfile/>}  />
      <Route path="/dashboard/*" element={<PrivateRoute><DashboardLayout /></PrivateRoute>} />
      {/* <Route path="/chat" element={<ChatPage />} /> */}
      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path="/route"element={<Routing/>}  />
      <Route path="/profile"element={<Profile/>}  />
      <Route path="/profile-detail/:id"element={<ProfileDetail/>}  />
      <Route path="/pricing"element={<PricingPlans/>}  />
      <Route path="/gallery"element={<Gallery/>}  />
      <Route path="/profile-edit"element={<PrivateRoute><ProfileEdit/></PrivateRoute>}  />
      <Route path="/swiper"element={<MySwiperComponent/>}  />


      <Route path="/admin-dashboard/*" element={<AdminDashboard/>}  />
      <Route path="/admin-dashboard/Login" element={<AdminLogin />} />



      {/* <Route path="/user-dashboard" element={<DashboardProfile />} />
      <Route path="/dashboard/user-profile" element={<DashboardProfile />} /> */}

    </Routes>
    <Footer />
    </>
  )
}

export default App

