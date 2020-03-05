import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = (state) => ({
    errors: state.errors.sessionErrors,
    formType: 'Log In',
});

const mapDispatchToProps = (dispatch) => ({
    handleForm: (user) => dispatch(login(user)),
    // takes user to other form 
    otherForm: (
        <button onClick={() => dispatch(openModal('SIGN UP'))}>
            SIGN UP
        </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

