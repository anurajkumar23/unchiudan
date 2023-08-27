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
          <Route path="/searchresults" element={<SearchResultsPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
