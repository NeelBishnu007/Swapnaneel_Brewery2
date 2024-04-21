import './App.css';
import React from 'react';
import { useState } from 'react';




const Navbar =() =>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"> <h2> The Brewery, by Swapnaneel Bishnu </h2></a>
      
      
    </div>
  </nav>
  )
}


const SearchBar = ()=>{

  const[input, ChangeInput] = useState("");
  const[name, ChangeName]= useState("");
  const[recipe, ChangeRecipe]= useState("");
  
  
  const fetchData=(value)=>{
       fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
       .then(response=>response.json())
       .then((data)=>{
        console.log(data);
        ChangeName(data.drinks[0].strDrink);
        ChangeRecipe(data.drinks[0].strInstructions)
       
      })
  }
  
  const HandleChange=(value)=>{
        ChangeInput(value);
        
  }
  
  
  
  return(
      <>
      <header className="bg-dark text-white p-5">
      <input  placeholder='(try margarita/vodka/beer)' className='search'  value={input} onChange={(e)=>{HandleChange(e.target.value)}}/>
      <button className='search' onClick={()=>{ fetchData(input)}}>
        Search
      </button>
      <button className='search' onClick={()=>{ChangeName(""); ChangeRecipe(""); ChangeInput("")}}>
        Clear
      </button>
      </header>


      <div className='para'>
       <p className="col-lg-8 offset-lg-2 my-5  " > 
       <h1> <u>Name:</u> {name}</h1>
       <h3 className='recipe'>  <u> Recipe:</u> {recipe} </h3>
       
          
          
          </p>  
          <hr />
    </div>
   
      </>
  )
  }


class Hero extends React.Component{

  constructor(){
    super()
  
    this.state={
      Name: null,
      Recipe:null
      }
  }

  generateCharacter(){
    const random = Math.round(Math.random()*9)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=1100${random}`
    fetch(url)
      .then(response=> response.json())
      .then(data=>{
        this.setState({
          Name: data.drinks[0].strDrink,
          
          Recipe: data.drinks[0].strInstructions,
      
        })

        console.log(data)
      })



  }

  
render(){
  return(
    <>
    
    <header className="bg-dark text-white p-5">
      
      <button type='button' className='search' onClick={()=>{
        this.generateCharacter();
      }}> 
      Randomize
      </button>
      <button type='button' className='search' onClick={()=>{
        this.setState({
          Name: null,
          
          Recipe: null,
        })
      }}>
        Clear
      </button>
</header>



    <div className='para'>
       <p className="col-lg-8 offset-lg-2 my-5  " > 
       <h1> <u>Name:</u> {this.state.Name}</h1>
       <h3 className='recipe'>  <u> Recipe:</u> {this.state.Recipe} </h3>
       
          
          
          </p>  
          <hr />
    </div>
    
    </>
  )
}
}


function App() {
  return (
    <div className="App">
    <Navbar />
    <SearchBar />
    <Hero />
   
   
    </div>
  );
}

export default App;
