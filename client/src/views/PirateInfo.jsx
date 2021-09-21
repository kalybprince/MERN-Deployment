import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
    
const PirateInfo = (props) => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(res => setPirate(res.data))
            .catch(err => console.error(err));
    }, [pirate]);
    
    return (
        <div>
            <h1>{ pirate.name }</h1>
            <Link to="/pirates">Home</Link>
            <h2>About</h2>
            <img src={pirate.img}/>
            <h3>{ pirate.phrase }</h3>
            <p>Position: { pirate.position }</p>
            <p>Chests: { pirate.chests }</p>
            <div className="d-flex">
                <p className="me-2">Peg Leg:</p>
                {
                    (pirate.pegLeg === "true") ?
                    <p>Yes</p> :
                    <p>No</p>
                }
            </div>
            <div className="d-flex">
                <p className="me-2">Eye Patch:</p>
                {
                    (pirate.eyePatch === "true") ?
                    <p>Yes</p> :
                    <p>No</p>
                }
            </div>
            <div className="d-flex">
                <p className="me-2">Hook Hand: { pirate.hookHand }</p>
                {
                    (pirate.pegLeg === "true") ?
                    <p>Yes</p> :
                    <p>No</p>
                }
            </div>
        </div>
    )
}
    
export default PirateInfo;