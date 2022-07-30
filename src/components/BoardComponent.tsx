import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void
    currentPlayer: Player,
    swap: () => void
}

const BoardComponent:FC<BoardProps> = ( {board,setBoard, currentPlayer,swap } ) => {
    const [selCell,setSelCell] = useState<Cell | null>(null)

    const onClick = (cell:Cell) => {
        if (selCell && selCell !== cell && selCell.figure?.canMove(cell)) {
            selCell.move(cell)
            swap()
            setSelCell(null)
        }
        else {
            if(cell.figure?.color === currentPlayer.color) {
                setSelCell(cell)
            }
        }
    }

    const getAvailable = () => {
        board.getAvailable(selCell)
        updateBoard()
    }

    function updateBoard()  {
        const b = board.copy()
        setBoard(b)
    }
    useEffect(() => {
        getAvailable()
    },[selCell])

    return (
        <>
            <div className="board">
                {board.cells.map((row,ind) =>
                    <React.Fragment key={ind}>
                        {row.map(cell =>
                            <CellComponent
                                click={onClick}
                                selected={cell.x === selCell?.x && cell.y === selCell?.y}
                                cell={cell}
                                key={cell.id}
                            />
                        )}
                    </React.Fragment>)}
            </div>
        </>

    );
};

export default BoardComponent;