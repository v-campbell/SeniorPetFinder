import { receivePets, receivePet } from '../../actions/pet_actions';
import PetIndex from './pet_index';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    pets: Object.keys(state.entities.pets).map(key => state.entities.pets[key])
});

const mapDispatchToProps = (dispatch) => ({
    receivePets: () => dispatch(receivePets()),
    receivePet: id => dispatch(receivePet(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PetIndex);