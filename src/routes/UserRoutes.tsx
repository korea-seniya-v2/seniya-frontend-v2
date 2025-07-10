import { Route } from "react-router-dom";
import GetUserInfo from "../pages/mypage/GetUserInfo";
import EmailSend from "../pages/user/EmailSend";
import ResetPassword from "../pages/user/ResetPassword";
import UserPassPage from "../pages/userPass/UserPassPage";

export const UserRoutes = (
  <>
    <Route path="/users/me" element={<GetUserInfo />} />
    <Route path="/users/me/email-send" element={<EmailSend />} />
    <Route path="/users/me/password-reset" element={<ResetPassword />} />
    <Route path="/userPasses" element={<UserPassPage />} />
  </>
);