import { Route } from "react-router-dom";
import CreateCourse from "../pages/admin/course/CreateCourse";
import AdminRoute from "./AdminRoute";
import CourseList from "../pages/admin/course/CourseList";
import UserList from "../pages/admin/user/UserList";
import PaymentConfirm from "../pages/admin/payment/PaymentConfirm";
import TrainerApplicationList from "../pages/trainer/application/TrainerApplicationList";
import TrainerApplicationDetail from "../pages/trainer/application/TrainerApplicatinoDetail";

export const AdminRoutes = (
  <>
    <Route path="/admin" element={<AdminRoute />}>
      <Route path="create-course" element={<CreateCourse />} />
      <Route path="courses" element={<CourseList />} />
      <Route path="users" element={<UserList />} />
      <Route path="payments" element={<PaymentConfirm />} />
      <Route path="trainer-applications" element={<TrainerApplicationList />} />
      <Route path="trainer-application/:id" element={<TrainerApplicationDetail />} />
    </Route>
  </>

);