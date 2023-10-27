import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Movielist from './components/Movielist';
import Movieinfo from './components/Movieinfo';

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const apiRequest = async (input) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=5cff916`);
    const data = await response.json();
    setMovies(data.Search);
  }

  const parentFunction = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    apiRequest(search)
  }, [search])

  const handleClick = (input) => {
    setSelected(input.imdbID);
  }

  const handleHide = () => {
    setSelected(null);
  }

  return (
    <div className="App">
      <Header handleInputChange={parentFunction} />
      {selected && <Movieinfo property={selected} hide={handleHide} />}
      <div className=' flex flex-wrap flex-row p-[30px] justify-evenly gap-x-[40px] gap-y-16 '>
        {movies ? movies.map((movie, index) => (
          <Movielist
            Title={movie.Title}
            Year={movie.Year}
            Type={movie.Type}
            Poster={movie.Poster}
            Key={index}
            imdbID={() => handleClick(movie)}
          />
        )) : (<h1 className='text-3xl font-bold text-center w-[100%]'>No Movies Found</h1>)}
      </div>
    </div>
  );
}

export default App
