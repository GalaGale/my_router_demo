import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import './style.less'

class Menu extends Component {
    render() {
        return (
            <div>
                <h2>Navigation menu</h2>

                <div className="navigation-menu">
                    <ul className="navigation-list">
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Контакты</Link>
                        </li>
                        <li>
                            <Link to="/about">О нас</Link>
                        </li>
                        <li>
                            <HashLink to="/about#p2">Второй абзац</HashLink>
                        </li>
                        <li>
                            <HashLink to="/about#p3">Третий абзац</HashLink>
                        </li>
                        <li>
                            <Link to="/flowers">Цветы</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu
