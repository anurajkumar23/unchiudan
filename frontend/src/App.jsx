import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import DownloadPage from "./Components/Downloads/DownloadPage";
import BlogsPage from "./Components/Blogs/BlogsPage";
import GlobalProvider from "./Components/GlobalProvider";
import Downloads from "./Components/Downloads/Downloads";
import { Navigate } from "react-router-dom";

import News from "./Components/News/News";
import Currentaffaircontainer from "./Components/currentaffair/Currentaffaircontainer";

import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import UserSettings from "./Components/Home/core/Auth/UserSettings"; // Assuming you have a UserSettings component
import Navbar from "./Components/Home/HomeUI/Navbar";
import NewsPage from "./Components/News/NewsPage";
import AboutUs from "./Components/About/AboutUs";
import TermsAndConditions from "./Components/About/TermsAndConditions";
import Disclaimer from "./Components/About/Disclaimer";
// import PrivacyPolicy from "./Components/About/PrivacyPolicy";
import FAQ from "./Components/Support/FAQ";
import StudyMaterials from "./Components/Study Materials/StudyMaterials";

function App() {
  const [user, setUser] = useState(null);

  // Function to check if user is authenticated
  const checkAuthenticated = async () => {
    console.log(
      "🚀 ~ file: App.jsx:25 ~ checkAuthenticated ~ token:",
      "start auth"
    );
    const token = localStorage.getItem("jwt_token");
    console.log("🚀 ~ file: App.jsx:25 ~ checkAuthenticated ~ token:", token);
    try {
      const response = await fetch(
        "https://ucchi-urran-backend.vercel.app/api/user/authenticated",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any authentication headers if needed
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
  // console.log("🚀 ~ file: App.jsx:43 ~ useEffect ~ user:", user.isAuthorized);

  useEffect(() => {
    // Check if user info is already stored in local storage or cookies
    const storedUser = JSON.parse(localStorage.getItem("user")); // Assuming you're storing the user info in local storage
    if (storedUser) {
      setUser(storedUser);
    } else {
      checkAuthenticated();
    }
  }, []); // Fetch authentication status only when component mounts

  // const show = user.isAuthorized

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Navbar userData={user} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/pdfs" element={<Downloads />} />
          <Route path="/pdfs/:id" element={<DownloadPage userData={user} />} />
          <Route path="/Currentaffairs" element={<Currentaffaircontainer />} />
          <Route path="/currentaffairs/:id" element={<BlogsPage />} />
          <Route path="/News" element={<News />} />
          <Route path="/News/:id" element={<NewsPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/tearm&conditions" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
          <Route path="/faqs" element={<FAQ />} />

          {user ? (
              <>
            <Route
              path="/user"
              element={<UserSettings userData={user.user} />}
            />
            <Route
              path="/studymaterials"
              element={<StudyMaterials userData={user.user} />}
            />
            </>
          ) : (
            <Route path="/user/login" element={<Login />} />
          )}
        
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
