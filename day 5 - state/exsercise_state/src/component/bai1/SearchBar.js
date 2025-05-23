import React from "react";
import InputBox from "./InputBox";

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <InputBox onInputChange={onSearch} />
    </div>
  );
};

export default SearchBar;
