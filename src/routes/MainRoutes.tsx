import { Route } from "react-router-dom";
import Home from "../pages/main/Home";
import Information from "../pages/main/CenterInfo/Information";
import OperationalGoals from "../pages/main/CenterInfo/OperationalGoals";
import Facility from "../pages/main/CenterInfo/Facility";
import Location from "../pages/main/CenterInfo/Location";

export const MainRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/information" element={<Information />} />
    <Route path="/operationalgoals" element={<OperationalGoals />} />
    <Route path="/facility" element={<Facility />} />
    <Route path="/location" element={<Location />} />
  </>

);