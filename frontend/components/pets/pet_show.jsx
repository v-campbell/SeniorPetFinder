import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class PetShow extends React.Component {
    
    render() {
        const {pet} = this.props
        if (!pet) return null;
        return (
            <div className='petShow'>
                <div>{pet.name}</div>
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
}

export default PetShow;