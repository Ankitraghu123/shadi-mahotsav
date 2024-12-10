import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from "./componentss/Navbar";
import Sidebar from "./componentss/Sidebar";
import AffiliatePanel from "./componentss/Affiliate/AffiliatePanel";
import EarningsPage from "./componentss/Earning/EarningsPage";
import AchievementSection from "./componentss/Achievement/AchievementSection";
import Leaderboard from "./componentss/Leaderboard/Leaderboard ";
import PayoutDetails from "./componentss/Payout/PayoutDetails";
import LeadsDetails from "./componentss/Leads/LeadsDetails";
import WebinarPage from "./componentss/Webinar/WebinarPage";
import KycForm from "./componentss/Kyc/KycForm";
import NomineeForm from "./componentss/Nominee/NomineeForm";
import LinkGenerator from "./componentss/LinkGenerator/LinkGenerator";
import ProfilePage from "./componentss/Profile/ProfilePage";
import ReferralTable from "./componentss/Refferal/ReferralTable";
import EditProfilePage from "./componentss/Edit/EditProfilePage";
import UpgradeWallet from "./componentss/Refferal/Wallet/UpgradeWallet";
import CmcWallet from "./componentss/Refferal/Wallet/CmcWallet";
import CfcWallet from "./componentss/Refferal/Wallet/CfcWallet";
import { getCurrentFranchise } from './Features/Franchise/FranchiseSlice';
import { useDispatch, useSelector } from 'react-redux';
import AddMember from './componentss/AddMemeber/AddMemeber';
import DirectMembers from './componentss/Memebers/DirectMembers';
import CouponMembers from './componentss/Memebers/CouponMembers';
import TeamTable from './componentss/Team/TeamTable';
import TreeView from './componentss/TreeView/TreeView';
import TeamDetail from './componentss/TeamDetail/TeamDetail';

const FranchisLayout = () => {
  const singleFranchise = JSON.parse(localStorage.getItem("franchiseData"));
  const {deletedProfilePicture,editedProfilePicture,editedFranchise,kycCreated,payoutRequested,kycApproved,aadharCardApproved,panCardApproved} = useSelector(state => state.Franchise)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentFranchise(singleFranchise?._id))
  },[deletedProfilePicture,editedProfilePicture,editedFranchise,payoutRequested,kycApproved,aadharCardApproved,panCardApproved])

  return (
    <div id='franchise-main'>
    {/* Navbar */}
    <Navbar />

    {/* Sidebar and Main Content */}
    <div className="layout">
      <Sidebar />
      <main
        className="main-content"
        // style={{
        //   marginLeft: shouldShowSidebar ? "250px" : "0", // Adjust margin based on sidebar visibility
        //   transition: "margin-left 0.3s ease", // Smooth transition
        // }}
      >
        <Routes>
          <Route path="/*" element={<AffiliatePanel />} />
          <Route path="/earning" element={<EarningsPage />} />
          <Route path="/achievement" element={<AchievementSection />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/payout" element={<PayoutDetails />} />
          <Route path="/leads" element={<LeadsDetails />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/kyc" element={<KycForm />} />
          <Route path="/nominee" element={<NomineeForm />} />
          <Route path="/link-generator" element={<LinkGenerator />} />
          <Route path="/referral" element={<ReferralTable />} />
          <Route path="/team" element={<TeamTable />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/upgrade" element={<UpgradeWallet />} />
          <Route path="/cmcwalltet" element={<CmcWallet />} />
          <Route path="/cfcwalltet" element={<CfcWallet />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/team-detail/:id" element={<TeamDetail />} />
          <Route path="/direct-member" element={<DirectMembers />} />
          <Route path="/coupon-member" element={<CouponMembers />} />
          <Route path="/tree-view" element={<TreeView />} />
          <Route path="/logout" element={<div>Logout Page</div>} />
        </Routes>
      </main>
    </div>
  </div>
  )
}

export default FranchisLayout