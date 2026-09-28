import SearchMenu from "./SearchMenu";
import MetricsCards from "./MetricsCards";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";

function Search({
  results,
  setResults,
  loading,
  setLoading,
  error,
  setError,
  allData,
  setAllData,
}) {
  useEffect(() => {
    if (allData.length === 0) {
      fetch("http://localhost:3000/api/data/search")
        .then((res) => res.json())
        .then((data) => setAllData(data))
        .catch((err) => console.error(err));
    }
  }, []);

  const handleSearch = async (filterType, keyword) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `http://localhost:3000/api/data/search?filterType=${filterType}&keyword=${keyword}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <SearchMenu onSearch={handleSearch} loading={loading} allData={allData} />

      <MetricsCards results={results} />

      <SearchResults results={results} loading={loading} error={error} />
    </div>
  );
}

export default Search;
