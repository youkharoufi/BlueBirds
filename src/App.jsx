import Nav from './Components/Shared/Nav';
import Home from './Components/Shared/Home';
import BirdList from './Components/Birds/BirdList';
import AddBird from './Components/Birds/AddBird';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Routes, Route } from 'react-router-dom';
import UpdateBird from './Components/Birds/UpdateBird';
import { getAllBirds } from './Birds-State/birds-actions';

function App() {


    const [showForm, setShowForm] = useState(false);




  return (

      <>

          <Nav setShowForm={setShowForm} />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/birds-list" element={<BirdList showForm={showForm} setShowForm={setShowForm} />} />
              <Route path="/add-bird" element={<AddBird setShowForm={setShowForm} />} />
              <Route path={"/update-bird/:id"} element={<UpdateBird/>} />
          </Routes>


      </>

  );
}

export default App;
