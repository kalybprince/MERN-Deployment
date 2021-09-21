import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';


export default () => {
    const [name, setName] = useState(""); 
    const [img, setImg] = useState("");
    const [chests, setChests] = useState(0);
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [validState, setValidState] = useState({})
    const history = useHistory();
    const [nameErr, setNameErr] = useState();
    const [imgErr, setImgErr] = useState();
    const [chestsErr, setChestsErr] = useState();
    const [phraseErr, setPhraseErr] = useState();
    const [positionErr, setPositionErr] = useState();
    
    
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/pirates', {
            name,
            img,
            chests,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(res=>history.push('/pirate/' + res.data))
            .catch(err => {
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                };
                setValidState(errorObj)
            })
        

        if(name.length == 0){
            setNameErr("Name must be included");
        }
        if(img.length == 0){
            setImgErr("Image must be included");
        }
        if(chests.length < 0){
            setChestsErr("Chests must be positive");
        }
        if(phrase.length == 0){
            setPhraseErr("A phrase must be included");
        }
        if(phrase.length == 0){
            setPositionErr("A position must be included");
        }
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Pirate name:</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            {
                (validState.name) ? 
                <p style={{color:"red"}}>{validState.name}</p> : null 
            }
            {
                (nameErr) ? 
                <p style={{color:"red"}}>{nameErr}</p> : null 
            }
            <p>
                <label>Image URL:</label><br/>
                <input type="text" onChange={(e)=>setImg(e.target.value)} value={img}/>
            </p>
            {
                (validState.img) ? <p style={{color:"red"}}>{validState.img}</p> : null 
            }
            {
                (imgErr) ? 
                <p style={{color:"red"}}>{imgErr}</p> : null 
            }
            <p>
                <label># of Treasure Chests:</label><br/>
                <input type="number" onChange={(e)=>setChests(e.target.value)} value={chests}/>
            </p>
            {
                (validState.chests) ? <p style={{color:"red"}}>{validState.chests}</p> : null 
            }
            {
                (chestsErr) ? 
                <p style={{color:"red"}}>{chestsErr}</p> : null 
            }
            <p>
                <label>Pirate Catch Phrase:</label><br/>
                <input type="text" onChange={(e)=>setPhrase(e.target.value)} value={phrase}/>
            </p>
            {
                (validState.phrase) ? <p style={{color:"red"}}>{validState.phrase}</p> : null 
            }
            {
                (phraseErr) ? 
                <p style={{color:"red"}}>{phraseErr}</p> : null 
            }
            <p>
                <label>Position:</label><br/>
                <select onChange={(e)=>setPosition(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Captain">Captain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
            </p>
            {
                (validState.position) ? <p style={{color:"red"}}>{validState.position}</p> : null 
            }
            {
                (positionErr) ? 
                <p style={{color:"red"}}>{positionErr}</p> : null 
            }

            <p>
                <input
                    name="pegLeg"
                    type="checkbox"
                    checked={pegLeg}
                    onChange={(e)=>setPegLeg(!pegLeg)} />
                <label>Peg Leg</label>
            </p>
            <p>
                <input
                    name="eyePatch"
                    type="checkbox"
                    checked={eyePatch}
                    onChange={(e)=>setEyePatch(!eyePatch)} />
                <label>Eye Patch</label>
            </p>
            <p>
                <input
                    name="hookHand"
                    type="checkbox"
                    checked={hookHand}
                    onChange={(e)=>setHookHand(!hookHand)} />
                <label>Hook Hand</label>
            </p>
            <input type="submit"/>
        </form>
    )
}