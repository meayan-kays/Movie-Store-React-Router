import React from 'react'
import MovieCard from './MovieCard'
import '../Styles/MovieList.css'


const MovieList = ({movies, titleSearch, rateSearch}) => {

    return (
        <div className="MovieList">
            <h1>List of Movies</h1>
            <div className="movies-container">
                {movies
                .filter(el => el.title.toLowerCase().includes(titleSearch.toLowerCase().trim())
                && el.rating >= (rateSearch)) 
                .map(el => ( <MovieCard {...el} key={el.title} />))}
            </div>            
        </div> 
    )
}

export default MovieList