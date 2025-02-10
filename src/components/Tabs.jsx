import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={activeTab === "vacancies" ? "active" : ""}
        onClick={() => setActiveTab("vacancies")}
      >
        Вакансии
      </button>
      <button
        className={activeTab === "resumes" ? "active" : ""}
        onClick={() => setActiveTab("resumes")}
      >
        Резюме
      </button>
    </div>
  );
};

export default Tabs;
