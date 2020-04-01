import { connect } from 'react-redux';
import { getPet, adoptPet } from '../../actions/pet_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { deleteFavorite, createFavorite, requestFavorites } from "../../actions/favorite_actions"

import PetShow from './pet_show';


const mapStateToProps = ({ entities, session }, ownProps) => {
    
    let pet = entities.pets[parseInt(ownProps.location.pathname.split('/')[2])];
    
    // let favorited = false;
    // Object.values(entities.favorites).forEach((favorite) => {
    //     if (favorite["pet_id"] === pet.id) (favorited = true);
    // })

    return {
        // pet: entities.pets[ownProps.match.params.petId],
        pet: pet,
        userId: session.id,
        currentUser: entities.users[session.id],
        favorites: Object.values(entities.favorites) || [],
        // favorited: favorited,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getPet: id => dispatch(getPet(id)),
    adoptPet: id => dispatch(adoptPet(id)),
    openModal: modal => dispatch(openModal(modal)),
    requestFavorites: userId => dispatch(requestFavorites(userId)),
    deleteFavorite: (userId, favoriteId) => dispatch(deleteFavorite(userId, favoriteId)),
    createFavorite: (formData, userId) => dispatch(createFavorite(formData, userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetShow);