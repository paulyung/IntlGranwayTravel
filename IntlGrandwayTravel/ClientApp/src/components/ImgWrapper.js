import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ImgWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { hovered: false };
    }

    render() {
        return (
            <img
                src={this.props.data.profile_photo}
                alt={this.props.data.name}
                size="massive"
                avatar
                onClick={() => this.props.handleGallery(this.props.data.username)}
                onMouseOut={() => this.setState({ hovered: true })}
                onMouseOver={() => this.setState({ hovered: false })}
                style={{ transform: `${this.state.hovered ? 'scale(1.5,1.5)' : null}` }}
            />
        );
    }
}