import React from 'react';
import PetIndexItem from '../pets/pet_index_item';

class AdoptedPets extends React.Component {

    componentDidMount() {
        this.props.getUserPets(this.props.currentUserId);
    }

    render() {
        if (!this.props.currentUserId) return null;

        const adoptedOrNot = this.props.pets.length > 0 ? (
            this.props.pets.map(pet =>
                <PetIndexItem
                    pet={pet}
                    key={pet.id}
                    photoUrls={pet.photoUrls}
                    className='adopted-pet-grid-item'
                />
            )) : (
                // <div> You haven't adoped any pets yet. render link to show page </div>   
                null                 
            )

        return (
            <div className='adopted-pet-grid'>
                {adoptedOrNot}
            </div>
        )
    }
}

export default AdoptedPets;