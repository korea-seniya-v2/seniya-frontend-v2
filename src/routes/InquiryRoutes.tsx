import { Route } from "react-router-dom";
import InquiryListPage from "../pages/inquiry/InquiryListPage";
import InquiryDetail from "../pages/inquiry/InquiryDetail";
import InquiryCreate from "../pages/inquiry/InquiryCreate";
import InquiryUpdate from "../pages/inquiry/InquiryUpdate";
import InquiryAnswer from "../pages/inquiry/InquiryAnswer";

export const InquiryRoutes = (
  <>
    <Route path="/inquiries" element={<InquiryListPage />} />
    <Route path="/inquiry" element={<InquiryCreate />} />
    <Route path="/inquiry/:id" element={<InquiryDetail />} />
    <Route path="/inquiry/:id/update" element={<InquiryUpdate />} />
    <Route path="/inquiry/:id/response" element={<InquiryAnswer />} />
  </>
);
