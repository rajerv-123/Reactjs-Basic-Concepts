import { useState,useMemo } from "react"

const UseMain=()=>{
    let [Count1 , setCount1]=useState(0)
    let [Count2, setCount2]= useState(0)
    
    // let Even =()=>{
    //     let i  = 0;
    //     while(i<1000) i++
    //     return count1%2==0;
    // }

    let Even =useMemo(()=>{
        let i = 0;
        while(i<10000) i++
        return Count1%2===0
    },[Count1])
        return(
        <div>
            {Count1}
            <button onClick={()=>{setCount1 (Count1+ 1)}}>Increment</button>
            {Count2}
            <button onClick={()=>{setCount2 (Count2+ 1)}}>Increment</button>
            <h1>{Even?"Even":"Odd"}</h1>
        </div>

    )
}
export default UseMain