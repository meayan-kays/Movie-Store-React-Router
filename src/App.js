import React, {useState, useEffect} from 'react'
import './App.css'
import {moviesData} from './Components/MoviesData'
import MovieList from './Components/MovieList'
import MovieAdding from './Components/MovieAdding'
import Filter from './Components/Filter';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Description from './Components/Description'

function App() {
  const [moviesList, setMoviesList] = useState(moviesData)
  const [titleSearch, setTitleSearch] = useState('')
  const [rateSearch, setRateSearch] = useState(0)

  let addMovie = (newMovie ,) => {
    setMoviesList([...moviesList, newMovie])
  }

  useEffect(() =>{
    document.title = "Movie Store"
  })

  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={() =>      
          <Filter titleSearch={titleSearch} setTitleSearch={setTitleSearch} rateSearch={rateSearch} setRateSearch={setRateSearch}/> 
        }/>
        <Route exact path="/" render={() =>
          <MovieList movies = {moviesList} titleSearch={titleSearch} rateSearch={rateSearch}/>} />
        <Route exact path="/" render={() => <MovieAdding addMovie={addMovie} />} />
        <Route exact path="/description/:id" render={(props) => <Description movies = {moviesList} {...props} />} />
        </Router>
    </div>
  );
}

export default App;