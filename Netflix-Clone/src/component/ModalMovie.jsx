import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
export default function ModalMovie({ movies, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movies.id}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p> Release date : {movies.release_date}</p>
      </Modal.Body>
      <Form style={{ margin: '10px' }}>
        <Form.Label>Add Comment</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your comment with anyone else.
        </Form.Text>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleClose}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  )
}