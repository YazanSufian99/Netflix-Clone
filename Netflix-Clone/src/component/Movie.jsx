import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import React from 'react';
import {useState} from 'react';
export default function Movie({movies}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  
    return(
        <div key={movies.id}>
              <Card style={{ width: '18rem', padding:"10px ", margin:"15px " }}>
                <Card.Img variant="top" src={movies.poster_path} />
                <Card.Body>
                  <Card.Title style={{ color: 'lightblue' }}>{movies.id}</Card.Title>
                  <Card.Text style={{ fontFamily: 'cursive', letterSpacing: '1px' }}>
                    {movies.overview}.
                  </Card.Text>
                  <Card.Subtitle>
                    {movies.release_date}
                  </Card.Subtitle>
                  
                  <Button variant="primary" onClick={handleShow}>Add to favorite</Button>
                </Card.Body>
              </Card>

              <ModalMovie movies={movies} show={show} handleClose={handleClose} />
            </div>
    )
}