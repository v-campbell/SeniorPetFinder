import React from 'react';
import { connect } from 'react-redux';
import { unadoptPet, clearErrors } from '../../actions/pet_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import AdoptForm from './adopt_form';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    pet: state.entities.pets[parseInt(ownProps.location.pathname.split('/')[2])],
    errors: state.errors.sessionErrors,
    formType: 'Unadopt',
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (id) => dispatch(unadoptPet(id)),
    // takes user to other form 
    otherForm: (
        <button onClick={() => dispatch(openModal('ADOPT'))}>
            Adooopt
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdoptForm));

