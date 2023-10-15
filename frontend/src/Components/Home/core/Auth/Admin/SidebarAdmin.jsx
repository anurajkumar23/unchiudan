import CurrentAffairsForm from "./FormCurrentAffairs";
import FormNews from "./FormNews";
import FormPdf from "./FormPDF";
import React, { useState } from "react";
import TabBar from "./TabBar";
const SidebarAdmin = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto mt-5">
        <TabBar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="mt-5">
          {activeTab === "tab1" && (
            <div>
              <FormNews />
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <CurrentAffairsForm />
            </div>
          )}
          {activeTab === "tab3" && (
            <div>
              <FormPdf />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
