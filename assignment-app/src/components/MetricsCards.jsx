import React from "react";

const calculateAverage = (numbers) => {
  if (!numbers || numbers.length === 0) return 0;
  const valid = numbers.filter((n) => typeof n === "number");
  if (valid.length === 0) return 0;
  const sum = valid.reduce((total, num) => total + num, 0);
  return (sum / valid.length).toFixed(2);
};

const calculateMedian = (numbers) => {
  if (!numbers || numbers.length === 0) return 0;
  const valid = numbers.filter((n) => typeof n === "number");
  if (valid.length === 0) return 0;
  const sorted = [...valid].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2);
  }
  return sorted[mid].toFixed(2);
};

function MetricsCards({ results }) {
  const appUsage = results
    .map((item) => Number(item["App Usage Time (min/day)"]))
    .filter((n) => !isNaN(n));

  const screenOn = results
    .map((item) => Number(item["Screen On Time (hours/day)"]))
    .filter((n) => !isNaN(n));

  const appsInstalled = results
    .map((item) => Number(item["Number of Apps Installed"]))
    .filter((n) => !isNaN(n));

  const ages = results
    .map((item) => Number(item["Age"]))
    .filter((n) => !isNaN(n));

  return (
    <div className="row mb-4">
      <div className="col-md-3 mb-3">
        <div className="card p-3">
          <h5>App Usage Time (min/day)</h5>
          <p>Average: {calculateAverage(appUsage)}</p>
          <p>Median: {calculateMedian(appUsage)}</p>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3">
          <h5>Screen On Time (hours/day)</h5>
          <p>Average: {calculateAverage(screenOn)}</p>
          <p>Median: {calculateMedian(screenOn)}</p>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3">
          <h5>Number of Apps Installed</h5>
          <p>Average: {calculateAverage(appsInstalled)}</p>
          <p>Median: {calculateMedian(appsInstalled)}</p>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3">
          <h5>Age</h5>
          <p>Average: {calculateAverage(ages)}</p>
          <p>Median: {calculateMedian(ages)}</p>
        </div>
      </div>
    </div>
  );
}

export default MetricsCards;
