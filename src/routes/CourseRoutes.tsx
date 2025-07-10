import { Route } from "react-router-dom";
import CourseListPage from "../pages/course/CourseListPage";

export const CourseRoutes = (
  <>
    <Route path="/courses" element={<CourseListPage />} />
  </>
);