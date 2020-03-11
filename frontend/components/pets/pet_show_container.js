import { connect } from 'react-redux';
import { getPet, adoptPet } from '../../actions/pet_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PetShow from './pet_show';


const mapStateToProps = (state, ownProps) => ({
    pet: state.entities.pets[parseInt(ownProps.location.pathname.split('/')[2])],
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    getPet: id => dispatch(getPet(id)),
    adoptPet: id => dispatch(adoptPet(id)),
    openModal: modal => dispatch(openModal(modal))

});

export default connect(mapStateToProps, mapDispatchToProps)(PetShow);