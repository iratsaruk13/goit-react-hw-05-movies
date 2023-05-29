import React from "react";
import { toast } from "react-toastify";
import { FormInput, SearchButton, StyledForm } from "./Search.styled";
import { FaSearchengin } from "react-icons/fa";

const Search = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const searchQuery = e.target.elements.searchQuery.value;

    if (!searchQuery) {
      toast.error("Enter your search query, please");
      return;
    }
    onSubmit(searchQuery);
    e.target.reset();
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="searchQuery"
          placeholder="Enter your search query"
        />
        <SearchButton type="submit">
          {" "}
          <FaSearchengin />
        </SearchButton>
      </StyledForm>
    </>
  );
};

export default Search;
