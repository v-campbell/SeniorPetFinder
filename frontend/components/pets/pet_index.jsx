import React from 'react';
import PetIndexItem from './pet_index_item';

class PetIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPets();
        window.scrollTo(0,0);
    }

    render() {
        // const {pets} = this.props;
        return (
            <div>
                <div className='pet-index-header'>
                    
                </div>

                <div className='petGrid'>
                    {this.props.pets.map(pet =>
                        <PetIndexItem
                            key={`pet${pet.id}`}
                            pet={pet}
                            id={pet.id}
                            // favoritePet={this.props.favoritePet}
                            // unfavoritePet={this.props.unfavoritePet} 
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default PetIndex;
