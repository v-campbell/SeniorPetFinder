import React from "react";
import { Link, withRouter } from "react-router-dom";

class FavoriteIndexItem extends React.Component {
    render() {
        const { favorite, deleteFavorite, userId } = this.props;
        return (
            <div className="pet-index-item">
                    <section>
                        <button onClick={() => deleteFavorite(userId, favorite.id)}>Remove from favorited pets</button>
                    </section>
            </div>
        )
    }
}

export default withRouter(FavoriteIndexItem);
