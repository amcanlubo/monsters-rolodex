import { useState, useEffect } from 'react';

import "./App.css";

import { CardList } from "./components/card-list/card-list"

import { SearchBox } from "./components/search-box/search-box";


const App = () => {

  const [ monsters, setMonsters ] = useState([])
  const [ searchField, setSearchfield ] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => { setMonsters(users) })
        .catch(error => console.log(error))
  })

  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  )

  const handleChange = (e) => {
    setSearchfield(e.target.value)
  }

  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder="search monsters"  
        handleChange={ handleChange }
        // handleChange={e => setSearchfield(e.target.value)}
      />
      
      <CardList monsters= { filteredMonsters } />
    </div>
  );
}

export default App;
