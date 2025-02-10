import React from "react";

const SearchBar = ({
  search,
  setSearch,
  showDropdown,
  setShowDropdown,
  filteredOptions,
  handleSearch,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Услуга или специалист"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowDropdown(e.target.value.length > 0);
        }}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        onFocus={() => setShowDropdown(search.length > 0)}
      />
      <button onClick={handleSearch}>Найти</button>
      {showDropdown && (
        <div className="dropdown">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((item, index) => (
              <div
                key={index}
                className="dropdown-item"
                onMouseDown={() => {
                  setSearch(item.title);
                  setShowDropdown(false);
                }}
              >
                {item.title}
              </div>
            ))
          ) : (
            <div className="dropdown-item">Ничего не найдено</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
