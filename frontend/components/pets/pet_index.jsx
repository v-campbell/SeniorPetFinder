import React from 'react';
import PetIndexItem from './pet_index_item';

class PetIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPets();
    }

    render() {
        // const {pets} = this.props;
        return (
            <div className='petGrid'>
                
                {this.props.pets.map(pet => (
                        <PetIndexItem
                            key={`pet${pet.id}`}
                            pet={pet}
                            id={pet.id}
                            // favoritePet={this.props.favoritePet}
                            // unfavoritePet={this.props.unfavoritePet} 
                        />
                        )
                    )
                }
            </div>
        )
    }
}

export default PetIndex;
