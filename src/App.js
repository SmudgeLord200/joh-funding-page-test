import "./App.css";
import SearhBar from "./components/SearhBar";
import FilterOptions from "./components/FilterOptions";
import ListGridView from "./components/ListGridView";
import { useEffect, useState } from "react";
import sampleData from "./sampleData.json";

function App() {
  const [view, setView] = useState("grid");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [input, setInput] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(sampleData);

  const onToggleView = (v) => {
    setView(v === "grid" ? "grid" : "list");
  };

  const onToggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const onSelectFilter = (filterKey, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey]?.includes(value)
        ? prev[filterKey].filter((item) => item !== value)
        : [...(prev[filterKey] || []), value],
    }));
  };

  const onRemoveFilter = (filterKey, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey].filter((item) => item !== value),
    }));
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSearch = (input = "") => {
    const filteredArr = sampleData.filter((item) => {
      // Search by name, ISIN, benchmark, or manager
      const searchMatch =
        input === "" ||
        ["Fund Name/Benchmark", "ISIN", "Benchmark", "Manager"].some((key) =>
          item[key]?.toLowerCase().includes(input.toLowerCase())
        );

      // Apply filters
      const filterMatch = Object.keys(selectedFilters).every(
        (filterKey) =>
          selectedFilters[filterKey].length === 0 ||
          selectedFilters[filterKey]?.includes(item[filterKey])
      );
      // console.log("selectedFilters is ", selectedFilters)
      return searchMatch && filterMatch;
    });
    setData(filteredArr);
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  useEffect(() => {
    onSearch(input);
  }, [input, selectedFilters]);

  return (
    <div className="App">
      <SearhBar
        input={input}
        onInputChange={onInputChange}
        onSearch={onSearch}
        onToggleView={onToggleView}
      />
      <FilterOptions
        onSelectFilter={onSelectFilter}
        selectedFilters={selectedFilters}
        onRemoveFilter={onRemoveFilter}
        clearFilters={clearFilters}
      />
      <ListGridView view={view} data={data} />
    </div>
  );
}

export default App;
