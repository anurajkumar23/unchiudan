import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import DownloadPage from "./Components/Downloads/DownloadPage";
import BlogsPage from "./Components/Blogs/BlogsPage";
import GlobalProvider from "./Components/GlobalProvider";
import Downloads from "./Components/Downloads/Downloads";
import News from "./Components/News/News";
import Currentaffaircontainer from "./Components/currentaffair/Currentaffaircontainer";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import UserSettings from "./Components/Home/core/Auth/UserSettings";
import Navbar from "./Components/Home/HomeUI/Navbar";
import NewsPage from "./Components/News/NewsPage";
import DevTeam from "./Components/Home/HomeUI/DevTeam";
import AboutUs from "./Components/About/AboutUs";
import AdminPage from "./Components/Home/core/Auth/Admin/AdminPower";
import ErrorPage from "./Errorpage";
import ErrorPage401 from "./Errorpage401";
import TermsAndConditions from "./Components/About/TermsAndConditions";
import Disclaimer from "./Components/About/Disclaimer";
import FAQ from "./Components/Support/FAQ";
import StudyMaterials from "./Components/Study Materials/StudyMaterials";
import PrivacyPolicy from "./Components/About/policy";
import ForgotPassword from "./Components/Home/core/Auth/forgotpassword";
import ResetPassword from "./Components/Home/core/Auth/resetpassword";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthenticated = async () => {
    const token = localStorage.getItem("jwt_token");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/authenticated`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoading(false);
    } else {
      checkAuthenticated().then(() => setIsLoading(false));
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar userData={user} />
        <Routes>
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/user" /> : <Login />}
          />
          <Route
            exact
            path="/signup"
            element={user ? <Navigate to="/user" /> : <Signup />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pdfs" element={<Downloads userData={user} />} />

          <Route exact path="/unauthorized" element={<ErrorPage401 />} />
          <Route
            exact
            path="/pdfs/:id"
            element={<DownloadPage userData={user} />}
          />
          <Route
            exact
            path="/Currentaffairs"
            element={<Currentaffaircontainer userData={user} />}
          />
          <Route
            exact
            path="/currentaffairs/:id"
            element={<BlogsPage userData={user} />}
          />
          <Route exact path="/News" element={<News userData={user} />} />
          <Route
            exact
            path="/News/:id"
            element={<NewsPage userData={user} />}
          />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route
            exact
            path="/terms_conditions"
            element={<TermsAndConditions />}
          />
          <Route exact path="/DevTeam" element={<DevTeam />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route exact path="/faqs" element={<FAQ />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            exact
            path="/resetpassword/:token"
            element={<ResetPassword />}
          />

          <Route
            exact
            path="/user"
            element={
              user ? (
                <UserSettings userData={user.user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            exact
            path="/studymaterials"
            element={
              user ? (
                <StudyMaterials userData={user.user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/adminpower"
            element={
              user && user.user.role === "admin" ? (
                <AdminPage userData={user.user} />
              ) : (
                <Navigate to="/unauthorized" />
              )
            }
          />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
