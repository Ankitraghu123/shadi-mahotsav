import React from 'react'
import BannerAndSearchSlider from './Home/BannerSection'
import QuickAccess from './Home/QuickAccess'
import TrustedBrands from './Home/TrustedBrands'
import BannerAndFeatures from './Home/BannerAndFeatures'
import AboutSection from './Home/AboutSection'
import CountsSection from './Home/CountsSection'
import MomentsSection from './Home/MomentsSection'
import RecentCouplesSection from './Home/RecentCouplesSection'
import Team from './Home/Team'
import FindYourMatchBanner from './Home/FindYourMatchBanner'
import Testimonials from './About/Testimonials'
// import MySwiperComponent from './Home/MySwiperComponent'
// import BannerSection from './Home/BannerSection'
// import MainBannerSection from './Home/BannerSection'
// import './Home.css'



const Home = () => {
  return (
    <div>
        <BannerAndSearchSlider/>
        {/* <QuickAccess/> */}
        <TrustedBrands />
        {/* <MySwiperComponent /> */}
        <BannerAndFeatures />
        <AboutSection />
        <CountsSection />
        <MomentsSection />
        <RecentCouplesSection/>
       
        {/* <Team /> */}
        <FindYourMatchBanner />
    </div>
  )
}

export default Home