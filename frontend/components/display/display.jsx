import React from 'react';

class Mini extends React.Component {
    render() {
        return(
            <div className='photo-thumbnail'>
                {this.props.photos.map((photoUrl, i) => (
                    <img key={i} src={photoUrl}
                    onClick={() => this.props.selectTab(i)}
                    className={this.props.selected === i ? "" : "not-selected-photo"}
                    />))}
            </div>
        )
    }
}

export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPhoto: 0
        };
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(i) {
        this.setState({selectedPhoto: i});
    }

    render() {
        return(
            <div className='photo-main'>
                <div className='main-image-container'>
                    <img src={this.props.photoUrls[this.state.selectedPhoto]}/>
                </div>
                <Mini
                    selected={this.state.selectedPhoto}
                    selectTab={this.selectTab}
                    photos={this.props.photoUrls}>
                </Mini>
            
            </div>
        )
    }
}