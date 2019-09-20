import React , { useState } from "react";
import styled from "styled-components";

const SearchBar = styled.div`
display: flex;
justify-content: center;
`

export default function Form(props) {
    // set search
    const [ search, setSearch ] = useState('');
    const [ searchQuery, setQuery ] = useState([]);
    const searchArr = props.data;

    // Handle Search 
    const handleSearch = e => {
        setSearch(e.target.value);
    }

    React.useEffect(() => {
        const finder = searchArr.filter(input =>
          input.name.includes(search)
        );
        setQuery(finder);
      }, []);


   
    return (
        <>
        <div className="search-form">
          <SearchBar
            type='text'
            placeholder='Search'
            value={search}
            onChange={handleSearch}
          />
          </div>
       
        {searchQuery.map(chara => (
             <div className="cardChar">  
             <img src={chara.image} />
             <h3>{chara.name}</h3>
             <h4>{chara.gender}</h4>
             <h4>{chara.type}</h4>
             <h4>{chara.origin.name}</h4>
           </div>


        ))}

        </>
        
    )
}
    