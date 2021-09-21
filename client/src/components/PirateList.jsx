import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';

const PirateList = (props) => {
    const history = useHistory();

    return (
        <div>
            {props.pirates.map( (pirate, i) =>
                <div>
                    <img src={pirate.img}/>
                    <div key={i}>{pirate.name}</div>
                    <button type="submit" onClick={()=>history.push('/pirate/' + pirate._id)}>View Pirate</button>
                    <button type="submit" onClick={()=>props.deleteHandler(pirate._id)}>Walk the Plank</button>
                </div>
            )}
        </div>
    )
}
    
export default PirateList;