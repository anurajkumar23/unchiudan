import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import DownloadPage from "./Components/Downloads/DownloadPage";
import BlogsPage from "./Components/Blogs/BlogsPage";
import GlobalProvider from "./Components/GlobalProvider";
import Downloads from "./Components/Downloads/Downloads";
import Blogs from "./Components/Blogs/Blogs";
import Quizcontainer from "./Components/Quiz/Quizcontainer";
import News from "./Components/News/News";
import Currentaffaircontainer from "./Components/currentaffair/Currentaffaircontainer";
import Quiz from "./Components/Quiz/Quiz";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import UserSettings from "./Components/Home/core/Auth/UserSettings"; // Assuming you have a UserSettings component

function App() {
  const [user, setUser] = useState(null);

  // Function to check if user is authenticated
  const checkAuthenticated = async () => {
    try {
      const response = await fetch("https://unchiudaanteam.vercel.app/api/user/authenticated", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any authentication headers if needed
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/pdfs/:id" element={<DownloadPage />} />
          <Route path="/currentaffairs/:id" element={<BlogsPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/pdfs" element={<Downloads />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Quizz" element={<Quizcontainer />} />
          <Route path="/News" element={<News />} />
          <Route path="/Currentaffairs" element={<Currentaffaircontainer />} />

          {user ? (
            <Route
              path="/user"
              element={<UserSettings userData={user.user} />}
            />
          ) : (
            <Route path="/user/login" element={<Login />} />
          )}
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
