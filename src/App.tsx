import React, {useEffect, useState} from 'react';
import './App.scss';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigure from "./components/LostFigure";
import Timer from "./components/timer";

function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlay, setWhitePlay] = useState(new Player(Colors.WHITE))
    const [blackPlay, setBlackPlay] = useState(new Player(Colors.BLACK))
    const [curPlay, setCurPlay] = useState<Player>(whitePlay)
    
    function restart() {
        const b = new Board()
        b.initCells()
        b.addFigures()
        setBoard(b)
    }

    function swapPlay(){
        setCurPlay(curPlay?.color === Colors.BLACK ? whitePlay : blackPlay)
    }

    useEffect(() => {
        restart()
    },[])

  return (
    <div className="App">
        <Timer currPlayer={curPlay} restart={restart} setCurPlay={setCurPlay} wp={whitePlay}/>
        <div>
            <h3 style={{marginBottom: "1rem"}}> Ход {curPlay.color}</h3>
            <BoardComponent
              board={board}
              setBoard={setBoard}
              currentPlayer={curPlay}
              swap={swapPlay}
            />
        </div>
      <div>
          <LostFigure title={"Фигуры белого"} figures={board.lostWhiteFig}/>
          <LostFigure title={"Фигуры черного"} figures={board.lostBlackFig}/>
      </div>
    </div>
  );
}

export default App;
