import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.fillDemo = this.fillDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.handleForm(user)
        .then(() => (this.props.closeModal()))
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <div className='errors' key={`error- ${i}`}>
                        {error}
                    </div>
                ))}
            </ul>
        );
    }

    fillDemo(e) {
        e.preventDefault();
        this.props.handleForm({ username: 'definitelynotadog', password: 'password' })
        .then(() => (this.props.closeModal()))
    }

    render() {
        return(
            <div className='form-container'>
                <div onClick={this.props.closeModal} className='close-x'>×</div>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <div className='form-head'>{this.props.formType}</div>

                    {this.props.formType === 'SIGN UP' ? 
                        ( <>
                            <br/>
                            <label>FirstName*
                                <input type='text' className='input' value={this.state.firstName} autoFocus="autoFocus" onChange={this.update('first_name')} />
                            </label>
                            <br/>
                            <label>LastName*
                                <input type='text' className='input' value={this.state.lastName} onChange={this.update('last_name')} />
                            </label>
                            <br/>
                            <label>Email*
                                <input type='email' className='input' value={this.state.email} onChange={this.update('email')} />
                            </label>
                            <br />
                            <label>Username {this.props.formType === 'SIGN UP' ? (<>*</>) : ''}
                                <input type='text' className='input' value={this.state.username} onChange={this.update('username')} />
                            </label>
                            <br />
                            <label>Password{this.props.formType === 'SIGN UP' ? (<>* - minimum 6 characters</>) : ''}
                                <input type='password' className='input' value={this.state.password} onChange={this.update('password')} />
                            </label>
                            <br />
                            <input type='submit' className='final-button' value={this.props.formType} />
                            <br />
                            Already have an account?
                            {this.props.otherForm}
                            </>

                        ) : ( <>
                            <br />
                            <label>Username {this.props.formType === 'SIGN UP' ? (<>*</>) : ''}
                                <input type='text' className='input' value={this.state.username} autoFocus="autoFocus" onChange={this.update('username')} />
                            </label>
                            <br />
                            <label>Password{this.props.formType === 'SIGN UP' ? (<>* - minimum 6 characters</>) : ''}
                                <input type='password' className='input' value={this.state.password} onChange={this.update('password')} />
                            </label>
                            <br />
                            <input type='submit' className='final-button' value={this.props.formType} />
                            <br />
                            Don't have an account?
                            <br />
                            {this.props.otherForm}
                            <br />
                            <div className='demo-button-container'>
                                Don't have an account + too lazy to create one?
                                <button className='demo-button' onClick={this.fillDemo}>
                                    DEMO USER
                                </button>
                            </div>
                        </>)
                    }

                </form>
            </div>
        );
    }
}

export default LoginForm;