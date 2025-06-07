import { useState } from "react";
import { genTicket } from "./helper";

export default function Lottery(){
    let mystyle = {
        border: "1px solid pink",
        borderRadius: "14px"
    }
    let [ticket, setTicket] = useState(genTicket(3));
    return(
        <>
            <div className="Lottery" >
                <h1>Lottery Game!</h1>
                <div className="ticket" style={mystyle}>
                    <span>{ticket[0]}</span>
                    <span>{ticket[1]}</span>
                    <span>{ticket[2]}</span>
                </div>

            </div>
        </>
    )
}