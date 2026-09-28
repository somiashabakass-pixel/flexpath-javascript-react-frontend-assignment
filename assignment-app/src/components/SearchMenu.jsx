import { useState, useEffect } from "react";

function SearchMenu({ onSearch, loading, allData, statusMessage }) {
  const [filterType, setFilterType] = useState("gender");
  const [keyword, setKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Build autocomplete lists from dataset
  const allValues = {
    gender: [...new Set(allData.map((item) => item["Gender"]))],
    operatingsystem: [
      ...new Set(allData.map((item) => item["Operating System"])),
    ],
    model: [...new Set(allData.map((item) => item["Device Model"]))],
    behaviorclass: [
      ...new Set(allData.map((item) => item["User Behavior Class"])),
    ],
  };

  // Autocomplete filtering
  useEffect(() => {
    if (keyword.length === 0) {
      setSuggestions([]);
      return;
    }

    const list = allValues[filterType] || [];

    const matches = list.filter((value) =>
      value.toLowerCase().includes(keyword.toLowerCase()),
    );

    setSuggestions(matches.slice(0, 6));
  }, [keyword, filterType, allData]);

  // Search button click
  const handleClick = () => {
    onSearch(filterType, keyword);
  };

  return (
    <div className="mb-4">
      {/* Filter Type Dropdown */}
      <div className="mb-3">
        <label className="form-label">Filter Type</label>
        <select
          className="form-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="gender">gender</option>
          <option value="operatingsystem">operatingsystem</option>
          <option value="model">model</option>
          <option value="behaviorclass">behaviorclass</option>
        </select>
      </div>

      {/* Keyword Input */}
      <div className="mb-3">
        <label className="form-label">keyword</label>
        <input
          type="text"
          className="form-control"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Type keyword here..."
        />
      </div>

      {/* Autocomplete Suggestions */}
      {suggestions.length > 0 && (
        <ul className="list-group mb-3">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="list-group-item"
              style={{ cursor: "pointer" }}
              onClick={() => setKeyword(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Search Button */}
      <button
        className="btn btn-primary mb-3"
        onClick={handleClick}
        disabled={loading}
      >
        Search
      </button>

      {/* Status Message from App.jsx */}
      <p className="fw-bold">{statusMessage}</p>
    </div>
  );
}

export default SearchMenu;
