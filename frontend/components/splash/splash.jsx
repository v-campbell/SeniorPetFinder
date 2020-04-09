import React from 'react';
import PetIndexContainer from '../pets/pet_index_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: ''
        };
        this.handleDemo = this.handleDemo.bind(this);
        this.loggedOutHome = this.loggedOutHome.bind(this);
        this.loggedInHome = this.loggedInHome.bind(this);
    }

    handleDemo(e, speed = 50) {
        e.preventDefault();
        const user = { username: 'Hachikō', password: 'password' };
        let { username, password } = user;
        if (this.state.username !== username) {
            const inputUser = setInterval(() => {
                if (this.state.username !== username) {
                    const temp = username.slice(0, this.state.username.length + 1);
                    this.setState({ username: temp });
                } else {
                    clearInterval(inputUser);
                    animatePassword();
                }
            }, speed);
        }

        const animatePassword = () => {
            const inputPassword = setInterval(() => {
                if (this.state.password !== password)
                    this.setState({
                        password: password.slice(0, this.state.password.length + 1),
                    });
                else {
                    clearInterval(inputPassword);
                    login();
                }
            }, speed);
        };
        const login = () => {
            this.props.login(this.state);
            this.setState({ username: "", password: "" });
        };
    }

    loggedOutHome() {
        return(
            <div>
                <h1 className='splash-text splash-text-logged-out'>
                    Find your new
                <br />
                (old) best friend.
                <br />
                <br />
                <button onClick={this.handleDemo} className='splash-demo'> 
                    DEMO
                    <i className="fas fa-arrow-right"></i>
                </button>
                </h1>
                <img className='gray' src={window.grayURL} />
            </div>
        )
    }
    
    loggedInHome() {
        return (
            <div>
                <div className='splash-greeting'>
                    <img className='pirate' src={window.pirateURL} />
                    <div className='splash-text'>
                        Meet Russell.
                    <div className='splash-subtext'>
                            He only has eye for you
                    </div>
                        {/* make into a link to Russell's show page */}
                        <br />
                        {/* <i className="fas fa-arrow-right"></i> */}
                    </div>
                </div>
            </div>
        )
    }

    render() {
    return (
        <div>
            {this.props.currentUser ? this.loggedInHome() : this.loggedOutHome()}

            <div className='splash-services-box'>
                <h1>HOW IT WORKS</h1>
                <hr />
                <div className='splash-services'>
                    <div className='services-pets'>
                        {/* <img src={window.oldLogoURL} width='50px' height='50px' /> */}
                        <i className="fas fa-dog fa-3x"></i>
                        <br />
                        <br />
                            Browse pets from ages 7+
                    </div>
                    <div className='services-favorites'>
                        <img src={window.pawHeartURL} width='50px' height='50px' />
                        <br />
                        <br />
                            Log in to add good girls and boys to your favorites list
                    </div>
                    <div className='services-brain'>
                        <i className="fas fa-lightbulb fa-3x"></i>
                        <br />
                        <br />
                            Stay awake thinking about the fact that your parents are getting older and happiness is temporary, just like everything else
                    </div>
                    <div className='services-adopt'>
                        <img src={window.handHoldURL} width='50px' height='50px' />
                        <br />
                        <br />
                            Adopt a senior pet(s) and welcome them into their forever home!
                    </div>
                </div>
            </div>

            <div className='index-display'>
                <PetIndexContainer />
            </div>
        </div>
    )
    }
}

export default Splash;