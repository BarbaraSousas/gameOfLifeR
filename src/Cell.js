import React from 'react';

const cellSize = 20;

class Cell extends React.Component {
    render() {
        const { x, y } = this.props;

        return(
            <div className='cell'
                style={{ left: `${cellSize * x + 1}px`,
                    top: `${cellSize -1}px`,
                    width: `${cellSize -1}px`,
                    height: `${cellSize -1}px`,
                    background: '#ccc',
                    position: 'absolute'}} />
        )
    }
}

export default Cell;