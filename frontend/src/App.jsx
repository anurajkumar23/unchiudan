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
import AboutUs from "./Components/About/AboutUs";
import AdminPage from "./Components/Home/core/Auth/Admin/AdminPower";
import ErrorPage from "./Errorpage";
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
    console.log("🚀 ~ file: App.jsx:25 ~ checkAuthenticated ~ token:", "start auth");
    const token = localStorage.getItem("jwt_token");
    console.log("🚀 ~ file: App.jsx:25 ~ checkAuthenticated ~ token:", token);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/authenticated`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

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
        <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12"></div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar userData={user} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/pdfs" element={<Downloads userData={user} />} />
          <Route path="/pdfs/:id" element={<DownloadPage userData={user} />} />
          <Route path="/Currentaffairs" element={<Currentaffaircontainer userData={user} />} />
          <Route path="/currentaffairs/:id" element={<BlogsPage userData={user}/>} />
          <Route path="/News" element={<News userData={user} />} />
          <Route path="/News/:id" element={<NewsPage userData={user}/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/tearm&conditions" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />

          {user ? (
            <Route
              path="/user"
              element={<UserSettings userData={user.user} />}
            />
          ) : (
            <Route path="/user/login" element={<Login />} />
          )}
          <Route
            path="/studymaterials"
            element={
              user ? (
                <StudyMaterials userData={user.user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          {user ?     <Route
            path="/adminpower"
            element={
              user.user.role==="admin" ? (
                <AdminPage userData={user.user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          : <Route path="/errorpage" element={<ErrorPage />} />
        }
      
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );  
}

export default App;
