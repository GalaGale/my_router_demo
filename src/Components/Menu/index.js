import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.less'

class Menu extends Component {
    render() {
        return (
            <div>
                <h2>Navigation menu</h2>

                <div className="navigation-menu">
                    <ul className="navigation-list">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Menu
