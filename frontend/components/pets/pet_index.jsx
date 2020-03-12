import React from 'react';
import PetIndexItem from './pet_index_item';

class PetIndex extends React.Component {
    constructor(props) {
        super(props);
        this.maxId = 0;
        this.showMore = this.showMore.bind(this);
        this.state = { show_more: true };
    }

    componentDidMount() {
        this.props.getPets(this.maxId);
        window.scrollTo(0,0);
        this.maxId += 3;
    }

    showMore() {
        this.props.getPets(this.maxId)
            .then(action => {
                if (Object.values(action.pets).length < 3)
                    this.setState({ show_more: false });
            });
        this.maxId += 3
    }
    
    render() {
        const loadMore = this.state.show_more ? (
            <button
                className="load-more-button"
                onClick={this.showMore}
            >↓ MORE PETS ↓</button>
        ) : (null)
        // const {pets} = this.props;
        return (
            <div className='pet-index'>
                <h1>READY TO ADOPT?</h1>

                <div className='pet-grid'>
                    {this.props.pets.map(pet =>
                        <PetIndexItem
                            key={`pet${pet.id}`}
                            pet={pet}
                            id={pet.id}
                            photoUrls={pet.photoUrls}
                        // favoritePet={this.props.favoritePet}
                        // unfavoritePet={this.props.unfavoritePet} 
                        />
                    )}
                </div>
                <br/>
                {loadMore}
            </div>
        )
    }
}

export default PetIndex;
