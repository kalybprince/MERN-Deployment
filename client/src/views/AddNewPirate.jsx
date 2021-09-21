import react from 'react';
import PirateForm from '../components/PirateForm';
import { Link } from 'react-router-dom';

const AddNewPirate = props => {
    return (
        <div>
            <h1>Add Pirate</h1>
            <Link to="/pirates">Crew Board</Link>
            <PirateForm />
        </div>
    )
}

export default AddNewPirate;