// import { Component } from 'react';
import React from 'react'

import './style.less'

class Paragraph extends React.Component {
    render() {
        return (
            <div>
                <h2>{ this.props.header }</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias expedita inventore labore nisi odio, optio quasi rerum
                    sapiente sed? At cupiditate deleniti dolores eaque eveniet illo
                    ipsa molestiae nihil recusandae?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias expedita inventore labore nisi odio, optio quasi rerum
                    sapiente sed? At cupiditate deleniti dolores eaque eveniet illo
                    ipsa molestiae nihil recusandae?
                </p>
            </div>
        );
    }
}

export default Paragraph;
