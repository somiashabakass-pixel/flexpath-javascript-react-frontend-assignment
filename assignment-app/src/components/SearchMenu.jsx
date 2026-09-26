import { useState, useEffect } from "react";

function SearchMenu({ onSearch, loading, allData }) {
  const [filterType, setFilterType] = useState("gender");
  const [keyword, setKeyword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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

  useEffect(() => {
    if (loading) {
      setStatusMessage("Loading...");
    } else {
      setStatusMessage("");
    }
  }, [loading]);

  const handleClick = () => {
    onSearch(filterType, keyword);
  };

  return (
    <div className="mb-4">
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

      <button
        className="btn btn-primary mb-3"
        onClick={handleClick}
        disabled={loading}
      >
        Search
      </button>

      <p className="fw-bold">{statusMessage}</p>
    </div>
  );
}
export default SearchMenu;
