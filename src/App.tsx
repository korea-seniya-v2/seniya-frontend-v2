import { Routes } from 'react-router-dom'
import Cookies from 'js-cookie'
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { useUserStore } from './stores/user.store'
import { useEffect } from 'react';

function App() {
  const loginUser = useUserStore((s) => s.loginUser);

  useEffect(() => {
    const userData = Cookies.get("user");
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        loginUser(parsed);
      } catch (e) {
        console.error("쿠키 파싱 오류: ", e);
      }
    }
  }, []);

  return <Routes>{AppRoutes}</Routes>
}

export default App;