import { Route } from "react-router-dom";
import HealthDataCreate from "../pages/healthdata/HealthDataCreate";
import HealthDataView from "../pages/healthdata/HealthDataView";
import HealthDataUpdate from "../pages/healthdata/HealthDataUpdate";

export const HealthDataRoutes = (
  <>
    <Route path="/healthdata" element={<HealthDataCreate />} />
    <Route path="/healthdata/me" element={<HealthDataView />} />
    <Route path="/healthdata/update" element={<HealthDataUpdate />} />
  </>

);