import FormCurrentAffairs from "./FormCurrentAffairs";
import FormNews from "./FormNews";
import FormPDF from "./FormPDF";
import React, { useState } from "react";
import TabBar from "./TabBar";
const SidebarAdmin = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto mt-5">
        <TabBar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="mt-5">
          {activeTab === "tab1" && <FormNews />}
          {activeTab === "tab2" && <FormCurrentAffairs />}
          {activeTab === "tab3" && <FormPDF />}
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
