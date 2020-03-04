import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => ({
        errors: state.errors.sessionErrors,
        formType: 'SIGN UP',
});

const mapDispatchToProps = dispatch => ({
        handleForm: (user) => dispatch(signup(user)),
        // takes user to other form 
        otherForm: (
        <button onClick={() => dispatch(openModal('LOG IN'))}>
                LOG IN
        </button>
        ),
        closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
