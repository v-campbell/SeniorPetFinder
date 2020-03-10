import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import AdoptContainer from '../pets/adopt_container';
import UnadoptContainer from '../pets/unadopt_container';

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
        case 'ADOPT':
            component=<AdoptContainer />;
            break;
        case 'UNADOPT':
            component=<UnadoptContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className='modal-parent'>   
            <div className='modal-bg' onClick={closeModal}></div>
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
