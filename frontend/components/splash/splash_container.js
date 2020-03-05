import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => ({
    // currentUser: Boolean(state.session.id)
    // currentUser: state.entities.users[state.session.id]
    currentUser: state.session.id
});

export default connect(mapStateToProps)(Splash);