import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EstateDetailsPage from "./pages/EstateDetailsPage/EstateDetailsPage";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { StyledToastContainer } from "./components/Toast/Toast.styled";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");

    if (isAuthenticated === "true" && window.location.pathname === "/") {
      navigate("/main");
    }
  }, [navigate]);

  const handleLogin = () => {
    sessionStorage.setItem("isAuthenticated", "true");
    navigate("/main");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAuthenticated");
    navigate("/");
  };


  const isAuthPage = location.pathname === "/" || location.pathname === "/register";

  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route element={<AuthPage onLogin={handleLogin} />} path="/" />
          <Route element={<MainPage onLogout={handleLogout} />} path="/main" />
          <Route element={<FavoritesPage />} path="/favorites" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<EstateDetailsPage />} path="/estate/:id" />
        </Routes>

        
        {!isAuthPage && <Footer />}

        <StyledToastContainer theme="light" />
      </div>
    </div>
  );
}

export default App;

