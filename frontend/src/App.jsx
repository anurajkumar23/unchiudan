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
import UserSettings from "./Components/Home/core/Auth/UserSettings";


function App() {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/user/login" element={<Login />} />
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
          
          {isAuthenticated ? (
            <Route path="/user" element={<UserSettings />} />
          ) : (
            <Route path="/user/login" element={<Login />} />
          )}
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
