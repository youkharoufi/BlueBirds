import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { deleteBird } from '../../Birds-State/birds-actions';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

export default function BirdCard({ bird }) {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleCloseModal = () => setShow(false);
    const handleShowModal = () => setShow(true);



    return ( 

        <>
        <Card style={{ width: '18rem', display: 'inline-block', marginRight: '10px', marginBottom: '10px' }}>
            <Card.Img variant="top" src={bird.photoURL} style={{width:'18rem', height:'15rem'}} />
            <Card.Body>
                <Card.Title>{bird.name}</Card.Title>
                <Card.Text>
                    Birds of this kind live in : {bird.geolocalization}
                </Card.Text>
                <Link to={`/update-bird/${bird.id}`} className="btn btn-primary" variant="primary">Update Info</Link>
                    <Button type="button" style={{ marginLeft: '10px' }} onClick={handleShowModal}>Delete Bird</Button>
            </Card.Body>
        </Card>



      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Bird Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this bird ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
                    <Button variant="primary" onClick={() => {
                        dispatch(deleteBird(bird.id));
                        setShow(false);
                    }}>
            Yes, delete
          </Button>
        </Modal.Footer>
            </Modal>

        </>

    );
}
