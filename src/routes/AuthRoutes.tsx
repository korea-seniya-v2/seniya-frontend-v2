import { Route } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import SignIn from "../pages/auth/SignIn";

export const AuthRoutes = (
  <>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
  </>
);