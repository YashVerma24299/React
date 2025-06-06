// https://react.dev/reference/react/useState

// export default function Counter(){
//     let count=0;
//     function handleCount(){
//         count+=1;
//         console.log(count);
//     }
//     return(
//         <div>
//             <h3 >Count = {count}</h3>
//             <button onClick={handleCount}>Increase count</button>
//         </div>
//     )
// }

import {useState} from 'react';

export default function Counter(){
    // let arr = useState(0);
    // console.log(arr);
    // let [stateVariable, setStateVariable] = useState(0); // aisa bnate hai
    
    console.log("Component is rendered!");
    // Isse ye pta chl rha heki jab jab usestate vaala funda lgta hai,
    // pura code run hotha hai vaapas,
    // let [count, setCount] = useState(0); iss chejj ko chodke.....

    let [count, setCount] = useState(0);
    function handleCount(){
        setCount(count+=1);
        console.log(count);
    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={handleCount}>Increase count</button>
        </div>
    )
}