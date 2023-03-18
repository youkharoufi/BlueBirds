import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { updateBird } from '../../Birds-State/birds-actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function UpdateBird() {

    const match = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const bird  = useSelector(state => state.bird.birds.find(i => i.id === match.id));

    console.log(bird);

    const initialValues = bird;

    const [values, setValues] = useState(initialValues);
    const [selectedFile, setSelectedFile] = useState();
    const [geo, setGeo] = useState(values.geolocalization);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);

    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    async function handleSubmit()
    {
        const formData = new FormData();
        formData.append('id', bird.id);
        formData.append('name', values.name);
        formData.append('geolocalization', geo);
        formData.append('photoFile', selectedFile);

        await dispatch(updateBird(formData));
        navigate('/birds-list');

    }



    return (
        <>

            <h1>Update Bird Info</h1>

            <br></br>
            <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '40%' }}>

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
                        <Form.Control type="file" className="form-control" name="photoFile" label="photo" onChange={changeHandler} />
                    </Form.Group>
                    <br></br>

                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>



                </Form>


            </div>
            

        </>


    );
}
