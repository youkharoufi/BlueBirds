import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBird, getAllBirds } from '../../Birds-State/birds-actions';
import { v4 as uuid } from 'uuid'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
 
export default function AddBird({setShowForm}) {


    const initialValues = {

        id: '',
        name: '',
        geolocalization: '',
        photoFile:''
    }

    const [values, setValues] = useState(initialValues);
    const [selectedFile, setSelectedFile] = useState(undefined);
    const [geo, setGeo] = useState(undefined);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    function toggleShow() {
        setShow(false)
    }


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };


    function handleSubmit() {
        values.id = uuid();


        const formData = new FormData();

        formData.append('photoFile', selectedFile);
        formData.append('name', values.name);
        formData.append('id', values.id);
        formData.append('geolocalization', geo);


        console.log(values);
        console.log(selectedFile);


        dispatch(createBird(formData));
        setShow(true);
        setTimeout(() => {

            setShowForm(false);

        }, 4000);
    }

    return (
        
        <>
            <Form>


                <Form.Group>
                    <Form.Label>Bird Name</Form.Label>
                    <Form.Control type="text" className="form-control" name="name" id="name" value={values.name} onChange={handleInputChange} />
                </Form.Group>

                    
                <br></br>
                <Form.Group>
                <Form.Label>Geolocalization</Form.Label>
                    <Form.Select aria-label="Default select example" value={geo} onChange={(e: any) => setGeo(e.currentTarget.value)}>
                        <option>Select an option</option>
                        <option value="Forest">Forest</option>
                        <option value="Desert">Desert</option>
                        <option value="Mountains">Montains</option>
                        <option value="Jungle">Jungle</option>
                        <option value="Savana">Savana</option>
                        </Form.Select>
                </Form.Group>
                    <br></br>


                <Form.Group>
                <Form.Label>Bird photo</Form.Label>
                    <Form.Control type="file" className="form-control" label="photo" name="photoFile" onChange={changeHandler} />
                    </Form.Group>
                    <br></br>

                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                </Button>

                    <Button style={{ display: 'inline', marginLeft: '7px' }} onClick={()=>setShowForm(false)}>Hide Form</Button>


            </Form>

            <div style={{ position: "absolute", top: 0, right: 0, zIndex: 9999, float: "right" }}>
            <Toast show={show} delay={3000} autohide onClose={toggleShow}>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Important Message</strong>
                    <small>Now</small>
                </Toast.Header>
                <Toast.Body>You have created a new Bird !</Toast.Body>
                </Toast>
            </div>
                

        </>
        


        

    );
}
