import {useState} from 'react';

export default function LudoBoard(){
    let [moves, setMoves] = useState({blue:0, red:0, yellow:0, green:0});
    
    let updateBlue=()=>{
        setMoves((prevMoves) =>{
            return {...prevMoves, blue: prevMoves.blue+1};
        })
    } 
    let updateGreen=()=>{
        moves.green+=1;
        setMoves({...moves})
    }
    let updateRed=()=>{
        moves.red+=1;
        setMoves({...moves})
    }
    let updateYellow=()=>{
        moves.yellow+=1;
        setMoves({...moves})
    }
    return(
        <>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
                
                <p>Green moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
                
                <p>Red moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>
                
                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor: "yellow", color: "black"}}>+1</button>
            </div>
        </>
    )
}