/* eslint-disable react/prop-types */


const TabBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "tab1", label: "Post News" },
    { id: "tab2", label: "Post Current Affair" },
    { id: "tab3", label: "Post PDF" },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex rounded-full bg-gray-200 ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${
            activeTab === tab.id
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          } p-3 flex-1 text-center rounded-full`}
          onClick={() => handleTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
