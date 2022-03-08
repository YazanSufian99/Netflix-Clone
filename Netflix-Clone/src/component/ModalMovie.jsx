import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalMovie({movies,show,handleClose}){
    return(
        <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movies.id}</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p> Release date : {movies.release_date}</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary"  onClick={handleClose}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    )
}