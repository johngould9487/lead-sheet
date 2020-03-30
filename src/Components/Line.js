import React, {Component} from 'react';

class Line extends Component {
    render() {
        const {topDistance} = this.props
        const style = {
            borderBottom: '1px solid black',
            marginBottom: '8px',
            position: 'absolute',
            top: `${topDistance}px`,
            width: '100%'
        }
        return (
            <div style={style}>
            </div>
        )
    }
}

export default Line