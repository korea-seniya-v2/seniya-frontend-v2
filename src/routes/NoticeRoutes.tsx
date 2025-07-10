import { Route } from "react-router-dom";
import NoticeList from "../pages/notice/NoticeList";
import NoticeDetail from "../pages/notice/NoticeDetail";
import NoticeUpdate from "../pages/notice/NoticeUpdate";
import RequireRole from "../stores/RequireRole";
import NoticeCreate from "../pages/notice/NoticeCreate";

export const NoticeRoutes = (
  <>
    <Route path="/notices" element={<NoticeList />} />
    <Route path="/notices/:id" element={<NoticeDetail />} />
    <Route path="/notices/:id/update" element={<NoticeUpdate />} />
    <Route path="/notices/create" element={<RequireRole role={1}><NoticeCreate /></RequireRole>} />
  </>

);
