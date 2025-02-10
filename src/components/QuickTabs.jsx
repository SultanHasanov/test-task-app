import React from "react";

const QuickTabs = ({ setSearch }) => {
  const quickTabs = ["Копирайтер", "Создание гайдов", "Курьер"];

  return (
    <div className="quick-tabs">
      {quickTabs.map((tab) => (
        <button key={tab} onClick={() => setSearch(tab)}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default QuickTabs;
