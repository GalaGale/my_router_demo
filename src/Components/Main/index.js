import React, { Component } from 'react';
import ShareFacebook from '../Sharefacebook';

import './style.less'

class Main extends Component {
    render() {
        return (
            <div className="main-page">
                <h1>Hello! This is our main page!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias expedita
                    inventore labore nisi odio, optio quasi rerum sapiente sed? At cupiditate
                    deleniti dolores eaque eveniet illo ipsa molestiae nihil recusandae?
                </p>
                <ShareFacebook />
            </div>
        );
    }
}

export default Main;
