import { useState } from "react";
import "./all-components.css";

function SearchBar({
  setSearchValue,
}: {
  setSearchValue: (value: string) => void;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  let preValue: string;

  function handleSearch() {
    if (!inputValue || inputValue === preValue) return;
    setSearchValue(inputValue);
    preValue = inputValue;
  }

  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-input"
        placeholder="Search for a city..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "NumpadEnter") {
            handleSearch();
          }
        }}
      />
      <button className="search-btn" onClick={() => handleSearch()}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
