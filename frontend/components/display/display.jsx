import React from 'react';

class Mini extends React.Component {
    render() {
        return(
            <div className='photo-thumbnail'>
                <div>
                    {this.props.photos.map((photoUrl, i) => (
                        <img key={i} src={photoUrl}
                        onClick={() => this.props.selectTab(i)}
                        />))}
                </div>
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
            <div className='display'>
                <img src={this.props.photoUrls[this.state.selectedPhoto]}/>
                <Mini
                    selectedPhoto={this.state.selectedPhoto}
                    selectTab={this.selectTab}
                    photos={this.props.photoUrls}>
                </Mini>
            
            </div>
        )
    }
}