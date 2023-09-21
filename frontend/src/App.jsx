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

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloadpdf/:id" element={<DownloadPage />} />
          <Route path="/currentaffairs/:id" element={<BlogsPage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Quizz" element={<Quizcontainer />} />
          <Route path="/News" element={<News />} />
          <Route path="/Currentaffairs" element={<Currentaffaircontainer />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
