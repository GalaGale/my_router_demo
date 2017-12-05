import React, { Component } from 'react';

import './style.less'
import cat from '../../img/cat.jpg'
import cat3 from '../../img/cat3.jpg'

class Contacts extends Component {
    render() {
        return (
            <div className="contacts-page">
                <h1>We live in a beautiful world</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet doloremque doloribus explicabo necessitatibus nihil
                    quam quisquam tempora ut velit! Atque cupiditate dolorum
                    eligendi harum modi omnis perferendis perspiciatis quos, sint.
                </p>
                <img src={cat} />
                <img src={cat3} />
            </div>
        );
    }
}

export default Contacts
