import React, { Component } from 'react';

import Lorem from '../Lorem'

import './style.less'

class About extends Component {
    render() {
        return (
            <div className="about-page">
                <h1>About us: lalala</h1>
                <Lorem id="p1" length="2"/>
                <Lorem id="p2" length="3"/>
                <Lorem id="p3" length="4"/>
            </div>
        );
    }
}

export default About;
