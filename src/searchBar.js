import React from 'react';
import { useState } from 'react';


const SearchBar = ()=>{
    const[input, ChangeInput] = useState("");

    const fetchData=(value)=>{
         fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
         .then(response=>response.json())
         .then((data)=>{console.log(data)})
    }

    const HandleChange=(value)=>{
          ChangeInput(value);
          fetchData(value);
    }

    

    return(
        <>
        <input  placeholder='search here' className='search'  value={input} onChange={(e)=>{HandleChange(e.target.value)}}/>

        
        </>
    )
}

