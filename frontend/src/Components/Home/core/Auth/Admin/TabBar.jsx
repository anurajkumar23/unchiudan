import React, { useState } from "react";

const tabs = [
  { id: "tab1", label: "Tab 1" },
  { id: "tab2", label: "Tab 2" },
  { id: "tab3", label: "Tab 3" },
];

const TabBar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${
            activeTab === tab.id
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          } p-3 flex-1 text-center`}
          onClick={() => handleTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
