import { Route } from "react-router-dom";
import PostCreate from "../pages/post/PostCreate";
import PostListPage from "../pages/post/PostListPage";
import PostDetailPage from "../pages/post/PostDetailPage";
import PostUpdate from "../pages/post/PostUpdate";

export const PostRoutes = (
  <>
    <Route path="/post" element={<PostCreate />} />
    <Route path="/posts" element={<PostListPage />} />
    <Route path="/posts/:id" element={<PostDetailPage />} />
    <Route path="/posts/:id/update" element={<PostUpdate />} />
  </>

);