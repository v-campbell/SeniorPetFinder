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
        return(
            <div>
                <div onClick={this.props.closeModal} className='close-x'>×</div>
                        {this.props.formType === 'Adopt' ?
                            (<form onSubmit={this.handleSubmit} className='adopt-form-container'>
                                <div className='adopt-form'>
                            <div className='adopt-form-header'>
                                Are you ready for the best years of your life?
                                <br/>
                                <br/>
                                🎉
                            </div>
                                    <br />
                                    <br />
                                    {this.renderErrors()}
                                    <div className='adopt-form-subheader'>YEAH YOU ARE.</div>
                                    <input type='submit' className='adopt-final-button' value={this.props.formType}/>
                                    <br />
                                </div>
                            </form>) : (
                            <div className='unadopt-form'>
                                <form onSubmit={this.handleSubmit} className='unadopt-form-container'>
                                    <div className='unadopt-form-header-1'>Are you sure? :(</div>
                                    <br />
                                    {this.renderErrors()}
                                    {/* <div className='unadopt-form-subheader'>IT'S NOT TOO LATE TO CHANGE YOUR MIND</div> */}
                                    <br/>
                                    <br/>
                                    <div>You don't have to do this...</div>
                                    <div>look at this face one more time.</div>
                                    <br/>
                                    <img src={this.props.pet.photoUrls[0]} className='unadopt-image' />
                                    <div className='unadopt-form-subheader'>"I'll miss you so much." - {this.props.pet.name}</div>

                                    <marquee behavior="alternate" direction="">
                                        <input type='submit' className='unadopt-final-button' value={this.props.formType} />

                                        {/* <div className='unadopt-button-section'> */}
                                        {/* <div>
                                            <div onClick={this.props.closeModal} className='unadopt-x'>×</div>
                                            <div onClick={this.props.closeModal} className='unadopt-x'>×</div>
                                            <div onClick={this.props.closeModal} className='unadopt-x'>×</div>
                                            <div onClick={this.props.closeModal} className='unadopt-x'>×</div>
                                        </div> */}
                                            {/* <input type='submit' className='unadopt-final-button' value={this.props.formType}/> */}
                                        {/* <div>
                                            <div onClick={this.props.closeModal} className='unadopt-x'>×</div>
                                            <div onClick={this.props.closeModal} className='unadopt-x'>×</div>
                                            <div onClick={this.props.closeModal} className='unadopt-x'>×</div>
                                            <div onClick={this.props.closeModal} className='unadopt-x'>×</div>
                                        </div> */}
                                        {/* </div> */}
                                    </marquee>
                                </form>
                            </div>)
                        }
                    
            </div >
        );
    }
}

export default AdoptForm;