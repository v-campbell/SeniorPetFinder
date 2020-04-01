import { connect } from "react-redux";
import Favorites from "./favorites";
import { requestFavorites, deleteFavorite } from "../../actions/favorite_actions";

const mapStateToProps = ({ entities, session }) => {
    return {
        userId: session.id,
        favorites: Object.values(entities.favorites) || []
    }
};

const mapDispatchToProps = (dispatch) => ({
    requestFavorites: (userId) => dispatch(requestFavorites(userId)),
    deleteFavorite: (userId, favoriteId) => dispatch(deleteFavorite(userId, favoriteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

