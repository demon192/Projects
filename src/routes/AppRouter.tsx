import { Routes } from "react-router";
import { Route } from "react-router-dom";
import EducationalDetails from "../components/feature/EducationalDetails";
import PersonalDetails from "../components/feature/PersonalDetails";
import ThankYou from "../components/feature/ThankYou";
import WelcomeScreen from "../components/feature/WelcomeScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={WelcomeScreen} />
      <Route path="/personalDetails" Component={PersonalDetails} />
      <Route path="/educationalDetails" Component={EducationalDetails} />
      <Route path="/thankyou" Component={ThankYou} />
    </Routes>
  );
};

export default AppRouter;
