import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case 'LOG IN':
            component = <LoginFormContainer />;
            break;
        case 'SIGN UP':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-bg' onClick={closeModal}>
            <div className='modal-kid' onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );

}
const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
