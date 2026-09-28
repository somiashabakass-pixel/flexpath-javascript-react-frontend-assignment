import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [results, setResults] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [statusMessage, setStatusMessage] = useState("No Records To Display");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allData, setAllData] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/search"
            element={
              <Search
                results={results}
                setResults={setResults}
                metrics={metrics}
                setMetrics={setMetrics}
                statusMessage={statusMessage}
                setStatusMessage={setStatusMessage}
                loading={loading}
                setLoading={setLoading}
                error={error}
                setError={setError}
                allData={allData}
                setAllData={setAllData}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
