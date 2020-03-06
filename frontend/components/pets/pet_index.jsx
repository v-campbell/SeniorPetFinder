import React from 'react';
import PetIndexItem from './pet_index_item';

const PetIndex = ({ pets }) => (
    <div> 
        <h1>Wow look at all these pets frmo pet_index</h1>
        {pets.map(pet => (
            <PetIndexItem pet={pet} key={pet.id} />
        ))}
    </div>
);

export default PetIndex;