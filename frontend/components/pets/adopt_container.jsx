import React from 'react';
import { connect } from 'react-redux';
import { adoptPet, clearErrors } from '../../actions/pet_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import AdoptForm from './adopt_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // currentUserId: state.session.id,
        pet: state.entities.pets[ownProps.match.params.id],
        errors: state.errors.sessionErrors,
        formType: 'Adopt'
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleForm: (id) => dispatch(adoptPet(id)),
    // takes user to other form 
    otherForm: (
        <button onClick={() => dispatch(openModal('UNADOPT'))}>
            Unadooopt
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdoptForm));

