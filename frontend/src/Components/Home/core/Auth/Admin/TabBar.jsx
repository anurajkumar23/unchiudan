import React, { useState } from "react";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      <button
        className={`${
          activeTab === "tab1"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        } p-3 flex-1 text-center`}
        onClick={() => handleTabChange("tab1")}
      >
        Tab 1
      </button>
      <button
        className={`${
          activeTab === "tab2"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        } p-3 flex-1 text-center`}
        onClick={() => handleTabChange("tab2")}
      >
        Tab 2
      </button>
      <button
        className={`${
          activeTab === "tab3"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        } p-3 flex-1 text-center`}
        onClick={() => handleTabChange("tab3")}
      >
        Tab 3
      </button>
    </div>
  );
};

export default TabBar;
