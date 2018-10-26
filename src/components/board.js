import React from 'react';
import Square from './square';

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}  
          onContextMenu={(e) => this.props.onContextMenu(e, i)}
          key={i}
        />
      );
    }
    
    createBoard(){
      let board = [];
      let index = 0;
      for (let i = 0; i < 3; i++){
        let rows = [];
        for (let j = 0; j < 3; j++){
          rows.push(this.renderSquare(index));
          index++;
        }
        board.push(<div className="board-row">{rows}</div>)
      }
      return <div>{board}</div>
    }

    render() {
      return (
        this.createBoard()
       /* <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>*/
      );
    }
}

export default Board;