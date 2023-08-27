import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import GlobalProvider from "./Components/GlobalProvider";
function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
