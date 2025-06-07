// UseEffect():
    //tab use hota hai jab humein component render hone par ya update hone par koi kaam karwana ho — jaise API call, console log, timer set karna, etc

import { useState } from "react"


    // iske liyy hi vaapas counter vaala logic bnaya haiiii...

export default function Counter(){
    let [count, setCount] = useState(0);

    let handleCount = () =>{
        count+=1;
        setCount(count);
        console.log(count);  
    }

    return(
        <>
            <div className="Counter">
                <p>count ={count}</p>
                <button onClick={handleCount}>Count</button>
            </div>
        </>
    )
}