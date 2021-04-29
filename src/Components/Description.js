import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import "../Styles/Description.scss";
import { Modal } from 'react-bootstrap'


const Description = (props) => {
  const id = props.match.params.id;
  const movieDescription = props.movies.find((el) => el.id == id);
  let history = useHistory();
  const [showModal, setShowModal]= useState(false)

  const handleClick = () => {
    return history.goBack();
  };

  const handleShow = () => {setShowModal(true)}
  const closeShow = () => {setShowModal(false)}
  
  //const cardStyle = {display: "flex", flexDirection: "row",
  //justifyContent: "center", height: "400px",width: "800px",background: "transparent", }
  return (
    <div className="description-card">
      <div className="description-card-left">
        <img src={movieDescription.posterURL} alt="Movie Poster"/>
      </div>
      <div className="description-card-right">
        <h1>{movieDescription.title}</h1>
        <div className="description-card-right__details">
          <ul>
            <li>Year</li>
            <li>Duration</li>
            <li>Genre</li>
          </ul>
          <div className="description-card-right__rating">
            <StarRatingComponent className="description-card-right__rating__stars" emptyStarColor={"#fff"} value={movieDescription.rating} /> 
          </div>
          <div className="description-card-right__review">
            <p>{movieDescription.description}</p>
            <a
              href="#"
              target="_blank">
              Read more
            </a>
          </div>
          <div className="description-card-right__button">
            <button className="movie-trailer" onClick={handleShow}>
              WATCH TRAILER 
            </button>
            <Modal  className="Modal"show={showModal} onHide={closeShow}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                  <Modal.Title className="modal-title" id="contained-modal-title-vcenter">Have Nice Watch</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <iframe width="470" height="325" src={movieDescription.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal.Body>
            </Modal>
            <button onClick={handleClick}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
