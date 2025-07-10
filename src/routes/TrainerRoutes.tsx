import { Route } from "react-router-dom";
import TrainerApplication from "../pages/trainer/application/TrainerApplication";
import MyTrainerApplicationStatus from "../pages/trainer/application/MyTrainerApplicationStatus";
import MyParticipationList from "../pages/participation/MyParticipationList";
import CreateTrainerProfile from "../pages/trainer/profile/CreateTrainerProfile";
import ViewTrainerProfile from "../pages/trainer/profile/ViewTrainerProfile";
import EditTrainerProfile from "../pages/trainer/profile/EditTrainerProfile";

export const TrainerRoutes = (
  <>
    <Route path="/trainer-application" element={<TrainerApplication />} />
    <Route path="/trainer-application/me" element={<MyTrainerApplicationStatus />} />
    <Route path="/users/me/trainer-application" element={<MyParticipationList />} />
    <Route path="/trainer-application/create" element={<CreateTrainerProfile />} />
    <Route path="/trainer-application/view" element={<ViewTrainerProfile />} />
    <Route path="/trainer-application/edit" element={<EditTrainerProfile />} />
  </>

);