import React from 'react';
import { Link } from 'react-router-dom';
// import { ProtectedRoute } from '../../util/route_util';

class PetShow extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.getPet(this.props.match.params.id)
    }

    render() {
        const {pet} = this.props;
        if (!pet) return null;
        return(
            <div className='petShow'>
                <div>{pet.name}</div>
                <Link to="/pets">VIEW ALL PETS</Link>
                {/* <img src=`url_for(${pet.photo}) alt=""/> */}
                <img src={window.tennisURL} width='50%' height='50%' />
                <ul>
                    <li>{pet.breed}</li>
                    <li>{pet.age}</li>
                    <li>{pet.sex}</li>
                    <li>{pet.about}</li>
                    <li>{pet.size}</li>
                </ul>
                {/* <button onClick={favoriteButtonAction}>{favoriteButtonText}</button> */ }
            </div>
        );
    }

}
 
export default PetShow;