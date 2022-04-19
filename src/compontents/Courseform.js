import React, { Component } from 'react'

export default class Courseform extends Component {
    renderupdatecourse = () => {
        return (
            <form>
                <input type="text" />
                <button>update Course</button>
            </form>
        )
    }
    render() {
        return (
            <form onSubmit={this.props.addcourse}>
               
                <input type="text" value={this.props.current} onChange={this.props.updatecourse} />
                <button type="submit">Add Course</button>
            </form>
        )
    }
}
