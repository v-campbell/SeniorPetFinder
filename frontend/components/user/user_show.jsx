import React from 'react';

class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className='user-show'>
                <div>Your Adopted Dogs!</div>
                
            </div>
        )
    }
}

export default UserShow;