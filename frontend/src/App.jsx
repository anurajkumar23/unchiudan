import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import DownloadPage from "./Components/Downloads/DownloadPage";
import GlobalProvider from "./Components/GlobalProvider";
function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloadpdf" element={<DownloadPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
