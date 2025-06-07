// UseEffect():
    //tab use hota hai jab humein component render hone par ya update hone par koi kaam karwana ho — jaise API call, console log, timer set karna, etc
    // iske liyy hi vaapas counter vaala logic bnaya haiiii...


import { useState, useEffect } from "react"
import Button from '@mui/material/Button';

// Basic useEffect
// export default function Counter(){
//     let [count, setCount] = useState(0);

//     let handleCount = () =>{
//         count+=1;
//         setCount(count);
//         console.log(count);  
//     }

//     useEffect(function anythingName(){
//         console.log("This is a side-effect.")
//     }) // see in inspect.....

//     return(
//         <>
//             <div className="Counter">
//                 <p>count ={count}</p>
//                 <button onClick={handleCount}>Count</button>
//             </div>
//         </>
//     )
// }


// Applicable on every useState
// export default function Counter(){
//     let [count1, setCount1] = useState(0);
//     let [count2, setCount2] = useState(0);

//     let handleCount1 = () =>{
//         setCount1(count1+=1);
//     }
//     let handleCount2 = () =>{
//         setCount2(count2+=1);
//     }

//     useEffect(function anythingName(){
//         console.log("This is a side-effect.")
//     }) // see in inspect.....

//     return(
//         <>
//             <div className="Counter">
//                 <p>count ={count1}</p>
//                 <button onClick={handleCount1}>Count</button>
//                 <br /><br /><br />
//                 <p>count ={count2}</p>
//                 <button onClick={handleCount2}>Count</button>
//             </div>
//         </>
//     )
// }


// Specific by using dependency
export default function Counter(){
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);

    let handleCount1 = () =>{
        setCount1(count1+=1);
    }
    let handleCount2 = () =>{
        setCount2(count2+=1);
    }
    let handleCount3 = () =>{
        setCount3(count3+=1);
    }

    useEffect(function anythingName(){
        console.log("This is a side-effect for count1 and count3")
    },[count1, count3]) // Specific
    // useEffect(function anythingName(){
    //     console.log("This is a side-effect that execute once.")
    // },[]) // execute only one time

    return(
        <>
            <div className="Counter">
                <p>count ={count1}</p>
                <Button onClick={handleCount1} variant="contained">Count</Button>
                <br /><br /><br />
                <p>count ={count2}</p>
                <button onClick={handleCount2}>Count</button>
                <br /><br /><br />
                <p>count ={count3}</p>
                <button onClick={handleCount3}>Count</button>
            </div>
        </>
    )
}