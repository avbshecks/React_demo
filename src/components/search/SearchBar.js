import { useState } from "react";
import "./SearchBar.css";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <label>Enter Search Term</label>
      <form onSubmit={onSubmitForm}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
