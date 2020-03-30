import React, {Component} from 'react';
import Line from './Line'
import Note from './Note';

class Bar extends Component {
    render() {
        const style = {
            position: 'relative'
        }
        return (
            <div style={style}>
                <Line topDistance={0}/>
                <Line topDistance={8}/>
                <Line topDistance={16}/>
                <Line topDistance={24}/>
                <Line topDistance={32}/>
                <Note/>
            </div>
        )
    }
}

export default Bar