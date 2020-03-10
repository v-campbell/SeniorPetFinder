import React from 'react';

class AdoptForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adopted_by: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // const id = Object.assign({}, this.state);
        // const id = currentUser.id
        // this.props.handleForm(this.props.currentUserId)
        this.props.handleForm(this.props.pet.id)
            .then(() => (this.props.closeModal()))
    }

    renderErrors() {
        return (
            <ul className="errorBox">
                {this.props.errors.map((error, i) => (
                    <li className='errors' key={`error- ${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    render() {
        // debugger
        return(
            <div>
                <div onClick={this.props.closeModal} className='close-x'>×</div>
                    <form onSubmit={this.handleSubmit} className='form-container'>
                        <div className='form-header'>{this.props.formType}!</div>

                        {this.props.formType === 'Adopt' ?
                            (<div className='adoptForm'>
                                <br />
                                {this.renderErrors()}
                                CONGRATS BIG DECISION
                                <input type='submit' className='final-button' value={this.props.formType}/>
                                Want to unadopt? {this.props.otherForm}
                                <br />
                            </div>) : (<div>
                                <br />
                                {this.renderErrors()}
                                BOOO YOU
                                <div className='bottom-modal-buttons'>
                                    Want to readopt? {this.props.otherForm}
                                </div>
                            </div>)
                        }
                    </form>
            </div >
        );
    }
}

export default AdoptForm;