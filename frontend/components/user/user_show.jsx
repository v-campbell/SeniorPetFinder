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
            <div>
                user show page!
            </div>
        )
    }
}

export default UserShow;