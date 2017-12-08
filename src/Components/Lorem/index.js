import React, { Component } from 'react';
import faker from 'faker'

class Lorem extends Component {
    constructor(props) {
        super(props)
        const { length } = this.props
        this.state = {
            header: faker.lorem.sentence(),
            text: faker.lorem.paragraph(length)
        }
    }

    render() {
        const { header, text } = this.state
        return (
            <div id={ this.props.id }>
                <h2>{ header }</h2>
                <p> { text } </p>
            </div>
        )
    }
}

export default Lorem
