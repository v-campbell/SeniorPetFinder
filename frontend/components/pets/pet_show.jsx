import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

export default ({pet}) => {
    if (!pet) return null;

    return (
        <div className='petShow'>
            <div>{this.props.pet.name}</div>
            <Link to="/pets">VIEW ALL PETS</Link>
            <ul>
                <li>{pet.breed}</li>
                <li>{pet.age}</li>
                <li>{pet.sex}</li>
                <li>{pet.size}</li>
                <li>{pet.about}</li>
            </ul>
            {/* <button onClick={favoriteButtonAction}>{favoriteButtonText}</button> */}
        </div>
    );
}