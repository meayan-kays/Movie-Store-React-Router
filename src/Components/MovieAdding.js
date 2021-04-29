import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { moviesData } from './MoviesData';
import '../Styles/MovieAdding.css'

const MovieAdding = ({addMovie}) => {
    const [showModal, setShowModal]= useState(false)
    const [title, setTitle] = useState("")
    const [posterURL, setPosterURL] = useState("")
    const [description, setDescription] = useState("")
    const [rating, setRating] = useState(0)
    let newID = moviesData.length + 1;

    const handleShow = () => {setShowModal(true)}
    const closeShow = () => {setShowModal(false)}

    const handleSubmit = () => {
        let newMovie = {
            id : newID,
            title : title,
            posterURL : posterURL,
            description : description,
            rating: rating
        };
        addMovie(newMovie)
        closeShow()
        setTitle("")
        setPosterURL("")
        setDescription("")
        setRating(0)
    }
       
    return (
        <div className="movie-add">
            <Button className="add-btn" variant="primary" onClick={handleShow}>
                New Movie Add
            </Button>
            <Modal  className="Modal" show={showModal} onHide={closeShow}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title" id="contained-modal-title-vcenter">Add New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="movie-details">
                            <label className="input">Title : </label>
                            <input type="text" name="title" value={title}
                                onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className="movie-details">
                            <label className="input">Poster URL : </label>
                            <input type="text" name="posterURL" value={posterURL}
                                onChange={(e) => setPosterURL(e.target.value)}/>
                        </div>
                        <div className="movie-details">
                            <label className="input">Description : </label>
                            <input type="text" name="description" value={description}
                                onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div className="movie-details">
                            <label className="input">Rating : </label>
                            <input type="text" name="rating" value={rating}
                                onChange={(e) => setRating(e.target.value)}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={closeShow} >Close</Button>
                    <Button variant="success" onClick={handleSubmit}>Submit</Button>
                 </Modal.Footer>
            </Modal>
        </div>
        
    )
}

export default MovieAdding