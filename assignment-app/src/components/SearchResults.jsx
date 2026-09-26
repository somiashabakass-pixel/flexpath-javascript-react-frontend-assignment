// SearchResults receives:
// - results (array of objects)
// - loading (true/false)
// - error (string)
// It displays a table of results OR status messages depending on state.

function SearchResults({ results, loading, error }) {
  // -----------------------------
  // STATUS MESSAGES
  // -----------------------------

  // If API is loading → show loading message
  if (loading) {
    return <p className="fw-bold">Loading...</p>;
  }

  // If API returned an error → show error message
  if (error) {
    return <p className="text-danger fw-bold">{error}</p>;
  }

  // If no results → show "No Records To Display"
  if (results.length === 0) {
    return <p className="fw-bold">No Records To Display</p>;
  }

  // If results exist → show "Displaying X Records"
  const recordCountMessage = `Displaying ${results.length} Records`;

  // -----------------------------
  // TABLE DISPLAY
  // -----------------------------
  return (
    <div className="mt-4">
      {/* Display record count */}
      <p className="fw-bold">{recordCountMessage}</p>

      {/* Bootstrap table */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {/* Table headers must match dataset fields */}
            <th>Gender</th>
            <th>Operating System</th>
            <th>Model</th>
            <th>Behavior Class</th>
            <th>App Usage Time</th>
            <th>Screen On Time</th>
            <th>Apps Installed</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <td>{item["Gender"]}</td>
              <td>{item["Operating System"]}</td>
              <td>{item["Device Model"]}</td>
              <td>{item["User Behavior Class"]}</td>
              <td>{item["App Usage Time (min/day)"]}</td>
              <td>{item["Screen On Time (hours/day)"]}</td>
              <td>{item["Number of Apps Installed"]}</td>
              <td>{item["Age"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
