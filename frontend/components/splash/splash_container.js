import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';


const mapStateToProps = (state) => ({
    // currentUser: Boolean(state.session.id)
    // currentUser: state.entities.users[state.session.id]
    // pets: Object.values(state.entities.pets),
    currentUser: state.session.id
});


const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    handleForm: (user) => dispatch(login(user)),
    // takes user to other form 
    // otherForm: (
    //     <button onClick={() => dispatch(openModal('SIGN UP'))}>
    //         SIGN UP
    //     </button>
    // ),
    // closeModal: () => dispatch(closeModal()),
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);

