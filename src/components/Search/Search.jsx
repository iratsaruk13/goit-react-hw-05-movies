import React from "react";
import { toast } from "react-toastify";

const Search = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const searchQuery = e.target.elements.searchQuery.value;

    if (!searchQuery) {
      toast.error("Enter your search query, please");
      return;
    }
    onSubmit(searchQuery);
    e.target.reset()
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" placeholder="Enter your search query"/>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
