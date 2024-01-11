import { useState } from "react";

// Define a data object that holds the Supreme Mathematics for each date
const data = {
  "2023-04-25": "Knowledge Cipher",
  "2023-04-26": "Wisdom Cipher",
  // ... add more dates and their associated mathematics here
};

const SearchApp = () => {
  const [searchDate, setSearchDate] = useState("");
  const [result, setResult] = useState("");

  // Handler for handling search button click
  const handleSearch = () => {
    if (searchDate in data) {
      setResult((data as any)[searchDate]);
    } else {
      setResult("No result found for the given date.");
    }
  };

  return (
    <div>
      <h1>Supreme Mathematics Search</h1>
      <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {result && (
        <div>
          <h2>Result</h2>
          <p>
            <strong>Date: </strong>
            {searchDate}
          </p>
          <p>
            <strong>Mathematics: </strong>
            {result}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchApp;
