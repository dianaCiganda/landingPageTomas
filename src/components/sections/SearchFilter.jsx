// src/components/filters/SearchFilter.jsx
import React from "react";
import "./SearchFilter.css";

const SearchFilter = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search...", 
  resultsCount = null,
  resultsLabel = "results"
}) => {
  const handleClear = () => {
    onSearchChange("");
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <i className="fas fa-search search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <button 
            className="search-clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      {resultsCount !== null && (
        <span className="search-results-count">
          {searchTerm ? `${resultsCount} ${resultsLabel}` : ''}
        </span>
      )}
    </div>
  );
};

export default SearchFilter;