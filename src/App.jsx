import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home'; // Adjust path if needed
import FaceVerification from './Component/Products/FaceVerification'; // Adjust path if needed
import ExamVerification from './Component/Solutions/ExamVerification';
import FaceKYC from './Component/Solutions/FaceKYC';
import ApartmentVerification from './Component/Solutions/ApartmentVerification';
import FaceTicketing from './Component/Solutions/FaceTicketing';
import ANPR from './Component/Products/ANPR';
import AnomalyDetection from './Component/Products/AnomalyDetection';
import WeaponDetection from './Component/Solutions/WeaponDetection';
import MobileDetection from './Component/Solutions/MobileDetection';
import MaskDetection from './Component/Solutions/MaskDetection';
import HelmetDetection from './Component/Solutions/HelmetDetection';
import VehicleAuthentication from "./Component/Solutions/VehicleAuthentication";
import AutomatedManagement from './Component/Solutions/AutomatedManagement';
import EducationIndustry from './Component/Solutions/EducationIndustry';
import TradingIndustry from './Component/Solutions/TradingIndustry';
import ServicesIndustry from "./Component/Solutions/ServicesIndustry"
import RealEstateIndustry from './Component/Solutions/RealEstateIndustry';
import ManufacturingIndustry from './Component/Solutions/ManufacturingIndustry';
import Technicalcorner from './Component/Solutions/Technicalcorner';
import FaceRegistration from './Component/DemoPages/Face/FaceRegistration';
import FaceVerificationTrail from './Component/DemoPages/Face/FaceVerificationTrail';
import FaceResultPage from './Component/DemoPages/Face/FaceResultPage';
import LiveTesting from './Component/DemoPages/AnomalyPages/LiveTesting';
import AnprLivetesting from './Component/DemoPages/ANPR/AnprLivetesting';
import UseCase from './Component/Usecase';
 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/face-verification" element={<FaceVerification />} />
        <Route path="/exam-verification" element={<ExamVerification />} />
        <Route path="/face-kyc" element={<FaceKYC />} />
        <Route path="/apartment-verification" element={<ApartmentVerification />} />
        <Route path="/face-ticketing" element={<FaceTicketing />} />
        <Route path="/anpr" element={<ANPR/>}/>
        <Route path="/anomaly-detection" element={<AnomalyDetection/>}/>
        <Route path="/weapon-detection" element={<WeaponDetection/>}/>
        <Route path="/mobile-detection" element={<MobileDetection/>}/>
        <Route path="/mask-detection" element={<MaskDetection/>}/>
        <Route path="/helmet-detection" element={<HelmetDetection/>}/>
        <Route path="/vehicle-authentication" element={<VehicleAuthentication/>}/>
        <Route path="/automated-management" element={<AutomatedManagement/>}/>
        <Route path="/education-industry" element={<EducationIndustry/>}/>
        <Route path="/trading-industry" element={<TradingIndustry/>}/>
        <Route path="/services-industry" element={<ServicesIndustry/>}/>
        <Route path="/realestate-industry" element={<RealEstateIndustry/>}/>
        <Route path="/manufacturing-industry" element={<ManufacturingIndustry/>}/>
        <Route path="/technical-corner" element={<Technicalcorner/>}/>
        <Route path="/face-registrationTrial" element={<FaceRegistration/>} />
        <Route path="/face-verificationTrial" element={<FaceVerificationTrail/>} />
        <Route path="/VerificationResult" element={<FaceResultPage/>} />
        <Route path= "/AnomalyLiveTesting" element={<LiveTesting/>}/>
        <Route path= "/ANPRLiveTesting" element={<AnprLivetesting/>} />
        <Route path="/UseCases" element={<UseCase/>} />
      </Routes>
      <ToastContainer />

    </Router>
  );
}

export default App;