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
                        {/* <div className='form-header'>{this.props.formType}?</div> */}

                        {this.props.formType === 'Adopt' ?
                            (<form onSubmit={this.handleSubmit} className='adopt-form-container'>
                                <div className='adopt-form'>
                                    <div className='adopt-form-header'>Are you ready for the best years of your life?</div>
                                    <br />
                                    {this.renderErrors()}
                                    <div className='adopt-form-subheader'>YEAH YOU ARE</div>
                                    <input type='submit' className='adopt-final-button' value={this.props.formType}/>
                                    {/* Want to unadopt? {this.props.otherForm} */}
                                    <br />
                                </div>
                            </form>) : (
                            <div className='unadopt-form'>
                                <form onSubmit={this.handleSubmit} className='unadopt-form-container'>
                                    <div className='unadopt-form-header'>Are you sure? :(</div>
                                    <br />
                                    {this.renderErrors()}
                                    <div className='unadopt-form-subheader'>BOOO YOU</div>
                                    <input type='submit' className='unadopt-final-button' value={this.props.formType}/>
                                    {/* Want to readopt? {this.props.otherForm} */}
                                </form>
                            </div>)
                        }
                    
            </div >
        );
    }
}

export default AdoptForm;