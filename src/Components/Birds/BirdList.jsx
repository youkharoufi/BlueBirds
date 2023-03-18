import React, { useEffect } from 'react';
import { deleteBird, getAllBirds } from '../../Birds-State/birds-actions';
import { useDispatch, useSelector } from 'react-redux';
import BirdCard from './BirdCard';
import AddBird from './AddBird';

export default function BirdList({ showForm, setShowForm }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBirds());
    }, []);


    const { birds } = useSelector(state => state.bird);


    return (


        <>
            <h1>List of all the birds : </h1>

            <div className="row">

                <div className="col-7">
                    {birds && birds.map((bird, item) => (

                        <BirdCard key={item} bird={bird} />


                    ))}

                </div>

                <div className="col-3">
                    {showForm &&
                        <AddBird setShowForm={setShowForm} />
                    }

                </div>


            </div>
            

            




        </>

    );
}