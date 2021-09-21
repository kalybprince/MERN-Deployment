import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import PirateList from '../components/PirateList';
import axios from 'axios';
    
const Main = (props) => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res=>{
                setPirates(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[pirates]);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(res => console.log(pirates))
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <div>
                <h1>Pirate Crew</h1>
                <Link to="/pirate/new">Add pirate</Link>
            </div>
           {loaded && <PirateList pirates={pirates} deleteHandler={deleteHandler}/>}
        </div>
    )
}
    
export default Main;