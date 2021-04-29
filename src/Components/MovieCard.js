import React from 'react'
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'
import '../Styles/MovieCard.css'

const MovieCard = (props) => {

    return (
        <div>
            <Link className="to-description" to={`description/${props.id}`}>
            <Card className="movie-card-container" >
                <CardImg className="movie-poster" src={props.posterURL} alt="{props.title}" />
                              
                <CardBody className="movie-infos">
                    <StarRatingComponent className="movie-rating" emptyStarColor={"#fff"} value={props.rating} />
                    <CardTitle tag="h6">{props.title}</CardTitle>
                </CardBody>
            </Card>
            </Link>
        </div>
    )
}

export default MovieCard