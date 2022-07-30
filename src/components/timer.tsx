import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
    currPlayer: Player,
    restart: () => void,
    setCurPlay: (player:Player) => void,
    wp: Player
}

const Timer:FC<TimerProps> = ({currPlayer,restart, setCurPlay,wp}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const timer = useRef<null | ReturnType<typeof  setInterval>>(null)
    function startTimer() {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currPlayer.color === Colors.BLACK ?
            decrBlTime : decrWhTime
        timer.current = setInterval(callback,1000)
    }
    const decrBlTime = () => {
        setBlackTime(prevState => prevState - 1)
    }
    const decrWhTime = () => {
        setWhiteTime(prevState => prevState - 1)
    }
    useEffect(() => {
        startTimer()
    },[currPlayer])
    const handleReset = () => {
        setBlackTime(300)
        setWhiteTime(300)
        setCurPlay(wp)
        restart()
    }
    return (
        <div className="timer">
            <div>
                <button onClick={handleReset}>Reset game</button>
            </div>
            <h3><span>Оставшиеся время черных:</span> {blackTime}</h3>
            <h3><span>Оставшиеся время белых:</span> {whiteTime}</h3>
        </div>
    );
};

export default Timer;