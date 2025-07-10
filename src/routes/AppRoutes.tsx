import { AdminRoutes } from "./AdminRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { CourseRoutes } from "./CourseRoutes";
import { HealthDataRoutes } from "./HealthDataRoutes";
import { InquiryRoutes } from "./InquiryRoutes";
import { MainRoutes } from "./MainRoutes";
import { NoticeRoutes } from "./NoticeRoutes";
import { PaymentRoutes } from "./PaymentRoutes";
import { PostRoutes } from "./PostRoutes";
import { TrainerRoutes } from "./TrainerRoutes";
import { UserRoutes } from "./UserRoutes";

export const AppRoutes = (
  <>
    {MainRoutes}
    {AuthRoutes}
    {PostRoutes}
    {NoticeRoutes}
    {InquiryRoutes}
    {TrainerRoutes}
    {HealthDataRoutes}
    {PaymentRoutes}
    {UserRoutes}
    {CourseRoutes}
    {AdminRoutes}
  </>
);