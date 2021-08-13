import React from "react";
import "./search-input.css";

const SearchInput = ({ textChange }) => {
  function handleInput(e) {
    textChange(e.target.value);
  }

  return (
    <div className='component-search-input'>
      <input onChange={handleInput} type='text' />
    </div>
  );
};

export default SearchInput;
