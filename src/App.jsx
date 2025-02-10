import React, { useState, useEffect } from "react";
import "./App.scss";
import { categories } from "./data";  // Moved data to a separate file
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import QuickTabs from "./components/QuickTabs";

const JobBoard = () => {
  const [activeTab, setActiveTab] = useState("vacancies");
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredResults, setFilteredResults] = useState(categories.vacancies);

  const filteredOptions = categories[activeTab].filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setFilteredResults(categories[activeTab]);
  }, [activeTab]);

  const handleSearch = () => {
    const results = categories[activeTab].filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredResults(results);
  };

  return (
    <div className="job-board">
      <Header />
      <h1>Биржа вакансий и резюме</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchBar
        search={search}
        setSearch={setSearch}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        filteredOptions={filteredOptions}
        handleSearch={handleSearch}
      />
       <QuickTabs setSearch={setSearch} />
      <div className="cards">
        {filteredResults.length > 0 ? (
          filteredResults.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default JobBoard;
