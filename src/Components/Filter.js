import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import '../Styles/Filter.css'

const Filter = ({titleSearch, setTitleSearch, rateSearch, setRateSearch}) => {
    
    return (
        <div className="header">
            <h3>Movie Store</h3>
            <div className="filter">
                <div className="search">
                    <input
                        className="searchTitle"
                        type="text"  
                        placeholder="Search"
                        value={titleSearch}
                        onChange={(e) => setTitleSearch(e.target.value)}/>
                </div>
                <div className="searchRate">
                    <StarRatingComponent starCount={5} value={rateSearch} onStarClick={setRateSearch} emptyStarColor={"#fff"}/>
                </div>
            </div>
        </div> 
    )
}

export default Filter;