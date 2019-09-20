import React from "react";
import styled from 'styled-components';

// use of styed components
const SearchBar = styled.div `
display: flex;
justify-content: center;
`
export default function Form() {

    return (
      <SearchBar className ="search-form">
        <form onSubmit={render()}>
          <input 
          className = "search-field" 
          type = "text" 
          name = "search"
          placeholder = "Name Search"
          />
          <button>Search!</button>
        </form> 
      </SearchBar>
    );
  }