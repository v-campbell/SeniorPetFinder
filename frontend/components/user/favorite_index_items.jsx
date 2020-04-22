import React from "react";
import { Link, withRouter } from "react-router-dom";

class FavoriteIndexItem extends React.Component {
    render() {
        const { favorite, deleteFavorite, userId } = this.props;
        return (
            <div className="pet-liked-item">
                    {/* <section>
                        <button onClick={() => deleteFavorite(userId, favorite.id)}>Remove from favorited pets</button>
                    </section> */}
                <Link to={`/pets/${favorite.pet_id}`} className='pet-index-item-link pet-liked-link'>
                    {/* <div className='pet-index-image-container'>
                        <img src={this.props.pet.photoUrls[0]} className='pet-index-image' />
                    </div> */}
                    <div>
                        {favorite.pet_name}
                    </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(FavoriteIndexItem);
