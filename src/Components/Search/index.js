import React, { Component } from 'react'

class Search extends Component {
    state = {
        searchTerm: ''
    }

    handleSearchTermChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>поиск</h1>
                <input
                    onChange={this.handleSearchTermChange}
                    value={this.state.searchTerm}
                    type="text"
                    placeholder="Search"
                />
            </div>
        )
    }
}

export default Search
