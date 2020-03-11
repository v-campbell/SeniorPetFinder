import React from 'react';
import { Link } from 'react-router-dom';

export default class PetIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    // hoverText() {
    //     return(
    //         <div className='hover-text'>
    //             hover over
    //             <div>HOVERED</div>
    //         </div>
    //     )
    // }

    render() {
        // debugger
        const {pet} = this.props;
        if (!pet.photoUrls) return null;
        return (
            
            <div className='pet-index-item gradient'>
                <Link to={`/pets/${pet.id}`} className='pet-index-item-link'>
                    <div className='pet-index-image-container'>
                        <img src={this.props.pet.photoUrls[1]} className='pet-index-image'/>
                    </div>
                </Link>
                <div className='pet-index-item-text-1'>
                    <div>
                        <Link to={`/pets/${pet.id}`} className='pet-index-item-link'>
                            {pet.name}
                        </Link>
                    </div>
                    <div className='pet-index-item-text-2'>
                        <p>Age:  {pet.age}</p>  
                        <p>Sex:  {pet.sex}</p>  
                    </div>
                    <i className="far fa-heart fa-1x"></i>
                    {/* <i className="fas fa-heart fa-3x"></i> */}
                </div>

            </div>
        )
    }
}

