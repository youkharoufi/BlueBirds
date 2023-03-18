import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Register from '../Users/Register';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { register } from '../../User-State/user-actions';

export default function Nav({ setShowForm }) {

    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false);

    const initialRegValues = {

        userName: '',
        email: '',
        password: '',
        confirmPassword:'',
        role:''
    }

    const [registerValues, setRegisterValues] = useState(initialRegValues);
    const [regFormErrors, setRegFormErrors] = useState({});
    const [ro, setRo] = useState('');

    function validate() {
        const errors = {};

        const EmailRegExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

        if (!EmailRegExp.test(registerValues.email)) {
            errors.email = "Email format is incorrect";
        }
        if (!registerValues.email) {
            errors.email = "Email is required"
        }
        if (!registerValues.userName) {
            errors.name = "Name is required"
        }
        if (!registerValues.password) {
            errors.password = "Password is required"
        }
        if (registerValues.password != registerValues.confirmPassword) {
            errors.confirmPassword = "Password confirmation should match the password"
        }
        if (!registerValues.role) {
            errors.role = "Role is required";
        }

        return errors

    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setRegisterValues({ ...registerValues, [name]: value });
    };

    function handleRegistration() {

        //event.preventDefault();

        registerValues.role = ro;

        setRegFormErrors(validate());


        while (regFormErrors.length > 0) {
            setShowModal(true);
            return;
        }
        dispatch(register(registerValues)).then(() => {
            setShowModal(false);
        });


        //setShowModal(false);
        
        
    }

    return (
        <>
        <nav className="navbar" style={{ background:'linear-gradient(to right, pink,  cyan, purple)' }}>
            <div className="container-fluid">
                <img src="/assets/logo.webp" style={{ borderRadius: '50%', width: '70px', height: 'auto' }} />

                <div id="navbarNav" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection:'row' }}>


                    <NavLink to="/" className="btn btn-info" style={{ marginRight: '10px' }}>Home</NavLink>

                    <NavLink to="/birds-list" className="btn btn-info">Birds List</NavLink>

                    <button onClick={() => { setShowForm(true) }} className="btn btn-info" style={{ marginLeft: '10px' }} >Add Bird</button>

                    <Button type="button" onClick={()=>setShowModal(true)} style={{ marginLeft: '10px' }}>Register</Button>

                </div>
            </div>
        </nav>


            <Modal show={showModal} onHide={() => setShowModal(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3 col-xs-5" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={registerValues.email} onChange={handleInputChange } />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <span style={{ color: 'red' }}>{regFormErrors?.email}</span>

                        <Form.Group className="mb-3 col-xs-5">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="userName" value={registerValues.userName} onChange={handleInputChange} />
                        </Form.Group>
                        <span style={{ color: 'red' }}>{regFormErrors?.userName}</span>

                        <Form.Group className="mb-3 col-xs-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={registerValues.password} onChange={handleInputChange} />
                        </Form.Group>
                        <span style={{ color: 'red' }}>{regFormErrors?.password}</span>


                        <Form.Group className="mb-3 col-xs-5" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="confirmPassword" value={registerValues.confirmPassword} onChange={handleInputChange} />
                        </Form.Group>
                        <span style={{ color: 'red' }}>{regFormErrors?.confirmPassword}</span>


                        <Form.Select aria-label="Default select example" value={ro} onChange={(e: any) => setRo(e.currentTarget.value)}>
                            <option>Open this select menu</option>
                            <option value="Admin">Admin</option>
                            <option value="Member">Member</option>
                        </Form.Select>
                        <span style={{ color: 'red' }}>{regFormErrors?.role}</span>


                        <Button variant="primary" onClick={()=>handleRegistration()} type="button">
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>

    );
}
