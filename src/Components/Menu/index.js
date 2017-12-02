import React, { Component } from 'react';
import './style.css'

class Menu extends Component {
    render() {
        return (
            <div>
                <h2>Navigation menu</h2>

                <div className="navigation-menu">
                    <ul className="navigation-list">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/contacts">Контакты</a></li>
                        <li><a href="/about">О нас</a></li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Menu;
