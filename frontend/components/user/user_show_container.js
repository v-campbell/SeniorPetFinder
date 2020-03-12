import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
});

// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps, null)(UserShow);