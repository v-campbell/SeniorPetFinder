import { connect } from 'react-redux';
import { getPet, adoptPet } from '../../actions/pet_actions';
import PetShow from './pet_show';

const mapStateToProps = (state, {match}) => ({
    pet: state.entities.pets[match.params.id]
});

const mapDispatchToProps = (dispatch) => ({
    getPet: id => dispatch(getPet(id)),
    adoptPet: id => dispatch(adoptPet(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PetShow);