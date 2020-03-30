import React, {Component} from 'react';

class Note extends Component {
    render() {
        const style = {
            width: '8px',
            height: '8px',
            borderRadius: '4px',
            background: 'black'
          }
        return (
            <div style={style} />
        )
    }
}

export default Note